# UDS Consolidated Content - Structure Documentation

This document explains the organization and structure of the UDS consolidated content library.

## Overview

The UDS consolidated content consists of **49 markdown files** organized into **6 top-level categories** with **16 subdirectories**.

## Directory Structure

```
consolidated-content/
├── agent-instructions/     (5 files)
│   ├── profiles/          (2 files)
│   └── prompts/           (3 files)
├── core-standards/        (25 files)
│   ├── compliance/        (5 files)
│   ├── formatting/        (10 files)
│   ├── metadata/          (3 files)
│   ├── structure/         (5 files)
│   └── visual-and-tone/   (2 files)
├── guides/                (12 files)
│   ├── compliance/        (1 file)
│   ├── implementation/    (1 file)
│   └── training/          (7 files)
├── project-docs/          (8 files)
│   ├── enhancements/      (2 files)
│   ├── reference/         (2 files)
│   ├── roadmaps/          (2 files)
│   └── summaries/         (2 files)
├── templates/             (2 files)
│   └── document-templates/ (2 files)
└── tools/                 (1 file)
    └── validators/        (1 file)
```

## Organization Principles

### 1. Category-Based Organization
Content is organized by **function and purpose**, not by source or date.

### 2. Logical Hierarchy
- **Top-level**: Major content categories (6 directories)
- **Second-level**: Subcategories within each major category (16 subdirectories)
- **File-level**: Individual documents (49 files)

### 3. Naming Conventions
- **Directories**: lowercase-with-hyphens
- **Files**: prefix-descriptive-name-suffix.md
  - Prefixes: `core-`, `uds-`, `standard-`
  - Suffixes: `-standards`, `-guide`, `-template`, `-training-guide`

### 4. Balanced Distribution
Files are distributed to avoid overcrowding:
- Largest category: core-standards (25 files, 51%)
- Smallest categories: templates, tools (1-2 files each)
- Average: 8 files per category

## Navigation

Each category has a `README.md` providing:
- Category overview
- Subcategory descriptions
- Quick links to key files
- Related categories

## Quality Standards

All 49 files meet:
- ✅ 100% UDS metadata compliance
- ✅ Complete YAML frontmatter
- ✅ Proper formatting standards
- ✅ Consistent naming conventions

## Maintenance

This structure is designed for:
- **Scalability**: Supports 2-3x growth without reorganization
- **Maintainability**: Clear categories simplify updates
- **Discoverability**: Logical organization aids navigation
- **Stability**: Minimal future changes expected

## Related Documents

- [INDEX.md](INDEX.md) - Complete file listing
- [README.md](README.md) - Getting started guide
- Individual category READMEs in each top-level directory

---

Last updated: 2025-10-14
Structure version: 1.0.0
