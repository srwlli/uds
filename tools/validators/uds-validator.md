---
title: UDS Validator
version: 1.0.0
date: 2025-10-14
status: APPROVED
authors:
  - UDS Documentation Team
classification: INTERNAL
keywords:
  - validator
  - validation
  - quality
  - compliance
  - tool
tags:
  - tools
  - validation
  - automation
---

I'll create a reusable UDS validation process that can be used across any project:

```typescript
// uds-validator.ts
import { scanCurrentElements } from "./coderef-core/scanner.js";

interface UDSValidationConfig {
    directories: string[];
    fileTypes: string[];
    customPatterns?: Array<{
        type: string;
        pattern: RegExp;
    }>;
    requiredMetadata?: string[];
    validateDependencies?: boolean;
    validateImplementation?: boolean;
    validateDocumentation?: boolean;
}

interface ValidationResult {
    valid: boolean;
    reference: string;
    issues: string[];
    dependencies?: string[];
    metadata?: Record<string, any>;
}

class UDSValidator {
    private config: UDSValidationConfig;

    constructor(config: UDSValidationConfig) {
        this.config = {
            ...config,
            customPatterns: [
                { type: "component", pattern: /@Component/ },
                { type: "hook", pattern: /@Hook/ },
                { type: "api", pattern: /@API/ },
                { type: "util", pattern: /@Util/ },
                { type: "type", pattern: /@Type/ },
                ...(config.customPatterns || [])
            ],
            requiredMetadata: [
                "title",
                "version",
                "description",
                ...(config.requiredMetadata || [])
            ]
        };
    }

    async validate(): Promise<ValidationResult[]> {
        console.log("🔍 Starting UDS Validation...");
        
        const results: ValidationResult[] = [];

        try {
            // 1. Scan for UDS elements
            const elements = await scanCurrentElements(
                this.config.directories,
                this.config.fileTypes,
                {
                    include: this.config.fileTypes.map(t => `**/*.${t}`),
                    customPatterns: this.config.customPatterns
                }
            );

            // 2. Validate each element
            for (const element of elements) {
                const elementResults = await this.validateElement(element);
                results.push(elementResults);
            }

            // 3. Validate cross-references
            if (this.config.validateDependencies) {
                await this.validateDependencies(elements, results);
            }

            // 4. Report results
            this.reportResults(results);

            return results;

        } catch (error) {
            console.error("❌ Validation Error:", error);
            throw error;
        }
    }

    private async validateElement(element: any): Promise<ValidationResult> {
        const issues: string[] = [];

        // 1. Check YAML frontmatter
        if (!this.validateFrontmatter(element, issues)) {
            issues.push("Invalid or missing YAML frontmatter");
        }

        // 2. Check agent directives
        if (!this.validateAgentDirectives(element, issues)) {
            issues.push("Invalid or missing agent directives");
        }

        // 3. Check references
        if (!this.validateReferences(element, issues)) {
            issues.push("Invalid references found");
        }

        return {
            valid: issues.length === 0,
            reference: element.reference,
            issues,
            dependencies: element.dependencies,
            metadata: element.metadata
        };
    }

    private validateFrontmatter(element: any, issues: string[]): boolean {
        const requiredFields = this.config.requiredMetadata;
        
        for (const field of requiredFields) {
            if (!element.metadata?.[field]) {
                issues.push(`Missing required metadata: ${field}`);
            }
        }

        return issues.length === 0;
    }

    private validateAgentDirectives(element: any, issues: string[]): boolean {
        const requiredDirectives = ["type", "purpose"];
        
        for (const directive of requiredDirectives) {
            if (!element.directives?.[directive]) {
                issues.push(`Missing required directive: ${directive}`);
            }
        }

        return issues.length === 0;
    }

    private validateReferences(element: any, issues: string[]): boolean {
        const referencePattern = /@[A-Za-z]+\/[\w-]+#[\w-]+:\d+/;
        
        if (element.dependencies) {
            for (const dep of element.dependencies) {
                if (!referencePattern.test(dep)) {
                    issues.push(`Invalid reference format: ${dep}`);
                }
            }
        }

        return issues.length === 0;
    }

    private async validateDependencies(elements: any[], results: ValidationResult[]): Promise<void> {
        const references = new Set(elements.map(e => e.reference));
        
        for (const element of elements) {
            if (element.dependencies) {
                for (const dep of element.dependencies) {
                    if (!references.has(dep)) {
                        const result = results.find(r => r.reference === element.reference);
                        if (result) {
                            result.issues.push(`Broken dependency: ${dep}`);
                            result.valid = false;
                        }
                    }
                }
            }
        }
    }

    private reportResults(results: ValidationResult[]): void {
        console.log("\n📊 UDS Validation Results:");
        
        const valid = results.filter(r => r.valid);
        const invalid = results.filter(r => !r.valid);

        console.log(`\n✅ Valid Elements: ${valid.length}`);
        console.log(`❌ Invalid Elements: ${invalid.length}`);

        if (invalid.length > 0) {
            console.log("\n⚠️ Issues Found:");
            invalid.forEach(result => {
                console.log(`\n${result.reference}:`);
                result.issues.forEach(issue => {
                    console.log(`  - ${issue}`);
                });
            });
        }
    }
}

// Usage example:
const config: UDSValidationConfig = {
    directories: ["./src"],
    fileTypes: ["ts", "tsx"],
    validateDependencies: true,
    validateImplementation: true,
    validateDocumentation: true,
    requiredMetadata: [
        "title",
        "version",
        "description",
        "authors",
        "classification"
    ],
    customPatterns: [
        { type: "custom", pattern: /@Custom/ }
    ]
};

// Run validation
async function runUDSValidation() {
    const validator = new UDSValidator(config);
    try {
        const results = await validator.validate();
        return results;
    } catch (error) {
        console.error("Validation failed:", error);
        throw error;
    }
}

// Export for use in other files
export { UDSValidator, type UDSValidationConfig, type ValidationResult };
```

To use this validator:

```typescript
// validate-uds.ts
import { UDSValidator } from './uds-validator';

const config = {
    directories: ["./src"],
    fileTypes: ["ts", "tsx", "md"],
    validateDependencies: true,
    requiredMetadata: [
        "title",
        "version",
        "description"
    ]
};

const validator = new UDSValidator(config);
validator.validate()
    .then(results => {
        if (results.every(r => r.valid)) {
            console.log("✅ All UDS validations passed");
            process.exit(0);
        } else {
            console.log("❌ Some UDS validations failed");
            process.exit(1);
        }
    })
    .catch(error => {
        console.error("Validation error:", error);
        process.exit(1);
    });
```

This validator:
1. Is configurable for different projects
2. Checks all core UDS requirements
3. Validates references and dependencies
4. Provides detailed reporting
5. Can be integrated into CI/CD

Would you like me to:
1. Add more specific validation rules?
2. Show how to integrate with different project types?
3. Add custom reporting formats?
