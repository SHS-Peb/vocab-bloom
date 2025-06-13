# Vocab Bloom

**Vocab Bloom** is a flashcard-based vocabulary quiz app built with React. It fetches questions from the Open Trivia Database API and displays them as interactive flashcards. Users can test their knowledge by flipping cards to reveal the correct answer.

---

## Features

- Fetches live quiz questions from an external API
- Displays randomized multiple-choice options
- Flip-card interface to reveal answers
- Responsive layout for different screen sizes
- Helpful for vocabulary building and trivia practice

---

## Getting Started

### Prerequisites

- Node.js and npm installed on your computer

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/vocab-bloom.git
cd vocab-bloom
```

2. Install dependacies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```
The app will open at http://localhost:3000.

## How It Works

- On load, the app fetches 10 questions from the Open Trivia Database API.
- Each question is decoded and randomized with its correct and incorrect options.
- Flashcards are displayed, and users can flip them to see the correct answer.
- Questions update every time the page reloads.

## Built With

- React  
- Axios  
- Open Trivia Database API
