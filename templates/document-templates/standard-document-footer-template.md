---
title: Standard Document Footer Template
version: 1.0.0
date: 2025-10-14
status: APPROVED
authors:
  - UDS Documentation Team
classification: INTERNAL
keywords:
  - template
  - footer
  - documentation
  - standard
  - UDS
tags:
  - template
  - documentation
  - footer
---

# Standard Document Footer Template

This template defines the canonical footer block per UDS-006, Section 2.4.

## Template
```
---
Copyright © {{YEAR}} | {{ORGANIZATION}}
Last updated: {{YYYY-MM-DD}} | Assisted by AI | Status: {{DRAFT|REVIEW|APPROVED|DEPRECATED}}
---
```

## Variables
- {{YEAR}}: four-digit year (e.g., 2025)
- {{ORGANIZATION}}: owning org or team name
- {{YYYY-MM-DD}}: ISO date for last update
- Status: one of DRAFT, REVIEW, APPROVED, DEPRECATED

## Usage Guidelines
1. Place the footer at the end of the document.
2. Bound the footer with triple-dash lines `---` above and below.
3. Include all required elements listed in Variables.

## Example
```
---
Copyright © 2025 | Coderef2 Project
Last updated: 2025-09-12 | Assisted by AI | Status: REVIEW
---
```

## Standard Reference
- UDS-006: Documentation Standards, Section 2.4 — Standard Document Components

## Related
- Standard header template: `./standard-document-header-template.md`
