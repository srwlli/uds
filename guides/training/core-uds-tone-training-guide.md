---
title: Core UDS Tone Training Guide
version: 1.0.0
date: 2025-04-01
status: APPROVED
authors:
  - name: Documentation Standards Team
classification: INTERNAL
tags: [uds, training, tone, style, language, compliance]
---

# Core UDS Tone Training Guide

## 1. Core Knowledge: Writing Tone and Style

### Standard Reference

The UDS `core-writing-tone-guide.md` document establishes that:

1. Documentation must maintain a neutral, precise, minimal, and structured tone
2. Emotional language, slang, and informal phrasing are prohibited
3. No emoji, decorative icons, or non-semantic visuals may appear in UDS documentation
4. Clear, role-neutral terms should be used throughout

### Tone Requirements

| Tone Quality | Definition | Purpose | Reference Section |
|--------------|------------|---------|-------------------|
| Neutral | Emotionally balanced language | Maintain professionalism | Section "Required Tone Qualities" |
| Precise | Technically accurate terms | Ensure clarity | Section "Required Tone Qualities" |
| Minimal | Only necessary information | Reduce cognitive load | Section "Required Tone Qualities" |
| Structured | Following UDS formatting | Support readability | Section "Required Tone Qualities" |

### Violation Classification Table

| Violation Type | Severity | Impact | Reference Section |
|----------------|----------|--------|-------------------|
| Emotional language | Major | Undermines credibility | Section "Language to Avoid" |
| Slang/colloquialisms | Major | Reduces clarity | Section "Language to Avoid" |
| Emoji/decorative icons | Critical | Violates strict visual standards | Section "Visual Tone Rule" |
| Marketing language | Major | Compromises objectivity | Section "Language to Avoid" |
| First-person narrative | Minor | Breaks formal tone | Implied in "Neutral" requirement |
| Exclamation marks | Minor | Creates emotional tone | Implied in "Neutral" requirement |
| Inconsistent terminology | Major | Causes confusion | Implied in "Precise" requirement |

## 2. Examples and Corrections

### Example 1: Emotional Language Violations

**Non-Compliant Document:**

```markdown
# Getting Started

Our amazing authentication system is super easy to use! 😊

You'll love how simple it is to integrate with your codebase - it's a game-changer for your workflow!

## Authentication Methods

Wow, there are so many cool ways to authenticate:
- Basic auth (old school but works!)
- OAuth 2.0 (the awesome modern way)
- API Keys (super simple for quick projects)
```

**Violation Analysis:**
- Critical: Use of emoji (😊)
- Major: Emotional language ("amazing", "super easy", "love", "game-changer")
- Major: Slang/colloquialisms ("cool", "old school")
- Major: Exclamation marks creating emotional tone
- Minor: Subjective qualifiers ("awesome")

**Compliant Version:**

```markdown
# Getting Started

The authentication system provides standardized methods for access control.

The system integrates with applications through standard protocols.

## Authentication Methods

The system supports multiple authentication methods:
- Basic authentication (legacy protocol, maintained for compatibility)
- OAuth 2.0 (current standard protocol)
- API Keys (simplified authentication for development scenarios)
```

**Explanation of Changes:**
- Removed all emotional language and subjective qualifiers
- Eliminated emoji and exclamation marks
- Replaced colloquial terms with precise technical descriptions
- Maintained factual, neutral tone throughout

### Example 2: Marketing Language Violations

**Non-Compliant Document:**

```markdown
# XYZ Security Framework

## The Ultimate Security Solution

XYZ delivers best-in-class security features that revolutionize how you protect your applications! Our groundbreaking approach means you'll never worry about security breaches again.

## Key Benefits

- **Unmatched Performance**: Blazingly fast authentication
- **Industry-Leading Protection**: Stay one step ahead of threats
- **Seamless Integration**: Works like magic with your stack
```

**Violation Analysis:**
- Major: Marketing language ("ultimate", "best-in-class", "revolutionize")
- Major: Unsupported claims ("never worry about security breaches")
- Major: Hyperbolic qualifiers ("unmatched", "industry-leading")
- Major: Metaphorical language ("like magic")

**Compliant Version:**

