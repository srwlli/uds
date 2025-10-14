---
title: UDS Header Structure Standard
version: 1.0.1
date: 2025-04-06
last_updated: 2025-04-06
status: FINAL
authors:
  - name: Documentation Standards Team
classification: INTERNAL
tags: ["#uds", "#header", "#metadata", "#standard"]
description: Specification for the structured YAML header block required at the beginning of all UDS-compliant documents, including required fields, formatting, placement rules, and compliance examples.
---

## UDS Header Structure Standard

## Table of Contents

- [UDS Header Structure Standard](#uds-header-structure-standard)
- [Table of Contents](#table-of-contents)
- [Purpose](#purpose)
- [Header Structure Specification](#header-structure-specification)
- [Required Fields](#required-fields)
- [Formatting Rules](#formatting-rules)
- [Compliance Examples](#compliance-examples)
- [References](#references)
- [Revision History](#revision-history)

## Purpose

This document defines the required format, fields, and structure for the YAML header block that must appear at the top of all UDS-compliant Markdown files. The header block provides essential metadata for document classification, version control, attribution, and automation.

## Header Structure Specification

The header must:

- Appear at the very beginning of the document
- Be enclosed in triple dashes (`---`) on the first and last line
- Use valid YAML 1.2 syntax
- Contain required metadata fields in a specified order

## Required Fields

- `title`: Full document title
- `version`: Semantic version of the document (e.g., `1.0.0`)
- `date`: Document creation date in `YYYY-MM-DD` format
- `last_updated`: Most recent update date, matching footer
- `status`: Document lifecycle status (e.g., DRAFT, FINAL, APPROVED)
- `authors`: A list of authors, each with `name` as a required subfield. Optional: `team`, `email`
- `classification`: Classification level. Must be one of: `INTERNAL`, `PUBLIC`, `CONFIDENTIAL`.  
  - **Default**: `INTERNAL` unless explicitly specified otherwise.  
  - Use `PUBLIC` only for externally-facing documentation.  
  - Use `CONFIDENTIAL` only if handling sensitive or restricted content.
- `tags`: YAML array of keyword strings relevant to the document
- `description`: One-line summary of the document’s purpose

## Formatting Rules

- Place the header block at the absolute top of the document with no content above it
- The opening and closing `---` delimiters must be on their own lines
- Follow the field order shown above for consistency
- Maintain valid YAML structure:
  - Use quoted strings for tags (e.g., `["#tag1", "#tag2"]`)
  - Use list syntax for `authors` with `- name:` pattern
- A **single blank line** must follow the final `---` before any content begins
- Do **not** include:
  - `marker`, `ref`, `footer_context`, or `instructions` (reserved for footers)
  - Trailing spaces or inline comments inside the YAML block

## Compliance Examples

```yaml
---
title: Example Specification Document
version: 1.2.3
date: 2025-04-06
last_updated: 2025-04-06
status: FINAL
authors:
  - name: Jane Doe
    team: Platform Engineering
  - name: John Smith
classification: INTERNAL
tags: ["#spec", "#api", "#internal"]
description: Defines the API specification for internal system interaction.
---
```

## References

- UDS Footer Structure Standard  
- UDS Document Structure Guidelines  
- YAML v1.2 Specification

## Revision History

| Version | Date       | Author                    | Description                                  |
|---------|------------|----------------------------|----------------------------------------------|
| 1.0.1   | 2025-04-06 | Documentation Standards Team | Added default classification behavior         |
| 1.0.0   | 2025-04-06 | Documentation Standards Team | Initial release of header standard           |

---
marker: document-footer-metadata
status: FINAL
version: 1.0.1
last_updated: 2025-04-06
ref: /standards/uds-header-structure-standard.md
authors:
  - Documentation Standards Team
tags: ["#uds", "#header", "#metadata", "#standard"]
footer_context: standard
description: Defines the required structure and default values of UDS header metadata blocks.
instructions: |
  This footer specifies compliance rules for the header metadata block.
  All documents must begin with a YAML header using the structure and field order defined above.
  Unless stated otherwise, classification is assumed to be INTERNAL.
  This metadata must appear as the first block of the document, with a single blank line before body content.

---

