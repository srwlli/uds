---
title: Core Header Standards
version: 1.0.0
date: 2025-10-14
status: APPROVED
authors:
  - UDS Documentation Team
classification: INTERNAL
keywords:
  - header
  - frontmatter
  - metadata
  - documentation
  - standards
tags:
  - core-standards
  - structure
  - metadata
---

## Table of Contents
- [1. Introduction](#1-introduction)
- [2. Header Purpose and Function](#2-header-purpose-and-function)
- [3. Standard Header Structure](#3-standard-header-structure)
  - [3.1 Basic Header Components](#31-basic-header-components)
  - [3.2 Extended Header Components](#32-extended-header-components)
- [4. Header Formatting Guidelines](#4-header-formatting-guidelines)
  - [4.1 Visual Structure](#41-visual-structure)
  - [4.2 Typography and Syntax](#42-typography-and-syntax)
  - [4.3 Heading Levels](#43-heading-levels)
- [5. Document Types and Headers](#5-document-types-and-headers)
  - [5.1 Technical Guides and References](#51-technical-guides-and-references)
  - [5.2 Specifications and Standards](#52-specifications-and-standards)
  - [5.3 Process and Tutorial Documents](#53-process-and-tutorial-documents)
- [6. Header Metadata Standards](#6-header-metadata-standards)
  - [6.1 Version Numbering](#61-version-numbering)
  - [6.2 Document Status Indicators](#62-document-status-indicators)
  - [6.3 Classification Levels](#63-classification-levels)
- [7. Implementation Guidelines](#7-implementation-guidelines)
  - [7.1 Template Usage](#71-template-usage)
  - [7.2 Automation Considerations](#72-automation-considerations)
  - [7.3 Common Issues and Solutions](#73-common-issues-and-solutions)
- [8. Header Examples](#8-header-examples)
  - [8.1 Standard Header Example](#81-standard-header-example)
  - [8.2 Extended Header Example](#82-extended-header-example)
  - [8.3 Minimal Header Example](#83-minimal-header-example)

## 1. Introduction

Document headers provide essential identification and contextual information for all documentation within the Core Documentation System. This guide establishes comprehensive standards for creating consistent, informative headers that enhance document usability, organization, and traceability.

A well-structured header immediately communicates document purpose, status, and key metadata to readers, while providing critical information for document management, search, and classification. Consistent header implementation across the documentation ecosystem significantly improves user experience and organizational knowledge management.

## 2. Header Purpose and Function

The document header serves several critical functions:

- **Identification**: Establishes the document's title, type, and version
- **Context**: Provides information about document status and classification
- **Attribution**: Records authorship and creation details
- **Navigation**: Helps users find and reference the document
- **Management**: Supports document lifecycle and governance processes
- **Searchability**: Provides metadata for effective content discovery

A properly implemented header ensures documents can be effectively cataloged, retrieved, and managed throughout their lifecycle.

## 3. Standard Header Structure

### 3.1 Basic Header Components

The standard Core document header includes the following required components:

```markdown
---
# Document Title
#### Document Type | Version X.Y.Z
#### Created with AI assistance
---
```

| Component | Description | Required |
|-----------|-------------|----------|
| Horizontal Rules | Triple dashes that enclose the header section | Yes |
| Document Title | H1 heading identifying the document subject | Yes |
| Document Type | Type classification (Technical Guide, Reference, etc.) | Yes |
| Version | Document version using semantic versioning (X.Y.Z) | Yes |
| Creation Attribution | Creation method or authorship information | Yes |

### 3.2 Extended Header Components

For more formal or compliance-related documentation, additional metadata may be included:

```markdown
---
# Document Title
#### Document Type | Version X.Y.Z
#### Created with AI assistance
**Last Updated:** YYYY-MM-DD
**Status:** APPROVED
**Classification:** INTERNAL
#### Document Metadata
- **Author:** Primary Author
- **Department:** Department/Team
- **Reviewers:** List of Reviewers
- **Related Documents:** 
  - Link to related doc 1
  - Link to related doc 2
---
```

| Component | Description | Required |
|-----------|-------------|----------|
| Last Updated | Date of most recent revision (ISO format: YYYY-MM-DD) | Optional |
| Status | Document lifecycle status (DRAFT, REVIEW, APPROVED, DEPRECATED) | Optional |
| Classification | Access level designation (PUBLIC, INTERNAL, CONFIDENTIAL) | Optional |
| Author | Primary document creator or maintainer | Optional |
| Department | Organizational unit responsible for the document | Optional |
| Reviewers | Individuals who have reviewed the document | Optional |
| Related Documents | Links to associated documentation | Optional |

## 4. Header Formatting Guidelines

### 4.1 Visual Structure

Document headers follow these structural rules:

- **Boundary**: The entire header is enclosed by horizontal rules (triple dashes `---`)
- **Separation**: A clear visual distinction exists between the header and content
- **Consistency**: Headers maintain consistent formatting across all documents
- **Alignment**: All header elements are left-aligned
- **Spacing**: Single line breaks separate header components

### 4.2 Typography and Syntax

Header elements use specific formatting conventions:

- **Document Title**: Uses Title Case (capitalize major words)
- **Document Type**: Uses Title Case
- **Version**: Follows semantic versioning (X.Y.Z format)
- **Dates**: Use ISO 8601 format (YYYY-MM-DD)
- **Status and Classification**: Use ALL CAPS for visual distinction
- **Metadata Labels**: Use Bold formatting (double asterisks)
- **Related Documents**: Use bullet points for multiple items

### 4.3 Heading Levels

Header components use specific heading levels in Markdown:

- **Document Title**: H1 heading (single #)
- **Document Type/Version**: H4 heading (####)
- **Creation Attribution**: H4 heading (####)
- **Document Metadata**: H4 heading (####)

This structure ensures proper visual hierarchy while maintaining semantic meaning.

## 5. Document Types and Headers

### 5.1 Technical Guides and References

Technical guides and references use standard headers with emphasis on version and last updated information:

```markdown
---
# API Authentication Guide
#### Technical Reference | V2.1.0
#### Created with AI assistance
**Last Updated:** 2025-03-15
---
```

### 5.2 Specifications and Standards

Specifications and standards documentation emphasizes formal approval status and classifications:

```markdown
---
# Database Schema Specification
#### Technical Specification | V1.3.2
#### Created with AI assistance
**Last Updated:** 2025-02-10
**Status:** APPROVED
**Classification:** INTERNAL
---
```

### 5.3 Process and Tutorial Documents

Process documentation and tutorials emphasize audience and prerequisites:

```markdown
---
# Continuous Integration Workflow
#### Process Guide | V2.0.0
#### Created with AI assistance
**Audience:** Development Teams
**Prerequisites:** Git, Jenkins
---
```

## 6. Header Metadata Standards

### 6.1 Version Numbering

Version numbers follow semantic versioning principles:

- **Major version (X)**: Incremented for incompatible changes
- **Minor version (Y)**: Incremented for backward-compatible additions
- **Patch version (Z)**: Incremented for backward-compatible fixes

Examples:
- `V1.0.0`: Initial release
- `V1.1.0`: Added new sections or content
- `V1.1.1`: Fixed typos or minor errors
- `V2.0.0`: Major restructuring or content changes

### 6.2 Document Status Indicators

Status indicators follow a standardized lifecycle:

| Status | Description | When to Use |
|--------|-------------|-------------|
| DRAFT | Initial creation or significant revision | During document creation before formal review |
| REVIEW | Currently in review process | When document is being evaluated by reviewers |
| APPROVED | Officially approved version | After formal acceptance by authorized parties |
| DEPRECATED | No longer current, kept for reference | When replaced by newer documentation |

### 6.3 Classification Levels

Classification levels indicate access and sensitivity:

| Level | Description | Handling Requirements |
|-------|-------------|----------------------|
| PUBLIC | Can be shared without restrictions | General distribution permitted |
| INTERNAL | For organization-wide use only | No external distribution |
| CONFIDENTIAL | Sensitive information, limited distribution | Restricted access, special handling |
| RESTRICTED | Highly sensitive, strictly controlled | Strict access controls, audit trail required |

## 7. Implementation Guidelines

### 7.1 Template Usage

Use the appropriate template based on document formality:

- **Standard Template**: For most routine documentation
- **Extended Template**: For formal, compliance-related, or governance documentation
- **Custom Templates**: May be developed for specific document types while maintaining core elements

Templates should be available in the documentation repository or content management system.

### 7.2 Automation Considerations

Consider implementing automation to support header consistency:

- Use document generation tools to pre-populate headers
- Implement validation tools to verify header compliance
- Automate version updates and last modified dates
- Create linting rules for header format verification

### 7.3 Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Missing required components | Use validation tools to verify completeness |
| Inconsistent formatting | Use templates and style guides |
| Outdated metadata | Implement update reminders or automated updates |
| Unclear document type | Provide a standardized list of document types |
| Header too complex/simple | Match header complexity to document formality |

## 8. Header Examples

### 8.1 Standard Header Example

Basic header suitable for most documentation:

```markdown
---
# Authentication Service API
#### Technical Reference | V2.1.0
#### Created with AI assistance
---
```

### 8.2 Extended Header Example

Comprehensive header for formal documentation:

```markdown
---
# System Architecture Overview
#### Technical Specification | V1.3.2
#### Created with AI assistance
**Last Updated:** 2025-01-15
**Status:** APPROVED
**Classification:** INTERNAL
#### Document Metadata
- **Author:** Architecture Team
- **Department:** Engineering
- **Reviewers:** Senior Architects, Security Team
- **Related Documents:** 
  - [Security Framework](./security-framework.md)
  - [Deployment Guide](./deployment-guide.md)
---
```

### 8.3 Minimal Header Example

Simplified header for informal or brief documentation:

```markdown
---
# Daily Standup Guide
#### Process Guide | V1.0.0
#### Created with AI assistance
---
```

## Conclusion

Consistent implementation of document headers significantly enhances the usability, management, and professional appearance of documentation. By following these Core header standards, documentation teams ensure that all documents provide appropriate context and metadata while maintaining a cohesive visual identity across the documentation ecosystem.

Headers serve as the entry point to documentation and establish expectations for what follows. A well-crafted header not only provides critical information but also demonstrates attention to detail and commitment to documentation quality.

---
###### Copyright © 2025 |  All rights reserved.  
###### Last updated: 2025-03-22 | Assisted by AI
---