```markdown
# XYZ Security Framework

## Overview

XYZ provides security features for protecting applications through standardized authentication and authorization protocols.

## Capabilities

- **Performance**: Authentication processing with response times under 100ms
- **Protection**: Implementation of OWASP security standards 
- **Integration**: Compatible with standard web frameworks through documented APIs
```

**Explanation of Changes:**
- Replaced marketing claims with factual descriptions
- Removed hyperbolic language
- Eliminated unsupported assertions
- Used measurable statements instead of comparative claims

### Example 3: Formatting and Structure Violations

**Non-Compliant Document:**

```markdown
# Hey there! Welcome to the API Docs ✨

So you want to use our API? Great choice! Let's dive right in...

The API is RESTful (REST = Representational State Transfer) and it's pretty straightforward to use. Just send your requests to the endpoints we've set up and you're good to go!

IMPORTANT!!! Always authenticate your requests or they'll be rejected! Don't forget!!

DM us on Twitter if you get stuck. We're happy to help! 👍
```

**Violation Analysis:**
- Critical: Use of emoji (✨, 👍)
- Major: Informal greeting and second-person address
- Major: Conversational style ("Let's dive right in...")
- Major: Colloquial expressions ("good to go")
- Major: Non-standard emphasis ("IMPORTANT!!!")
- Minor: First-person plural ("we've", "DM us")

**Compliant Version:**

```markdown
# API Documentation

## Overview

This document describes the XYZ API interface and authentication requirements.

The API follows REST architectural principles, accepting standard HTTP requests to documented endpoints.

## Authentication

Authentication is required for all API requests. Unauthenticated requests return a 401 Unauthorized response.

## Support

Technical assistance is available through the support portal at support.example.com.
```

**Explanation of Changes:**
- Removed all emoji
- Replaced informal greeting with standard document title
- Eliminated conversational style in favor of precise statements
- Used proper formatting for emphasis instead of excessive punctuation
- Removed first-person references
- Added structural elements following UDS standards

## 3. Detection Algorithms

### Pattern Recognition

For tone validation, implement the following algorithm:

```python
def validate_tone(document):
    text = extract_text_content(document)
    violations = []
    
    # Check for emoji
    emoji_matches = find_emoji(text)
    if emoji_matches:
        for match in emoji_matches:
            violations.append(Violation(
                type="CRITICAL",
                message="Document contains emoji or decorative icons",
                location=match.line_number,
                content=match.text
            ))
    
    # Check for emotional language
    emotional_terms = find_emotional_language(text)
    if emotional_terms:
        violations.append(Violation(
            type="MAJOR",
            message="Document contains emotional or subjective language",
            examples=emotional_terms[:5]
        ))
    
    # Check for marketing language
    marketing_terms = find_marketing_language(text)
    if marketing_terms:
        violations.append(Violation(
            type="MAJOR",
            message="Document contains marketing language or hyperbole",
            examples=marketing_terms[:5]
        ))
    
    # Check for exclamation marks
    exclamation_count = text.count('!')
    if exclamation_count > 0:
        violations.append(Violation(
            type="MINOR",
            message=f"Document contains {exclamation_count} exclamation marks that create emotional tone"
        ))
    
    # Check for slang/colloquialisms
    slang_terms = find_slang(text)
    if slang_terms:
        violations.append(Violation(
            type="MAJOR",
            message="Document contains slang or colloquial expressions",
            examples=slang_terms[:5]
        ))
    
    return violations
```

### Regex Patterns

```
# Match emoji in text
EMOJI_PATTERN: [\U0001F000-\U0001F9FF\u2600-\u26FF\u2700-\u27BF]

# Match excessive punctuation
EXCESSIVE_PUNCTUATION: [!?]{2,}

# Match first-person pronouns
FIRST_PERSON: \b(I|we|our|us|my)\b

# Match second-person direct address
SECOND_PERSON: \b(you|your)\b

# Match informal contractions
INFORMAL_CONTRACTIONS: \b(gonna|wanna|gotta)\b
```

## 4. Correction Strategies

### Automated Fixes

The agent should implement these correction strategies:

