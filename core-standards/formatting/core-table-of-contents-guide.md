---
title: Core Table Of Contents Guide
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

# Table of Contents Standards

## 1. Introduction

A well-structured Table of Contents (TOC) is essential for navigation, content discovery, and establishing document hierarchy. This guide establishes comprehensive standards for implementing consistent, effective tables of contents across all documentation within the Universal Documentation Standards (UDS) framework.

## 2. Core Principles

### 2.1 Purpose of Table of Contents

The Table of Contents serves multiple critical functions:

- **Navigation**: Enables quick access to specific sections
- **Structure overview**: Provides a map of document organization
- **Hierarchy visualization**: Illustrates relationships between content sections
- **Topic discovery**: Facilitates finding relevant information
- **Progress tracking**: Helps readers understand their position in the document

### 2.2 When to Include a Table of Contents

| Document Type | TOC Requirement | Threshold |
|---------------|-----------------|-----------|
| Technical specifications | Required | All lengths |
| User guides | Required | All lengths |
| API documentation | Required | All lengths |
| Reference documents | Required | All lengths |
| Tutorials | Required | > 3 sections |
| How-to guides | Optional | > 4 sections |
| Release notes | Optional | > 5 sections |
| Short articles | Not required | < 3 sections |

### 2.3 General Principles

All Tables of Contents should:

- Accurately reflect document structure
- Use consistent formatting across similar documents
- Include all significant sections
- Provide clear hierarchy indication
- Link directly to referenced sections
- Be automatically generated when possible

## 3. TOC Structure and Formatting

### 3.1 Basic Structure

```markdown
# Document Title

## Table of Contents
- [1. First Major Section](#1-first-major-section)
  - [1.1 Subsection](#11-subsection)
  - [1.2 Subsection](#12-subsection)
- [2. Second Major Section](#2-second-major-section)
  - [2.1 Subsection](#21-subsection)
  - [2.2 Subsection](#22-subsection)
- [3. Third Major Section](#3-third-major-section)
- [4. References](#references)
- [5. Appendices](#appendices)

[Document content starts here...]
```

### 3.2 Placement

The Table of Contents should appear:

- After the document header
- Before the main content
- After any executive summary or abstract
- On its own dedicated page for very long documents (PDF/print)

### 3.3 Depth Recommendations

| Document Type | Recommended Depth | Maximum Depth |
|---------------|-------------------|---------------|
| Technical documentation | 3 levels | 4 levels |
| User guides | 2 levels | 3 levels |
| API documentation | 2 levels | 3 levels |
| Short articles | 1 level | 2 levels |
| Comprehensive manuals | 3 levels | 4 levels |

### 3.4 Section Numbering

Section numbering in TOC should:

