---
title: Core Document Review Standards
version: 1.0.0
date: 2025-03-27
status: APPROVED
authors:
  - name: Documentation Standards Team
classification: PUBLIC
tags: [uds, review, checklist, compliance]
---

# Core Document Review Standards

## Purpose

This document defines the standard process and criteria for reviewing UDS-compliant documentation. It enables authors, reviewers, and agents to evaluate structural, stylistic, and compliance readiness before publication.

## Scope

Applies to all UDS-controlled documentation projects. Used by human reviewers and automated validation agents during the `REVIEW` stage.

## Pre-Review Checklist

Before submitting a document for review:

- Metadata and YAML frontmatter are present and complete
- Title is present and uses sentence case
- Status is correctly marked (`DRAFT`, `REVIEW`, `CONTROLLED`)
- Tags follow the classification defined in `core-taxonomy-and-classification-standards.md`
- All required UDS sections are included for the document type
- Tables and lists conform to UDS formatting standards
- Tone and structure align with the intended audience

## Review Roles

- Reviewer: Responsible for detailed compliance checks
- Author: Responds to requests and incorporates required changes
- UDS Agent: Automatically flags violations, enforces syntax, and may downgrade document status

## Review Process

1. Reviewer performs checklist validation
2. UDS agent executes formatting and tag compliance review
3. Violations are flagged in-line or recorded as comments
4. Status is updated based on outcome

## Outcomes

- Approved: Status is changed to `CONTROLLED`
- Rejected: Status remains `REVIEW` or is downgraded to `DRAFT`
