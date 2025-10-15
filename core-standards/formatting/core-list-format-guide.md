---
title: Core List Format Guide
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

# UDS List Formatting Standards: Comprehensive Guide

## 1. Introduction

Lists are fundamental structural elements that organize information for improved readability, scanability, and comprehension. This document establishes comprehensive standards for implementing consistent, effective lists across all documentation within the Universal Documentation Standards (UDS) framework.

## 2. List Types and Purposes

### 2.1 Unordered Lists

**Purpose**: Present collections of related items where sequence is not significant.

**Use Cases**:
- Feature enumerations
- Component descriptions
- Option listings
- Characteristic collections
- Supporting points

**Visual Indicators**: Bullets or other non-numerical markers.

### 2.2 Ordered Lists

**Purpose**: Present sequences where order, priority, or chronology is meaningful.

**Use Cases**:
- Step-by-step instructions
- Sequential processes
- Ranked items
- Hierarchical procedures
- Prioritized options

**Visual Indicators**: Numbers, letters, or other sequential markers.

### 2.3 Definition Lists

**Purpose**: Present term-definition pairs or concept explanations.

**Use Cases**:
- Glossary entries
- Parameter descriptions
- Configuration option explanations
- Field definitions
- Command syntax descriptions

**Visual Indicators**: Term-definition layout with clear visual distinction.

### 2.4 Checklist Lists

**Purpose**: Present actionable items requiring completion or verification.

**Use Cases**:
- Verification procedures
- Pre-flight checks
- Implementation requirements
- Configuration validations
- Quality assurance steps

**Visual Indicators**: Checkboxes or completion markers.

### 2.5 Nested Lists

**Purpose**: Present hierarchical information with parent-child relationships.

**Use Cases**:
- Multi-level procedures
- Hierarchical structures
- Dependency relationships
- Category/subcategory organizations
- Detailed breakdowns of complex items

**Visual Indicators**: Multiple levels of indentation with appropriate markers for each level.

## 3. General List Formatting Requirements

### 3.1 List Introduction

Each list should be preceded by:

1. An introductory sentence or phrase that:
   - Explains the list's purpose or content
   - Establishes context for the listed items
   - Ends with a colon when directly introducing the list
   - Maintains grammatical connection with list items

2. Appropriate spacing:
   - One blank line before the introduction
   - No blank line between introduction and first list item

### 3.2 List Item Formatting

All list items must adhere to the following standards:

#### 3.2.1 Capitalization

| List Type | Capitalization Rule | Example |
|-----------|---------------------|---------|
| Unordered, simple items | Sentence case | • Configuration options |
| Unordered, complex items | Sentence case | • The system performs automatic backups according to the schedule. |
| Ordered, procedural steps | Sentence case | 1. Enter your credentials. |
| Definition terms | Title case for terms | API Token: A security credential used for authentication. |
| Checklist items | Sentence case | ☐ Verify database connections. |

#### 3.2.2 Punctuation

| List Type | Punctuation Rule | Example |
|-----------|-----------------|---------|
| Brief items (1-3 words) | No end punctuation | • User permissions<br>• Database settings<br>• API endpoints |
| Sentence fragments | No end punctuation | • Configuring user access<br>• Setting up the environment<br>• Deploying to production |
| Complete sentences | End punctuation (period) | • The system will automatically log you out after 30 minutes of inactivity.<br>• Users cannot modify their own permission levels. |
| Mixed items | Consistent within list | Either all items have punctuation or none do |
| Definition lists | Colon after term, period after definition | API Token: A security credential used for authentication. |

#### 3.2.3 Grammatical Parallelism

All items within a list must follow parallel construction:

