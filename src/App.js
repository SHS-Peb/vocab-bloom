import React, { useState } from "react";
import Flashcardlist from "./Flashcardlist";
import './app.css'

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
    <Flashcardlist flashcards={flashcards}/>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is Hello in Spanish?',
    answer: 'Hola',
    options: [
      "Si",
      "Buenos",
      "Adios"
    ]
  },
  {
    id: 2,
    question: 'What is Hello in Spanish?',
    answer: 'answer',
    options: [
      "answer",
      "answer",
      "answer"
    ]
  },

]

export default App;
