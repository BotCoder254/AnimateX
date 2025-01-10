# Contributing to VelocityFX

First off, thank you for considering contributing to VelocityFX! It's people like you that make VelocityFX such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* Use a clear and descriptive title
* Describe the exact steps which reproduce the problem
* Provide specific examples to demonstrate the steps
* Describe the behavior you observed after following the steps
* Explain which behavior you expected to see instead and why
* Include screenshots if possible

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* Use a clear and descriptive title
* Provide a step-by-step description of the suggested enhancement
* Provide specific examples to demonstrate the steps
* Describe the current behavior and explain which behavior you expected to see instead
* Explain why this enhancement would be useful

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Follow the JavaScript styleguide
* Include thoughtfully-worded, well-structured tests
* Document new code
* End all files with a newline

## Development Process

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Install dependencies (`npm install`)
4. Make your changes
5. Run tests (`npm test`)
6. Commit your changes (`git commit -m 'Add some amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

### Development Setup

```bash
# Clone your fork
git clone https://github.com/your-username/velocityfx.git

# Navigate to the project directory
cd velocityfx

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test
```

### Building

```bash
# Build the framework
npm run build

# Build the website
cd website
npm run build
```

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

### JavaScript Styleguide

* Use 2 spaces for indentation
* Use semicolons
* Use single quotes
* No unused variables
* Space after keywords
* Space after function name
* Always use === instead of ==
* Add trailing commas
* Keep lines under 100 characters

### CSS Styleguide

* Use 2 spaces for indentation
* Each selector on its own line
* Include one space before the opening brace
* Include one space after each property's colon
* End all property declarations with a semicolon
* Close braces on their own line
* Add new line between rules

### Documentation Styleguide

* Use [Markdown](https://guides.github.com/features/mastering-markdown/)
* Reference methods and classes in markdown with the custom {} notation:
    * Reference classes with {ClassName}
    * Reference instance methods with {ClassName#methodName}
    * Reference class methods with {ClassName.methodName}

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

* `bug` - Issues that are bugs
* `documentation` - Issues for improving or updating our documentation
* `enhancement` - Issues for new features or improvements
* `good first issue` - Good for newcomers
* `help wanted` - Extra attention is needed
* `invalid` - Issues that aren't valid
* `question` - Further information is requested
* `wontfix` - Issues that won't be worked on 