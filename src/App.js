import React, { useState, useEffect } from "react";
import Flashcardlist from "./Flashcardlist";
import './app.css'
import axios from 'axios'

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  
useEffect(() => {
  axios
    .get('https://opentdb.com/api.php?amount=10')
    .then(res => {
      setFlashcards(res.data.results.map((questionItem, index) => {
        const answer = decodeString(questionItem.correct_answer)
        const options = [
          ...questionItem.incorrect_answers.map(a => decodeString(a)), 
          answer]
        return {
          id: `${index}-${Date.now()}`,
          question: decodeString(questionItem.question),
          answer: questionItem.correct_answer,
          options: options.sort(() => Math.random() - .5)
        }
      }))
      console.log(res.data);
    })
    .catch(error => console.error("Error fetching data:", error));
}, []);

function decodeString(str) {
  const textArea = document.createElement('textarea')
  textArea.innerHTML= str
  return textArea.value
}

  return (
    <div className="container" >
    <Flashcardlist flashcards={flashcards}/>
    </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is Hello in Spanish?',
    answer: "Hola",
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
