---
title: UDS Strict Compliance Ruleset
version: 1.1.0
date: 2025-04-06
last_updated: 2025-04-06
status: FINAL
authors:
  - name: Documentation Standards Team
classification: INTERNAL
tags: ["#uds", "#compliance", "#strict", "#standards", "#rules"]
description: Enforced rules for strict UDS document compliance including disallowed characters, structure expectations, and metadata enforcement requirements.
---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Purpose](#purpose)
- [Scope](#scope)
- [Prohibited Elements](#prohibited-elements)
- [Required Structural Practices](#required-structural-practices)
  - [Footer Block Compliance](#footer-block-compliance)
- [Formatting Constraints](#formatting-constraints)
- [Exceptions](#exceptions)
- [References](#references)
- [Revision History](#revision-history)

## Purpose

To define non-negotiable constraints for all documents intended to meet strict UDS compliance, including character restrictions, formatting rules, and style prohibitions.

> ⚠️ **Note:** This specification is the **only UDS-compliant document** permitted to contain emojis. They are included here solely to illustrate prohibited elements and must never appear in any other compliant output.

## Scope

This ruleset applies to all internal documentation generated or reviewed under the Universal Documentation Standards (UDS) where **strict mode** is enforced.

## Prohibited Elements

The following are **explicitly forbidden** in any UDS-compliant Markdown file:

- **Emojis** (e.g., 😊, 🚀, ✅)
- **Unicode icons or pictographs**
- **Non-ASCII symbols** (e.g., ©, ™, ★, ☑, ✔)
- **Smart punctuation** (e.g., “ ” ‘ ’ — –)  
  - Use straight quotes (") and double hyphens (--) only
- **Inline styling markup** (e.g., `<b>`, `<i>`, `<u>`)  
  - Use Markdown syntax only (`*`, `_`, etc.)
- **HTML blocks**
- **Tables with merged cells**
- **Center-aligned text**
- **Extraneous visual embellishments**

## Required Structural Practices

- Headers must follow the `##` level for top sections
- TOC must include anchor links to all Level 2 sections
- The document must begin with a YAML header block and end with a YAML footer block
- No content may follow the closing `---` of the footer

### Footer Block Compliance

Every UDS-compliant document **must include a footer block** with the following:

- Begins and ends with `---`
- First field must be `marker: document-footer-metadata`
- The following fields are **mandatory**:
  - `status` — must reflect lifecycle phase (e.g., DRAFT, FINAL)
  - `classification` — must match document access level (e.g., INTERNAL)
  - `version`, `last_updated`, `ref`, `authors`, `tags`, `footer_context`, `instructions`
- `tags` must be a valid YAML array with quoted strings
- `authors` must use dash-list notation
- `instructions` must be a multiline YAML string using `|`
- **A single blank line must appear after the last line of the `instructions` field and before the closing `---`**
  - This line is required and must never be omitted

Failure to meet any of these requirements constitutes a structural violation under strict mode.

## Formatting Constraints

- Only use standard Markdown (v1.0) elements
- Code blocks must use fenced triple backticks with a language identifier
- Tags must be YAML arrays using quoted strings
- List indentation must use exactly 2 spaces per nesting level
- Use a single blank line after the header block and before lists/tables
- Avoid trailing whitespace and inconsistent spacing

## Exceptions

No exceptions are permitted under strict compliance unless explicitly documented and approved via override protocol.

## References

- UDS Header Structure Standard  
- UDS Footer Structure Standard  
- YAML 1.2 Specification  
- Core UDS Generation Prompt Specification  

## Revision History

| Version | Date       | Author                    | Description                                                              |
|---------|------------|----------------------------|--------------------------------------------------------------------------|
| 1.1.0   | 2025-04-06 | Documentation Standards Team | Added enforcement of `status`, `classification`, and post-`instructions` blank line |
| 1.0.0   | 2025-04-06 | Documentation Standards Team | Initial release of strict compliance standard                            |

---
marker: document-footer-metadata
status: FINAL
version: 1.1.0
last_updated: 2025-04-06
ref: /standards/uds-standards-strict.md
authors:
  - Documentation Standards Team
tags: ["#uds", "#compliance", "#strict", "#standards", "#rules"]
footer_context: standard
classification: INTERNAL
description: Specifies strict rules for formatting, content, and metadata compliance in UDS documents, including explicit footer rules and YAML structure.
instructions: |
  This document is the only UDS-compliant file where emojis are permitted—
  and only for illustrative purposes. No other document may contain them.

  When validating or generating documents in strict mode:
  - Verify that both `status` and `classification` fields are present in the footer
  - Ensure the `instructions` field ends with a visible line break
  - Confirm the document ends with a properly closed YAML footer block (`---`) and nothing follows

---
