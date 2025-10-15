---
title: Core Heading Standards
version: 1.0.0
date: 2025-03-26
status: APPROVED
authors:
  - name: AI Agent
    email: team@example.com
    team: Architecture & Standards
keywords: [documentation, standards, tailwind, react, UDS]
classification: INTERNAL
---

# Heading Hierarchy Standards

## Table of Contents
- [1. Introduction](#1-introduction)
- [2. Core Principles](#2-core-principles)
  - [2.1 Purpose of Heading Hierarchy](#21-purpose-of-heading-hierarchy)
  - [2.2 General Principles](#22-general-principles)
- [3. Heading Level Definitions](#3-heading-level-definitions)
  - [3.1 H1: Document Title](#31-h1-document-title)
  - [3.2 H2: Major Sections](#32-h2-major-sections)
  - [3.3 H3: Subsections](#33-h3-subsections)
  - [3.4 H4: Component Sections](#34-h4-component-sections)
  - [3.5 H5: Detail Sections](#35-h5-detail-sections)
  - [3.6 H6: Low-Level Divisions](#36-h6-low-level-divisions)
- [4. Heading Structure and Formatting](#4-heading-structure-and-formatting)
  - [4.1 Heading Format](#41-heading-format)
  - [4.2 Section Numbering](#42-section-numbering)
  - [4.3 Capitalization](#43-capitalization)
  - [4.4 Punctuation](#44-punctuation)
  - [4.5 Length Guidelines](#45-length-guidelines)
- [5. Heading Hierarchy Implementation](#5-heading-hierarchy-implementation)
  - [5.1 Markdown Implementation](#51-markdown-implementation)
  - [5.2 HTML Implementation](#52-html-implementation)
  - [5.3 Heading IDs and Anchors](#53-heading-ids-and-anchors)
- [6. Document-Specific Heading Patterns](#6-document-specific-heading-patterns)
  - [6.1 User Documentation Heading Pattern](#61-user-documentation-heading-pattern)
  - [6.2 Technical Specification Heading Pattern](#62-technical-specification-heading-pattern)
  - [6.3 API Documentation Heading Pattern](#63-api-documentation-heading-pattern)
  - [6.4 Tutorial Heading Pattern](#64-tutorial-heading-pattern)
- [7. Accessibility Considerations](#7-accessibility-considerations)
  - [7.1 Semantic Structure](#71-semantic-structure)
  - [7.2 Screen Reader Compatibility](#72-screen-reader-compatibility)
  - [7.3 Visual Differentiation](#73-visual-differentiation)
- [8. Common Heading Anti-patterns](#8-common-heading-anti-patterns)
- [9. Heading Quality Checklist](#9-heading-quality-checklist)
- [10. Advanced Heading Techniques](#10-advanced-heading-techniques)
  - [10.1 Progressive Disclosure](#101-progressive-disclosure)
  - [10.2 In-Page Navigation](#102-in-page-navigation)
  - [10.3 Cross-Document Structure](#103-cross-document-structure)
- [11. Implementation Guidelines](#11-implementation-guidelines)
  - [11.1 Converting Existing Documentation](#111-converting-existing-documentation)
  - [11.2 Integration with Template System](#112-integration-with-template-system)
  - [11.3 Automated Validation](#113-automated-validation)

## 1. Introduction

A well-structured heading hierarchy is essential for creating navigable, accessible, and user-friendly documentation. This guide establishes comprehensive standards for implementing consistent, effective heading structures across all documentation within the Universal Documentation Standards (UDS) framework.

Proper heading hierarchy creates a logical structure that helps readers navigate, comprehend, and retain information more effectively. It also provides semantic structure for accessibility tools and enables automated functionality like table of contents generation and cross-referencing.

## 2. Core Principles

### 2.1 Purpose of Heading Hierarchy

Heading hierarchy serves multiple critical functions:

- **Document structure**: Creates a logical organizational framework
- **Navigation assistance**: Helps readers locate specific information
- **Content chunking**: Divides content into manageable sections
- **Visual scanning support**: Enables quick skimming and information location
- **Accessibility**: Provides semantic structure for assistive technologies
- **Automated processing**: Enables table of contents generation and linking

### 2.2 General Principles

All heading hierarchies should follow these fundamental principles:

1. **Hierarchical progression**: Always proceed in order (H1 → H2 → H3, etc.)
2. **Logical nesting**: Each level should contain logical subdivisions of the parent level
3. **Completeness**: Include all relevant levels without skipping (don't jump from H2 to H4)
4. **Consistency**: Use consistent patterns within and across documents
5. **Descriptiveness**: Headings should clearly indicate section content
6. **Navigability**: Support both visual navigation and assistive technology

## 3. Heading Level Definitions

### 3.1 H1: Document Title

The H1 heading serves as the document title and should:

- Appear exactly once per document
- Be the first heading in the document
- Clearly identify the document's overall topic or purpose
- Match the document title in metadata and references

**Example**:
```markdown
# API Authentication Guide
```

### 3.2 H2: Major Sections

H2 headings divide the document into major sections and should:

- Represent the primary divisions of the document
- Cover distinct topic areas within the document scope
- Appear in a logical sequence for the document type
- Typically appear in the table of contents

**Example**:
```markdown
## 1. Introduction
## 2. Authentication Methods
## 3. Implementation Guide
## 4. Security Considerations
## 5. Troubleshooting
```

### 3.3 H3: Subsections

H3 headings divide major sections into subsections and should:

- Represent logical subdivisions of a major section
- Cover specific aspects of the parent topic
- Maintain clear relationships to the parent section
- May appear in the table of contents depending on document length

**Example**:
```markdown
## 2. Authentication Methods

### 2.1 API Keys
### 2.2 OAuth 2.0
### 2.3 JWT Authentication
```

### 3.4 H4: Component Sections

H4 headings divide subsections into more specific components and should:

- Represent detailed aspects of a subsection
- Cover specific features, options, or considerations
- Maintain clear relationships to the parent subsection
- Typically excluded from table of contents for shorter documents

**Example**:
```markdown
### 2.2 OAuth 2.0

#### 2.2.1 Authorization Code Flow
#### 2.2.2 Client Credentials Flow
#### 2.2.3 Implicit Flow
```

### 3.5 H5: Detail Sections

H5 headings represent fine-grained divisions and should:

- Cover highly specific aspects of a component
- Typically address single concepts or elements
- Used sparingly for complex or technical content
- Excluded from table of contents in most cases

**Example**:
```markdown
#### 2.2.1 Authorization Code Flow

##### Request Parameters
##### Response Format
##### Error Handling
```

### 3.6 H6: Low-Level Divisions

H6 headings should be used rarely and only when necessary for:

- Extremely detailed documentation
- Complex technical specifications
- Highly structured reference material
- Excluded from table of contents

**Example**:
```markdown
##### Request Parameters

###### Required Parameters
###### Optional Parameters
```

## 4. Heading Structure and Formatting

### 4.1 Heading Format

| Level | Markdown Syntax | HTML Equivalent | UDS Formatting |
|-------|----------------|-----------------|----------------|
| H1 | `# Heading` | `<h1>Heading</h1>` | Bold, largest font size, document title style |
| H2 | `## Heading` | `<h2>Heading</h2>` | Bold, large font size, major section style |
| H3 | `### Heading` | `<h3>Heading</h3>` | Bold, medium font size, subsection style |
| H4 | `#### Heading` | `<h4>Heading</h4>` | Bold, small-medium font size, component style |
| H5 | `##### Heading` | `<h5>Heading</h5>` | Bold, small font size, detail style |
| H6 | `###### Heading` | `<h6>Heading</h6>` | Bold italic, small font size, lowest division style |

### 4.2 Section Numbering

Section numbering should follow these guidelines:

- **When to use numbering**:
  - Technical documentation
  - Specifications
  - Procedural content
  - Reference material

- **When to avoid numbering**:
  - Blog-style content
  - Marketing material
  - Frequently updated content
  - Simple documentation

- **Numbering format**:
  - Use hierarchical decimal format (1, 1.1, 1.1.1)
  - Include numbering in the heading text
  - Align numbering depth with heading levels
  - Maintain consistent usage across similar documents

**Example**:
```markdown
# API Documentation

## 1. Introduction
### 1.1 Purpose
### 1.2 Audience

## 2. Authentication
### 2.1 Methods
#### 2.1.1 API Keys
#### 2.1.2 OAuth
```

### 4.3 Capitalization

Use title case for all headings:

- Capitalize the first and last words
- Capitalize all nouns, pronouns, adjectives, verbs, adverbs, and subordinate conjunctions
- Lowercase articles (a, an, the), coordinating conjunctions (and, but, or, for), and prepositions with fewer than five letters

**Examples**:
- Correct: "Authentication Methods and Security Considerations"
- Incorrect: "Authentication methods and security considerations"
- Correct: "Working with the API"
- Incorrect: "Working With The API"

### 4.4 Punctuation

Follow these punctuation guidelines for headings:

- Omit ending punctuation (periods, question marks, exclamation points)
- Use colons to introduce lists or explanations when necessary
- Use question format for FAQ-style headings
- Avoid semicolons and complex punctuation

**Examples**:
- Correct: "Authentication Methods"
- Incorrect: "Authentication Methods."
- Correct: "API Keys: Creation and Management"
- Correct: "How to Generate API Keys"

### 4.5 Length Guidelines

| Heading Level | Optimal Length | Maximum Length |
|---------------|----------------|----------------|
| H1 | 3-7 words | 10 words |
| H2 | 2-7 words | 12 words |
| H3 | 2-10 words | 15 words |
| H4-H6 | 2-12 words | 20 words |

Headings should be:
- Concise but descriptive
- Specific rather than general
- Clear without additional context
- Meaningful when viewed in navigation

## 5. Heading Hierarchy Implementation

### 5.1 Markdown Implementation

Standard markdown heading implementation:

```markdown
# H1: Document Title

## H2: Major Section

### H3: Subsection

#### H4: Component Section

##### H5: Detail Section

###### H6: Low-Level Division
```

### 5.2 HTML Implementation

HTML heading implementation:

```html
<h1>H1: Document Title</h1>

<h2>H2: Major Section</h2>

<h3>H3: Subsection</h3>

<h4>H4: Component Section</h4>

<h5>H5: Detail Section</h5>

<h6>H6: Low-Level Division</h6>
```

### 5.3 Heading IDs and Anchors

For linking and navigation, implement heading IDs:

**Markdown**:
```markdown
## Introduction {#introduction}
```

**HTML**:
```html
<h2 id="introduction">Introduction</h2>
```

**ID formatting guidelines**:
- Use lowercase letters
- Replace spaces with hyphens
- Remove special characters
- Keep IDs short but descriptive
- Ensure IDs are unique within the document

**Example implementation**:
```markdown
## 2.1 Authentication Methods {#authentication-methods}

See the [Authentication Methods](#authentication-methods) section for details.
```

## 6. Document-Specific Heading Patterns

### 6.1 User Documentation Heading Pattern

```markdown
# [Product/Feature Name] User Guide

## Introduction
- Purpose
- Intended audience
- Prerequisites

## Getting Started
- Installation
- Basic setup
- First-time use

## Basic Features
- Feature 1
- Feature 2
- Feature 3

## Advanced Features
- Advanced feature 1
- Advanced feature 2

## Troubleshooting
- Common issues
- Solutions

## Reference
- Glossary
- Additional resources
```

### 6.2 Technical Specification Heading Pattern

```markdown
# [Component/System] Technical Specification

## 1. Introduction
### 1.1 Purpose
### 1.2 Scope
### 1.3 Definitions and Terminology

## 2. System Overview
### 2.1 Architecture
### 2.2 Components
### 2.3 Interfaces

## 3. Functional Requirements
### 3.1 Requirement Category 1
#### 3.1.1 Requirement 1
#### 3.1.2 Requirement 2
### 3.2 Requirement Category 2

## 4. Non-Functional Requirements
### 4.1 Performance
### 4.2 Security
### 4.3 Scalability

## 5. Implementation Details
## 6. Deployment Considerations
## 7. Testing Approach
## 8. References
```

### 6.3 API Documentation Heading Pattern

```markdown
# [API Name] Documentation

## Overview
- Introduction
- Authentication
- Base URL

## Endpoints
### Resource 1
#### Get Resource
#### Create Resource
#### Update Resource
#### Delete Resource

### Resource 2
#### Get Resource
#### Create Resource

## Data Models
### Model 1
### Model 2

## Error Handling
- Error codes
- Error messages

## Examples
- Example 1
- Example 2

## SDKs and Libraries
## Rate Limiting
## Versioning
```

### 6.4 Tutorial Heading Pattern

```markdown
# How to [Accomplish Task] with [Product/Tool]

## Introduction
- Overview
- Prerequisites
- What you'll learn

## Setup
- Environment setup
- Required tools
- Configuration

## Step 1: [First Task]
- Detailed instructions
- Code examples
- Expected result

## Step 2: [Second Task]
- Detailed instructions
- Code examples
- Expected result

## Step 3: [Third Task]
... additional steps as needed

## Summary
- Review
- Next steps
- Additional resources
```

## 7. Accessibility Considerations

### 7.1 Semantic Structure

Proper heading hierarchy is essential for accessibility:

- Headings create a semantic outline of the document
- Screen readers use headings for navigation
- Users can jump between heading levels
- Semantic structure aids comprehension for all users

### 7.2 Screen Reader Compatibility

Ensure headings are screen reader-friendly:

- Use proper heading elements (h1-h6) rather than styled text
- Follow sequential order without skipping levels
- Include descriptive text that makes sense out of context
- Avoid using headings solely for visual styling

### 7.3 Visual Differentiation

Ensure headings are visually distinguishable:

- Use consistent visual hierarchy for different heading levels
- Maintain sufficient contrast with surrounding text
- Use size, weight, and spacing to indicate importance
- Ensure headings are readable at different screen sizes

## 8. Common Heading Anti-patterns

| Anti-pattern | Problem | Solution |
|--------------|---------|----------|
| **Skipping levels** | Breaks logical hierarchy, confuses assistive tech | Use sequential heading levels (H1 → H2 → H3) |
| **Heading soup** | Too many headings dilute structure | Use headings sparingly for meaningful divisions |
| **Style-only headings** | No semantic structure for accessibility | Use actual heading elements, not just styled text |
| **Overly long headings** | Harder to scan and navigate | Keep headings concise and descriptive |
| **Inconsistent formatting** | Creates visual confusion | Apply consistent capitalization and style |
| **Empty headings** | Provide no navigational value | Ensure all headings have descriptive content |
| **Single subsections** | Creates unnecessary divisions | Use at least two subsections or none |
| **Excessive nesting** | Creates overly complex structure | Limit nesting to 3-4 levels in most documents |

## 9. Heading Quality Checklist

Before finalizing documentation, verify that all headings meet these quality standards:

✓ Document uses exactly one H1 as the title
✓ Heading levels progress sequentially without skipping
✓ All headings are descriptive and indicate content
✓ Heading formatting is consistent throughout
✓ Section numbering (if used) aligns with heading levels
✓ Capitalization and punctuation follow standards
✓ Headings are concise and scannable
✓ Heading structure is appropriate for document type
✓ Headings create logical content divisions
✓ Related content is grouped under appropriate headings

## 10. Advanced Heading Techniques

### 10.1 Progressive Disclosure

For complex documentation, consider implementing progressive disclosure:

- Organize content from general to specific
- Group detailed information under expandable sections
- Use clear parent-child relationships in heading hierarchy
- Enable users to navigate to their required level of detail

### 10.2 In-Page Navigation

Enhance navigation within long documents:

- Add "Back to top" links after major sections
- Create mini-tables of contents for complex sections
- Implement "jump to section" menus for long pages
- Use anchor links to specific headings

### 10.3 Cross-Document Structure

Maintain consistent structure across document sets:

- Use parallel headings for similar content across documents
- Maintain consistent numbering schemes
- Align heading patterns for related document types
- Create relationships between documents through consistent hierarchy

## 11. Implementation Guidelines

### 11.1 Converting Existing Documentation

When updating existing documentation to meet heading standards:

1. Identify the current heading structure
2. Map to the closest UDS heading pattern
3. Adjust heading levels to follow sequential hierarchy
4. Update formatting to match UDS standards
5. Verify all cross-references remain valid
6. Test navigation and accessibility

### 11.2 Integration with Template System

Implement heading hierarchy in document templates:

- Include appropriate heading levels in standard templates
- Document heading requirements in template instructions
- Provide examples of proper heading use
- Implement heading styles in CSS or formatting guides

### 11.3 Automated Validation

Consider implementing automated checks:

- Verify sequential heading order
- Check for proper heading formatting
- Ensure heading IDs are unique
- Validate cross-references to headings
- Test accessibility compliance

## Conclusion

A well-structured heading hierarchy is fundamental to effective technical documentation. By following these comprehensive standards for heading implementation, documentation teams can create navigable, accessible, and user-friendly content that improves information discovery and comprehension.

Consistent heading hierarchy creates a predictable experience across all documentation, helping users quickly find information and understand document structure. When implemented effectively, heading structure becomes an invisible aid that significantly enhances the usability of all documentation.

---
Copyright © 2025 |  All rights reserved.
Last updated: 2025-03-22 | Assisted by AI
---
