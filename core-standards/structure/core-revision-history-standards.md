---
title: Core Revision History Standards
version: 1.0.0
date: 2025-03-27
status: APPROVED
authors:
  - name: Documentation Standards Team
classification: PUBLIC
tags: [uds, versioning, changelog, lifecycle]
---

# Core Revision History Standards

## Purpose

Defines how to track, document, and communicate changes to UDS-compliant documentation through its lifecycle.

## Document Lifecycle States

Each document follows these lifecycle stages:

- **DRAFT** — Under initial development
- **REVIEW** — Ready for validation or feedback
- **CONTROLLED** — Approved, locked version for reference
- **ARCHIVED** — Superseded, no longer active

## Revision History Format

Each UDS-compliant document must include a changelog section or commit log with the following structure:

```markdown
## Revision History

| Version | Date       | Status     | Description             | Author          |
|---------|------------|------------|--------------------------|-----------------|
| 1.0.0   | 2025-03-27 | CONTROLLED | Initial approved version | Standards Team  |
| 0.9.0   | 2025-03-26 | REVIEW     | Final pre-review edits   | Contributor Name|
| 0.1.0   | 2025-03-24 | DRAFT      | Initial draft            | Contributor Name|
```

## Versioning Policy

- Use **semantic versioning** for documentation: `MAJOR.MINOR.PATCH`
- Increment:
  - MAJOR for structural overhauls
  - MINOR for content additions
  - PATCH for typo or formatting fixes
