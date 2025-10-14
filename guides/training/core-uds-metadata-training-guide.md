---
title: Core UDS Metadata Training Guide
version: 1.0.0
date: 2025-04-01
status: APPROVED
authors:
  - name: Documentation Standards Team
classification: INTERNAL
tags: [uds, training, metadata, frontmatter, compliance]
---

# Core UDS Metadata Training Guide

## 1. Core Knowledge: Document Metadata

### Standard Reference

The UDS `core-metadata-in-documentation.md` document establishes that:

1. All UDS documents must include specific metadata elements in frontmatter
2. Metadata must follow a specific YAML format and structure
3. Certain fields are mandatory while others are optional
4. Field values must conform to specific formats and controlled vocabularies

### Essential Metadata Fields

| Field | Requirement | Format | Purpose | Reference Section |
|-------|-------------|--------|---------|-------------------|
| title | Required | String | Document identifier | Section 2.1 |
| version | Required | Semantic (X.Y.Z) | Iteration tracking | Section 2.1 |
| date | Required | ISO 8601 (YYYY-MM-DD) | Creation/update tracking | Section 2.1 |
| status | Required | Controlled vocabulary | Lifecycle stage indicator | Section 2.1 |
| authors | Required | Array of objects | Attribution and responsibility | Section 2.1 |
| classification | Required | Controlled vocabulary | Security/privacy level | Section 2.2 |
| tags | Required | Array of strings | Categorization | Section 2.2 |
| keywords | Optional | Array of strings | Enhanced searchability | Section 2.2 |
| description | Optional | String | Content summary | Section 2.1 |

### Violation Classification Table

| Violation Type | Severity | Impact | Reference Section |
|----------------|----------|--------|-------------------|
| Missing required metadata | Critical | Invalid document identity | Section 2.1 |
| Invalid metadata format | Major | Parsing failures | Section 3.1 |
| Invalid field values | Major | Incorrect classification | Section 2.1-2.2 |
| Missing optional metadata | Minor | Reduced discoverability | Section 2.2 |
| Inconsistent metadata | Minor | Potential confusion | Section 5.2 |

## 2. Examples and Corrections

### Example 1: Missing Required Fields

**Non-Compliant Document:**

```markdown
---
title: API Authentication Guide
authors:
  - name: John Smith
---

# API Authentication Guide

This document describes authentication methods for our API.
```

**Violation Analysis:**
- Critical: Missing required fields (version, date, status, classification)
- Minor: No tags for categorization

**Compliant Version:**

```markdown
---
title: API Authentication Guide
version: 1.0.0
date: 2025-04-01
status: DRAFT
authors:
  - name: John Smith
    team: API Development
classification: INTERNAL
tags: [api, authentication, security]
---

# API Authentication Guide

This document describes authentication methods for our API.
```

**Explanation of Changes:**
- Added missing required fields: version, date, status
- Added classification field
- Added appropriate tags
- Enhanced authors information

### Example 2: Invalid Field Formats

**Non-Compliant Document:**

```markdown
---
title: API Authentication Guide
version: v1
date: April 1, 2025
status: In Progress
authors: John Smith
classification: private
tags: security, api
---

# API Authentication Guide
```

**Violation Analysis:**
- Major: Invalid version format (not semantic versioning)
- Major: Invalid date format (not ISO 8601)
- Major: Invalid status value (not in controlled vocabulary)
- Major: Invalid authors format (not array of objects)
- Major: Invalid classification value (not in controlled vocabulary)
- Major: Invalid tags format (not array)

**Compliant Version:**

```markdown
---
title: API Authentication Guide
version: 1.0.0
date: 2025-04-01
status: DRAFT
authors:
  - name: John Smith
    team: API Development
classification: INTERNAL
tags: [security, api]
---

# API Authentication Guide
```

**Explanation of Changes:**
- Corrected version to semantic format (1.0.0)
- Formatted date in ISO 8601 format
- Changed status to standard vocabulary term
- Fixed authors to proper array of objects format
- Changed classification to standard vocabulary term
- Corrected tags to array format

## 3. Detection Algorithms

### Pattern Recognition

For metadata validation, implement the following algorithm:

```python
def validate_metadata(document):
    frontmatter = extract_frontmatter(document)
    if not frontmatter:
        return [Violation(type="CRITICAL", message="Document missing required frontmatter")]
    
    violations = []
    
    # Check required fields
    required_fields = ["title", "version", "date", "status", "authors", "classification", "tags"]
    for field in required_fields:
        if field not in frontmatter:
            violations.append(Violation(
                type="CRITICAL", 
                message=f"Missing required metadata field: {field}"
            ))
    
    # Validate formats
    if "version" in frontmatter and not is_semantic_version(frontmatter["version"]):
        violations.append(Violation(
            type="MAJOR",
            message="Version must follow semantic versioning (X.Y.Z)"
        ))
    
    if "date" in frontmatter and not is_iso_date(frontmatter["date"]):
        violations.append(Violation(
            type="MAJOR",
            message="Date must be in ISO 8601 format (YYYY-MM-DD)"
        ))
    
    if "status" in frontmatter and frontmatter["status"] not in ["DRAFT", "REVIEW", "APPROVED", "CONTROLLED", "ARCHIVED"]:
        violations.append(Violation(
            type="MAJOR",
            message="Status must be one of: DRAFT, REVIEW, APPROVED, CONTROLLED, ARCHIVED"
        ))
    
    # Continue with other validations...
    
    return violations
```