| Construction Type | Correct Example | Incorrect Example |
|-------------------|-----------------|-------------------|
| Verb-led items | • Configure the database<br>• Initialize the system<br>• Verify the connection | • Configure the database<br>• System initialization<br>• The connection should be verified |
| Noun phrases | • User permissions<br>• System settings<br>• Network configuration | • User permissions<br>• Configure the system<br>• Network setup is required |
| Full sentences | • The system will log all actions.<br>• Users can modify their profiles.<br>• Administrators have full access. | • The system will log all actions.<br>• Modifying user profiles.<br>• Full access for administrators. |

#### 3.2.4 List Item Length

| Item Type | Recommended Length | Example |
|-----------|---------------------|---------|
| Simple items | 1-5 words | • User management<br>• System configuration<br>• Network settings |
| Complex items | 1-2 sentences | • User management: Controls access permissions and role assignments for all system users.<br>• System configuration: Defines core operational parameters and feature enablement. |
| Procedural steps | 1-3 sentences | 1. Enter your credentials in the login form. If using SSO, select your identity provider first.<br>2. Verify your identity using two-factor authentication if prompted. |

#### 3.2.5 List Item Spacing

- **Between items**: No blank lines for simple lists; consider blank lines for complex multi-sentence items
- **Within nested items**: No blank lines between parent and child items
- **After the list**: One blank line before resuming regular text

### 3.3 List Markers

#### 3.3.1 Unordered List Markers

| Level | Markdown Marker | HTML Equivalent | Display |
|-------|-----------------|-----------------|---------|
| 1st level | `- ` or `* ` | `<ul><li>` | • Item |
| 2nd level | `  - ` or `  * ` | `<ul><li><ul><li>` | ◦ Item |
| 3rd level | `    - ` or `    * ` | `<ul><li><ul><li><ul><li>` | ▪ Item |

Use consistent markers throughout a document or documentation set.

#### 3.3.2 Ordered List Markers

| List Purpose | Marker Style | Example |
|--------------|--------------|---------|
| Sequential steps | Arabic numerals | 1. First step<br>2. Second step |
| Hierarchical procedures | Multi-level numbering | 1. Main step<br>   1.1 Sub-step<br>   1.2 Sub-step<br>2. Main step |
| Prioritized items | Arabic numerals | 1. Critical<br>2. High<br>3. Medium |
| Sub-procedures | Nested numbers and letters | 1. Main step<br>   a. Sub-step<br>   b. Sub-step<br>2. Main step |

#### 3.3.3 Definition List Markers

In markdown and similar formats:
```markdown
Term
: Definition or explanation of the term.

Another Term
: Definition or explanation of another term.
```

In HTML:
```html
<dl>
  <dt>Term</dt>
  <dd>Definition or explanation of the term.</dd>
  
  <dt>Another Term</dt>
  <dd>Definition or explanation of another term.</dd>
</dl>
```

#### 3.3.4 Checklist Markers

| Status | Markdown Representation | HTML Representation | Visual Display |
|--------|-------------------------|---------------------|----------------|
| Unchecked | `- [ ] Item` | `<input type="checkbox"> Item` | ☐ Item |
| Checked | `- [x] Item` | `<input type="checkbox" checked> Item` | ☑ Item |

### 3.4 Nesting Standards

#### 3.4.1 Nesting Depth

- **Maximum recommended depth**: 3 levels
- **Exceptional cases**: 4 levels maximum when absolutely necessary

#### 3.4.2 Nesting Patterns

| Pattern | Example | Use Case |
|---------|---------|----------|
| Unordered within unordered | • Main item<br>  • Sub-item<br>  • Sub-item | Hierarchical features or components |
| Ordered within ordered | 1. Main step<br>   1.1. Sub-step<br>   1.2. Sub-step | Complex procedures with sub-procedures |
| Ordered within unordered | • Category<br>  1. First item<br>  2. Second item | Categorized procedures |
| Unordered within ordered | 1. Main step<br>   • Important note<br>   • Alternative option | Procedural steps with multiple considerations |
| Definition within unordered | • Term<br>  Definition: Explanation of the term | Feature lists with term definitions |

#### 3.4.3 Nesting Indentation

