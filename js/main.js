document.addEventListener('DOMContentLoaded', function() {
    // Author modal functionality
    const authorName = document.querySelector('.brand-author');
    const modal = document.getElementById('authorModal');
    const closeModal = document.getElementById('closeModal');

    if (authorName && modal && closeModal) {
        authorName.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.classList.add('modal-open');
        });

        const closeModalFn = () => {
            modal.classList.remove('active');
            document.body.classList.remove('modal-open');
        };

        closeModal.addEventListener('click', closeModalFn);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModalFn();
            }
        });
    }
    // Initialize typewriter if element exists
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        new TypeWriter(typewriterElement);
    }

    // Initialize quote carousel if elements exist
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    if (quoteText && quoteAuthor) {
        new QuoteCarousel(quoteText, quoteAuthor);
    }

    // Initialize thinkers carousel if elements exist
    const thinkersContainer = document.getElementById('thinkers-container');
    if (thinkersContainer) {
        console.log('Initializing ThinkersCarousel');
        new ThinkersCarousel(thinkersContainer);
    } else {
        console.error('Missing container for ThinkersCarousel');
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});