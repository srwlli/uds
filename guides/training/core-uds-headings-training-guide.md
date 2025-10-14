---
title: Core UDS Headings Training Guide
version: 1.0.0
date: 2025-04-01
status: APPROVED
authors:
  - name: Documentation Standards Team
classification: INTERNAL
tags: [uds, training, headings, hierarchy, compliance]
---

# Core UDS Headings Training Guide

## 1. Core Knowledge: Heading Hierarchy

### Standard Reference

The UDS `core-heading-standards.md` document establishes that:

1. Documents must have exactly one H1 as the document title
2. Heading levels must progress in order (H1 → H2 → H3, etc.)
3. No levels may be skipped (H2 cannot be followed directly by H4)
4. Specific formatting guidelines apply to each heading level

### Violation Classification Table

| Violation Type | Severity | Impact | Reference Section |
|----------------|----------|--------|-------------------|
| Missing H1 | Critical | Document lacks proper title | Section 3.1 |
| Multiple H1s | Critical | Creates ambiguous document structure | Section 3.1 |
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
- Critical: Missing H1 document title
- Major: Skipped level (H2 to H4)

**Compliant Version:**

```markdown
# System Documentation

## System Overview

Information about the system goes here.

### Component Details

Details about components go here.
```

**Explanation of Changes:**
- Added H1 document title
- Changed H4 to H3 to maintain proper hierarchy

### Example 2: Complex Heading Structure

**Non-Compliant Document:**

```markdown
# API Documentation
Information about our API.

# Authentication
Details about authentication.

### Endpoints
API endpoints are listed here.
```

**Violation Analysis:**
- Critical: Multiple H1 headings (2)
- Major: Skipped level (H1 to H3)

**Compliant Version:**

```markdown
# API Documentation

## Overview
Information about our API.

## Authentication
Details about authentication.

### Endpoints
API endpoints are listed here.
```

**Explanation of Changes:**
- Converted second H1 to H2
- Added H2 "Overview" section
- Maintained correct hierarchy

## 3. Detection Algorithms

### Pattern Recognition

For heading hierarchy validation, implement the following algorithm:

```python
def validate_heading_hierarchy(document):
    headings = extract_all_headings(document)
    if not headings:
        return [Violation(type="CRITICAL", message="Document contains no headings")]
    
    violations = []
    
    # Check for H1
    h1_headings = [h for h in headings if h.level == 1]
    if not h1_headings:
        violations.append(Violation(type="CRITICAL", message="Document missing H1 title"))
    elif len(h1_headings) > 1:
        violations.append(Violation(type="CRITICAL", message="Document contains multiple H1 headings"))
    
    # Check for skipped levels
    current_level = 1
    for heading in headings:
        if heading.level > current_level + 1:
            violations.append(Violation(
                type="MAJOR", 
                message=f"Skipped heading level: H{current_level} to H{heading.level}",
                location=heading.line_number
            ))
        current_level = max(current_level, heading.level)
    
    return violations
```

### Regex Patterns

```
# Match H1-H6 headings in Markdown
H1: ^# [^#].*$
H2: ^## [^#].*$
H3: ^### [^#].*$
H4: ^#### [^#].*$
H5: ^##### [^#].*$
H6: ^###### [^#].*$
```

## 4. Correction Strategies

### Automated Fixes

The agent should implement these correction strategies:

1. **Missing H1**: Extract document purpose from content and metadata to generate title
2. **Multiple H1s**: Keep first H1, demote others to H2
3. **Skipped levels**: Adjust heading levels to ensure sequential progression
4. **Capitalization**: Apply title case to all headings per standards

### Manual Fix Recommendations

For complex violations, provide specific guidance:

```
RECOMMENDATION: Your document skips from H2 "System Architecture" to H4 "API Endpoints". 
Consider either:
1. Adding an H3 section that groups these endpoints, or
2. Promoting "API Endpoints" to H3 for proper hierarchy
Reference: core-heading-standards.md, Section 2.2
```

## 5. Testing Scenarios

### Test Case 1: Perfect Compliance

```markdown
# Document Title
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
Information without proper title.
#### First Section
Skipped H3 level.
# Another Title
Second H1 in document.
```

Expected results:
- Critical: Missing initial H1 (document starts with H2)
- Major: Skipped level H2 to H4
- Critical: Multiple H1 headings

## 6. User Interaction Examples

### Violation Report

```
I've reviewed your document and found heading structure issues:

CRITICAL: Document contains multiple H1 headings (core-heading-standards.md, Section 3.1)
- Line 1: "# API Documentation"
- Line 15: "# Authentication Methods"
  
MAJOR: Skipped heading level H2 to H4 (core-heading-standards.md, Section 2.2)
- Line 20: "#### OAuth 2.0" follows an H2 without an H3 parent

To fix these issues:
1. Keep only the first H1 "API Documentation" as your document title
2. Change "# Authentication Methods" to "## Authentication Methods"
3. Add an H3 section before "OAuth 2.0" or change it to H3
```

### Interactive Correction

```
User: I don't understand why my headings are wrong.

Agent: Your document currently has two top-level headings (H1), but UDS standards specify that documents should have exactly one H1 that serves as the title. The second heading "Authentication Methods" should be an H2 (##) instead.

Also, you have an H4 heading "#### OAuth 2.0" that comes directly after an H2 section. This skips the H3 level, which breaks the hierarchy. Would you like me to show you what the corrected structure should look like?

User: Yes, please show me.

Agent: Here's your heading structure corrected to UDS standards:

# API Documentation
## Overview
## Authentication Methods
### OAuth 2.0
### API Keys
## Endpoints
```

## 7. Self-Assessment Questions

1. What is the maximum number of H1 headings allowed in a UDS-compliant document?
2. If a document contains an H2 section followed by an H4 section, what violation has occurred?
3. When checking a document with no headings, what severity of violation should be reported?
4. What are the capitalization requirements for headings in UDS standards?
5. If a document has properly structured headings but inconsistent formatting, what severity level applies?

## 8. Integration Knowledge

### Markdown Processors

Different Markdown processors may render heading hierarchies differently. The agent should know:

- GitHub-flavored Markdown heading ID generation algorithm
- CommonMark vs. other Markdown flavor differences
- How HTML headings are parsed in mixed Markdown/HTML documents

### Documentation Platforms

The agent should adjust validation for platform-specific limitations:

- Confluence restrictions on heading levels
- GitHub Wiki handling of heading hierarchies
- Static site generators and their heading processing

---
###### Document Status: APPROVED
###### Last Updated: 2025-04-01
---
