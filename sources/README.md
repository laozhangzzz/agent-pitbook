# Sources

`sources/` records evidence that supports pit records and claims.

Do not copy large external documents into this repository unless their license permits it. Prefer metadata records that point to stable URLs, commit SHAs, issue links, docs pages, or local-session locators.

## Suggested Source Types

- `local-session`: a debugging session in which a fix was observed
- `docs`: official documentation
- `issue`: GitHub, GitLab, or tracker issue
- `pr`: pull request
- `release-note`: versioned release note or changelog
- `source-code`: code reference
- `blog`: public blog post
- `paper`: research paper
- `other`: fallback with explanation

## Minimum Metadata

```json
{
  "id": "source-...",
  "type": "docs",
  "title": "...",
  "url": "https://...",
  "accessed_at": "2026-06-19",
  "content_hash": "sha256:...",
  "notes": "Short reason this source matters."
}
```