- **Markdown**: 2 or 4 spaces per level (be consistent)
- **HTML**: Use proper nesting of `<ul>`, `<ol>`, and `<li>` elements
- **Visual display**: Ensure clear visual differentiation between levels

## 4. List Implementation by Document Type

### 4.1 Procedural Documentation

Procedural documentation should primarily use ordered lists for main procedures:

```markdown
## Creating a New User

Before creating a new user, ensure you have administrator privileges.

1. Navigate to **Administration > User Management**.
2. Click the **Add User** button in the top-right corner.
3. Complete the required fields:
   - Username: Enter a unique identifier
   - Email: Provide a valid email address
   - Role: Select from the dropdown menu
4. Set initial password options:
   - [ ] User must change password at next login
   - [ ] Password never expires
5. Click **Save** to create the user.

The new user will receive an email with login instructions if the "Send welcome email" option is enabled.
```

**Key requirements**:
- Use ordered lists for the main procedure steps
- Use unordered sublists for options or details within a step
- Consider checklists for configuration options
- Maintain consistent grammatical structure (verb-led) for procedure steps

### 4.2 Conceptual Documentation

Conceptual documentation should use unordered lists for related concepts and definition lists for term explanations:

```markdown
## Authentication Methods

The system supports multiple authentication methods:

- **Password-based authentication**
  - Standard username/password combinations
  - Password policy enforcement
  - Multi-factor authentication support

- **Single Sign-On (SSO)**
  - SAML 2.0 integration
  - OAuth 2.0 support
  - Just-in-time provisioning

- **API Token authentication**
  - Scoped access tokens
  - Expiration controls
  - Rotation policies

### Key Terminology

OAuth
: An open standard authorization protocol that enables secure designated access without sharing credentials.

SAML
: Security Assertion Markup Language, an XML-based standard for exchanging authentication and authorization data.

Multi-factor Authentication (MFA)
: A security process requiring users to provide two or more verification factors to gain access.
```

**Key requirements**:
- Use unordered lists for feature sets, characteristics, or related concepts
- Use definition lists for terminology explanations
- Consider nested lists for hierarchical concepts
- Maintain consistent grammatical structure within each list

### 4.3 Reference Documentation

Reference documentation should use definition lists for parameters, options, and specifications:

```markdown
## API Endpoints

### GET /api/v1/users

Retrieves a list of users based on the provided filters.

#### Query Parameters

page
: The page number for pagination (default: 1).

limit
: The number of items per page (default: 20, max: 100).

status
: Filter users by status. Possible values:
  - `active`: Currently active users
  - `inactive`: Deactivated users
  - `pending`: Users pending activation

sort
: Field to sort by. Possible values:
  - `name`: Sort by user name
  - `created`: Sort by creation date
  - `last_login`: Sort by last login date

#### Response Codes

200 OK
: The request was successful.

400 Bad Request
: The request parameters are invalid.

401 Unauthorized
: Authentication is required or the provided credentials are invalid.

403 Forbidden
: The authenticated user does not have permission to access this resource.
```

**Key requirements**:
- Use definition lists for parameter descriptions, return codes, and field specifications
- Use unordered lists for options within parameters
- Maintain consistent formatting and punctuation for all similar items
- Consider tables for complex parameter sets when appropriate

### 4.4 Troubleshooting Documentation

Troubleshooting documentation should use a combination of ordered and unordered lists:

```markdown
## Login Issues

### Common Symptoms

Users may experience the following login issues:

- Unable to access the login page
- Login attempts fail with "Invalid credentials"
- Successful login followed by immediate logout
- "Account locked" message appears
- Browser displays security certificate warning

### Diagnostic Steps

1. Verify the user's account status:
   - Check if the account is active in the admin panel
   - Confirm the account has not been locked due to failed attempts
   - Ensure the user's password has not expired

2. Check authentication service status:
   - Verify the authentication service is running
   - Review authentication service logs for errors
   - Confirm network connectivity to the authentication service

3. Test with a known working account:
   - Try logging in with a test account
   - Compare behavior against the reported issue
   - Note any error messages or unexpected behavior
```

