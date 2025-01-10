# Contributing to AnimateX

First off, thank you for considering contributing to AnimateX! It's people like you that make AnimateX such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by the AnimateX Code of Conduct. By participating, you are expected to uphold this code.

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
* List some other frameworks or applications where this enhancement exists

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Include screenshots and animated GIFs in your pull request whenever possible
* Follow the JavaScript and CSS styleguides
* Include thoughtfully-worded, well-structured tests
* Document new code
* End all files with a newline

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

### JavaScript Styleguide

* Use 4 spaces for indentation
* Use camelCase for variables and functions
* Use PascalCase for classes
* Use const for all of your references; avoid using var
* Use template literals instead of string concatenation
* Use meaningful variable names

```javascript
// Good
const animationDuration = 300;
const userPreference = getUserPreference();

// Bad
const d = 300;
const a = getA();
```

### CSS Styleguide

* Use 4 spaces for indentation
* Put spaces after : in property declarations
* Put spaces before { in rule declarations
* Use hex color codes #000 unless using rgba()
* Use meaningful class names that describe purpose

```css
/* Good */
.anx-fade-in {
    animation-name: fade-in;
    animation-duration: 300ms;
}

/* Bad */
.a {
    animation-name:fadein;
    animation-duration:300ms;
}
```

### Documentation Styleguide

* Use [Markdown](https://guides.github.com/features/mastering-markdown/)
* Reference methods and classes in markdown with the custom {} notation:
    * Reference classes with {ClassName}
    * Reference instance methods with {ClassName#methodName}
    * Reference class methods with {ClassName.methodName}

## Adding New Animations

When adding new animations, please follow these guidelines:

1. **Performance First**
```css
/* Good - Uses transform */
@keyframes anx-slide-up {
    from {
        transform: translateY(30px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Bad - Uses position */
@keyframes anx-slide-up {
    from {
        bottom: -30px;
        opacity: 0;
    }
    to {
        bottom: 0;
        opacity: 1;
    }
}
```

2. **Meaningful Names**
```css
/* Good */
.anx-fade-in { ... }
.anx-slide-up { ... }

/* Bad */
.anx-anim-1 { ... }
.anx-cool-effect { ... }
```

3. **Documentation**
```javascript
/**
 * @name fade-in
 * @description Fades in an element from transparent to opaque
 * @param {number} duration - Animation duration in milliseconds
 * @example
 * <div anx-animate="fade-in" class="anx-duration-500">
 *     Fades in when visible
 * </div>
 */
```

## Setting Up Development Environment

1. Fork the repository
2. Clone your fork
```bash
git clone https://github.com/your-username/animatex.git
```

3. Install dependencies
```bash
cd animatex
npm install
```

4. Create a branch
```bash
git checkout -b feature/your-feature-name
```

5. Make your changes and test them
```bash
npm run dev
npm test
```

6. Push to your fork and submit a pull request

## Development Process

1. Create an issue for the change you want to make
2. Fork the repo and create your branch from main
3. Make your changes
4. Add tests for your changes
5. Run the test suite to ensure nothing is broken
6. Update documentation to reflect any changes
7. Push to your fork and submit a pull request

## Community

* Join our [Discord server](https://discord.gg/animatex)
* Follow us on [Twitter](https://twitter.com/animatex)
* Read our [blog](https://animatex.dev/blog)

## Questions?

Feel free to contact us at contribute@animatex.dev 