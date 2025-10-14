---
title: Core Taxonomy and Classification Standards
version: 1.0.0
date: 2025-03-27
status: APPROVED
authors:
  - name: Documentation Standards Team
classification: PUBLIC
tags: [uds, taxonomy, tags, classification]
---

# Core Taxonomy and Classification Standards

## Purpose

To define and standardize the tagging and classification system across all UDS-aligned documentation to support search, filtering, indexing, and semantic alignment across domains.

## Tagging Syntax

- Tags must be:
  - lowercase
  - dash-separated
  - general enough to apply across multiple docs

### ✅ Valid: `forms-app`, `gpt-agent`, `accessibility`, `specification`
### ❌ Invalid: `ReactComponent`, `NeedsReview!`, `#tags`

## Required Tags

Every document must include:
- **Project tag** (e.g., `forms-app`, `internal-toolkit`)
- **Domain tag** (e.g., `gpt-agent`, `design-system`, `compliance`)
- **Function tag** (e.g., `controller`, `component`, `standards`)

## Classification Tiers

| Tier | Example | Description |
|------|---------|-------------|
| Level 1 | `controller`, `agent`, `component` | Role in system |
| Level 2 | `architecture`, `data`, `design`, `security` | Domain or subject |
| Level 3 | `specification`, `guide`, `validator` | Purpose or output type |

## Agent Integration

- UDS enforcement agents must validate tag presence, format, and scope
- Misclassified docs trigger status `REVIEW` with tag correction required