1. **Emotional Language Removal**:
   - Replace subjective adjectives with objective descriptions
   - Remove intensifiers (very, really, extremely)
   - Convert exclamatory sentences to declarative statements

2. **Tone Normalization**:
   - Replace first-person with passive voice or third-person
   - Convert second-person directives to general statements
   - Transform informal language to formal equivalents

3. **Visual Element Removal**:
   - Remove all emoji and decorative characters
   - Replace emphasis indicators with proper formatting
   - Convert non-semantic visuals to text descriptions

### Manual Fix Recommendations

For complex violations, provide specific guidance:

```
RECOMMENDATION: Your document contains marketing language that violates the neutral tone requirement.

Consider replacing phrases like:
- "groundbreaking solution" → "implementation" or "system"
- "revolutionary approach" → "method" or "process"
- "game-changing technology" → "technology" or specific technical details

Focus on objective, measurable characteristics rather than subjective claims.

Reference: core-writing-tone-guide.md, Section "Language to Avoid"
```

## 5. Testing Scenarios

### Test Case 1: Perfect Compliance

```markdown
# Authentication System

## Overview

The authentication system provides access control mechanisms for API resources. 

## Supported Methods

The system implements the following authentication protocols:

- OAuth 2.0
- API Keys
- SAML 2.0

## Configuration

Configuration requires defining the following parameters in the settings file.
```

Expected result: No violations

### Test Case 2: Multiple Violations

```markdown
# Our Amazing Auth System! 🔐

## You'll Love These Features!

We've built an incredible system that makes authentication super easy! It's a game-changer for your development workflow.

## Awesome Capabilities

- ✅ Lightning-fast performance
- ✅ Super secure encryption
- ✅ Works like magic with your code!

Don't wait - integrate it today and see the difference!!!
```

Expected results:
- Critical: Multiple emoji (🔐, ✅)
- Major: Emotional language ("amazing", "incredible", "super easy")
- Major: Marketing language ("game-changer")
- Major: Exclamation marks and excessive punctuation
- Major: Second-person address ("You'll Love", "your development")
- Major: First-person narrative ("We've built")
- Major: Colloquialisms ("like magic")
- Minor: Imperative tone ("Don't wait")

## 6. User Interaction Examples

### Violation Report

```
I've reviewed your document and found tone/style issues:

CRITICAL: Document contains emoji (core-writing-tone-guide.md, Section "Visual Tone Rule")
- Line 1: "🔐" emoji character
- Line 11-13: "✅" emoji characters used as bullets

MAJOR: Document contains emotional language (core-writing-tone-guide.md, Section "Language to Avoid")
- Examples: "amazing", "incredible", "super easy", "awesome"

MAJOR: Document uses marketing-style language (core-writing-tone-guide.md, Section "Language to Avoid")
- Examples: "game-changer", "lightning-fast", "super secure"

MINOR: Document uses excessive punctuation
- Multiple exclamation marks create emotional tone

To fix these issues:
1. Remove all emoji and replace with standard formatting
2. Replace subjective adjectives with objective descriptions
3. Remove marketing language and use technical terminology
4. Convert exclamatory sentences to neutral statements
```

### Interactive Correction

```
User: What's wrong with my document's tone?

Agent: Your document violates several UDS tone requirements:

1. It contains emoji (🔐, ✅) which are prohibited by the strict visual standards
2. It uses emotional and subjective language like "amazing," "incredible," and "awesome"
3. It employs marketing-style language such as "game-changer" and "lightning-fast"
4. It uses second-person address ("You'll love") and first-person narrative ("We've built")
5. It contains multiple exclamation marks that create an emotional tone

UDS documentation requires a neutral, precise, and minimal tone without decorative elements.

Would you like me to show you a corrected version?

User: Yes, please.

Agent: Here's your document with compliant tone:

# Authentication System

## Features

The authentication system simplifies access control implementation for applications.

## Capabilities

- Response times under 50ms
- Industry-standard encryption (AES-256)
- API integration with common frameworks

Integration documentation is available in the implementation guide.
```

## 7. Self-Assessment Questions

1. What are the four primary tone qualities required in UDS documentation?
2. Why are emoji and decorative icons prohibited in UDS documentation?
3.