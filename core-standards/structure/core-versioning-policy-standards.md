---
title: Core Versioning Policy Standards
version: 1.0.0
date: 2025-03-27
status: APPROVED
authors:
  - name: Documentation Standards Team
classification: PUBLIC
tags: [uds, versioning, document-lifecycle]
---

# Core Versioning Policy Standards

## Purpose

Defines how documentation versions are structured, incremented, and logged. Ensures transparency and change tracking across all document lifecycle stages.

## Scope

Applies to all UDS-compliant documents that undergo updates or structural changes.

## Semantic Versioning

Use the following format for all documentation files:

- MAJOR.MINOR.PATCH

### Version Change Triggers

| Change Description           | Version Type |
|-----------------------------|--------------|
| Major structure changes      | MAJOR        |
| Section additions or examples| MINOR        |
| Typo fixes or style cleanup  | PATCH        |

## Changelog Requirements

All documents must include a `Revision History` table:

````markdown
## Revision History

| Version | Date       | Status     | Summary                   | Author           |
|---------|------------|------------|----------------------------|------------------|
| 1.0.0   | 2025-03-27 | CONTROLLED | Initial approved version   | Documentation Team |
````

## Lifecycle Rules

- Only documents in `CONTROLLED` state may receive PATCH or MINOR changes
- Promotion path must follow: `DRAFT` → `REVIEW` → `CONTROLLED`
