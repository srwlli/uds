---
title: Core UDS Lists Training Guide
version: 1.0.0
date: 2025-04-01
status: APPROVED
authors:
  - name: Documentation Standards Team
classification: INTERNAL
tags: [uds, training, lists, formatting, compliance]
---

# Core UDS Lists Training Guide

## 1. Core Knowledge: List Formatting

### Standard Reference

The UDS `core-list-format-guide.md` document establishes that:

1. Different list types (unordered, ordered, definition) serve specific purposes
2. Lists must follow consistent formatting rules for markers, indentation, and spacing
3. List items should maintain grammatical parallelism and consistent capitalization
4. List introduction and spacing follows specific patterns
5. Nesting should be limited and consistently formatted

### List Types and Purposes

| List Type | Markers | Purpose | Reference Section |
|-----------|---------|---------|-------------------|
| Unordered | •, -, * | Present collections without sequence | Section 2.1 |
| Ordered | 1., 2., a., b. | Present sequences with order | Section 2.2 |
| Definition | Term: Definition | Present term-definition pairs | Section 2.3 |
| Checklist | ☐, ☑ | Present actionable items | Section 2.4 |
| Nested | Mixed | Present hierarchical information | Section 2.5 |

### Violation Classification Table

| Violation Type | Severity | Impact | Reference Section |
|----------------|----------|--------|-------------------|
| Inconsistent markers | Major | Visual inconsistency | Section 3.3 |
| Improper indentation | Major | Broken hierarchy | Section 3.4 |
| Missing list introduction | Minor | Lack of context | Section 3.1 |
| Inconsistent capitalization | Minor | Visual inconsistency | Section 3.2.1 |
| Inconsistent punctuation | Minor | Visual inconsistency | Section 3.2.2 |
| Non-parallel grammar | Minor | Reduced readability | Section 3.2.3 |
| Excessive nesting | Major | Navigation difficulty | Section 3.4.1 |

## 2. Examples and Corrections

### Example 1: Inconsistent Markers

**Non-Compliant Document:**

```markdown
# Configuration Options

* Database settings
- Logging configuration
+ Security options
```

**Violation Analysis:**
- Major: Inconsistent unordered list markers (*, -, +)

**Compliant Version:**

```markdown
# Configuration Options

* Database settings
* Logging configuration
* Security options
```

**Explanation of Changes:**
- Standardized on a single marker type (*) for all list items
- Maintained consistent formatting throughout the list

### Example 2: Grammatical Inconsistency

**Non-Compliant Document:**

```markdown
# Setup Instructions

1. Install the software
2. Configuration of settings
3. The system should be tested
4. Deploy to production
```

**Violation Analysis:**
- Minor: Non-parallel grammar across list items
- Item 1: Verb-led (Install)
- Item 2: Noun phrase (Configuration)
- Item 3: Passive voice (should be tested)
- Item 4: Verb-led (Deploy)

**Compliant Version:**

```markdown
# Setup Instructions

1. Install the software
2. Configure the settings
3. Test the system
4. Deploy to production
```

**Explanation of Changes:**
- Standardized all items to use verb-led imperative form
- Maintained consistent grammatical structure

### Example 3: Improper Nesting

**Non-Compliant Document:**

```markdown
# Features

* User Management
   * User Creation
      * Username requirements
         * Must be unique
            * System-wide uniqueness
   * User Deletion
* System Configuration
```

**Violation Analysis:**
- Major: Excessive nesting (5 levels exceeds the recommended 3)
- Major: Inconsistent indentation (varying spaces)

**Compliant Version:**

```markdown
# Features

* User Management
  * User Creation
    * Username requirements
      * Must be unique (system-wide)
  * User Deletion
* System Configuration
```

**Explanation of Changes:**
- Reduced nesting to maximum 4 levels
- Consolidated deepest level into parent with parenthetical note
- Standardized indentation (2 spaces per level)

## 3. Detection Algorithms

### Pattern Recognition

For list formatting validation, implement the following algorithm:

```python
def validate_list_formatting(document):
    lists = extract_all_lists(document)
    violations = []
    
    for list_obj in lists:
        # Check for consistent markers
        markers = [item.marker for item in list_obj.items]
        if len(set(markers)) > 1 and list_obj.type == "unordered":
            violations.append(Violation(
                type="MAJOR",
                message="Inconsistent unordered list markers",
                location=list_obj.start_line
            ))
        
        # Check for proper indentation
        indentation = [item.indentation for item in list_obj.items]
        if not all(i % 2 == 0 for i in indentation):
            violations.append(Violation(
                type="MAJOR",
                message="List indentation should be 2 spaces per level",
                location=list_obj.start_line
            ))
        
        # Check for introduction
        if not has_introduction(list_obj):
            violations.append(Violation(
                type="MINOR",
                message="List lacks proper introduction",
                location=list_obj.start_line
            ))
        
        # Check for nesting depth
        max_depth = max(item.depth for item in list_obj.items)
        if max_depth > 3:
            violations.append(Violation(
                type="MAJOR",
                message=f"Excessive nesting depth ({max_depth} levels, maximum recommended is 3)",
                location=list_obj.start_line
            ))
        
        # Check for parallelism
        if not has_parallel_grammar(list_obj.items):
            violations.append(Violation(
                type="MINOR",
                message="List items lack grammatical parallelism",
                location=list_obj.start_line
            ))
    
    return violations
```