**Key requirements**:
- Use unordered lists for symptoms, possible causes, and similar collections
- Use ordered lists for diagnostic or resolution procedures
- Maintain clear distinction between symptom descriptions and resolution steps
- Consider checklists for verification procedures

## 5. Specialized List Applications

### 5.1 Decision Trees

Decision trees should use nested lists with clear conditional indicators:

```markdown
## Determining Access Level

1. Is the user authenticated?
   - If NO: No access granted. Redirect to login page.
   - If YES: Continue to step 2.

2. Does the user have an assigned role?
   - If NO: Assign default "Viewer" role and continue to step 3.
   - If YES: Continue to step 3.

3. What is the user's assigned role?
   - If "Administrator":
     - Grant full system access
     - Enable configuration capabilities
     - Allow user management
   - If "Manager":
     - Grant department data access
     - Enable report generation
     - Allow team management
   - If "User":
     - Grant personal data access
     - Enable basic features
     - Restrict administration functions
```

### 5.2 FAQ Lists

FAQ lists should use a clear question-answer structure:

```markdown
## Frequently Asked Questions

### Account Management

**How do I reset my password?**
1. Navigate to the login page.
2. Click the "Forgot Password" link.
3. Enter your email address and submit the form.
4. Check your email for reset instructions.

**Can I change my username?**
No, usernames cannot be changed after account creation. Contact your system administrator if you need to use a different username.

**How do I enable two-factor authentication?**
1. Log in to your account.
2. Navigate to **Settings > Security**.
3. Toggle the "Two-Factor Authentication" option to ON.
4. Follow the on-screen instructions to complete setup.
```

### 5.3 Feature Comparison Lists

Feature comparison lists should use consistent marking for status indicators:

```markdown
## Feature Availability by Plan

| Feature | Basic | Professional | Enterprise |
|---------|-------|--------------|------------|
| User management | ✓ | ✓ | ✓ |
| Custom branding | ✗ | ✓ | ✓ |
| Advanced analytics | ✗ | ✗ | ✓ |
| Priority support | ✗ | ✓ | ✓ |
| Multi-factor authentication | ✗ | ✓ | ✓ |
| Custom integrations | ✗ | ✗ | ✓ |
```

### 5.4 Process Flows

Process flows should use ordered lists with clear transition language:

```markdown
## User Registration Process

1. **Form Submission**
   - User completes the registration form
   - System validates input fields
   - System checks for duplicate email or username
   
   → Once validated, proceed to step 2.

2. **Account Creation**
   - System creates user record in database
   - Default preferences are assigned
   - Welcome email is queued
   
   → After account creation, proceed to step 3.

3. **Email Verification**
   - System sends verification email
   - User clicks verification link
   - System marks email as verified
   
   → When verified, proceed to step 4.

4. **Account Activation**
   - System activates user account
   - User is redirected to first-time setup
   - System logs the successful registration
```

## 6. Accessibility Considerations

### 6.1 Screen Reader Compatibility

Lists must be implemented with proper semantic markup to ensure screen reader compatibility:

- Use proper HTML elements (`<ul>`, `<ol>`, `<dl>`, `<li>`, `<dt>`, `<dd>`)
- Avoid using visual formatting (dashes, asterisks, etc.) as pseudo-list markers in regular paragraph text
- Ensure nested lists use proper hierarchy in the markup
- Provide sufficient context before lists to establish their purpose
- Consider adding ARIA attributes for complex lists if needed

### 6.2 Visual Accessibility

Lists should maintain visual clarity:

- Ensure sufficient contrast for list markers
- Maintain adequate spacing between list items
- Use clear visual differentiation for nested levels
- Consider increased spacing for complex list items
- Avoid relying solely on color to distinguish list types or items

