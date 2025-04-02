document.addEventListener('DOMContentLoaded', function() {
    // Flashcard data
    const flashcardsData = [
        {
            question: "What is the capital of France?",
            answer: "Paris",
            icon: "fa-city"
        },
        {
            question: "What is the largest planet in our solar system?",
            answer: "Jupiter",
            icon: "fa-globe"
        },
        {
            question: "Who painted the Mona Lisa?",
            answer: "Leonardo da Vinci",
            icon: "fa-palette"
        },
        {
            question: "What is the chemical symbol for gold?",
            answer: "Au",
            icon: "fa-flask"
        },
        {
            question: "In what year did World War II end?",
            answer: "1945",
            icon: "fa-calendar"
        }
    ];

    const flashcardsContainer = document.getElementById('flashcards');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    
    let flippedCards = 0;
    let currentCards = [...flashcardsData];

    // Initialize flashcards
    function initializeFlashcards() {
        flashcardsContainer.innerHTML = '';
        flippedCards = 0;
        updateProgress();
        
        currentCards.forEach((card, index) => {
            createFlashcard(card, index);
        });
    }

    // Create a single flashcard
    function createFlashcard(card, index) {
        const flashcard = document.createElement('div');
        flashcard.className = 'flashcard';
        flashcard.style.animationDelay = `${index * 0.1}s`;
        
        flashcard.innerHTML = `
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <i class="fas ${card.icon} flashcard-icon"></i>
                    <h3>Question</h3>
                    <p>${card.question}</p>
                </div>
                <div class="flashcard-back">
                    <i class="fas fa-lightbulb flashcard-icon"></i>
                    <h3>Answer</h3>
                    <p>${card.answer}</p>
                </div>
            </div>
        `;
        
        flashcard.addEventListener('click', function() {
            if (!this.classList.contains('flipped')) {
                this.classList.add('flipped');
                flippedCards++;
                updateProgress();
            }
        });
        
        flashcardsContainer.appendChild(flashcard);
    }

    // Shuffle flashcards
    function shuffleFlashcards() {
        currentCards = [...flashcardsData].sort(() => Math.random() - 0.5);
        initializeFlashcards();
    }

    // Update progress bar and text
    function updateProgress() {
        const progress = (flippedCards / currentCards.length) * 100;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${flippedCards}/${currentCards.length}`;
    }

    // Event listeners
    shuffleBtn.addEventListener('click', shuffleFlashcards);

    // Initialize on load
    initializeFlashcards();
});