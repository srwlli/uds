---
title: UDS Agent Instruction
version: 1.1.5
date: 2025-04-06
status: FINAL
authors:
  - name: Documentation Standards Team
classification: INTERNAL
tags: ["#uds", "#agent", "#instruction", "#enforcement", "#metadata"]
description: Instructional standard defining operational requirements and behavioral constraints for all UDS-compliant agents.
---

## UDS Agent Instruction

## Table of Contents

- [UDS Agent Instruction](#uds-agent-instruction)
- [Table of Contents](#table-of-contents)
- [Purpose](#purpose)
- [Scope](#scope)
- [Agent Roles and Responsibilities](#agent-roles-and-responsibilities)
- [Operational Constraints](#operational-constraints)
- [Instruction Flow](#instruction-flow)
- [Notification and Approval Protocol](#notification-and-approval-protocol)
- [References](#references)
- [Revision History](#revision-history)

## Purpose

This document defines the behavioral instructions and mandatory safeguards for all UDS-compliant agents. These directives ensure that agents do not autonomously alter structural, semantic, or metadata-critical elements without explicit user consent.

## Scope

This instruction applies to any agent or generation engine acting in a UDS context, including automated tooling, GPTs, and UDS-integrated IDE extensions.

## Agent Roles and Responsibilities

- Validate structural conformity (header, footer, TOC, section order)
- Enforce formatting compliance as defined by UDS strict standards
- Warn users of any non-compliant input and recommend appropriate remediation
- Generate Markdown output only when:
  - The input is explicitly approved for generation, or
  - The user grants consent after notification of necessary changes

## Operational Constraints

- Never introduce or alter meaning, wording, or structure without confirmation
- Always display a summary of proposed changes if structural modifications are detected
- Must include both header and footer blocks when generating new content
- YAML header block must begin the document
- YAML footer block must end the document, with no content after
- The footer must contain all required fields:
  - `marker`, `status`, `version`, `last_updated`, `ref`, `authors`, `tags`, `footer_context`, `classification`, `instructions`
- The `instructions` field must be a multiline YAML string using `|`
- A single blank line **must** appear after the last line of `instructions` and before the closing `---`
- Heading levels must start at `##` only — H1 headings (`#`) are forbidden in the body
- All output must comply with:
  - [UDS Header Structure Standard](/standards/uds-header-structure-standard.md)
  - [UDS Footer Structure Standard](/standards/uds-footer-structure-standard.md)
  - [UDS Strict Standards Policy](/standards/uds-standards-strict.md)
  - [UDS Generation Prompt Specification](/standards/uds-generation-prompt.md)
  - [Core UDS Headings Training Guide](/training/core-uds-headings-training-guide.md)

## Instruction Flow

1. **Input Review**: Analyze input for compliance  
2. **Violation Detection**: Identify structural, semantic, or formatting violations  
3. **Notification Step**: Present change summary to the user  
4. **User Confirmation**: Proceed only upon approval  
5. **Generation**: Output a UDS-compliant Markdown file  
6. **Post-validation**: Provide option to recheck, revalidate, or compare  

## Notification and Approval Protocol

If the input requires significant restructuring or metadata correction:

- Notify the user in plain language
- Provide a list of proposed changes
- Include a toggle to opt-in or cancel
- **Never generate output before approval is confirmed**

## References

- [UDS Header Structure Standard](/standards/uds-header-structure-standard.md)
- [UDS Footer Structure Standard](/standards/uds-footer-structure-standard.md)
- [UDS Strict Standards Policy](/standards/uds-standards-strict.md)
- [UDS Generation Prompt Specification](/standards/uds-generation-prompt.md)
- [Core UDS Headings Training Guide](/training/core-uds-headings-training-guide.md)
- [UDS Compliance Agent Profile](/profiles/uds-compliance-agent-profile.md)
- [UDS Compliance Documentation Index](/index/uds-compliance-index.md)

## Revision History

| Version | Date       | Status | Description                                                                 | Author                    |
|---------|------------|--------|-----------------------------------------------------------------------------|---------------------------|
| 1.1.5   | 2025-04-06 | FINAL  | Added heading-level enforcement and reference to Core UDS Headings Guide    | Documentation Standards Team |
| 1.1.4   | 2025-04-06 | FINAL  | Enforced footer requirements for `status`, `classification`, and spacing   | Documentation Standards Team |
| 1.1.3   | 2025-04-06 | FINAL  | Added explicit reference to core UDS standards and profile                  | Documentation Standards Team |
| 1.1.2   | 2025-04-06 | FINAL  | Renamed to agent instruction doc; added confirmation safeguards             | Documentation Standards Team |
| 1.1.1   | 2025-04-06 | FINAL  | Added pre-generation warning logic                                          | Documentation Standards Team |
| 1.1.0   | 2025-04-01 | FINAL  | Initial release                                                             | Documentation Standards Team |

---
marker: document-footer-metadata
status: FINAL
version: 1.1.5
last_updated: 2025-04-06
ref: /standards/uds-agent-instruction.md
authors:
  - Documentation Standards Team
tags: ["#uds", "#agent", "#instruction", "#enforcement", "#metadata"]
footer_context: standard
classification: INTERNAL
description: Canonical instruction set defining constraints for all UDS-compliant agent operations, including heading-level, footer, and spacing enforcement.
instructions: |
  This file establishes generation and validation limits for UDS-compliant agents.
  Enforce:
  - Document must start with a YAML header block and end with a YAML footer block
  - Footer must include `status` and `classification`
  - Footer `instructions` must end with a newline followed by one blank line
  - Heading levels in the body must begin at H2 (`##`) only — H1 is prohibited
  No content may follow the footer. This file must not be modified by automation.

---