### Regex Patterns

```
# Semantic version validation
SEMANTIC_VERSION: ^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$

# ISO 8601 date validation
ISO_DATE: ^\d{4}-\d{2}-\d{2}$

# YAML frontmatter detection
FRONTMATTER: ^---\s*\n([\s\S]*?)\n---\s*\n
```

## 4. Correction Strategies

### Automated Fixes

The agent should implement these correction strategies:

1. **Missing Fields**: Add required fields with default or derived values
   - version: "1.0.0" for new documents
   - date: Current date in ISO format
   - status: "DRAFT" for new documents
   - classification: "INTERNAL" as default
   - tags: Extract from content

2. **Format Corrections**:
   - Fix date formatting to ISO 8601
   - Convert version strings to semantic versioning
   - Format arrays properly with brackets
   - Correct authors format to array of objects

### Manual Fix Recommendations

For complex violations, provide specific guidance:

```
RECOMMENDATION: Your document is missing several required metadata fields.

Please add the following to your frontmatter:
- version: Use semantic versioning (X.Y.Z, e.g., "1.0.0")
- date: Today's date in YYYY-MM-DD format
- status: Document status (DRAFT, REVIEW, APPROVED)
- classification: Security level (PUBLIC, INTERNAL, CONFIDENTIAL)
- tags: Keywords as an array, e.g., [api, security]

Reference: core-metadata-in-documentation.md, Section 2.1
```

## 5. Testing Scenarios

### Test Case 1: Perfect Compliance

```markdown
---
title: API Authentication Guide
version: 1.0.0
date: 2025-04-01
status: APPROVED
authors:
  - name: John Smith
    team: Security
  - name: Jane Doe
    team: API Development
classification: INTERNAL
tags: [api, authentication, security, oauth]
description: Comprehensive guide to API authentication methods
keywords: [authentication, authorization, oauth, tokens, api-keys]
---

# API Authentication Guide
```

Expected result: No violations

### Test Case 2: Multiple Violations

```markdown
---
title: API Authentication Guide
authors: John Smith
classification: restricted
---

# API Authentication Guide
```

Expected results:
- Critical: Missing required fields (version, date, status)
- Major: Invalid authors format (not array of objects)
- Major: Invalid classification value (not in controlled vocabulary)
- Critical: Missing required tags

## 6. User Interaction Examples

### Violation Report

```
I've reviewed your document and found metadata issues:

CRITICAL: Missing required metadata fields (core-metadata-in-documentation.md, Section 2.1)
- Missing required fields: version, date, status, tags

MAJOR: Invalid metadata format (core-metadata-in-documentation.md, Section 3.1)
- "authors" should be an array of objects with name attribute
- "classification" value "restricted" is not in the controlled vocabulary

To fix these issues:
1. Add the missing required fields with appropriate values
2. Format "authors" as an array of objects
3. Use a standard classification value: PUBLIC, INTERNAL, or CONFIDENTIAL
```

### Interactive Correction

```
User: What's wrong with my document metadata?

Agent: Your document is missing several required metadata fields according to UDS standards. The frontmatter needs version, date, status, and tags fields. Also, the "authors" field should be formatted as an array of objects, not a simple string.

Would you like me to generate the correct metadata structure for you?

User: Yes, please.

Agent: Here's the corrected metadata section for your document:

---
title: API Authentication Guide
version: 1.0.0
date: 2025-04-01
status: DRAFT
authors:
  - name: John Smith
    team: API Development
classification: INTERNAL
tags: [api, authentication, security]
---

This follows the UDS metadata standards with:
- Semantic versioning for version
- ISO 8601 format for date
- Standard status from the controlled vocabulary
- Properly formatted authors as an array of objects
- Standard classification value
- Relevant tags as an array
```

## 7. Self-Assessment Questions

1. What are the six required metadata fields for every UDS document?
2. What is the correct format for the "date" field in document metadata?
3. What values are allowed for the "status" field?
4. How should the "authors" field be structured?
5. What is the difference between "tags" and "keywords" in the metadata?
6. What controlled vocabulary is used for the "classification" field?
7. How should version numbers be formatted according to UDS standards?

## 8. Integration Knowledge

### Template Systems

The agent should know how to implement metadata across different systems:

- VS Code YAML frontmatter extension validation
- Static site generators (Jekyll, Hugo, etc.) frontmatter requirements
- Documentation platforms (Confluence, GitBook) metadata mapping

### Automation Tools

Build awareness of tools that can help manage metadata:

- Pre-commit hooks for metadata validation
- CI/CD pipeline integrations for metadata checks
- Template generators for proper metadata scaffolding

---
###### Document Status: APPROVED
###### Last Updated: 2025-04-01
---
