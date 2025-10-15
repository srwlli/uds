# UDS Consolidated Content Library

Welcome to the Unified Documentation System (UDS) consolidated content library. This repository contains the complete set of documentation standards, guides, templates, and tools for creating and maintaining high-quality technical documentation.

## What's in This Repository

This repository serves two purposes:

### 📚 **The UDS Documentation Library** (Primary Content)
The core content: **58 markdown files** containing documentation standards, guides, templates, and tools organized into 6 categories. This is the UDS project itself - a comprehensive framework for creating high-quality technical documentation.

### 🌐 **Next.js Web Hosting** (Viewing Infrastructure)
A lightweight Next.js application that hosts the UDS documentation on Vercel, making all markdown files viewable and browsable on mobile devices. The web hosting code includes:
- `pages/` - Next.js route handlers
- `components/` - React layout components
- `lib/` - Markdown parsing utilities
- `styles/` - CSS for mobile-responsive display
- `package.json`, `next.config.js` - Next.js configuration

**Live Site:** [View UDS Documentation](https://uds-git-main-teamhart.vercel.app) (auto-deploys on every push to main)

**Why both?** The markdown files work great on desktop GitHub, but appear empty on mobile. The Next.js site solves this by rendering all documentation in a mobile-friendly format while keeping the same content structure.

## Quick Start

**New to UDS?** Start here:
1. Read the [UDS Project Summary](project-docs/summaries/uds-project-summary.md) for an overview
2. Review [Core Header Standards](core-standards/structure/uds-header-standards.md) to understand basic document structure
3. Explore the [UDS Headings Training Guide](guides/training/core-uds-headings-training-guide.md) for practical examples

**Implementing UDS in your project?**
- Follow the [UDS Enhancement Guide](guides/implementation/uds-enhancement-guide.md)
- Use [Standard Document Header Template](templates/document-templates/standard-document-header-template.md)
- Check compliance with the [UDS Compliance Index](guides/compliance/core-uds-compliance-index.md)

## Library Structure

This library contains **49 documentation files** organized into **6 main categories**:

### 📋 [Agent Instructions](agent-instructions/) (5 files)
AI agent profiles, prompts, and configuration documents for UDS compliance automation.

### 📘 [Core Standards](core-standards/) (25 files)
Fundamental documentation standards covering formatting, metadata, structure, compliance, and visual style.

### 🎓 [Guides](guides/) (12 files)
Training materials, implementation guides, and compliance documentation.

### 📁 [Project Documentation](project-docs/) (8 files)
Project summaries, roadmaps, enhancements, and reference documentation.

### 📄 [Templates](templates/) (2 files)
Document templates and scaffolds for creating UDS-compliant documentation.

### 🛠️ [Tools](tools/) (1 file)
Validation and automation tools for UDS compliance checking.

## Navigation

- **[INDEX.md](INDEX.md)** - Complete alphabetical index of all 49 files
- **[STRUCTURE.md](STRUCTURE.md)** - Detailed explanation of library organization
- **Category READMEs** - Each category has a README with quick links and descriptions

## Key Features

✅ **Comprehensive Standards** - 25 core standards covering all aspects of documentation
✅ **Practical Training** - 7 training guides with examples and validation methods
✅ **Ready-to-Use Templates** - Start documenting immediately with proven templates
✅ **Automation Tools** - Validate compliance automatically with UDS validator
✅ **AI-Friendly** - Agent profiles and prompts for automated documentation

## Quality Standards

All documents in this library meet:
- 100% UDS metadata compliance
- Complete YAML frontmatter with required fields
- Consistent formatting and naming conventions
- Proper cross-referencing and linking

## Getting Help

- **Browse by category**: Navigate to any of the 6 main directories
- **Search by name**: Check the [INDEX.md](INDEX.md) for complete file listing
- **Understand structure**: Read [STRUCTURE.md](STRUCTURE.md) for organization details
- **Check compliance**: Use [UDS Compliance Index](guides/compliance/core-uds-compliance-index.md)

## Contributing

To contribute to this documentation library:
1. Follow the standards defined in [Core Standards](core-standards/)
2. Use the [Standard Document Header Template](templates/document-templates/standard-document-header-template.md)
3. Validate with the [UDS Validator](tools/validators/uds-validator.md)
4. Review against the [UDS Compliance Index](guides/compliance/core-uds-compliance-index.md)

## Version Information

- **Structure Version**: 1.0.0
- **Last Updated**: 2025-10-14
- **Total Files**: 49 documents across 6 categories
- **Quality Score**: 100/100 (UDS compliant)

---

For detailed documentation about this project, see:
- [UDS Consolidated Framework](project-docs/summaries/uds-consolidated-framework.md)
- [Development Standards Roadmap](project-docs/roadmaps/development-standards-roadmap.md)
