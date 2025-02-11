class TypeWriter {
    constructor(element) {
        this.element = element;
        this.words = [
            "Political Science",
            "History",
            "Economics",
            "Religion",
            "Society",
            "Philosophy"
        ];
        this.currentWordIndex = 0;
        this.txt = '';
        this.isDeleting = false;
        this.typeSpeed = 100;
        this.type();
    }

    type() {
        const currentWord = this.words[this.currentWordIndex];

        if(this.isDeleting) {
            this.txt = currentWord.substring(0, this.txt.length - 1);
        } else {
            this.txt = currentWord.substring(0, this.txt.length + 1);
        }

        this.element.innerHTML = this.txt;

        let typeSpeed = this.typeSpeed;

        if(this.isDeleting) {
            typeSpeed /= 2;
        }

        if(!this.isDeleting && this.txt === currentWord) {
            typeSpeed = 1500;
            this.isDeleting = true;
        } else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

class QuoteCarousel {
    constructor(textElement, authorElement) {
        this.textElement = textElement;
        this.authorElement = authorElement;
        this.quotes = [
            {
                text: "The end of law is not to abolish or restrain, but to preserve and enlarge freedom.",
                author: "John Locke"
            },
            {
                text: "Man is born free, and everywhere he is in chains.",
                author: "Jean-Jacques Rousseau"
            },
            {
                text: "The philosophers have only interpreted the world in various ways; the point, however, is to change it.",
                author: "Karl Marx"
            },
            {
                text: "Be the change you wish to see in the world.",
                author: "Mahatma Gandhi"
            }
        ];
        this.currentQuoteIndex = 0;
        this.showQuote();
    }

    showQuote() {
        const {text, author} = this.quotes[this.currentQuoteIndex];
        let charIndex = 0;
        let isDeleting = false;
        this.textElement.textContent = "";
        this.authorElement.textContent = "";
        
        const typeText = () => {
            if (!isDeleting && charIndex < text.length) {
                this.textElement.textContent = `"${text.substring(0, charIndex + 1)}"`;
                charIndex++;
                setTimeout(typeText, 50);
            } else if (!isDeleting && charIndex === text.length) {
                this.authorElement.textContent = `- ${author}`;
                setTimeout(() => {
                    isDeleting = true;
                    typeText();
                }, 2000);
            } else if (isDeleting && charIndex > 0) {
                charIndex--;
                this.textElement.textContent = `"${text.substring(0, charIndex)}"`;
                setTimeout(typeText, 25);
            } else if (isDeleting && charIndex === 0) {
                this.authorElement.textContent = "";
                isDeleting = false;
                this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.quotes.length;
                setTimeout(() => this.showQuote(), 500);
            }
        };
        
        typeText();
    }
}

class ThinkersCarousel {
    constructor(container) {
        this.container = container;
        this.thinkers = [
            {
                name: "Mahatma Gandhi",
                image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Mohandas_K._Gandhi%2C_portrait.jpg",
                wiki: "https://en.wikipedia.org/wiki/Mahatma_Gandhi",
                bio: "Leader of India's non-violent independence movement, Gandhi's philosophy of peaceful resistance inspired civil rights movements worldwide."
            },
            {
                name: "John Stuart Mill",
                image: "https://upload.wikimedia.org/wikipedia/commons/9/99/John_Stuart_Mill_by_London_Stereoscopic_Company%2C_c1870.jpg",
                wiki: "https://en.wikipedia.org/wiki/John_Stuart_Mill",
                bio: "British philosopher and political economist who advanced utilitarianism and liberalism."
            },
            {
                name: "Karl Marx",
                image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Karl_Marx_001.jpg",
                wiki: "https://en.wikipedia.org/wiki/Karl_Marx",
                bio: "Revolutionary philosopher and economist who developed the theory of scientific socialism."
            },
            {
                name: "Jean-Jacques Rousseau",
                image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Jean-Jacques_Rousseau_%28painted_portrait%29.jpg",
                wiki: "https://en.wikipedia.org/wiki/Jean-Jacques_Rousseau",
                bio: "Enlightenment philosopher who explored the relationship between nature and society."
            },
            {
                name: "Friedrich Nietzsche",
                image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Nietzsche187a.jpg",
                wiki: "https://en.wikipedia.org/wiki/Friedrich_Nietzsche",
                bio: "German philosopher known for his radical questioning of traditional morality and religion."
            }
        ];
        this.init();
    }

    init() {
        this.createThinkerCards();
    }

    createThinkerCards() {
        const fragment = document.createDocumentFragment();
        this.thinkers.forEach(thinker => {
            const card = document.createElement('div');
            card.className = 'thinker-card';
            card.innerHTML = `
                <div class="thinker-image-container">
                    <img src="${thinker.image}" alt="${thinker.name}" class="thinker-image">
                </div>
                <div class="thinker-info">
                    <h3>${thinker.name}</h3>
                    <div class="thinker-bio">
                        <p>${thinker.bio}</p>
                    </div>
                    <a href="${thinker.wiki}" target="_blank" class="learn-more-btn">Learn More</a>
                </div>
            `;
            fragment.appendChild(card);
        });
        this.container.innerHTML = '';
        this.container.appendChild(fragment);
    }
}