document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            // Animate hamburger to X
            const lines = menuToggle.querySelectorAll('span');
            if (mobileMenu.classList.contains('open')) {
                lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                lines[1].style.opacity = '0';
                lines[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                lines[0].style.transform = 'none';
                lines[1].style.opacity = '1';
                lines[2].style.transform = 'none';
            }
        });
    }

    // Header scroll effect
    const header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Scroll animation using Intersection Observer
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animateElements.forEach(el => observer.observe(el));

    // Animated counter for stats
    const stats = document.querySelectorAll('.stat-card strong');
    let hasAnimatedStats = false;
    
    const statsSection = document.querySelector('.stats');
    if (statsSection && stats.length > 0) {
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasAnimatedStats) {
                hasAnimatedStats = true;
                stats.forEach(stat => {
                    const text = stat.innerText;
                    const match = text.match(/(\d+)(\+?)/);
                    if (match) {
                        const target = parseInt(match[1], 10);
                        const suffix = match[2];
                        let current = 0;
                        const increment = target / 50; // 50 frames
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= target) {
                                stat.innerText = target + suffix;
                                clearInterval(timer);
                            } else {
                                stat.innerText = Math.ceil(current) + suffix;
                            }
                        }, 30);
                    }
                });
            }
        });
        statsObserver.observe(statsSection);
    }

    // Donation Amount selection
    const amountBtns = document.querySelectorAll('.amount-btn');
    amountBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            amountBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // clear custom amount if set
            const customInput = document.querySelector('.custom-amount input');
            if (customInput) customInput.value = '';
        });
    });

    // Fund category selection
    const fundBtns = document.querySelectorAll('.fund-btn');
    fundBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            fundBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Smooth scroll to top button
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollTopBtn.style.opacity = '1';
                scrollTopBtn.style.pointerEvents = 'auto';
            } else {
                scrollTopBtn.style.opacity = '0';
                scrollTopBtn.style.pointerEvents = 'none';
            }
        });

        scrollTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
