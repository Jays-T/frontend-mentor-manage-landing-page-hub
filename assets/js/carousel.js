const track = document.querySelector('.carousel-track');
const cards = Array.from(track.children);
const prevButton = document.querySelector('.carousel-change-left');
const nextButton = document.querySelector('.carousel-change-right');
const indicatorsNav = document.querySelector('.carousel-nav');
const indicators = Array.from(indicatorsNav.children);

const cardWidth = cards[0].getBoundingClientRect().width;

// Set card arrangment side by side

const setCardPlacement = (card, index) => {
    card.style.left = cardWidth * index + 'px';
}
cards.forEach(setCardPlacement);

const moveToCard = (track, currentCard, targetCard) => {
    track.style.transform = 'translateX(-' + targetCard.style.left +')';
    currentCard.classList.remove('current-card');
    targetCard.classList.add('current-card');
}

const updateIndicators = (currentIndicator, targetIndicator) => {
    currentIndicator.classList.remove('current-card');
    targetIndicator.classList.add('current-card');
}

const showHideArrows = (cards, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }  else if (targetIndex === cards.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}
// Click left, move cards to the Left
prevButton.addEventListener('click', e => {
    // check current card
    const currentCard = track.querySelector('.current-card');
    const prevCard = currentCard.previousElementSibling;
    const currentIndicator = indicatorsNav.querySelector('.current-card');
    const previousIndicator = currentIndicator.previousElementSibling;
    const prevIndex = cards.findIndex(card => card === prevCard);

    moveToCard(track, currentCard, prevCard);
    updateIndicators(currentIndicator, previousIndicator);
    showHideArrows(cards, prevButton, nextButton, prevIndex);
});

// Click right, move cards to the Right
nextButton.addEventListener('click', e => {
    // check current card
    const currentCard = track.querySelector('.current-card');
    const nextCard = currentCard.nextElementSibling;
    const currentIndicator = indicatorsNav.querySelector('.current-card');
    const nextIndicator = currentIndicator.nextElementSibling;
    const nextIndex = cards.findIndex(card => card === nextCard);

    moveToCard(track, currentCard, nextCard);
    updateIndicators(currentIndicator, nextIndicator);
    showHideArrows(cards, prevButton, nextButton, nextIndex);
});

// Click indicator dots, move to that Card
indicatorsNav.addEventListener('click', e => {
    // check which indicater clicked
    const targetIndicator = e.target.closest('button');

    if (!targetIndicator) return;

    const currentCard = track.querySelector('.current-card');
    const currentIndicator = indicatorsNav.querySelector('.current-card');
    const targetIndex = indicators.findIndex(indicator => indicator === targetIndicator);
    const targetCard = cards[targetIndex];

    moveToCard(track, currentCard, targetCard);
    updateIndicators(currentIndicator, targetIndicator);
    showHideArrows(cards, prevButton, nextButton, targetIndex);
});