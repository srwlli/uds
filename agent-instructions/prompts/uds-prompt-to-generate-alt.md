---
title: UDS Generation Prompt Specification
version: 1.1.0
date: 2025-04-06
authors:
  - name: Documentation Standards Team
classification: INTERNAL
tags: ["#uds", "#generation", "#prompt", "#markdown", "#automation"]
description: Formal specification for generating UDS-compliant Markdown documents using structured prompts, for use in agent-driven workflows.
---

## UDS Generation Prompt Specification

## Table of Contents

- [UDS Generation Prompt Specification](#uds-generation-prompt-specification)
- [Table of Contents](#table-of-contents)
- [Purpose](#purpose)
- [Formatting Requirements](#formatting-requirements)
- [Footer Requirements](#footer-requirements)
- [Revision History](#revision-history)

## Purpose

This document defines the standardized instruction that agents must follow when generating UDS-compliant Markdown documents. The instruction must be interpreted with strict fidelity and executed to produce a document that conforms to all structural, metadata, and formatting requirements.

> Generate a Markdown document adhering with absolute precision to the following specifications. Under no circumstances should any emojis be included anywhere in the document.
>
> The document must begin exactly with the following YAML front matter block structure, enclosed in triple dashes (---). Populate the fields with the specific details for the document being created, following the guidance in the placeholders:
>
> YAML
>
> ---
> title: [Document Title]  
> version: [Version Number, e.g., 1.0.0]  
> date: [Current Date, e.g., 2025-04-06]  
> authors:  
>   - name: [Author Name 1]  
>   - name: [Author Name 2]  
> tags: ["#tag1", "#tag2", "#relevant-keywords"]  
> classification: [Document Classification, e.g., PUBLIC, INTERNAL, CONFIDENTIAL]  
> description: [Brief document description summarizing its purpose and content]  
> ---
>
> Immediately following the YAML front matter, the document must feature a single Level 2 heading (using ##) containing the exact document title specified in the title field.
>
> After the title heading, a Level 2 heading named exactly `Table of Contents` is required. This section must contain a numbered list with Markdown links to each of the subsequent Level 2 section headings (excluding Title and TOC).
>
> The first content section must be a Level 2 heading named `Purpose`. It must contain only one concise paragraph that reflects the document's description field.
>
> Following the Purpose section, the document must include these major sections, each marked with Level 2 headings and appearing in the exact order:  
> `Module Contract Specification`, `Control Contract Specification`, `UI/UX Standards Contract`, `Contract Enforcement Guidelines`, `References`, and `Revision History`.  
> No other Level 2 sections are permitted unless explicitly defined in this spec.
>
> Throughout the document, strictly adhere to the following formatting rules:
>
> - List Formatting: Use only bullet points (* or -) or numbered lists (1., 2.). Indent nested lists using exactly 2 spaces per level (MD007).
> - Code Blocks: All code must be enclosed in fenced code blocks (```), using proper language identifiers (e.g., ```json or ```python). At least one code block must be included in the appropriate section.
> - Spacing: List blocks and tables must be surrounded by one blank line (MD032).
> - Revision History: This section must contain a Markdown table of version, date, author, and description. It must immediately precede the final footer block.
>
> The document must conclude with a structured YAML footer enclosed in triple dashes (---). It must begin with `marker: document-footer-metadata` and include the following fields:
>
> - `status`, `version`, `last_updated`, `ref`, `authors`, `tags`, `footer_context`, `description`, and `instructions`

## Formatting Requirements

- Follow UDS structural hierarchy and heading rules.
- Ensure semantic section ordering and correct heading levels (avoid MD025 violations).
- Ensure required fields appear in both front matter and footer.
- Do not emit content outside the document boundaries (no floating text).

## Footer Requirements

All generated documents must end with the following footer block format:

```yaml
---
marker: document-footer-metadata
status: FINAL
version: 1.0.0
last_updated: 2025-04-06
ref: [Reference Path or URI]
authors:
  - Author One
  - Author Two
tags: ["#tag1", "#tag2", "#footer-keywords"]
footer_context: [e.g., component, system, contract]
description: [Brief summary of this footer’s metadata scope]
instructions: |
  This footer must appear as the last element in the document.
  It provides structured metadata for compliance tracking, tooling integration,
  and lifecycle management. No content may appear after this block.

---
```

## Revision History

| Version | Date       | Author                    | Description                              |
|---------|------------|----------------------------|------------------------------------------|
| 1.1.0   | 2025-04-06 | Documentation Standards Team | Integrated instruction into Purpose section and enforced INTERNAL classification |

---
marker: document-footer-metadata
status: FINAL
version: 1.1.0
last_updated: 2025-04-06
ref: agent-instructions/prompts/uds-prompt-to-generate-alt.md
authors:
  - Documentation Standards Team
tags: ["#uds", "#generation", "#prompt", "#markdown", "#automation"]
footer_context: standard
description: Specification for generating UDS-compliant Markdown files through structured agent instructions and footer enforcement.
instructions: |
  This document defines the precise structure of prompts used by agents to generate UDS-compliant documents.
  The instruction block is embedded under the Purpose section for traceability and semantic alignment.
  All generated output must follow the rules set here with no deviation.

The last instruction is that every document created must contain a space after the last instruction in the footer

---
