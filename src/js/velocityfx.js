/**
 * VelocityFX - Professional Animation Framework
 * Version 1.0.0
 * MIT License
 */

class VelocityFX {
    constructor(options = {}) {
        this.options = {
            defaultDuration: 300,
            defaultEasing: 'ease',
            mobileOptimize: true,
            responsiveBreakpoints: {
                sm: 640,
                md: 768,
                lg: 1024,
                xl: 1280,
                '2xl': 1536
            },
            scrollThreshold: 0.1,
            scrollRootMargin: '0px',
            triggerOnce: true,
            accessibilityMode: 'auto', // 'auto', 'reduced', 'full'
            safeAnimationDuration: 400,
            announceAnimations: false,
            ...options
        };

        this.init();
    }

    init() {
        this.setupPerformanceMode();
        this.setupResponsiveHandlers();
        this.setupIntersectionObserver();
        this.setupScrollObserver();
        this.setupTriggers();
        this.setupAccessibility();
    }

    setupPerformanceMode() {
        // Check for reduced motion preference
        this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        // Check device capabilities
        this.isLowEndDevice = this.checkLowEndDevice();
        
        // Set performance mode
        this.performanceMode = this.determinePerformanceMode();
    }

    checkLowEndDevice() {
        // Check for low-end device indicators
        const memory = navigator.deviceMemory;
        const cores = navigator.hardwareConcurrency;
        const connection = navigator.connection?.effectiveType;

        return (memory && memory <= 4) || 
               (cores && cores <= 4) || 
               (connection && ['slow-2g', '2g', '3g'].includes(connection));
    }

    determinePerformanceMode() {
        if (this.prefersReducedMotion) return 'minimal';
        if (this.isLowEndDevice) return 'light';
        return 'rich';
    }

    setupResponsiveHandlers() {
        this.breakpoints = Object.entries(this.options.responsiveBreakpoints)
            .map(([key, value]) => ({
                name: key,
                query: window.matchMedia(`(min-width: ${value}px)`),
                value
            }));

        this.breakpoints.forEach(bp => {
            bp.query.addEventListener('change', () => this.handleBreakpointChange(bp));
        });

        // Initial breakpoint check
        this.currentBreakpoint = this.getCurrentBreakpoint();
    }

    getCurrentBreakpoint() {
        const active = this.breakpoints
            .filter(bp => bp.query.matches)
            .sort((a, b) => b.value - a.value);
        return active[0]?.name || 'base';
    }

    handleBreakpointChange(breakpoint) {
        const newBreakpoint = this.getCurrentBreakpoint();
        if (this.currentBreakpoint !== newBreakpoint) {
            this.currentBreakpoint = newBreakpoint;
            this.updateResponsiveAnimations();
        }
    }

    setupIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.handleElementInView(entry.target);
                }
            });
        }, options);

        // Observe all animated elements
        document.querySelectorAll('[data-anx]').forEach(el => {
            this.observer.observe(el);
        });
    }

    handleElementInView(element) {
        const animation = element.getAttribute('data-anx');
        if (!animation) return;

        // Update accessibility features
        this.updateElementAccessibility(element);

        // Apply animation based on accessibility mode
        if (this.accessibilityMode === 'reduced') {
            element.classList.add('anx-reduced');
        } else {
            this.applyResponsiveAnimation(element, animation);
        }

        // Optimize animation based on performance mode
        this.optimizeAnimation(element);
    }

    applyResponsiveAnimation(element, animation) {
        // Remove existing animation classes
        element.classList.remove(...Array.from(element.classList)
            .filter(c => c.startsWith('anx-')));

        // Add responsive animation class
        const responsiveClass = this.currentBreakpoint === 'base' 
            ? `anx-${animation}`
            : `${this.currentBreakpoint}\\:anx-${animation}`;
        
        element.classList.add('anx-animated', responsiveClass);

        // Apply performance-based optimizations
        if (this.options.mobileOptimize && window.innerWidth < 640) {
            element.classList.add('anx-mobile-optimize');
        }
    }

    optimizeAnimation(element) {
        switch (this.performanceMode) {
            case 'minimal':
                element.classList.add('anx-motion-safe');
                break;
            case 'light':
                element.classList.add('anx-perf-light');
                break;
            case 'rich':
                element.classList.add('anx-perf-rich');
                break;
        }

        // Add data-saving optimizations if needed
        if (navigator.connection?.saveData) {
            element.classList.add('anx-data-safe');
        }
    }

    setupScrollObserver() {
        const options = {
            root: null,
            rootMargin: this.options.scrollRootMargin,
            threshold: this.options.scrollThreshold
        };

        this.scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.handleScrollElement(entry.target);
                    if (this.options.triggerOnce) {
                        this.scrollObserver.unobserve(entry.target);
                    }
                }
            });
        }, options);

        // Observe scroll-based elements
        document.querySelectorAll('[data-anx-scroll]').forEach(el => {
            this.scrollObserver.observe(el);
        });
    }

    handleScrollElement(element) {
        const animation = element.getAttribute('data-anx-scroll');
        element.classList.add('anx-scroll-visible');
        
        // Emit custom event
        element.dispatchEvent(new CustomEvent('anxscroll', {
            detail: { animation }
        }));
    }

    setupTriggers() {
        // Setup hover triggers
        document.querySelectorAll('[data-anx-hover]').forEach(el => {
            const animation = el.getAttribute('data-anx-hover');
            el.addEventListener('mouseenter', () => this.handleTrigger(el, animation, 'hover'));
            el.addEventListener('mouseleave', () => this.handleTriggerReset(el, 'hover'));
        });

        // Setup focus triggers
        document.querySelectorAll('[data-anx-focus]').forEach(el => {
            const animation = el.getAttribute('data-anx-focus');
            el.addEventListener('focus', () => this.handleTrigger(el, animation, 'focus'));
            el.addEventListener('blur', () => this.handleTriggerReset(el, 'focus'));
        });

        // Setup click triggers
        document.querySelectorAll('[data-anx-click]').forEach(el => {
            const animation = el.getAttribute('data-anx-click');
            el.addEventListener('click', () => this.handleTrigger(el, animation, 'click'));
        });

        // Setup intersection triggers
        document.querySelectorAll('.anx-observe').forEach(el => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        el.classList.add('is-visible');
                        if (this.options.triggerOnce) {
                            observer.unobserve(el);
                        }
                    }
                },
                { threshold: this.options.scrollThreshold }
            );
            observer.observe(el);
        });
    }

    handleTrigger(element, animation, type) {
        const triggerClass = `anx-${type}-${animation}`;
        element.classList.add(triggerClass);
        
        // Emit custom event
        element.dispatchEvent(new CustomEvent('anxtrigger', {
            detail: { animation, type }
        }));

        // For click animations, remove class after animation
        if (type === 'click') {
            const duration = parseFloat(getComputedStyle(element)
                .getPropertyValue('--anx-duration')) || this.options.defaultDuration;
            
            setTimeout(() => {
                element.classList.remove(triggerClass);
            }, duration);
        }
    }

    handleTriggerReset(element, type) {
        element.classList.remove(`anx-${type}-${element.getAttribute(`data-anx-${type}`)}`);
    }

    setupAccessibility() {
        // Check system preferences
        this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.prefersHighContrast = window.matchMedia('(forced-colors: active)').matches;
        
        // Setup accessibility mode
        this.accessibilityMode = this.determineAccessibilityMode();
        
        // Setup live region for announcements if enabled
        if (this.options.announceAnimations) {
            this.setupLiveRegion();
        }

        // Listen for system preference changes
        window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', () => {
            this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            this.accessibilityMode = this.determineAccessibilityMode();
            this.updateAllAnimations();
        });
    }

    setupLiveRegion() {
        this.liveRegion = document.createElement('div');
        this.liveRegion.setAttribute('aria-live', 'polite');
        this.liveRegion.setAttribute('aria-atomic', 'true');
        this.liveRegion.className = 'anx-sr-only';
        document.body.appendChild(this.liveRegion);
    }

    determineAccessibilityMode() {
        if (this.options.accessibilityMode !== 'auto') {
            return this.options.accessibilityMode;
        }

        if (this.prefersReducedMotion) {
            return 'reduced';
        }

        return this.isLowEndDevice ? 'reduced' : 'full';
    }

    updateAllAnimations() {
        document.querySelectorAll('[data-anx]').forEach(el => {
            this.updateElementAccessibility(el);
        });
    }

    updateElementAccessibility(element) {
        // Remove existing accessibility classes
        element.classList.remove('anx-accessible', 'anx-reduced', 'anx-full');

        // Add appropriate accessibility class
        element.classList.add(`anx-${this.accessibilityMode}`);

        // Update duration if needed
        if (this.accessibilityMode === 'reduced') {
            element.style.setProperty('--anx-duration', `${this.options.safeAnimationDuration}ms`);
        }

        // Ensure proper ARIA attributes
        this.updateAriaAttributes(element);
    }

    updateAriaAttributes(element) {
        const animation = element.getAttribute('data-anx');
        
        // Set appropriate ARIA attributes based on animation type
        if (animation.includes('loading')) {
            element.setAttribute('aria-busy', 'true');
        }
        
        if (animation.includes('expand')) {
            element.setAttribute('aria-expanded', 'false');
        }

        // Ensure interactive elements are properly labeled
        if (!element.hasAttribute('aria-label') && !element.hasAttribute('aria-labelledby')) {
            const label = element.getAttribute('data-anx-label');
            if (label) {
                element.setAttribute('aria-label', label);
            }
        }
    }

    announceAnimation(element, animation) {
        if (!this.options.announceAnimations || !this.liveRegion) return;

        const label = element.getAttribute('data-anx-label') || 
                     element.getAttribute('aria-label') || 
                     element.textContent;

        if (label) {
            this.liveRegion.textContent = `${label} ${animation} animation complete`;
        }
    }

    // Enhanced animate method with accessibility support
    animate(element, animation, options = {}) {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }

        if (!element) return;

        const finalOptions = {
            ...this.options,
            ...options
        };

        // Apply accessibility enhancements
        this.updateElementAccessibility(element);

        // Support for trigger-based animations
        if (options.trigger) {
            element.setAttribute(`data-anx-${options.trigger}`, animation);
            return;
        }

        element.setAttribute('data-anx', animation);
        this.handleElementInView(element);

        return new Promise(resolve => {
            const duration = this.accessibilityMode === 'reduced' 
                ? this.options.safeAnimationDuration 
                : (parseFloat(getComputedStyle(element).getPropertyValue('--anx-duration')) || finalOptions.defaultDuration);

            setTimeout(() => {
                this.announceAnimation(element, animation);
                resolve();
            }, duration);
        });
    }

    // Scroll animation helper
    scroll(element, animation, options = {}) {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }

        if (!element) return;

        element.setAttribute('data-anx-scroll', animation);
        this.scrollObserver.observe(element);
    }

    // Event listener helper
    on(element, event, callback) {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }

        if (!element) return;

        element.addEventListener(`anx${event}`, (e) => callback(e.detail));
    }

    // Sequence animation helper
    async sequence(elements, animation, options = {}) {
        const delay = options.delay || 100;
        const stagger = options.stagger || 50;

        for (let i = 0; i < elements.length; i++) {
            await new Promise(resolve => setTimeout(resolve, i === 0 ? delay : stagger));
            await this.animate(elements[i], animation, options);
        }
    }

    // Utility method to remove animations
    removeAnimation(element) {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }

        if (!element) return;

        element.classList.remove('anx-animated');
        element.removeAttribute('data-anx');
        this.observer.unobserve(element);
    }
}

// Export for different module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VelocityFX;
} else if (typeof define === 'function' && define.amd) {
    define([], function() { return VelocityFX; });
} else {
    window.VelocityFX = VelocityFX;
} 
