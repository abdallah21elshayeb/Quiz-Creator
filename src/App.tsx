// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizList from './components/quizList';
import CreateQuiz from './components/createQuiz';
import EditQuiz from './components/editQuiz';


function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<QuizList />} />
      <Route path="/create" element={<CreateQuiz />} />
      <Route path="/edit/:id" element={<EditQuiz />} />
    </Routes>
  </Router>
  )
}

export default App
