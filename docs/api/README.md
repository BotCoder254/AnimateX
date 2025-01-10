# AnimateX API Reference

## Core API

### Animation Attributes

#### `anx-animate`
Defines the entry/exit animation for an element.

```html
<div anx-animate="fade-in">Content</div>
```

**Available Values:**
- Entry/Exit: `fade-in`, `fade-out`, `slide-up`, `slide-down`, `slide-left`, `slide-right`, `zoom-in`, `zoom-out`
- Complex: `spin-fade`, `zoom-rotate`, `flip-x`, `flip-y`
- Attention: `bounce`, `pulse`, `shake`, `wiggle`, `heartbeat`

#### `anx-hover`
Defines hover animations.

```html
<button anx-hover="pulse">Hover me</button>
```

**Available Values:**
- `hover-scale`
- `hover-glow`
- `pulse`
- `shake`
- `wiggle`
- `bounce`

#### `anx-click`
Defines click animations.

```html
<button anx-click="click-pulse">Click me</button>
```

**Available Values:**
- `click-pulse`
- `click-scale`
- `click-bounce`

#### `anx-state`
Defines state-based animations.

```html
<input anx-state="focus:hover-glow active:scale-down">
```

**Format:** `state:animation`
**States:** `focus`, `active`, `disabled`
**Animations:** Any hover or click animation

#### `anx-sequence`
Creates sequential animations for child elements.

```html
<div anx-sequence anx-sequence-delay="200">
    <div>First</div>
    <div>Second</div>
</div>
```

**Attributes:**
- `anx-sequence-delay`: Delay between animations (in ms)
- `anx-sequence-stagger`: "linear" or "random"

#### `anx-parallax`
Creates parallax scrolling effects.

```html
<div anx-parallax="0.5">Parallax content</div>
```

**Values:** 0 to 1 (speed factor)

### Utility Classes

#### Duration Classes
Controls animation duration.

```html
<div class="anx-duration-500">500ms animation</div>
```

**Available Classes:**
```css
.anx-fast           /* 300ms */
.anx-duration-100   /* 100ms */
.anx-duration-200   /* 200ms */
.anx-duration-300   /* 300ms */
.anx-duration-400   /* 400ms */
.anx-duration-500   /* 500ms */
.anx-duration-600   /* 600ms */
.anx-duration-700   /* 700ms */
.anx-duration-800   /* 800ms */
.anx-duration-900   /* 900ms */
.anx-duration-1000  /* 1000ms */
.anx-slow           /* 1000ms */
.anx-duration-1500  /* 1500ms */
.anx-duration-2000  /* 2000ms */
.anx-duration-2500  /* 2500ms */
.anx-duration-3000  /* 3000ms */
```

#### Easing Classes
Controls animation timing functions.

```html
<div class="anx-ease-bounce">Bouncy animation</div>
```

**Available Classes:**
```css
.anx-ease           /* ease */
.anx-linear         /* linear */
.anx-ease-in        /* cubic-bezier(0.4, 0, 1, 1) */
.anx-ease-out       /* cubic-bezier(0, 0, 0.2, 1) */
.anx-ease-in-out    /* cubic-bezier(0.4, 0, 0.2, 1) */
.anx-ease-bounce    /* cubic-bezier(0.68, -0.55, 0.265, 1.55) */
.anx-ease-elastic   /* cubic-bezier(0.68, -0.6, 0.32, 1.6) */
.anx-ease-smooth    /* cubic-bezier(0.4, 0.1, 0.3, 1) */
.anx-ease-spring    /* cubic-bezier(0.43, 0.28, 0.12, 1.23) */
.anx-ease-pop       /* cubic-bezier(0.68, -0.3, 0.32, 1.4) */
```

#### Delay Classes
Controls animation start delay.

```html
<div class="anx-delay-500">Delayed animation</div>
```

**Available Classes:**
```css
.anx-delay-0        /* 0ms */
.anx-delay-50       /* 50ms */
.anx-delay-100      /* 100ms */
.anx-delay-150      /* 150ms */
.anx-delay-200      /* 200ms */
.anx-delay-300      /* 300ms */
.anx-delay-400      /* 400ms */
.anx-delay-500      /* 500ms */
.anx-delay-600      /* 600ms */
.anx-delay-700      /* 700ms */
.anx-delay-800      /* 800ms */
.anx-delay-900      /* 900ms */
.anx-delay-1000     /* 1000ms */
```

#### Iteration Classes
Controls animation repeat count.

```html
<div class="anx-infinite">Infinite animation</div>
```

**Available Classes:**
```css
.anx-once           /* 1 time */
.anx-twice          /* 2 times */
.anx-thrice         /* 3 times */
.anx-iteration-1    /* 1 time */
.anx-iteration-2    /* 2 times */
.anx-iteration-3    /* 3 times */
.anx-iteration-4    /* 4 times */
.anx-iteration-5    /* 5 times */
.anx-infinite       /* infinite */
```

#### Direction Classes
Controls animation direction.

```html
<div class="anx-alternate">Alternating animation</div>
```

**Available Classes:**
```css
.anx-normal              /* normal */
.anx-reverse            /* reverse */
.anx-alternate          /* alternate */
.anx-alternate-reverse  /* alternate-reverse */
```

#### Performance Classes
Optimizes animation performance.

```html
<div class="anx-gpu">GPU-accelerated animation</div>
```

**Available Classes:**
```css
.anx-gpu                    /* GPU acceleration */
.anx-will-change-transform  /* Transform optimization */
.anx-will-change-opacity    /* Opacity optimization */
.anx-will-change-both      /* Both optimizations */
.anx-motion-safe           /* Respects reduced motion */
```

### JavaScript API

#### Initialization
```javascript
// Auto-initialization
document.addEventListener('DOMContentLoaded', () => {
    window.AnimateX = AnimateX.init();
});

// Manual initialization with options
const animations = AnimateX.init({
    threshold: 0.2,
    rootMargin: '50px'
});
```

#### Configuration Options
```javascript
{
    // IntersectionObserver options
    threshold: 0.1,        // Visibility threshold
    rootMargin: '20px',    // Root margin
    
    // Animation defaults
    duration: '1s',        // Default duration
    easing: 'ease',        // Default easing
    delay: '0s'           // Default delay
}
```

#### Events
```javascript
// Animation start
document.addEventListener('anx:start', (e) => {
    console.log('Animation started:', e.detail);
});

// Animation end
document.addEventListener('anx:end', (e) => {
    console.log('Animation ended:', e.detail);
});
```

### CSS Variables

```css
/* Custom Properties */
:root {
    --anx-duration: 1s;
    --anx-easing: ease;
    --anx-delay: 0s;
}

/* Usage */
.custom-animation {
    animation-duration: var(--anx-duration);
    animation-timing-function: var(--anx-easing);
    animation-delay: var(--anx-delay);
}
```

## Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Basic Animations | 60+ | 55+ | 11+ | 79+ |
| CSS Variables | 49+ | 31+ | 9.1+ | 79+ |
| Intersection Observer | 58+ | 55+ | 12.1+ | 79+ |
| CSS Grid (Demo) | 57+ | 52+ | 10.1+ | 79+ | 