---
title: Core UDS Tables Training Guide
version: 1.0.0
date: 2025-04-01
status: APPROVED
authors:
  - name: Documentation Standards Team
classification: INTERNAL
tags: [uds, training, tables, formatting, compliance]
---

# Core UDS Tables Training Guide

## 1. Core Knowledge: Table Formatting

### Standard Reference

The UDS `core-table-formatting-standards.md` document establishes that:

1. Tables must have a clear structure with proper headers and alignment
2. Column alignment should follow data type conventions
3. Tables require appropriate formatting for accessibility
4. Tables should have descriptive titles or captions
5. Tables must be surrounded by blank lines
6. Table complexity should be managed for readability

### Table Components and Requirements

| Component | Requirement | Purpose | Reference Section |
|-----------|-------------|---------|-------------------|
| Table Title | Required | Identify table content | Section 3.1.1 |
| Header Row | Required | Define column content | Section 3.1.2 |
| Column Alignment | Required | Improve readability | Section 4.1 |
| Delimiter Row | Required | Separate header from data | Markdown requirement |
| Data Rows | Required | Present information | Section 3.1.3 |
| Caption/Description | Optional | Provide context | Section 3.1.4 |

### Violation Classification Table

| Violation Type | Severity | Impact | Reference Section |
|----------------|----------|--------|-------------------|
| Missing header row | Critical | Undefined columns | Section 3.1.2 |
| Missing delimiter row | Critical | Invalid Markdown table | Markdown requirement |
| Inconsistent column count | Critical | Broken table structure | Section 5.3 |
| Missing table title | Major | Unclear purpose | Section 3.1.1 |
| Improper column alignment | Major | Reduced readability | Section 4.1 |
| No blank lines around table | Major | Parser issues | Section 5.4 |
| Excessive columns/rows | Minor | Overwhelms readers | Section 5.3 |
| Inconsistent formatting | Minor | Visual confusion | Section 4.4 |

## 2. Examples and Corrections

### Example 1: Basic Structure Violation

**Non-Compliant Document:**

```markdown
Feature | Supported | Notes
Basic authentication | Yes | Deprecated
OAuth 2.0 | Yes | Recommended
API Keys | Yes | Limited use
```

**Violation Analysis:**
- Critical: Missing delimiter row between header and data rows
- Major: Missing table title
- Major: No blank lines around table

**Compliant Version:**

```markdown
**Table 1: Authentication Methods**

| Feature | Supported | Notes |
|---------|-----------|-------|
| Basic authentication | Yes | Deprecated |
| OAuth 2.0 | Yes | Recommended |
| API Keys | Yes | Limited use |
```

**Explanation of Changes:**
- Added table title
- Added delimiter row with proper formatting
- Added proper pipe characters at beginning and end of each row

### Example 2: Alignment and Format Violations

**Non-Compliant Document:**

```markdown
| Feature | Supported | Version Added | Success Rate |
|-----------------------|----------|-------------------|--------------------|
| Basic authentication | Yes | 1.0 | 99.7% |
| OAuth 2.0 | Yes | 2.3 | 99.9% |
| API Keys | Yes | 1.5 | 98.5% |
```

**Violation Analysis:**
- Major: Improper column alignment (all left-aligned)
- Major: Excessive delimiter width
- Major: Missing table title

**Compliant Version:**

```markdown
**Table 2: Authentication Method Comparison**

| Feature               | Supported | Version Added | Success Rate |
|-----------------------|:---------:|:-------------:|--------------:|
| Basic authentication  | Yes       | 1.0           | 99.7%        |
| OAuth 2.0             | Yes       | 2.3           | 99.9%        |
| API Keys              | Yes       | 1.5           | 98.5%        |
```

**Explanation of Changes:**
- Added table title
- Adjusted column alignment based on data type:
  - Text: Left-aligned (default)
  - Short codes/statuses: Center-aligned
  - Numeric values: Right-aligned
- Standardized delimiter row width
- Improved spacing for readability

### Example 3: Accessibility Violations

**Non-Compliant Document:**

```markdown
**Configuration Options**

| Param | Val | Desc |
|-------|-----|------|
| timeout | 30 | Connection timeout in seconds |
| retries | 3 | Number of retry attempts |
| log_level | INFO | Logging verbosity |
```

**Violation Analysis:**
- Major: Non-descriptive column headers
- Minor: Abbreviated column names
- Minor: Inconsistent formatting of cell content

**Compliant Version:**

```markdown
**Table 3: System Configuration Parameters**

| Parameter | Default Value | Description |
|-----------|:-------------:|-------------|
| timeout   | 30            | Connection timeout in seconds |
| retries   | 3             | Number of retry attempts |
| log_level | INFO          | Logging verbosity (DEBUG, INFO, WARN, ERROR) |
```

**Explanation of Changes:**
- Improved table title with more specificity
- Expanded abbreviated column headers to full words
- Centered the values column as it contains short codes
- Added additional context in description

## 3. Detection Algorithms

### Pattern Recognition

For table formatting validation, implement the following algorithm:

```python
def validate_table_formatting(document):
    tables = extract_all_tables(document)
    violations = []
    
    for table in tables:
        # Check for title/caption
        if not has_table_title(table):
            violations.append(Violation(
                type="MAJOR",
                message="Table missing title or caption",
                location=table.start_line
            ))
        
        # Check for header row
        if not table.has_header_row:
            violations.append(Violation(
                type="CRITICAL",
                message="Table missing header row",
                location=table.start_line
            ))
        
        # Check for delimiter row
        if not table.has_delimiter_row:
            violations.append(Violation(
                type="CRITICAL",
                message="Table missing delimiter row",
                location=table.start_line + 1
            ))
        
        # Check column consistency
        header_columns = len(table.header_cells)
        for i, row in enumerate(table.data_rows):
            if len(row.cells) != header_columns:
                violations.append(Violation(
                    type="CRITICAL",
                    message=f"Inconsistent column count in row {i+1} ({len(row.cells)} vs {header_columns})",
                    location=table.start_line + i + 2
                ))
        
        # Check alignment markers
        if table.has_delimiter_row:
            alignments = extract_alignments(table.delimiter_row)
            data_types = infer_data_types(table.data_rows)
            for col, (alignment, data_type) in enumerate(zip(alignments, data_types)):
                if data_type == "numeric" and alignment != "right":
                    violations.append(Violation(
                        type="MAJOR",
                        message=f"Column {col+1} contains numeric data but is not right-aligned",
                        location=table.start_line + 1
                    ))
                    
        # Check for blank lines around table
        if not has_blank_line_before(document, table.start_line):
            violations.append(Violation(
                type="MAJOR",
                message="No blank line before table",
                location=table.start_line - 1
            ))
            
        if not has_blank_line_after(document, table.end_line):
            violations.append(Violation(
                type="MAJOR",
                message="No blank line after table",
                location=table.end_line + 1
            ))
    
    return violations
```

### Regex