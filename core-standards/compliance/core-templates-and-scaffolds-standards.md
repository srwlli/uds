---
title: Core Templates and Scaffolds Standards
version: 1.0.0
date: 2025-03-27
status: APPROVED
authors:
  - name: Documentation Standards Team
classification: PUBLIC
tags: [uds, scaffolds, templates, authoring]
---

# Core Templates and Scaffolds Standards

## Purpose

This document provides official templates and scaffolds for generating UDS-compliant documentation. Templates enforce structural alignment and ensure metadata, tone, and formatting consistency.

## Scope

Applies to all new documentation initiated by contributors or agents. Used during onboarding, GPT generation, or manual authoring.

## Specification Template

````markdown
---
title: [Document Title]
version: 1.0.0
date: [YYYY-MM-DD]
status: DRAFT
authors:
  - name: [Author Name]
classification: INTERNAL
tags: [project, domain, type]
---

# [Document Title]

## Purpose

## Scope

## Architecture

## Inputs and Outputs

## References
````

## Guide Template

````markdown
---
title: [Guide Title]
version: 1.0.0
date: [YYYY-MM-DD]
status: DRAFT
authors:
  - name: [Author Name]
classification: PUBLIC
tags: [project, guide, onboarding]
---

# [Guide Title]

## Objective

## Step-by-Step Instructions

## Troubleshooting

## Next Steps
````

## Enforcement

All documentation must conform to the appropriate template for its type. UDS agents will enforce this prior to publishing status promotion.
