# AnimateX Examples

## Basic Examples

### 1. Simple Fade In
```html
<div anx-animate="fade-in">
    This content will fade in when visible
</div>
```

### 2. Customized Animation
```html
<div anx-animate="slide-up" 
     class="anx-duration-500 anx-ease-bounce">
    This content will slide up with a bounce
</div>
```

### 3. Interactive Button
```html
<button class="anx-duration-300"
        anx-hover="hover-scale"
        anx-click="click-pulse">
    Interactive Button
</button>
```

## Real-World Examples

### 1. Hero Section
```html
<header class="hero">
    <h1 anx-animate="fade-down" 
        class="anx-duration-700">
        Welcome to Our Site
    </h1>
    
    <p anx-animate="fade-up" 
       class="anx-delay-300">
        Discover amazing features
    </p>
    
    <div anx-sequence anx-sequence-delay="200">
        <button anx-animate="fade-up"
                anx-hover="hover-scale">
            Get Started
        </button>
        <button anx-animate="fade-up"
                anx-hover="hover-scale">
            Learn More
        </button>
    </div>
</header>
```

### 2. Feature Cards
```html
<div class="features" anx-sequence anx-sequence-delay="150">
    <div class="card" anx-animate="fade-up">
        <div class="icon" anx-hover="pulse">🚀</div>
        <h3>Fast Performance</h3>
        <p>Lightning quick animations</p>
    </div>
    
    <div class="card" anx-animate="fade-up">
        <div class="icon" anx-hover="pulse">⚡</div>
        <h3>Easy to Use</h3>
        <p>Simple HTML attributes</p>
    </div>
    
    <div class="card" anx-animate="fade-up">
        <div class="icon" anx-hover="pulse">🎨</div>
        <h3>Customizable</h3>
        <p>Make it your own</p>
    </div>
</div>
```

### 3. Image Gallery
```html
<div class="gallery" anx-sequence anx-sequence-stagger="random">
    <img src="image1.jpg" 
         anx-animate="zoom-in"
         anx-hover="hover-scale hover-glow"
         class="anx-duration-500">
    
    <img src="image2.jpg"
         anx-animate="zoom-in"
         anx-hover="hover-scale hover-glow"
         class="anx-duration-500">
    
    <img src="image3.jpg"
         anx-animate="zoom-in"
         anx-hover="hover-scale hover-glow"
         class="anx-duration-500">
</div>
```

### 4. Form Elements
```html
<form class="contact-form">
    <input type="text" 
           placeholder="Name"
           anx-state="focus:hover-glow"
           class="anx-duration-300">
    
    <input type="email"
           placeholder="Email"
           anx-state="focus:hover-glow"
           class="anx-duration-300">
    
    <button type="submit"
            anx-hover="hover-scale"
            anx-click="click-pulse"
            class="anx-duration-300">
        Send Message
    </button>
</form>
```

### 5. Parallax Section
```html
<section class="parallax-container">
    <div class="background"
         anx-parallax="0.2">
        Background Layer
    </div>
    
    <div class="middle-layer"
         anx-parallax="0.5">
        Middle Content
    </div>
    
    <div class="foreground"
         anx-parallax="0.8">
        Foreground Content
    </div>
</section>
```

## Advanced Examples

### 1. Complex Animation Sequence
```html
<div class="presentation">
    <div anx-sequence anx-sequence-delay="300">
        <h2 anx-animate="fade-down spin-fade"
            class="anx-duration-1000 anx-ease-spring">
            Main Title
        </h2>
        
        <p anx-animate="fade-up"
           class="anx-delay-200">
            First paragraph
        </p>
        
        <div class="features" 
             anx-sequence 
             anx-sequence-delay="150"
             anx-sequence-stagger="random">
            <div anx-animate="zoom-in">Feature 1</div>
            <div anx-animate="zoom-in">Feature 2</div>
            <div anx-animate="zoom-in">Feature 3</div>
        </div>
    </div>
</div>
```

### 2. Interactive Card
```html
<div class="card"
     anx-animate="fade-up"
     anx-hover="hover-scale"
     class="anx-duration-500 anx-gpu">
    
    <div class="card-header"
         anx-hover="hover-glow"
         class="anx-duration-300">
        <h3>Premium Plan</h3>
        <span class="price"
              anx-hover="pulse"
              class="anx-duration-500">
            $99
        </span>
    </div>
    
    <ul class="features"
        anx-sequence
        anx-sequence-delay="100">
        <li anx-animate="fade-left">Feature 1</li>
        <li anx-animate="fade-left">Feature 2</li>
        <li anx-animate="fade-left">Feature 3</li>
    </ul>
    
    <button anx-hover="hover-scale"
            anx-click="click-pulse"
            class="anx-duration-300 anx-ease-bounce">
        Get Started
    </button>
</div>
```

### 3. Loading States
```html
<div class="loader">
    <div class="spinner"
         anx-animate="rotate"
         class="anx-infinite anx-duration-1000 anx-linear">
        Loading...
    </div>
    
    <div class="progress-bar"
         anx-animate="slide-right"
         class="anx-duration-2000 anx-ease-out">
        Progress
    </div>
</div>
```

### 4. Mobile Menu
```html
<nav class="mobile-menu"
     anx-state="active:slide-right"
     class="anx-duration-300 anx-ease-out">
    
    <button class="close"
            anx-hover="hover-scale"
            anx-click="click-pulse">
        Close
    </button>
    
    <ul anx-sequence anx-sequence-delay="100">
        <li anx-animate="fade-left">Home</li>
        <li anx-animate="fade-left">About</li>
        <li anx-animate="fade-left">Services</li>
        <li anx-animate="fade-left">Contact</li>
    </ul>
</nav>
```

### 5. Scroll-Based Animations
```html
<section class="scroll-section">
    <div class="progress-indicator"
         anx-parallax="0.1"
         class="anx-gpu">
        <div class="bar"></div>
    </div>
    
    <div class="content"
         anx-sequence
         anx-sequence-delay="200">
        <h2 anx-animate="fade-up zoom-in"
            class="anx-duration-700">
            Section Title
        </h2>
        
        <p anx-animate="fade-up"
           class="anx-duration-500">
            Content paragraph
        </p>
        
        <img src="image.jpg"
             anx-animate="zoom-rotate"
             class="anx-duration-1000 anx-ease-spring">
    </div>
</section>
```

## Performance Examples

### 1. Optimized List Rendering
```html
<ul class="infinite-list"
    anx-sequence
    anx-sequence-delay="50">
    <!-- Use will-change for items that will animate -->
    <li class="anx-will-change-transform"
        anx-animate="fade-up">
        List Item
    </li>
</ul>
```

### 2. Heavy Animation Optimization
```html
<div class="complex-animation"
     class="anx-gpu anx-will-change-both"
     anx-animate="zoom-rotate"
     anx-hover="hover-scale">
    Heavy Animation Content
</div>
```

### 3. Responsive Animations
```html
<div class="responsive-element"
     anx-animate="fade-up"
     class="anx-motion-safe">
    <!-- Respects user's motion preferences -->
    Content
</div>
``` 