### 6.3 Cognitive Accessibility

Lists should support cognitive accessibility:

- Limit list length (consider breaking very long lists into sections)
- Maintain consistent formatting across similar lists
- Use clear, descriptive introductions for context
- Group related items within lists
- Consider progressive disclosure for complex nested lists

## 7. List Implementation in Different Formats

### 7.1 Markdown Implementation

```markdown
## Unordered Lists
- First item
- Second item
  - Nested item
  - Another nested item
- Third item

## Ordered Lists
1. First step
2. Second step
   1. Substep one
   2. Substep two
3. Third step

## Definition Lists
Term
: Definition of the term.

Another Term
: Definition of another term.
: Additional details about another term.

## Checklists
- [ ] Uncompleted task
- [x] Completed task
```

### 7.2 HTML Implementation

```html
<!-- Unordered List -->
<ul>
  <li>First item</li>
  <li>Second item
    <ul>
      <li>Nested item</li>
      <li>Another nested item</li>
    </ul>
  </li>
  <li>Third item</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>First step</li>
  <li>Second step
    <ol>
      <li>Substep one</li>
      <li>Substep two</li>
    </ol>
  </li>
  <li>Third step</li>
</ol>

<!-- Definition List -->
<dl>
  <dt>Term</dt>
  <dd>Definition of the term.</dd>
  
  <dt>Another Term</dt>
  <dd>Definition of another term.</dd>
  <dd>Additional details about another term.</dd>
</dl>

<!-- Checklist -->
<ul class="checklist">
  <li><input type="checkbox"> Uncompleted task</li>
  <li><input type="checkbox" checked> Completed task</li>
</ul>
```

### 7.3 Structured Text Editors

When using structured text editors such as DITA XML:

```xml
<!-- Unordered List -->
<ul>
  <li>First item</li>
  <li>Second item
    <ul>
      <li>Nested item</li>
      <li>Another nested item</li>
    </ul>
  </li>
  <li>Third item</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>First step</li>
  <li>Second step
    <ol>
      <li>Substep one</li>
      <li>Substep two</li>
    </ol>
  </li>
  <li>Third step</li>
</ol>

<!-- Definition List -->
<dl>
  <dlentry>
    <dt>Term</dt>
    <dd>Definition of the term.</dd>
  </dlentry>
  <dlentry>
    <dt>Another Term</dt>
    <dd>Definition of another term.</dd>
    <dd>Additional details about another term.</dd>
  </dlentry>
</dl>
```

### 7.4 PDF Generation Considerations

When generating PDF documents:

- Ensure list markers appear correctly in the output
- Verify nested list indentation is clear and consistent
- Check that page breaks don't disrupt list coherence
- Consider manual adjustments for complex lists
- Test PDF accessibility for list structures

## 8. Common List Anti-patterns

| Anti-pattern | Problem | Solution |
|--------------|---------|----------|
| **Inconsistent markers** | Mixed bullet styles within the same list level | Standardize on a single marker type per level |
| **False lists** | Using visual formatting instead of proper list markup | Use proper list elements and markup |
| **Overly deep nesting** | Lists with more than 3-4 levels of nesting | Restructure or break into separate lists |
| **Paragraph disguised as lists** | Full paragraphs formatted as list items | Keep list items concise or use a different format |
| **Grammatical inconsistency** | Mixed sentence structures within a list | Apply parallel grammar to all items |
| **Punctuation inconsistency** | Mixed use of periods, semicolons, etc. | Apply consistent punctuation rules |
| **Disjointed items** | List items with no clear relationship | Group only related items in a list |
| **Overloaded lists** | Too many items in a single list | Break into multiple categorized lists |

## 9. List Quality Checklist

Before finalizing documentation, verify that all lists meet these quality standards:

