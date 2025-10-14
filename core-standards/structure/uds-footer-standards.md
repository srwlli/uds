---
title: UDS Footer Structure Standard
version: 1.0.2
date: 2025-04-06
last_updated: 2025-04-06
status: FINAL
authors:
  - name: Documentation Standards Team
classification: INTERNAL
tags: ["#uds", "#footer", "#metadata", "#standard"]
description: Specification for the structured footer block required at the end of all UDS-compliant documents, including required fields and human-readable instruction guidelines.
---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Purpose](#purpose)
- [Footer Structure Specification](#footer-structure-specification)
- [Required Fields](#required-fields)
- [Formatting Rules](#formatting-rules)
- [Human Instructions Field](#human-instructions-field)
- [Compliance Examples](#compliance-examples)
- [References](#references)
- [Revision History](#revision-history)

## Purpose

This document defines the structure, formatting, and required content for the footer metadata block that must appear as the final element in all UDS-compliant Markdown documents. The footer must appear exactly at the end of the document, enclosed in triple dashes (`---`). It uses YAML syntax and contains machine-readable and human-meaningful fields.

## Footer Structure Specification

The footer must be the last element of the document. It consists of a YAML block, bounded by `---` delimiters, and must contain the required metadata fields in strict order and format.

## Required Fields

All of the following fields are **mandatory** in every UDS footer block and must appear in this exact order:

- `marker`: Must be set to `document-footer-metadata`
- `status`: Document status (e.g., DRAFT, REVIEW, FINAL, CONTROLLED, ARCHIVED). This field is **required** for status tracking and lifecycle enforcement.
- `version`: Footer version (can match or differ from document header version)
- `last_updated`: Date of last modification in `YYYY-MM-DD` format
- `ref`: Reference path, document URI, or related identifier
- `authors`: List of contributors specific to the footer context
- `tags`: List of relevant tags in valid YAML array syntax
- `footer_context`: The domain or scope to which the footer applies (e.g., component, system)
- `description`: (Optional) A brief summary of the footer's context or purpose
- `instructions`: A required field with embedded multiline instructions intended for human interpretation

## Formatting Rules

- The block must begin and end with `---`
- The **first field must be** `marker: document-footer-metadata`
- The `status` field is **required** and must use an uppercase value from the approved list (e.g., `DRAFT`, `FINAL`, `REVIEW`)
- Tags must be enclosed in square brackets as a YAML array, using quoted strings
- Authors must be listed using the dash notation
- Each field must be clearly labeled and correctly indented
- No additional content is permitted after this block

## Human Instructions Field

The `instructions` field is a **required, multi-line string** using YAML’s `|` block scalar format. It must provide helpful context, usage instructions, or interpretation guidance for human reviewers, making it the **last interpretable section** of the document.

A **single blank line must appear between the final line of the `instructions` field and the closing `---`**. This spacing is **mandatory** and **non-negotiable** under strict UDS compliance. Its absence constitutes a structural violation.

## Compliance Examples

```yaml
---
marker: document-footer-metadata
status: FINAL
version: 1.0.0
last_updated: 2025-04-06
ref: /specs/module-authentication.md
authors:
  - Jane Doe
  - John Smith
tags: ["#security", "#auth", "#footer"]
footer_context: component
description: Metadata footer for the authentication module spec.
instructions: |
  This footer provides metadata for traceability, lifecycle status, and authoring context.
  It is intended to support validation, version tracking, and reader interpretation.

---
```

## References

- UDS Metadata in Documentation Standard  
- UDS Document Structure Guidelines  
- YAML v1.2 Specification  

## Revision History

| Version | Date       | Author                    | Description                                                        |
|---------|------------|----------------------------|--------------------------------------------------------------------|
| 1.0.2   | 2025-04-06 | Documentation Standards Team | Clarified requirement and purpose of `status` field in footer      |
| 1.0.1   | 2025-04-06 | Documentation Standards Team | Added requirement for blank line before closing footer `---`       |
| 1.0.0   | 2025-04-06 | Documentation Standards Team | Initial release of footer standard                                 |

---
marker: document-footer-metadata
status: FINAL
version: 1.0.2
last_updated: 2025-04-06
ref: /standards/uds-footer-structure-standard.md
authors:
  - Documentation Standards Team
tags: ["#uds", "#footer", "#metadata", "#standard"]
footer_context: standard
description: Defines the required structure and content of UDS footer metadata blocks, including enforcement of the `status` field.
instructions: |
  This is the final element of all UDS-compliant documents. It defines footer-level metadata
  required for automation, lifecycle tracking, and human guidance. Ensure this block appears
  at the very end of your document without any trailing content.

  The `status` field is required and must reflect the document’s current lifecycle designation (e.g., DRAFT, FINAL).
  A single blank line must appear after the final line of this `instructions` field and before the closing `---`.
  This blank line is **mandatory** and **must never be omitted** in strict compliance mode.

---