# AnimateX Documentation

<p align="center">
  <img src="assets/logo.png" alt="AnimateX Logo" width="200"/>
  <br>
  <em>Professional Animation Framework for Modern Web Applications</em>
</p>

<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#features">Features</a> •
  <a href="#api">API</a> •
  <a href="#examples">Examples</a>
</p>

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Core Concepts](#core-concepts)
- [Features](#features)
- [API Reference](#api-reference)
- [Advanced Usage](#advanced-usage)
- [Performance Optimization](#performance-optimization)
- [Browser Support](#browser-support)
- [Migration Guide](#migration-guide)
- [Contributing](#contributing)

## Installation

### CDN (Recommended)
```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animatex@1.0.0/dist/animatex.min.css">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/animatex@1.0.0/dist/animatex.min.js"></script>
```

### NPM
```bash
npm install animatex
```

### Yarn
```bash
yarn add animatex
```

## Quick Start

Add animations to any element using HTML attributes:

```html
<!-- Basic Animation -->
<div anx-animate="fade-in">
    Fades in when visible
</div>

<!-- With Customization -->
<div anx-animate="slide-up" 
     class="anx-duration-500 anx-ease-bounce">
    Bouncy slide up animation
</div>

<!-- Interactive Elements -->
<button anx-hover="pulse" anx-click="click-pulse">
    Interactive Button
</button>
```

## Core Concepts

### 1. Animation Types

#### Entry/Exit Animations
```html
<div anx-animate="fade-in">Fade In</div>
<div anx-animate="slide-up">Slide Up</div>
<div anx-animate="zoom-in">Zoom In</div>
```

#### Attention Grabbers
```html
<div anx-animate="pulse">Pulse</div>
<div anx-animate="shake">Shake</div>
<div anx-animate="bounce">Bounce</div>
```

#### State Changes
```html
<button anx-hover="hover-scale">Scale on Hover</button>
<button anx-click="click-pulse">Pulse on Click</button>
```

#### Complex Animations
```html
<div anx-animate="spin-fade">Spin and Fade</div>
<div anx-animate="zoom-rotate">Zoom and Rotate</div>
```

### 2. Customization Options

#### Duration Control
```html
<!-- Predefined Durations -->
<div class="anx-fast">300ms</div>
<div class="anx-slow">1000ms</div>

<!-- Specific Durations -->
<div class="anx-duration-500">500ms</div>
<div class="anx-duration-2000">2000ms</div>
```

#### Easing Functions
```html
<!-- Standard Easing -->
<div class="anx-ease-in-out">Smooth</div>
<div class="anx-ease-bounce">Bouncy</div>

<!-- Professional Easing -->
<div class="anx-ease-spring">Spring Effect</div>
<div class="anx-ease-elastic">Elastic Effect</div>
```

#### Delay Control
```html
<div class="anx-delay-200">200ms delay</div>
<div class="anx-delay-500">500ms delay</div>
```

#### Iteration Control
```html
<div class="anx-once">Play once</div>
<div class="anx-infinite">Loop forever</div>
<div class="anx-iteration-3">Play three times</div>
```

### 3. Performance Features

#### GPU Acceleration
```html
<div class="anx-gpu">
    GPU-accelerated animation
</div>
```

#### Will-Change Optimization
```html
<div class="anx-will-change-transform">
    Optimized transform animations
</div>
```

#### Motion Reduction
```html
<div class="anx-motion-safe">
    Respects user's motion preferences
</div>
```

## API Reference

### Animation Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `anx-animate` | Defines the entry animation | `anx-animate="fade-in"` |
| `anx-hover` | Defines hover animation | `anx-hover="pulse"` |
| `anx-click` | Defines click animation | `anx-click="click-pulse"` |
| `anx-state` | Defines state animations | `anx-state="focus:hover-glow"` |

### Available Animations

#### Entry/Exit
- `fade-in`, `fade-out`
- `slide-up`, `slide-down`, `slide-left`, `slide-right`
- `zoom-in`, `zoom-out`

#### Complex
- `spin-fade`
- `zoom-rotate`
- `flip-x`, `flip-y`

#### Attention
- `bounce`
- `pulse`
- `shake`
- `wiggle`
- `heartbeat`

### Utility Classes

#### Duration
```css
.anx-fast          /* 300ms */
.anx-duration-500  /* 500ms */
.anx-slow          /* 1000ms */
.anx-duration-2000 /* 2000ms */
```

#### Easing
```css
.anx-ease-in-out
.anx-ease-bounce
.anx-ease-spring
.anx-ease-elastic
.anx-ease-smooth
```

#### Performance
```css
.anx-gpu
.anx-will-change-transform
.anx-motion-safe
```

## Advanced Usage

### Sequence Animations
```html
<div anx-sequence anx-sequence-delay="200">
    <div anx-animate="fade-up">First</div>
    <div anx-animate="fade-up">Second</div>
    <div anx-animate="fade-up">Third</div>
</div>
```

### Combined Effects
```html
<div class="anx-duration-1000 anx-ease-spring anx-gpu"
     anx-animate="zoom-rotate"
     anx-hover="hover-scale">
    Complex Animation
</div>
```

### State Management
```html
<input anx-state="focus:hover-glow active:scale-down"
       class="anx-duration-300">
```

### Parallax Effects
```html
<div anx-parallax="0.5">
    Smooth parallax scrolling
</div>
```

## Performance Optimization

### Best Practices

1. **Use GPU Acceleration Wisely**
```html
<!-- Only for complex animations -->
<div class="anx-gpu">Heavy animation</div>
```

2. **Optimize Property Changes**
```html
<!-- Use transform instead of position -->
<div class="anx-will-change-transform">
    Optimized movement
</div>
```

3. **Respect User Preferences**
```html
<!-- Disable animations for users who prefer reduced motion -->
<div class="anx-motion-safe">
    Motion-sensitive content
</div>
```

### Memory Management
```html
<!-- Clean up animations -->
<div class="anx-fill-forwards">
    Cleanup after animation
</div>
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- Opera 47+

## Migration Guide

### From CSS Animations
```css
/* Before */
.element {
    animation: fadeIn 1s ease-in-out;
}

/* After */
<div anx-animate="fade-in" class="anx-duration-1000 anx-ease-in-out">
```

### From JavaScript Animations
```javascript
// Before
element.animate([
    { opacity: 0 },
    { opacity: 1 }
], 1000);

// After
<div anx-animate="fade-in" class="anx-duration-1000">
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## License

MIT © [AnimateX](https://animatex.dev)