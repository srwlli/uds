---
title: Core UDS Links Training Guide
version: 1.0.0
date: 2025-04-01
status: APPROVED
authors:
  - name: Documentation Standards Team
classification: INTERNAL
tags: [uds, training, links, cross-references, compliance]
---

# Core UDS Links Training Guide

## 1. Core Knowledge: Links and Cross-References

### Standard Reference

The UDS `core-links-and-references-standards.md` document establishes that:

1. Links and cross-references must follow consistent formatting rules
2. Different link types serve specific purposes and use cases
3. Link text should be descriptive and meaningful
4. Links must be valid and properly maintained
5. External links must follow security and relevance guidelines

### Link Types and Requirements

| Link Type | Format | Purpose | Reference Section |
|-----------|--------|---------|-------------------|
| Internal same-page | `[text](#section-id)` | Navigate within document | Section 3.2.1 |
| Internal cross-document | `[text](./relative-path.md)` | Connect related documents | Section 3.2.2 |
| External | `[text](https://example.com)` | Reference outside content | Section 3.2.3 |
| API references | `[endpoint](#get-endpoint)` | Link to API documentation | Section 3.2.4 |
| Email links | `[text](mailto:email@example.com)` | Provide contact information | Section 8.1 |
| Bare URLs | `<https://example.com>` | Show complete, clickable URLs | Section 7.1 |

### Violation Classification Table

| Violation Type | Severity | Impact | Reference Section |
|----------------|----------|--------|-------------------|
| Invalid link format | Critical | Non-functional links | Section 3.2 |
| Reversed link syntax | Critical | Non-functional links | Section 8.1 |
| Non-descriptive link text | Major | Poor accessibility | Section 3.1.1 |
| Broken internal links | Major | Navigation failure | Section 9.1 |
| Missing link text | Major | Unclear purpose | Section 3.1 |
| Generic link text | Minor | Reduced usability | Section 3.1.1 |
| Inconsistent formatting | Minor | Visual inconsistency | Section 3.3 |
| Bare URLs in text | Minor | Reduced readability | Section 7.2 |

## 2. Examples and Corrections

### Example 1: Basic Link Format Violations

**Non-Compliant Document:**

```markdown
For more information, see our (API documentation)[/docs/api.md].

Check out our website at www.example.com for details.

Contact us at email@example.com with questions.
```

**Violation Analysis:**
- Critical: Reversed link syntax (parentheses and brackets swapped)
- Minor: Bare URL and email address without proper link formatting
- Minor: Generic link text "API documentation"

**Compliant Version:**

```markdown
For more information, see our [API Authentication Guide](/docs/api.md).

Check out our website at <https://www.example.com> for details.

Contact us at <email@example.com> with questions.
```

**Explanation of Changes:**
- Fixed link syntax by correcting bracket and parenthesis order
- Made link text more descriptive ("API Authentication Guide")
- Properly formatted bare URL with angle brackets
- Properly formatted email with angle brackets

### Example 2: Cross-Reference Violations

**Non-Compliant Document:**

```markdown
# Authentication Service

## API Endpoints

See the configuration section for setup details.

## Configuration

Configure the service as described in the setup guide.
```

**Violation Analysis:**
- Major: Missing link to referenced section ("configuration section")
- Major: Missing link to external document ("setup guide")
- Minor: Non-descriptive references

**Compliant Version:**

```markdown
# Authentication Service

## API Endpoints

See the [Configuration](#configuration) section for setup details.

## Configuration

Configure the service as described in the [Authentication Setup Guide](../setup/auth-setup.md).
```

**Explanation of Changes:**
- Added proper internal link to the configuration section
- Added cross-document link to the setup guide
- Made link text appropriately descriptive

### Example 3: Accessibility Violations

**Non-Compliant Document:**

```markdown
For instructions, [click here](./instructions.md).

Learn about our [security policy](./security.md) and 
our [privacy policy](./privacy.md) by reading them.

For more details, see [this document](./details.md).
```

**Violation Analysis:**
- Major: Non-descriptive link text ("click here")
- Major: Non-descriptive link text ("this document")
- Minor: Lack of context for what the links contain

**Compliant Version:**

```markdown
Read the [Installation Instructions](./instructions.md) to get started.

Learn about our [Security Policy](./security.md) and 
our [Privacy Policy](./privacy.md) to understand data protection.

For architecture information, see the [System Design Document](./details.md).
```

**Explanation of Changes:**
- Replaced "click here" with descriptive text about document content
- Replaced "this document" with clear description
- Added context around links to improve understanding

## 3. Detection Algorithms

### Pattern Recognition

For link validation, implement the following algorithm:

```python
def validate_links(document):
    links = extract_all_links(document)
    violations = []
    
    for link in links:
        # Check for reversed link syntax
        if is_reversed_syntax(link):
            violations.append(Violation(
                type="CRITICAL",
                message="Reversed link syntax (parentheses and brackets swapped)",
                location=link.line_number
            ))
        
        # Check for non-descriptive link text
        if is_generic_link_text(link.text):
            violations.append(Violation(
                type="MAJOR",
                message=f"Non-descriptive link text: '{link.text}'",
                location=link.line_number
            ))
        
        # Check for internal link validity
        if link.is_internal and not is_valid_internal_link(document, link.target):
            violations.append(Violation(
                type="MAJOR",
                message=f"Invalid internal link target: '{link.target}'",
                location=link.line_number
            ))
        
        # Check for bare URLs
        if is_bare_url(link):
            violations.append(Violation(
                type="MINOR",
                message="Bare URL without proper formatting",
                location=link.line_number
            ))
            
        # Check for empty links
        if not link.text.strip():
            violations.append(Violation(
                type="MAJOR",
                message="Empty link text",
                location=link.line_number
            ))
    
    return violations
```

