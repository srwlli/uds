---
title: Core UDS Headings Training Guide
version: 1.1.1
date: 2025-04-06
status: APPROVED
authors:
  - name: Documentation Standards Team
classification: INTERNAL
tags: ["uds", "training", "headings", "hierarchy", "compliance"]
description: Instructional training document detailing heading usage, violations, and correction strategy for UDS-compliant documents.
---

## Core UDS Headings Training Guide

## 1. Core Knowledge: Heading Hierarchy

### Standard Reference

The UDS `core-heading-standards.md` document establishes that:

1. The document **title is defined exclusively** in the YAML `title` field — **no H1 (`#`) headings may appear in the document body**.
2. The first visible heading in the document body must be an H2 (`##`), and every major section must use H2.
3. Heading levels must progress in order (H2 → H3 → H4, etc.).
4. No levels may be skipped (H2 cannot be followed directly by H4).
5. The use of Markdown H1 headings (`#`) is strictly prohibited; **documents begin with `##` level headings only.**
6. Specific formatting guidelines apply to each heading level.

### Violation Classification Table

| Violation Type | Severity | Impact | Reference Section |
|----------------|----------|--------|-------------------|
| H1 in body | Critical | Title must only be in YAML | Section 1.1 |
| Skipped level (e.g., H2→H4) | Major | Breaks logical hierarchy | Section 2.2 |
| Improper capitalization | Minor | Inconsistent visual presentation | Section 4.3 |
| Incorrect formatting | Minor | Visual inconsistency | Section 4.1 |

## 2. Examples and Corrections

### Example 1: Basic Heading Violation

**Non-Compliant Document:**

```markdown
## System Overview
Information about the system goes here.

#### Component Details
Details about components go here.
```

**Violation Analysis:**

- Critical: No document title in YAML and missing H2 header alignment
- Major: Skipped level (H2 to H4)

**Compliant Version:**

```markdown
---
title: System Documentation
...
---

## System Overview
Information about the system goes here.

### Component Details
Details about components go here.
```

**Explanation of Changes:**

- Moved title to YAML
- Changed H4 to H3 to maintain proper hierarchy

### Example 2: Multiple H1s

**Non-Compliant Document:**

```markdown
# API Documentation
# Authentication
### Endpoints
```

**Violation Analysis:**

- Critical: H1 heading used in document body
- Major: Skipped level (H1 to H3)

**Compliant Version:**

```markdown
---
title: API Documentation
...
---

## Overview
## Authentication
### Endpoints
```

**Explanation of Changes:**

- Removed H1s and moved title to YAML
- Replaced body headings with valid H2 and H3

## 3. Detection Algorithms

### Pattern Recognition

The following enforcement rules are implemented:

- Heading level 1 (H1 or `#`) in the document body is a **critical violation**.
- All visible content begins with an H2.
- Headings must be strictly hierarchical without skipping levels.
- Heading chains must maintain consistent indentation, spacing, and structure.

### Regex Patterns

```text
# YAML title only — do not use Markdown H1
H2: ^## [^#].*$
H3: ^### [^#].*$
H4: ^#### [^#].*$
```

## 4. Correction Strategies

### Automated Fixes

1. **H1 in document body**: Remove and migrate to YAML `title`
2. **Skipped levels**: Adjust heading levels downward to restore sequence
3. **Improper casing**: Normalize all headings to sentence or title case per style guide

### Manual Fix Recommendations

```
RECOMMENDATION: Markdown heading level 1 (`#`) found in body. UDS requires all body content to begin with H2 (`##`). Place the document title in the YAML `title` field.
```

## 5. Testing Scenarios

### Test Case 1: Perfect Compliance

```markdown
---
title: Document Title
...
---

## Section One
### Subsection A
### Subsection B
## Section Two
### Subsection C
#### Further Details
```

Expected result: No violations

### Test Case 2: Multiple Violations

```markdown
## Document Title
#### First Section
# Another Title
```

Expected results:
- Critical: No YAML title present
- Critical: H1 found in body
- Major: Skipped heading levels

## 6. User Interaction Examples

```
Agent: Your document uses `#` headings in the body. Per UDS, titles must be in the YAML header. All visible section headings must begin at level H2 (`##`).
```

**Corrected:**

```markdown
---
title: API Overview
...
---

## Authentication
### OAuth 2.0
```

## 7. Self-Assessment Questions

1. Where should the document title be located in UDS-compliant documents?
2. Is it valid to begin a document with `# Title`?
3. What heading level should primary sections start at?
4. What happens if you skip from H2 to H4?

## 8. Integration Knowledge

Agents must enforce the YAML-only H1 rule and ensure:

- GitHub and Confluence render compliant H2-H6 hierarchies
- Static generators do not misinterpret Markdown H1s in body
- Heading order and syntax follow strict UDS parsing constraints

---
marker: document-footer-metadata
status: FINAL
version: 1.1.1
last_updated: 2025-04-06
ref: /training/core-uds-headings-training-guide.md
authors:
  - Documentation Standards Team
tags: ["#uds", "#headings", "#structure", "#hierarchy"]
footer_context: training
description: Instructional standard for enforcing and correcting heading hierarchy in UDS-compliant documents.
instructions: |
  This footer certifies that heading rules are fully defined and enforced.
  Document title must be declared in YAML only.
  The document must begin with H2 headings, followed by H3–H6 if needed.
  Markdown H1 in the body is strictly prohibited.
  All heading levels must follow sequential order without skipping.

---

