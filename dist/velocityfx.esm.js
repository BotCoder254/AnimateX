/**
 * VelocityFX - Professional Animation Framework
 * Version 1.0.0
 * MIT License
 */

class VelocityFX {
    constructor(options = {}) {
        this.options = {
            threshold: 0.1,
            rootMargin: '20px',
            duration: 300,
            easing: 'ease',
            debug: false,
            ...options
        };

        this.observers = new Map();
        this.initialized = false;
        this.init();
    }

    /**
     * Initialize the animation framework
     * @private
     */
    init() {
        if (this.initialized) return;

        try {
            this.setupAnimationObserver();
            this.setupHoverAnimations();
            this.setupClickAnimations();
            this.setupSequenceAnimations();
            this.setupParallaxEffects();
            this.setupStateAnimations();

            this.initialized = true;
            this.dispatchEvent('vfx:initialized');
        } catch (error) {
            this.handleError('Initialization failed', error);
        }
    }

    /**
     * Set up the Intersection Observer for entry animations
     * @private
     */
    setupAnimationObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    this.applyAnimation(element, 'vfx-animate');
                    observer.unobserve(element);
                }
            });
        }, {
            threshold: this.options.threshold,
            rootMargin: this.options.rootMargin
        });

        this.observers.set('animation', observer);
        this.observeElements('[vfx-animate]', observer);
    }

    /**
     * Set up hover animations
     * @private
     */
    setupHoverAnimations() {
        document.querySelectorAll('[vfx-hover]').forEach(element => {
            const animation = element.getAttribute('vfx-hover');
            if (!animation) return;

            const animations = animation.split(' ');
            const enterHandler = () => {
                requestAnimationFrame(() => {
                    animations.forEach(anim => {
                        element.classList.add(`vfx-${anim}`);
                    });
                    this.dispatchEvent('vfx:hover:start', { element, animations });
                });
            };

            const leaveHandler = () => {
                requestAnimationFrame(() => {
                    animations.forEach(anim => {
                        element.classList.remove(`vfx-${anim}`);
                    });
                    this.dispatchEvent('vfx:hover:end', { element, animations });
                });
            };

            element.addEventListener('mouseenter', enterHandler);
            element.addEventListener('mouseleave', leaveHandler);
            element._vfxCleanup = () => {
                element.removeEventListener('mouseenter', enterHandler);
                element.removeEventListener('mouseleave', leaveHandler);
            };
        });
    }

    /**
     * Set up click animations
     * @private
     */
    setupClickAnimations() {
        document.querySelectorAll('[vfx-click]').forEach(element => {
            const animation = element.getAttribute('vfx-click');
            if (!animation) return;

            const clickHandler = () => {
                const animations = animation.split(' ');
                requestAnimationFrame(() => {
                    animations.forEach(anim => {
                        const className = `vfx-${anim}`;
                        element.classList.add(className);
                        this.dispatchEvent('vfx:click:start', { element, animation: anim });

                        const duration = parseInt(getComputedStyle(element).animationDuration) || this.options.duration;
                        setTimeout(() => {
                            element.classList.remove(className);
                            this.dispatchEvent('vfx:click:end', { element, animation: anim });
                        }, duration);
                    });
                });
            };

            element.addEventListener('click', clickHandler);
            element._vfxCleanup = () => {
                element.removeEventListener('click', clickHandler);
            };
        });
    }

    /**
     * Set up sequence animations
     * @private
     */
    setupSequenceAnimations() {
        document.querySelectorAll('[vfx-sequence]').forEach(parent => {
            const children = Array.from(parent.children);
            const delay = parseInt(parent.getAttribute('vfx-sequence-delay') || 100);
            const stagger = parent.getAttribute('vfx-sequence-stagger');

            children.forEach((child, index) => {
                let computedDelay;
                if (stagger === 'random') {
                    computedDelay = Math.random() * 1000;
                } else {
                    computedDelay = delay * index;
                }

                child.style.setProperty('--vfx-delay', `${computedDelay}ms`);
                this.dispatchEvent('vfx:sequence:item', { element: child, delay: computedDelay, index });
            });

            this.dispatchEvent('vfx:sequence:ready', { element: parent, itemCount: children.length });
        });
    }

    /**
     * Set up parallax effects
     * @private
     */
    setupParallaxEffects() {
        const elements = document.querySelectorAll('[vfx-parallax]');
        if (!elements.length) return;

        let ticking = false;
        const update = () => {
            elements.forEach(element => {
                if (!element.isConnected) return;

                const speed = parseFloat(element.getAttribute('vfx-parallax') || 0.5);
                const rect = element.getBoundingClientRect();
                const scrolled = window.pageYOffset;
                const position = (scrolled - (rect.top + scrolled - window.innerHeight / 2)) * speed;

                requestAnimationFrame(() => {
                    element.style.transform = `translate3d(0, ${position}px, 0)`;
                });
            });
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        }, { passive: true });
    }

    /**
     * Set up state-based animations
     * @private
     */
    setupStateAnimations() {
        document.querySelectorAll('[vfx-state]').forEach(element => {
            const states = element.getAttribute('vfx-state').split(' ');

            states.forEach(state => {
                const [trigger, animation] = state.split(':');
                if (!trigger || !animation) return;

                const addClass = () => element.classList.add(`vfx-${animation}`);
                const removeClass = () => element.classList.remove(`vfx-${animation}`);

                switch (trigger) {
                case 'focus':
                    element.addEventListener('focus', addClass);
                    element.addEventListener('blur', removeClass);
                    break;
                case 'active':
                    element.addEventListener('mousedown', addClass);
                    element.addEventListener('mouseup', removeClass);
                    element.addEventListener('mouseleave', removeClass);
                    break;
                case 'visible':
                    this.createVisibilityObserver(element, animation);
                    break;
                }
            });
        });
    }

    /**
     * Create a visibility observer for an element
     * @private
     */
    createVisibilityObserver(element, animation) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const className = `vfx-${animation}`;
                if (entry.isIntersecting) {
                    element.classList.add(className);
                } else {
                    element.classList.remove(className);
                }
            });
        }, this.options);

        observer.observe(element);
        return observer;
    }

    /**
     * Apply animations to an element
     * @private
     */
    applyAnimation(element, attribute) {
        const animation = element.getAttribute(attribute);
        if (!animation) return;

        const animations = animation.split(' ');
        animations.forEach(anim => {
            requestAnimationFrame(() => {
                element.classList.add('vfx-animated', `vfx-${anim}`);
                this.dispatchEvent('vfx:animate:start', { element, animation: anim });

                element.addEventListener('animationend', () => {
                    this.dispatchEvent('vfx:animate:end', { element, animation: anim });
                }, { once: true });
            });
        });
    }

    /**
     * Observe elements with a specific selector
     * @private
     */
    observeElements(selector, observer) {
        document.querySelectorAll(selector).forEach(element => {
            observer.observe(element);
        });
    }

    /**
     * Dispatch a custom event
     * @private
     */
    dispatchEvent(name, detail = {}) {
        const event = new CustomEvent(name, {
            detail: { ...detail, instance: this }
        });
        document.dispatchEvent(event);

        if (this.options.debug) {
            console.log(`VelocityFX Event: ${name}`, detail);
        }
    }

    /**
     * Handle errors
     * @private
     */
    handleError(message, error) {
        const event = new CustomEvent('vfx:error', {
            detail: { message, error, instance: this }
        });
        document.dispatchEvent(event);

        if (this.options.debug) {
            console.error(`VelocityFX Error: ${message}`, error);
        }
    }

    /**
     * Clean up animations and observers
     * @public
     */
    destroy() {
        this.observers.forEach(observer => observer.disconnect());
        this.observers.clear();

        document.querySelectorAll('[vfx-hover], [vfx-click]').forEach(element => {
            if (element._vfxCleanup) {
                element._vfxCleanup();
                delete element._vfxCleanup;
            }
        });

        this.initialized = false;
        this.dispatchEvent('vfx:destroyed');
    }

    /**
     * Initialize VelocityFX
     * @public
     * @static
     */
    static init(options = {}) {
        return new VelocityFX(options);
    }
}

// Auto-initialize when DOM is loaded
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        window.VelocityFX = VelocityFX.init();
    });
}

export { VelocityFX as default };
//# sourceMappingURL=velocityfx.esm.js.map