- Use hierarchical decimal notation (1, 1.1, 1.1.1)
- Align with document headings
- Be consistent throughout the document
- Skip the TOC section itself (don't number the TOC)
- Be omitted for appendices (use letters instead: Appendix A, B, C)

### 3.5 Visual Formatting

| Element | Formatting | Example |
|---------|------------|---------|
| TOC heading | Use H2 (##) | `## Table of Contents` |
| Main sections | Bold or level 1 indent | `- **1. Introduction**` or `- [1. Introduction](#introduction)` |
| Subsections | Level 2 indent | `  - [1.1 Background](#background)` |
| Sub-subsections | Level 3 indent | `    - [1.1.1 Historical Context](#historical-context)` |
| Indentation | 2 spaces per level | `- Level 1`<br>`  - Level 2`<br>`    - Level 3` |

## 4. Implementation Types

### 4.1 Markdown TOC

Standard markdown implementation for most documentation:

```markdown
## Table of Contents
- [1. Introduction](#1-introduction)
  - [1.1 Purpose](#11-purpose)
  - [1.2 Scope](#12-scope)
- [2. Architecture](#2-architecture)
  - [2.1 Overview](#21-overview)
  - [2.2 Components](#22-components)
- [3. Implementation](#3-implementation)
```

### 4.2 HTML TOC

Enhanced HTML implementation for web-based documentation:

```html
<nav class="toc">
  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#introduction">1. Introduction</a>
      <ul>
        <li><a href="#purpose">1.1 Purpose</a></li>
        <li><a href="#scope">1.2 Scope</a></li>
      </ul>
    </li>
    <li><a href="#architecture">2. Architecture</a>
      <ul>
        <li><a href="#overview">2.1 Overview</a></li>
        <li><a href="#components">2.2 Components</a></li>
      </ul>
    </li>
    <li><a href="#implementation">3. Implementation</a></li>
  </ul>
</nav>
```

### 4.3 Interactive TOC

For longer documents in web formats, consider an interactive TOC:

- Collapsible sections for better space management
- Sticky/fixed position for constant accessibility
- Current section highlighting for reader orientation
- Expand/collapse all functionality

```html
<nav class="toc toc-interactive">
  <h2>Table of Contents <button class="toc-toggle-all">Expand All</button></h2>
  <ul>
    <li class="toc-active"><a href="#introduction">1. Introduction</a>
      <ul>
        <li><a href="#purpose">1.1 Purpose</a></li>
        <li><a href="#scope">1.2 Scope</a></li>
      </ul>
    </li>
    <!-- Additional sections -->
  </ul>
</nav>
```

### 4.4 Multi-page TOC

For documentation split across multiple files:

```markdown
## Table of Contents
- [1. Introduction](./introduction.md)
  - [1.1 Purpose](./introduction.md#purpose)
  - [1.2 Scope](./introduction.md#scope)
- [2. Architecture](./architecture.md)
  - [2.1 Overview](./architecture.md#overview)
  - [2.2 Components](./architecture.md#components)
- [3. API Reference](./api-reference.md)
```

## 5. Special TOC Types

### 5.1 Mini TOC

For long sections, consider including a mini-TOC at the beginning:

```markdown
## 2. System Architecture

**In this section:**
- [2.1 Overview](#21-overview)
- [2.2 Components](#22-components)
- [2.3 Interactions](#23-interactions)
- [2.4 Data Flow](#24-data-flow)

[Section content begins here...]
```

### 5.2 API TOC

Specialized TOC for API documentation:

```markdown
## API Reference

### Endpoints
- [Authentication](#authentication)
  - [POST /auth/login](#post-authlogin)
  - [POST /auth/refresh](#post-authrefresh)
  - [POST /auth/logout](#post-authlogout)
- [Users](#users)
  - [GET /users](#get-users)
  - [POST /users](#post-users)
  - [GET /users/{id}](#get-usersid)

### Models
- [User](#user-model)
- [Authentication](#authentication-model)
- [Error](#error-model)
```

### 5.3 Tutorial TOC

Progress-oriented TOC for tutorials:

```markdown
## Tutorial: Building Your First API

1. [Setting Up Your Environment](#1-setting-up-your-environment) (5 min)
2. [Creating the Project Structure](#2-creating-the-project-structure) (10 min)
3. [Implementing Core Functionality](#3-implementing-core-functionality) (15 min)
4. [Testing Your API](#4-testing-your-api) (10 min)
5. [Deploying to Production](#5-deploying-to-production) (10 min)

Total time: Approximately 50 minutes
```

## 6. TOC Generation

### 6.1 Automated Generation

Markdown TOCs should ideally be automatically generated:

- Maintain heading IDs that align with TOC links
- Update TOC when document structure changes
- Use appropriate generation tools for your documentation system

#### 6.1.1 Common TOC Generation Tools

| Platform | Recommended Tools |
|----------|-------------------|
| VS Code | Markdown All in One extension |
| GitHub | Built-in TOC generation for README files |
| GitLab | Built-in TOC generation for markdown |
| DocFX | Automatic TOC generation |
| MkDocs | Automatic TOC generation |
| Docusaurus | Automatic TOC generation |

#### 6.1.2 Sample Generation Command

```bash
# Using markdown-toc CLI tool
markdown-toc -i document.md
```

### 6.2 Manual TOC Creation

If automatic generation is not available:

- Maintain a consistent heading ID format (lowercase, hyphens for spaces)
- Check all links when updating document structure
- Consider developing scripts for TOC regeneration
- Verify TOC accuracy during document review process

## 7. Accessibility Considerations

### 7.1 Screen Reader Compatibility

Ensure TOC is accessible to screen readers:

- Use proper HTML semantic elements (nav, ul, li) for HTML TOCs
- Ensure proper heading structure for the TOC itself
- Include a "Skip to content" link for web-based documentation
- Test TOC navigation with screen readers

### 7.2 Keyboard Navigation

TOC should be fully navigable via keyboard:

- Ensure all TOC links are keyboard focusable
- Provide visible focus indicators
- Test keyboard-only navigation through the TOC
- For interactive TOCs, ensure toggle controls are keyboard accessible

## 8. TOC for Different Document Types

### 8.1 Technical Specification TOC

```markdown
## Table of Contents
- [1. Introduction](#1-introduction)
  - [1.1 Purpose](#11-purpose)
  - [1.2 Scope](#12-scope)
  - [1.3 Definitions](#13-definitions)
- [2. System Overview](#2-system-overview)
  - [2.1 Architecture](#21-architecture)
  - [2.2 Components](#22-components)
- [3. Functional Requirements](#3-functional-requirements)
  - [3.1 User Management](#31-user-management)
  - [3.2 Data Processing](#32-data-processing)
- [4. Non-Functional Requirements](#4-non-functional-requirements)
  - [4.1 Performance](#41-performance)
  - [4.2 Security](#42-security)
- [5. Implementation Details](#5-implementation-details)
- [6. Testing Approach](#6-testing-approach)
- [7. Deployment](#7-deployment)
- [8. References](#8-references)
- [Appendix A: Data Models](#appendix-a-data-models)
- [Appendix B: API Endpoints](#appendix-b-api-endpoints)
```

### 8.2 User Guide TOC

```markdown
## Table of Contents
- [1. Introduction](#1-introduction)
  - [1.1 About This Guide](#11-about-this-guide)
  - [1.2 System Requirements](#12-system-requirements)
- [2. Getting Started](#2-getting-started)
  - [2.1 Installation](#21-installation)
  - [2.2 Initial Setup](#22-initial-setup)
  - [2.3 Quick Start](#23-quick-start)
- [3. Basic Features](#3-basic-features)
  - [3.1 Dashboard](#31-dashboard)
  - [3.2 User Profile](#32-user-profile)
- [4. Advanced Features](#4-advanced-features)
  - [4.1 Automation](#41-automation)
  - [4.2 Reporting](#42-reporting)
- [5. Troubleshooting](#5-troubleshooting)
  - [5.1 Common Issues](#51-common-issues)
  - [5.2 Error Messages](#52-error-messages)
- [6. FAQ](#6-faq)
- [7. Glossary](#7-glossary)
```

### 8.3 API Documentation TOC

```markdown
## Table of Contents
- [1. Introduction](#1-introduction)
  - [1.1 Overview](#11-overview)
  - [1.2 Authentication](#12-authentication)
- [2. Endpoints](#2-endpoints)
  - [2.1 Users](#21-users)
    - [2.1.1 List Users](#211-list-users)
    - [2.1.2 Get User](#212-get-user)
    - [2.1.3 Create User](#213-create-user)
  - [2.2 Products](#22-products)
    - [2.2.1 List Products](#221-list-products)
    - [2.2.2 Get Product](#222-get-product)
- [3. Models](#3-models)
  - [3.1 User](#31-user)
  - [3.2 Product](#32-product)
- [4. Errors](#4-errors)
  - [4.1 Error Codes](#41-error-codes)
  - [4.2 Error Handling](#42-error-handling)
- [5. Rate Limiting](#5-rate-limiting)
- [6. Versioning](#6-versioning)
- [7. SDK Examples](#7-sdk-examples)
```

## 9. Common TOC Issues and Solutions

| Issue | Solution |
|-------|----------|
| **Broken links** | Use automated TOC generation and validation tools |
| **Outdated TOC** | Establish process to update TOC when content changes |
| **Inconsistent formatting** | Create and use TOC templates for each document type |
| **Excessive depth** | Limit TOC to 3-4 levels and consider mini-TOCs for complex sections |
| **Missing sections** | Use automated validation to ensure all headings are included |
| **Poor link naming** | Ensure heading text is descriptive and follows naming conventions |
| **Long TOCs without structure** | Group related items and use visual formatting to indicate relationships |

## 10. TOC Testing and Validation

### 10.1 Link Validation

- Verify all TOC links resolve to correct document sections
- Test cross-document links in multi-page documentation
- Validate fragment identifiers (#section-ids) match heading IDs
- Check for orphaned or duplicate heading IDs

### 10.2 Structural Validation

- Ensure TOC accurately reflects document structure
- Verify heading levels are consistently represented
- Check for missing sections or headings
- Validate section numbering is sequential and correct

### 10.3 Visual Validation

- Confirm TOC formatting is consistent and readable
- Verify indentation properly represents hierarchy
- Ensure adequate spacing between TOC items
- Test TOC appearance across different viewing formats

## 11. Implementation Checklist

Before finalizing documentation, verify that the Table of Contents:

✓ Includes all significant sections and subsections  
✓ Accurately reflects document structure and hierarchy  
✓ Uses consistent formatting and indentation  
✓ Contains functioning links to all referenced sections  
✓ Follows appropriate depth guidelines for the document type  
✓ Includes proper section numbering (if applicable)  
✓ Is positioned correctly within the document  
✓ Meets accessibility requirements  
✓ Has been tested across intended viewing platforms  
✓ Follows UDS formatting standards consistently  

## Conclusion

A well-implemented Table of Contents significantly enhances document usability by providing clear navigation paths and structural overview. By following these comprehensive standards for TOC creation and formatting, documentation teams can create consistent, accessible, and effective navigation systems across all UDS documentation.

---
Copyright © 2025 |  All rights reserved.  
Last updated: 2025-03-22 | Assisted by AI
---