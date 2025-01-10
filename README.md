<div align="center">
  <img src="website/assets/logo.svg" alt="VelocityFX Logo" width="120" height="120">
  <h1>VelocityFX</h1>
  <p>Professional Animation Framework for Modern Web Applications</p>

  [![npm version](https://img.shields.io/npm/v/velocityfx.svg?style=flat-square)](https://www.npmjs.com/package/velocityfx)
  [![Build Status](https://img.shields.io/github/workflow/status/velocityfx/velocityfx/Build%20and%20Deploy?style=flat-square)](https://github.com/velocityfx/velocityfx/actions)
  [![License](https://img.shields.io/npm/l/velocityfx.svg?style=flat-square)](https://github.com/velocityfx/velocityfx/blob/main/LICENSE)
  [![Bundle Size](https://img.shields.io/bundlephobia/minzip/velocityfx?style=flat-square)](https://bundlephobia.com/package/velocityfx)
  [![Downloads](https://img.shields.io/npm/dm/velocityfx.svg?style=flat-square)](https://www.npmjs.com/package/velocityfx)
</div>

## Features

- 🚀 **Zero JavaScript Required** - Add animations directly in HTML
- 🎨 **Professional Animations** - Elegant, subtle, and smooth transitions
- 📱 **Responsive by Default** - Optimized for all screen sizes
- ⚡ **Performance Focused** - GPU-accelerated animations
- ♿ **Accessibility First** - Respects user preferences
- 🎯 **Trigger Based** - Scroll, hover, and click animations
- 🔄 **Sequence Animations** - Create complex animation chains
- 🛠️ **Utility First** - Composable animation classes
- 📦 **Lightweight** - Only 5KB gzipped
- 🌐 **Browser Support** - Works in all modern browsers

## Quick Start

### CDN

Add VelocityFX to your project using our CDN:

```html
<!-- Add to your <head> -->
<link href="https://cdn.jsdelivr.net/npm/velocityfx@latest/dist/velocityfx.min.css" rel="stylesheet">

<!-- Add before </body> -->
<script src="https://cdn.jsdelivr.net/npm/velocityfx@latest/dist/velocityfx.min.js"></script>
```

### NPM

```bash
npm install velocityfx
```

Then import in your project:

```javascript
import 'velocityfx/dist/velocityfx.min.css';
import VelocityFX from 'velocityfx';

const vfx = new VelocityFX();
```

## Basic Usage

Add animation classes directly to your HTML elements:

```html
<!-- Entry Animations -->
<div class="anx-fade-in">Fades in on load</div>
<div class="anx-slide-up">Slides up on load</div>

<!-- Hover Animations -->
<button class="anx-hover-scale">Scales on hover</button>
<div class="anx-hover-lift">Lifts on hover</div>

<!-- Scroll Animations -->
<div data-anx-scroll class="anx-fade-up">
  Animates when scrolled into view
</div>

<!-- Sequence Animations -->
<div anx-sequence anx-sequence-delay="200">
  <div anx-animate="fade-up">First</div>
  <div anx-animate="fade-up">Second</div>
  <div anx-animate="fade-up">Third</div>
</div>
```

## Documentation

Visit our documentation for detailed guides and examples:

- [Getting Started](https://velocityfx.dev/docs)
- [Examples](https://velocityfx.dev/examples)
- [API Reference](https://velocityfx.dev/api)

## Browser Support

VelocityFX supports all modern browsers:

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- Opera 47+

## Performance

VelocityFX is built with performance in mind:

- Uses GPU-accelerated properties (transform, opacity)
- Automatically disables animations on low-end devices
- Respects `prefers-reduced-motion`
- Optimized bundle size (5KB gzipped)
- No dependencies

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

VelocityFX is [MIT licensed](LICENSE).

## Support

- 📖 [Documentation](https://velocityfx.dev/docs)
- 💬 [Discord Community](https://discord.gg/velocityfx)
- 🐦 [Twitter](https://twitter.com/velocityfx)
- 📧 [Email Support](mailto:support@velocityfx.dev)

## Credits

Created and maintained by the VelocityFX team.