### Regex Patterns

```
# Match Markdown links
MARKDOWN_LINK: \[([^\]]*)\]\(([^)]+)\)

# Match reversed syntax links
REVERSED_LINK: \(([^)]*)\)\[([^\]]+)\]

# Match bare URLs
BARE_URL: (?<![<`])(https?:\/\/[^\s<]+)(?![>`])

# Match bare emails
BARE_EMAIL: (?<![<`])([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(?![>`])

# Match generic link text
GENERIC_LINK_TEXT: \[(click here|here|this|this link|link|more|more info|details|read more)\]\(
```

## 4. Correction Strategies

### Automated Fixes

The agent should implement these correction strategies:

1. **Syntax Corrections**:
   - Fix reversed link syntax (swap brackets and parentheses)
   - Add angle brackets around bare URLs and emails
   - Fix malformed links with missing components

2. **Content Improvements**:
   - Suggest descriptive alternatives for generic link text
   - Extract information from link target to generate better text
   - Format links consistently based on type

3. **Validation Fixes**:
   - Correct broken internal links by updating section IDs
   - Fix relative paths in cross-document links
   - Update link texts to match the linked content

### Manual Fix Recommendations

For complex violations, provide specific guidance:

```
RECOMMENDATION: Your document contains several non-descriptive links.

Consider replacing:
- "click here" → descriptive text about the destination
- "this document" → specific document name or purpose
- "more information" → what specific information is available

Example:
Instead of: For details, [click here](./security.md).
Use: Review our [Security Requirements](./security.md) for details.

Reference: core-links-and-references-standards.md, Section 3.1.1
```

## 5. Testing Scenarios

### Test Case 1: Perfect Compliance

```markdown
# Authentication Service

## Overview

Our [Authentication Service Architecture](../architecture/auth.md) provides secure user identity management.

## Features

- [Multi-factor Authentication](#multi-factor-authentication) support
- Integration with <https://oauth.net/2/> standards
- Contact our [Support Team](mailto:support@example.com) for assistance

## Multi-factor Authentication

This section details our MFA implementation.
```

Expected result: No violations

### Test Case 2: Multiple Violations

```markdown
# Authentication

For setup instructions, click [here](setup.md).

See this (document)[standards.md] for standards.

For questions: support@example.com

Read more: https://example.com/docs
```

Expected results:
- Major: Non-descriptive link text ("here")
- Critical: Reversed link syntax in second link
- Minor: Bare email without formatting
- Minor: Bare URL without formatting

## 6. User Interaction Examples

### Violation Report

```
I've reviewed your document and found link formatting issues:

CRITICAL: Reversed link syntax (core-links-and-references-standards.md, Section 8.1)
- Line 5: "(document)[standards.md]" should be "[document](standards.md)"

MAJOR: Non-descriptive link text (core-links-and-references-standards.md, Section 3.1.1)
- Line 3: "here" does not describe the link destination

MINOR: Bare URL and email (core-links-and-references-standards.md, Section 7.2)
- Line 7: "support@example.com" should be "<support@example.com>"
- Line 9: "https://example.com/docs" should be "<https://example.com/docs>"

To fix these issues:
1. Correct the reversed syntax in the "document" link
2. Replace "here" with descriptive text about the setup instructions
3. Add angle brackets around the email and URL
```

### Interactive Correction

```
User: What's wrong with my document links?

Agent: Your document has several link formatting issues according to UDS standards:

1. You have a reversed link syntax on line 5 - the parentheses and brackets are swapped
2. The link text "here" doesn't describe what the user will find when clicking
3. Your email address and URL should be formatted with angle brackets to make them clickable

Would you like me to show you a corrected version?

User: Yes, please.

Agent: Here's your document with properly formatted links:

# Authentication

For [setup instructions](setup.md) to configure the service.

See this [standards document](standards.md) for requirements.

For questions: <support@example.com>

Read more: <https://example.com/docs>

The key improvements are:
- Fixed the reversed syntax in the second link
- Made the link text descriptive instead of using "here"
- Added angle brackets to make the email and URL clickable
```

## 7. Self-Assessment Questions

1. What is the correct syntax for an internal same-page link?
2. How should bare URLs be formatted in documentation?
3. What are three examples of non-descriptive link text that should be avoided?
4. What is the purpose of descriptive link text for accessibility?
5. How should email addresses be formatted in documentation?
6. What is the correct format for cross-document links with relative paths?
7. What is "reversed link syntax" and how do you fix it?

## 8. Integration Knowledge

### Document Ecosystem

The agent should understand how links work in connected documentation:

- Document relationship mapping and cross-reference patterns
- Section ID generation algorithms in different Markdown processors
- Relative path resolution rules

### Accessibility Requirements

The agent should know link accessibility standards:

- Screen reader behavior with different link types
- WCAG requirements for link text
- Keyboard navigation considerations for links

---
###### Document Status: APPROVED
###### Last Updated: 2025-04-01
---