### Regex Patterns

```
# Match unordered list items with different markers
UNORDERED_ITEM: ^(\s*)([\*\-\+])\s+(.+)$

# Match ordered list items
ORDERED_ITEM: ^(\s*)(\d+|[a-z]|[A-Z]|[ivxlcdm]+|[IVXLCDM]+)[\.)](\s+)(.+)$

# Match definition list items
DEFINITION_ITEM: ^(\s*)([^\s:]+)(\s*):(\s*)(.+)$
```

## 4. Correction Strategies

### Automated Fixes

The agent should implement these correction strategies:

1. **Inconsistent Markers**: Standardize on the most commonly used marker
   - For unordered lists: Standardize on "*", "-", or "+" (preferring the first used)
   - For ordered lists: Standardize on "1." style with proper increments

2. **Indentation Fixes**:
   - Adjust to 2 or 4 spaces per level consistently
   - Align sub-lists properly under parent items

3. **Spacing Corrections**:
   - Ensure one space after list markers
   - Add blank line before and after lists
   - Remove blank lines between tightly coupled list items

### Manual Fix Recommendations

For complex violations, provide specific guidance:

```
RECOMMENDATION: Your list items lack grammatical parallelism.

Consider reformatting your list to use consistent grammatical structure:

Current:
1. Install the software
2. Configuration of settings
3. The system should be tested

Suggested:
1. Install the software
2. Configure the settings
3. Test the system

Reference: core-list-format-guide.md, Section 3.2.3
```

## 5. Testing Scenarios

### Test Case 1: Perfect Compliance

```markdown
# User Permissions

The system supports the following permission levels:

* Administrator
  * Full system access
  * User management capabilities
  * Configuration control
* Manager
  * Department data access
  * Report generation
  * Team management
* User
  * Personal data access
  * Basic features
```

Expected result: No violations

### Test Case 2: Multiple Violations

```markdown
# User Permissions
* Administrator
- Full system access
+ User management
* Manager
* performing reporting
* users
   - data access
```

Expected results:
- Major: Inconsistent unordered list markers (*, -, +)
- Minor: Missing list introduction
- Minor: Inconsistent capitalization (some items begin with capitals, others don't)
- Minor: Non-parallel grammar ("performing reporting" vs noun phrases)
- Major: Inconsistent indentation (3 spaces instead of 2 or 4)

## 6. User Interaction Examples

### Violation Report

```
I've reviewed your document and found list formatting issues:

MAJOR: Inconsistent unordered list markers (core-list-format-guide.md, Section 3.3.1)
- Line 2: Uses "*" marker
- Line 3: Uses "-" marker
- Line 4: Uses "+" marker

MINOR: List missing introduction (core-list-format-guide.md, Section 3.1)
- Line 2: List begins without contextual introduction

MINOR: Non-parallel grammar in list items (core-list-format-guide.md, Section 3.2.3)
- Line 5: "Manager" (noun)
- Line 6: "performing reporting" (verb phrase)

To fix these issues:
1. Standardize on a single list marker (* recommended)
2. Add an introductory sentence before the list
3. Make all list items follow the same grammatical pattern
```

### Interactive Correction

```
User: What's wrong with my lists?

Agent: Your document has several list formatting issues according to UDS standards:

1. You're using three different markers (*, -, +) in the same unordered list, which creates inconsistency.
2. The list starts without an introduction sentence to provide context.
3. Your list items don't follow the same grammatical pattern - some are nouns, others are verb phrases.
4. The indentation for nested items uses 3 spaces, but should use 2 or 4 spaces consistently.

Would you like me to show you a corrected version?

User: Yes, please.

Agent: Here's your list with the issues corrected:

# User Permissions

The system supports the following permission levels:

* Administrator
  * Full system access
  * User management
* Manager
  * Reporting functions
* User
  * Data access
```

## 7. Self-Assessment Questions

1. What are the three main types of lists in UDS documentation?
2. How much indentation should be used for each nesting level in lists?
3. What is "grammatical parallelism" and why is it important in lists?
4. What is the maximum recommended nesting depth for lists?
5. When should ordered lists be used instead of unordered lists?
6. What should precede every list in a document?
7. What are the approved markers for unordered lists?

## 8. Integration Knowledge

### Markdown Variants

The agent should understand list implementations across different Markdown flavors:

- GitHub Flavored Markdown list parsing
- CommonMark vs. MultiMarkdown list handling
- How list continuation paragraphs work in different parsers

### Documentation Tools

The agent should know how lists are rendered in common documentation tools:

- How nested lists appear in different renderers
- Tool-specific indentation requirements
- Automatic list formatting features in editors

---
###### Document Status: APPROVED
###### Last Updated: 2025-04-01
---
