// Колода карт
const suits = ["Пики", "Трефы", "Бубны", "Черви"];
const ranks = ["6", "7", "8", "9", "10", "Валет", "Дама", "Король", "Туз"];

let deck = [];

// Создание колоды
for (let suit of suits) {
    for (let rank of ranks) {
        deck.push(`${rank} ${suit}`);
    }
}

// Перемешивание колоды
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Раздача карт
function dealCards() {
    const playerHand = [];
    const computerHand = [];

    for (let i = 0; i < 6; i++) {
        playerHand.push(deck.pop());
        computerHand.push(deck.pop());
    }

    return { player: playerHand, computer: computerHand };
}

// Функция для игры
function playDurak() {
    shuffleDeck();
    const hands = dealCards();
    const playerHand = hands.player;
    const computerHand = hands.computer;

    console.log("Ваша рука:", playerHand.join(", "));
    console.log("Карта компьютера:", computerHand[0]);

    // Ваш код для логики игры может быть добавлен здесь
}

// Запуск игры
playDurak();