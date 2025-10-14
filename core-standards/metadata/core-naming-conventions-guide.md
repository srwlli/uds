---
title: Core Naming Conventions Guide
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
# Comprehensive Guide to Naming Conventions in Computer Science

## Table of Contents
1. [Introduction](#introduction)
2. [Universal Principles](#universal-principles)
3. [Case Styles](#case-styles)
4. [Programming Languages](#programming-languages)
5. [Database Conventions](#database-conventions)
6. [File and Directory Naming](#file-and-directory-naming)
7. [HTML, CSS, and Web Development](#html-css-and-web-development)
8. [API Design](#api-design)
9. [Version Control](#version-control)
10. [Project Organization](#project-organization)
11. [Special Domains](#special-domains)
12. [Common Anti-patterns](#common-anti-patterns)
13. [Tools for Enforcement](#tools-for-enforcement)
14. [Cultural Considerations](#cultural-considerations)
15. [Resources](#resources)

## Introduction

Naming conventions in computer science are systematic rules for choosing the character sequence to be used for identifiers in source code, documentation, and other computing contexts. Good naming is a critical aspect of software quality that impacts:

- **Readability**: How easily others can understand your code
- **Maintainability**: How easily the code can be modified over time
- **Collaboration**: How effectively teams can work together
- **Complexity Management**: How well large systems can be organized

This guide presents established conventions across different domains of computer science, language-specific standards, and principles for creating meaningful names.

## Universal Principles

### Clarity and Intent

1. **Be descriptive**: Names should clearly describe the purpose or intent of the entity.
   ```python
   # Poor
   x = 86400
   # Better
   seconds_per_day = 86400
   ```

2. **Avoid abbreviations** unless they are well-known standards or the full word is excessively long.
   ```java
   // Poor
   int cNum = 5;  // what is cNum?
   // Better
   int customerCount = 5;
   ```

3. **Reveal intention**: Names should reveal why something exists, what it does, and how it is used.
   ```javascript
   // Poor
   let d = new Date().getTime() - date.getTime();
   // Better
   let elapsedTimeInMilliseconds = new Date().getTime() - startDate.getTime();
   ```

4. **Be precise**: Avoid vague terms like "data", "info", "manager", "processor", etc., without additional context.

### Consistency

1. **Apply conventions consistently** within a project, team, or organization.
2. **Follow established patterns** in the language or framework you're using.
3. **Document exceptions** when standard conventions cannot be followed.

### Length Considerations

1. **Scale with scope**: Names should be longer for entities with larger scopes and shorter for local variables.
   - Loop counters: `i`, `j`
   - Local variables: `user`, `item`
   - Class names: `UserAuthentication`, `ShoppingCartManager`

2. **Practical limits**:
   - Too short: Cryptic and unclear (e.g., using single letters for everything)
   - Too long: Unwieldy and hard to read (e.g., `calculateFinalAdjustedMonthlyInterestRateWithTaxConsiderations`)

3. **Searchability**: Names should be distinct enough to be found in a search.

## Case Styles

### camelCase
- First word lowercase, subsequent words capitalized
- No separators between words
- Example: `firstName`, `calculateTotalPrice`
- Common use: Variables and functions in JavaScript, Java, TypeScript

### PascalCase (UpperCamelCase)
- All words capitalized, including the first
- No separators between words
- Example: `Person`, `CustomerService`
- Common use: Classes and types in C#, Java, TypeScript

### snake_case
- All lowercase letters
- Words separated by underscores
- Example: `first_name`, `calculate_total_price`
- Common use: Variables and functions in Python, Ruby, PHP

### SCREAMING_SNAKE_CASE
- All uppercase letters
- Words separated by underscores
- Example: `MAX_SIZE`, `DEFAULT_TIMEOUT`
- Common use: Constants in many languages

### kebab-case
- All lowercase letters
- Words separated by hyphens
- Example: `first-name`, `user-profile`
- Common use: HTML attributes, CSS properties, URLs, file names

### Hungarian Notation
- Prefix indicating type or nature (less common now)
- Example: `strName`, `bIsValid`
- Historical use: Windows API, older C and C++ code

## Programming Languages

### Java
- **Classes and Interfaces**: PascalCase
  - `Customer`, `ProductService`, `Serializable`
- **Methods and Variables**: camelCase
  - `getName()`, `totalPrice`
- **Constants**: SCREAMING_SNAKE_CASE
  - `MAX_CONNECTIONS`, `PI_VALUE`
- **Packages**: All lowercase, domain-based hierarchy
  - `com.company.project.module`
- **Generic Types**: Single uppercase letters or descriptive PascalCase
  - `T` for Type, `E` for Element, `K` for Key, `V` for Value
  - `ResponseType`, `ElementType`

### Python
- **Functions, Variables, Modules, Packages**: snake_case
  - `calculate_tax()`, `user_age`, `data_utils.py`
- **Classes**: PascalCase
  - `Customer`, `BankAccount`
- **Constants**: SCREAMING_SNAKE_CASE
  - `MAX_SIZE`, `DEFAULT_TIMEOUT`
- **Protected Members**: Prefix with single underscore
  - `_internal_method()`
- **Private Members**: Prefix with double underscore (triggers name mangling)
  - `__private_variable`
- **Special Methods**: Surrounded by double underscores
  - `__init__()`, `__str__()`

### JavaScript/TypeScript
- **Variables, Functions**: camelCase
  - `userName`, `calculateTax()`
- **Classes, Interfaces, Types**: PascalCase
  - `UserProfile`, `ApiResponse`
- **Constants**: SCREAMING_SNAKE_CASE or camelCase (varies by team)
  - `MAX_RETRIES` or `maxRetries`
- **Private Members** (TypeScript): Prefix with `#` (newer) or `_` (conventional)
  - `#privateField`, `_privateMethod()`
- **File names**: Typically kebab-case or camelCase
  - `user-service.js` or `userService.js`

### C#
- **Classes, Interfaces**: PascalCase
  - `Customer`, `IDisposable`
- **Methods, Properties**: PascalCase
  - `GetName()`, `TotalPrice`
- **Variables, Parameters**: camelCase
  - `userName`, `itemCount`
- **Private Fields**: camelCase with `_` prefix
  - `_connectionString`
- **Constants**: PascalCase
  - `DefaultTimeout`
- **Interfaces**: Prefix with `I`
  - `IEnumerable`, `IDisposable`

### C++
- **Classes, Structs**: PascalCase
  - `Vector`, `NetworkManager`
- **Functions, Variables**: camelCase or snake_case (team-dependent)
  - `calculateAverage()` or `calculate_average()`
- **Constants, Enums**: SCREAMING_SNAKE_CASE
  - `MAX_BUFFER_SIZE`, `COLOR_RED`
- **Macros**: SCREAMING_SNAKE_CASE
  - `DEBUG_MODE`, `ASSERT`
- **Template Parameters**: PascalCase or single uppercase letter
  - `typename ElementType` or `typename T`
- **Namespaces**: snake_case or lowercase
  - `graphics_engine` or `std`

### Go
- **PascalCase**: Exported (public) variables, functions, types
  - `UserProfile`, `NewClient()`
- **camelCase**: Unexported (private) variables, functions
  - `connectionString`, `calculateTax()`
- **Acronyms**: Keep acronyms uppercase
  - `HTTPRequest`, `parseJSON`
- **Interfaces**: Usually named with -er suffix
  - `Reader`, `Writer`, `Formatter`

### Ruby
- **Variables, Methods, Symbols**: snake_case
  - `user_name`, `calculate_tax`
- **Classes, Modules**: PascalCase
  - `UserProfile`, `TaxCalculator`
- **Constants**: SCREAMING_SNAKE_CASE
  - `MAX_CONNECTIONS`, `DEFAULT_TIMEOUT`
- **Predicate Methods**: End with question mark
  - `valid?`, `admin?`
- **Dangerous Methods**: End with exclamation mark
  - `save!`, `delete!`

### Swift
- **Types, Protocols**: PascalCase
  - `Person`, `Collection`
- **Functions, Properties, Variables, Constants**: camelCase
  - `userName`, `calculateTax()`
- **Enum cases**: camelCase
  - `case success`, `case internalError`
- **Type Prefixes**: Avoid Objective-C style prefixes
  - Use namespaces instead when needed

### PHP
- **Classes**: PascalCase
  - `User`, `ShoppingCart`
- **Methods, Functions, Variables**: camelCase or snake_case (framework-dependent)
  - Laravel: `getUserName()` (camelCase)
  - WordPress: `get_user_name()` (snake_case)
- **Constants**: SCREAMING_SNAKE_CASE
  - `MAX_UPLOAD_SIZE`
- **Private/Protected Members**: Prefix with underscore (convention)
  - `_privateProperty`

### Rust
- **Variables, Functions**: snake_case
  - `item_count`, `calculate_tax()`
- **Types, Traits, Enums**: PascalCase
  - `HashMap`, `Iterator`
- **Constants, Static Variables**: SCREAMING_SNAKE_CASE
  - `MAX_POINTS`
- **Macros**: snake_case (usually)
  - `println!`, `vec!`
- **Lifetimes**: Short, lowercase
  - `'a`, `'static`

## Database Conventions

### Tables
- **Plural nouns**: Represent collections of entities
  - `users`, `products`, `order_items`
- **Case style**: snake_case (most DBMSs)
  - `product_categories`, `customer_addresses`
- **Prefixing**: Sometimes used for grouping or differentiating schemas
  - `app_users`, `cms_pages`

### Columns
- **Singular descriptive names**: Represent a single attribute
  - `first_name`, `product_id`, `created_at`
- **Case style**: snake_case (most common)
  - `last_login_date`, `shipping_address`
- **Primary Keys**: Often `id` or `table_name_id`
  - `id`, `user_id`, `order_id`
- **Foreign Keys**: Reference the primary key of related table
  - `user_id`, `product_id`
- **Boolean columns**: Prefix with `is_`, `has_`, or `can_`
  - `is_active`, `has_subscription`, `can_edit`
- **Date/Time columns**: Suffix with `_at` or `_date`
  - `created_at`, `expiration_date`

### Indexes
- **Format**: `idx_[table]_[column(s)]`
  - `idx_users_email`, `idx_products_category_id`
- **Unique indexes**: Prefix with `udx_` or `uidx_`
  - `udx_users_email`
- **Full-text indexes**: Prefix with `ftidx_`
  - `ftidx_articles_content`

### Stored Procedures
- **Verb-noun format**: Indicates action and entity
  - `get_customer_orders`, `calculate_inventory_value`
- **Case style**: snake_case (most DBMSs)
  - `update_product_prices`, `generate_monthly_report`

### Views
- **Descriptive of what they show**:
  - `active_customers`, `product_inventory_levels`
- **Prefix**: Sometimes prefixed with `v_` or `vw_`
  - `v_customer_orders`, `vw_product_inventory`

### Triggers
- **Format**: `trg_[table]_[action]_[when]`
  - `trg_orders_update_inventory_after`, `trg_users_update_audit_before`

### SQL-Specific
- **Keywords**: UPPERCASE (conventional, not required)
  - `SELECT * FROM users WHERE status = 'active';`
- **Aliases**: Short, meaningful, lowercase
  - `SELECT u.name FROM users u JOIN orders o ON u.id = o.user_id;`

## File and Directory Naming

### Source Code Files
- **Match the primary export/content**: Named after the primary class or function
  - `UserRepository.java`, `string_utilities.py`
- **Case style**: Language-dependent
  - JavaScript: `userService.js` or `user-service.js`
  - Python: `user_service.py`
  - Java: `UserService.java`
- **File extensions**: Standard for the language
  - `.js`, `.py`, `.java`, `.cs`, `.go`, `.rb`, etc.

### Configuration Files
- **Descriptive of purpose**: Clear indication of what is being configured
  - `database.config.js`, `logging.properties`
- **Environment-specific**: Indicate environment in the name
  - `config.dev.json`, `config.prod.json`
- **Use standard formats**: Follow framework or tool conventions
  - `.env`, `docker-compose.yml`, `package.json`

### Static Assets
- **Descriptive of content**: Clear indication of what the asset contains
  - `logo.png`, `background-texture.jpg`
- **Case style**: Typically kebab-case
  - `hero-image.png`, `user-avatar.svg`
- **Version or dimensions**: Sometimes included in name
  - `logo-v2.png`, `header-bg-1920x300.jpg`

### Directories
- **Descriptive of contents**: Clear indication of what the directory contains
  - `images/`, `components/`, `utils/`
- **Case style**: Typically lowercase or kebab-case
  - `node_modules/`, `test-results/`
- **Structural patterns**: Follow project structure conventions
  - `src/`, `tests/`, `docs/`, `bin/`

### Build and Compilation Artifacts
- **Describe operation**: Indicate what created them and their purpose
  - `build/`, `dist/`, `target/`
- **Temporary files**: Indicate their ephemeral nature
  - `tmp/`, `.cache/`
- **Generated code**: Indicate automated generation
  - `gen/`, `generated-sources/`

## HTML, CSS, and Web Development

### HTML
- **Element IDs**: camelCase or kebab-case (team preference)
  - `mainNavigation` or `main-navigation`
- **CSS Classes**: kebab-case
  - `header-title`, `nav-item-active`
- **Data attributes**: kebab-case
  - `data-user-id`, `data-toggle`
- **File names**: Index files and descriptive content files
  - `index.html`, `about-us.html`, `privacy-policy.html`

### CSS/SCSS
- **Classes**: kebab-case
  - `.primary-button`, `.form-container`
- **BEM Methodology** (Block Element Modifier):
  - Block: `.card`
  - Element: `.card__title`, `.card__image`
  - Modifier: `.card--featured`, `.card__title--large`
- **Variables**: kebab-case
  - `--primary-color`, `--spacing-unit`
- **File names**: Component-based or functional grouping
  - `buttons.css`, `layout.css`, `typography.css`

### JavaScript for Web
- **Component names**: PascalCase
  - `Header`, `ProductCard`, `LoginForm`
- **Handler functions**: Prefix with `handle` or `on`
  - `handleSubmit`, `onUserClick`
- **DOM references**: Suffix with type or element
  - `emailInput`, `submitButton`, `userNameField`
- **Module files**: Describe primary export
  - `authentication.js`, `form-validation.js`

## API Design

### RESTful Endpoints
- **Resources**: Plural nouns for collections
  - `/users`, `/products`, `/order-items`
- **Case style**: kebab-case for paths
  - `/product-categories`, `/user-profiles`
- **Actions**: HTTP methods instead of verbs in URLs
  - `GET /users` instead of `/getUsers`
  - `POST /orders` instead of `/createOrder`
- **Query parameters**: camelCase or snake_case (consistent with language)
  - `/products?sortBy=price&orderDirection=asc`
  - `/users?filter_by=role&include_inactive=true`

### GraphQL
- **Types**: PascalCase
  - `User`, `Product`, `OrderItem`
- **Fields**: camelCase
  - `firstName`, `productPrice`, `isActive`
- **Queries/Mutations**: camelCase
  - `getUserProfile`, `createOrder`, `updateProductPrice`
- **Input Types**: Suffix with `Input`
  - `UserInput`, `ProductFilterInput`

### SOAP and RPC
- **Service names**: PascalCase, suffix with `Service`
  - `UserManagementService`, `PaymentProcessingService`
- **Method names**: PascalCase or camelCase (language-dependent)
  - `GetUserById`, `processPayment`
- **Parameter names**: camelCase
  - `userId`, `paymentAmount`

### Internal APIs
- **Follow language conventions** of implementation
- **Document deviations** from external-facing APIs

## Version Control

### Branches
- **Feature branches**: Prefix with `feature/`
  - `feature/user-authentication`, `feature/shopping-cart`
- **Bug fixes**: Prefix with `fix/` or `bugfix/`
  - `fix/login-error`, `bugfix/calculation-precision`
- **Releases**: Prefix with `release/`
  - `release/v1.2.0`, `release/2023-Q2`
- **Hotfixes**: Prefix with `hotfix/`
  - `hotfix/security-vulnerability`, `hotfix/payment-processing`

### Commits
- **Conventional Commits**: Type-scoped messages
  - `feat(user): add password reset functionality`
  - `fix(api): correct response status code for validation errors`
  - `docs(readme): update installation instructions`
- **Ticket references**: Include in message or branch
  - `feat(auth): implement single sign-on [PROJ-123]`

### Tags
- **Versions**: Semantic versioning
  - `v1.0.0`, `v2.3.1-rc.1`
- **Releases**: Version with optional description
  - `release-2.0.0`, `sprint-12-release`

## Project Organization

### Repository Names
- **Descriptive of purpose**: Clear indication of the project's function
  - `user-authentication-service`, `inventory-management-system`
- **Case style**: kebab-case is most common
  - `data-visualization-library`, `marketing-website`
- **Organizational prefixes**: Sometimes used for grouping
  - `acme-user-service`, `acme-payment-processor`

### Project Structure
- **Standard directories**: Follow language/framework conventions
  - Java: `src/main/java`, `src/test/java`
  - Node.js: `src/`, `tests/`, `dist/`
- **Module organization**: Functional or feature-based grouping
  - By feature: `users/`, `products/`, `orders/`
  - By layer: `controllers/`, `services/`, `repositories/`

### Documentation
- **README**: Primary project description and getting started
  - `README.md`
- **Specialized docs**: Focused on specific aspects
  - `CONTRIBUTING.md`, `SECURITY.md`, `API.md`
- **Generated docs**: Based on source code comments
  - JavaDoc, JSDoc, etc.

## Special Domains

### Machine Learning
- **Models**: Descriptive of architecture and purpose
  - `TextClassificationBERT`, `ImageSegmentationUNet`
- **Datasets**: Content and source information
  - `mnist_handwritten_digits`, `imagenet_2012`
- **Hyperparameters**: Descriptive of what they control
  - `learning_rate`, `batch_size`, `dropout_probability`
- **Experiments**: Structured naming with date/version
  - `object_detection_v3_2023-01-15`

### Game Development
- **Game Objects**: PascalCase, descriptive of entity
  - `Player`, `EnemySpawner`, `TerrainManager`
- **Components**: Suffix with `Component`
  - `MovementComponent`, `HealthComponent`
- **Asset files**: Descriptive with type and variations
  - `character_male_knight.fbx`, `texture_grass_dry.png`
- **Levels/Maps**: Descriptive or sequential
  - `forest_dungeon`, `level_05_boss`

### Embedded Systems
- **Hardware registers**: SCREAMING_SNAKE_CASE
  - `PORTB`, `TIMER0_CONTROL`
- **Peripheral drivers**: Prefix with device type
  - `i2c_init()`, `usart_send_byte()`
- **Interrupt handlers**: Suffix with `_IRQHandler`
  - `USART1_IRQHandler`, `TIM2_IRQHandler`

### Mobile Development
- **iOS**:
  - Follow Swift/Objective-C conventions
  - UI elements: Suffix with element type (`loginButton`, `userNameLabel`)
  - View controllers: Suffix with `ViewController` (`ProfileViewController`)
- **Android**:
  - XML layouts: Describe screen or component (`activity_main.xml`, `fragment_profile.xml`)
  - Resource IDs: Use snake_case (`button_login`, `text_username`)
  - Java/Kotlin classes: Follow language conventions

## Common Anti-patterns

### Vague Names
- **Avoid**: `data`, `info`, `utils`, `manager`, `processor`
- **Better**: Be specific about the data type or purpose
  - `userData` → `userProfile`
  - `utils` → `stringFormatter`

### Misleading Names
- **Avoid**: Names that don't match the actual functionality
  - A function called `checkPassword()` that actually sets a password
- **Better**: Make names match actual behavior
  - `checkPassword()` → `validatePassword()`
  - `setPassword()` for setting passwords

### Hungarian Notation Misuse
- **Outdated**: Prefixing type information unnecessarily
  - `strName`, `intCount`, `boolIsValid`
- **Modern**: Let the language's type system handle this
  - `name`, `count`, `isValid`

### Inconsistent Pluralization
- **Confusing**: Mixing singular and plural for similar things
  - `getUserMessages()` and `deleteUserComment()`
- **Better**: Be consistent with pluralization
  - Collections should be plural: `users`, `messages`
  - Singular for individuals: `user`, `message`

### Over-abbreviation
- **Cryptic**: Excessive shortening makes code hard to read
  - `cal_ttl_px()` for "calculate total price"
- **Better**: Abbreviate only when conventional or necessary
  - Use full words: `calculateTotalPrice()`
  - Use standard abbreviations: `html`, `url`, `id`

### Non-descriptive Loop Variables
- **Overused**: `i`, `j`, `k` for everything
- **Better**: Use descriptive names for non-trivial loops
  - `for (let i = 0; i < 10; i++)` is fine for simple cases
  - `for (let userIndex = 0; userIndex < users.length; userIndex++)` for clarity in complex cases

## Tools for Enforcement

### Linters
- **ESLint**: JavaScript/TypeScript naming conventions
- **Pylint/Flake8**: Python naming rules
- **CheckStyle**: Java naming standards
- **RuboCop**: Ruby naming conventions
- **StyleCop**: C# naming standards

### Editor Configuration
- **.editorconfig**: Standardize spacing, line endings, etc.
- **IDE project settings**: Share naming templates

### Pre-commit Hooks
- **Enforce conventions** before code is committed
- **Automated fixes** for common issues

### Code Reviews
- **Naming checklists** for reviewers
- **Style guides** with examples

## Cultural Considerations

### Team Conventions
- **Document standards** specific to your team
- **Create examples** of good and bad naming
- **Update guidelines** as needs evolve

### Legacy Code
- **Be consistent** with existing patterns when modifying
- **Refactor gradually** rather than mixed styles
- **Document technical debt** related to naming

### Multilingual Considerations
- **Use English** for code (industry standard)
- **Be aware of character set limitations**
- **Consider translation needs** for user-facing content

## Resources

### Style Guides
- **Google Style Guides**: Language-specific conventions
- **Microsoft .NET Framework Guidelines**: Naming patterns
- **Airbnb JavaScript Style Guide**: JavaScript naming
- **PEP 8**: Python style guide
- **Ruby Style Guide**: Ruby naming practices

### Books
- "Clean Code" by Robert C. Martin
- "Code Complete" by Steve McConnell
- "The Art of Readable Code" by Dustin Boswell and Trevor Foucher

### Tools
- **Name generators**: Assist in creating meaningful names
- **Linting tools**: Automate convention enforcement
- **Refactoring tools**: Help with consistent renaming