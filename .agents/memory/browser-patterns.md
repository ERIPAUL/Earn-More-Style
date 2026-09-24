---
name: Browser form patterns
description: HTML pattern validation uses Unicode sets rather than ordinary JavaScript regex syntax.
---

Validate HTML input patterns with JavaScript's `v` flag, escaping literal parentheses and hyphens inside character classes.

**Why:** Chromium rejected a phone pattern that was valid in ordinary JavaScript regex mode, silently disabling format validation.

**How to apply:** When changing form patterns, check both valid and invalid examples using `new RegExp(pattern, "v")`.