✓ All lists have clear introductory text  
✓ List items follow parallel grammatical structure  
✓ Punctuation is consistent within each list  
✓ Capitalization follows standard guidelines  
✓ Nested lists don't exceed recommended depth  
✓ List markers are consistent and appropriate for content type  
✓ Accessibility requirements are met  
✓ Lists are semantically marked up (not visually formatted text)  
✓ Checklist items are actionable and verifiable  
✓ Definition terms are clearly distinguished from definitions  

## 10. Advanced List Design Patterns

### 10.1 Progressive Disclosure Lists

For complex information requiring progressive disclosure:

```markdown
<details>
<summary>Advanced Configuration Options</summary>

- **Connection Pooling**
  - Minimum connections: 5
  - Maximum connections: 50
  - Idle timeout: 300 seconds
  
- **Query Caching**
  - Enable query results caching
  - Cache timeout: 600 seconds
  - Maximum cache size: 1000 items
  
- **Transaction Management**
  - Isolation level: READ_COMMITTED
  - Transaction timeout: 30 seconds
  - Retry count: 3
</details>
```

### 10.2 Two-Column Lists

For compact presentation of related pairs:

```markdown
| Term          | Definition                                    |
|---------------|-----------------------------------------------|
| API Token     | Security credential for API authentication    |
| SSO           | Single Sign-On authentication mechanism       |
| RBAC          | Role-Based Access Control security model      |
| JWT           | JSON Web Token used for secure data transfer  |
```

### 10.3 Icon-Enhanced Lists

For visual reinforcement of list items:

```markdown
- ![Success](./icons/success.svg) **Compatible Browsers**
  - Chrome 80+
  - Firefox 75+
  - Safari 13+
  - Edge 80+

- ![Warning](./icons/warning.svg) **Limited Compatibility**
  - Internet Explorer 11 (basic functionality only)
  - Legacy Edge (non-Chromium)

- ![Error](./icons/error.svg) **Not Supported**
  - Internet Explorer 10 and below
  - Opera Mini
```

### 10.4 Tabbed Lists

For organizing related but distinct list categories:

```html
<div class="tabs">
  <div class="tab" data-tab="windows">
    <h3>Windows Installation</h3>
    <ol>
      <li>Download the Windows installer (.exe)</li>
      <li>Run the installer as administrator</li>
      <li>Follow the installation wizard</li>
      <li>Configure settings when prompted</li>
    </ol>
  </div>
  
  <div class="tab" data-tab="mac">
    <h3>macOS Installation</h3>
    <ol>
      <li>Download the macOS package (.dmg)</li>
      <li>Open the disk image</li>
      <li>Drag the application to Applications folder</li>
      <li>Run the application from Applications</li>
    </ol>
  </div>
  
  <div class="tab" data-tab="linux">
    <h3>Linux Installation</h3>
    <ol>
      <li>Add the repository to your sources</li>
      <li>Update your package database</li>
      <li>Install using package manager</li>
      <li>Verify installation</li>
    </ol>
  </div>
</div>
```

## Conclusion

Effective list implementation significantly improves the usability, readability, and accessibility of technical documentation. By following these comprehensive standards for list formatting and structure, documentation teams can create consistent, user-friendly content that effectively communicates information to diverse audiences.

Lists serve as essential navigational and organizational elements within documentation, breaking complex information into manageable, scannable segments. When properly implemented, lists enhance user comprehension and task completion while reinforcing the overall document structure and information hierarchy.

---
## Document Metadata

**Last Updated:** 2025-03-22  
**Contributors:** Documentation Team, Technical Writers, Content Designers  
**Status:** APPROVED  
**Related Documents:**
- [UDS Documentation Style Guide](./uds-documentation-style-guide.md)
- [Accessibility Standards for Documentation](./accessibility-standards-documentation.md)
- [Markdown Formatting Guidelines](./markdown-formatting-guidelines.md)

## Legal and Compliance

Copyright © 2025 Universal Documentation System. All rights reserved.

This document complies with organizational documentation standards and industry best practices.

INTERNAL USE - This document contains proprietary guidelines for documentation practices.
---