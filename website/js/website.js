// Website JavaScript for VelocityFX

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu handling
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            document.body.classList.toggle('overflow-hidden');
        });
    }

    // Code copy functionality
    const codeBlocks = document.querySelectorAll('code');
    codeBlocks.forEach(block => {
        const wrapper = document.createElement('div');
        wrapper.className = 'relative';
        
        const copyButton = document.createElement('button');
        copyButton.className = 'absolute top-2 right-2 p-2 rounded-lg bg-gray-700 text-white opacity-0 transition-opacity hover:bg-gray-600 focus:opacity-100';
        copyButton.innerHTML = `
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
            </svg>
        `;
        
        wrapper.appendChild(block.cloneNode(true));
        wrapper.appendChild(copyButton);
        block.parentNode.replaceChild(wrapper, block);
        
        wrapper.addEventListener('mouseenter', () => {
            copyButton.style.opacity = '1';
        });
        
        wrapper.addEventListener('mouseleave', () => {
            copyButton.style.opacity = '0';
        });
        
        copyButton.addEventListener('click', async () => {
            const code = wrapper.querySelector('code').textContent;
            await navigator.clipboard.writeText(code);
            
            copyButton.innerHTML = `
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
            `;
            
            setTimeout(() => {
                copyButton.innerHTML = `
                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                    </svg>
                `;
            }, 2000);
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without scrolling
                history.pushState(null, null, anchor.getAttribute('href'));
            }
        });
    });

    // Interactive demo controls
    const demoControls = {
        duration: document.querySelector('#demo-duration'),
        easing: document.querySelector('#demo-easing'),
        target: document.querySelector('#demo-target')
    };

    if (demoControls.duration && demoControls.easing && demoControls.target) {
        const updateDemo = () => {
            const duration = demoControls.duration.value;
            const easing = demoControls.easing.value;
            
            demoControls.target.style.setProperty('--anx-duration', `${duration}ms`);
            demoControls.target.style.setProperty('--anx-easing', easing);
        };

        demoControls.duration.addEventListener('input', updateDemo);
        demoControls.easing.addEventListener('change', updateDemo);
    }

    // Performance mode toggle
    const perfModeToggle = document.querySelector('#perf-mode-toggle');
    if (perfModeToggle) {
        perfModeToggle.addEventListener('change', () => {
            document.body.classList.toggle('anx-performance-mode');
        });
    }

    // Theme preference handling
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = (e) => {
        document.documentElement.classList.toggle('dark', e.matches);
    };

    prefersDark.addEventListener('change', handleThemeChange);
    handleThemeChange(prefersDark);

    // Intersection Observer for lazy loading
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('opacity-0');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}); 