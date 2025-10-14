---
title: Visual Style Standards (Strict Mode)
version: 1.1.1
updated: 2025-03-29
authors:
  - name: Coderef AI Agent
    team: Docs Compliance
classification: INTERNAL
tags: ["#uds", "#visual-style", "#compliance", "#noemoji"]
description: Enforces a strict no-emoji, no-icons policy and defines the only valid usage context — inside this document to illustrate the rule.
---

# Visual Style Standards (Strict UDS Mode)

## Purpose

Ensure UDS documentation remains clean, consistent, professional, and fully machine-readable — free from any emoji, decorative icons, or visual noise.

---

## ❌ Banned Elements

| Type          | Examples         | Status        |
|---------------|------------------|----------------|
| Emoji         | 😄 📦 ✅ ❌         | ❌ FORBIDDEN   |
| Unicode Icons | ✨ ➕ ➖ ☑️          | ❌ FORBIDDEN   |
| ASCII Flair   | [==>] → ← ✓ ✗     | ❌ FORBIDDEN   |

> ⚠️ **This document is the only place emojis or icons may appear — and only for the purpose of illustrating this prohibition.**

They are explicitly forbidden from:

- All `.md` documents (README, SUMMARY, etc.)
- Source code comments (docstrings, inline docs)
- Logs, outputs, and test summaries
- Metadata fields (title, description, tags)

---

## ✅ Allowed Visuals

| Type         | Description                                   |
|--------------|-----------------------------------------------|
| Markdown     | Standard markdown: `-`, `*`, `1.`, code blocks |
| `<img>` Tags | Static diagrams only, must include alt text   |
| Headings     | Proper H1 → H4 structure, no embedded symbols |

---

## Why This Matters

- 🔒 Enables strict agent-mode parsing and compliance  
- ♿ Improves screen reader accessibility  
- 📄 Prevents inconsistencies across platforms and devices  
- 🤖 Keeps agent-generated and human-written docs aligned

---

## Enforcement

- CI/linter must reject any forbidden character or symbol
- No `#debug` or `#nonCompliant` overrides allowed
- Scan all UDS files recursively before publish or PR merge

---

## Related Standards

- `core-markdown-official-rules.md`
- `core-writing-tone-guide.md`
- `core-tags-in-documents.md`
- `core-document-review-standards.md`
