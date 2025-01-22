// Navigation handling
document.addEventListener('DOMContentLoaded', function() {
    // Profile dropdown functionality
    const profileContainer = document.querySelector('.profile-container');
    const dropdownIcon = document.querySelector('.dropdown-icon');

    if (profileContainer && dropdownIcon) {
        profileContainer.addEventListener('click', function() {
            // Add dropdown menu functionality here
            console.log('Profile clicked');
        });
    }

    // Content box navigation
    const contentBox = document.querySelector('.content-box');
    if (contentBox) {
        contentBox.addEventListener('click', function() {
            window.location.href = 'tax-filing.html';
        });
    }

    // Enhanced scroll animation functionality
    function handleScrollAnimation() {
        const cards = document.querySelectorAll('.tax-filing-card');
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const cardBottom = card.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            const scrollTrigger = windowHeight * 0.8; // Trigger animation when card is 80% visible
            
            if (cardTop < scrollTrigger && cardBottom > 0) {
                card.classList.add('active');
            } else {
                card.classList.remove('active'); // Remove active class when card is out of view
            }
        });
    }

    // Throttle scroll event for better performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(function() {
            handleScrollAnimation();
        });
    });

    // Initial check for elements in view
    handleScrollAnimation();

    // Add hover effect to cards
    const cards = document.querySelectorAll('.tax-filing-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        });
    });

    // Card navigation with animation delay
    const taxFilingCards = document.querySelectorAll('.tax-filing-card');
    taxFilingCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        
        card.addEventListener('click', function() {
            console.log('Card clicked:', card.querySelector('.card-title').textContent);
        });
    });

    // Create floating particles
    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        document.body.appendChild(particlesContainer);

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.top = Math.random() * 100 + 'vh';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (10 + Math.random() * 10) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    createParticles();

    // Handle button clicks
    const cardButtons = document.querySelectorAll('.card-button');
    cardButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent card click event from firing
        });
    });
}); 