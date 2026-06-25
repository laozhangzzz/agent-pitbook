#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { repoRoot, defaultSiteBaseUrl } from "./lib/pitlib.mjs";

const indexNowKey = "97be09ad8cd61c71af39f8b61c2de866";
const defaultEndpoint = "https://api.indexnow.org/indexnow";
const defaultKeyLocation = `${defaultSiteBaseUrl}/${indexNowKey}.txt`;

function parseArgs(argv) {
  const args = {
    dryRun: false,
    endpoint: defaultEndpoint,
    sitemap: path.join(repoRoot, "docs", "sitemap.xml"),
    key: indexNowKey,
    keyLocation: defaultKeyLocation,
    host: new URL(defaultSiteBaseUrl).host
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--dry-run") args.dryRun = true;
    else if (arg === "--endpoint") args.endpoint = argv[++i] ?? args.endpoint;
    else if (arg === "--sitemap") args.sitemap = path.resolve(argv[++i] ?? args.sitemap);
    else if (arg === "--key") args.key = argv[++i] ?? args.key;
    else if (arg === "--key-location") args.keyLocation = argv[++i] ?? args.keyLocation;
    else if (arg === "--host") args.host = argv[++i] ?? args.host;
    else if (arg === "--help" || arg === "-h") {
      console.log(`Usage: node tools/indexnow-submit.mjs [--dry-run] [--endpoint URL] [--sitemap docs/sitemap.xml]

Submit sitemap URLs to IndexNow-compatible search engines.

Defaults:
  endpoint      ${defaultEndpoint}
  keyLocation   ${defaultKeyLocation}
`);
      process.exit(0);
    }
  }

  return args;
}

function readSitemapUrls(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  return [...text.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((match) => match[1].trim())
    .filter((url) => url.startsWith(defaultSiteBaseUrl))
    .filter((url) => !new URL(url).pathname.includes("/agent-pitbook/q/"));
}

async function submit(args, urls) {
  const body = {
    host: args.host,
    key: args.key,
    keyLocation: args.keyLocation,
    urlList: urls
  };

  if (args.dryRun) {
    console.log(JSON.stringify(body, null, 2));
    return;
  }

  const response = await fetch(args.endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=utf-8",
      "user-agent": "agent-pitbook-indexnow/0.1"
    },
    body: JSON.stringify(body)
  });

  const text = await response.text();
  if (response.status !== 200 && response.status !== 202) {
    console.error(`IndexNow submission failed: HTTP ${response.status}`);
    if (text) console.error(text);
    process.exit(1);
  }

  console.log(`IndexNow accepted ${urls.length} URL(s): HTTP ${response.status}`);
  if (text.trim()) console.log(text.trim());
}

const args = parseArgs(process.argv.slice(2));
const urls = readSitemapUrls(args.sitemap);
if (urls.length === 0) {
  console.error(`No URLs found in ${args.sitemap}`);
  process.exit(1);
}

await submit(args, urls);
