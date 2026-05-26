import { useState } from 'react'
import axios from 'axios'

import Timer from '../components/Timer'
import questions from '../data/questions'

function Interview() {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answer, setAnswer] = useState('')
  const [allAnswers, setAllAnswers] = useState([])
  const [submitted, setSubmitted] = useState(false)

  // NEXT QUESTION
  const nextQuestion = () => {

    const updatedAnswers = [
      ...allAnswers,
      {
        question: questions[currentQuestion],
        answer: answer
      }
    ]

    setAllAnswers(updatedAnswers)

    setAnswer('')

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  // SUBMIT INTERVIEW
  const handleSubmit = async () => {

    const finalAnswers = [
      ...allAnswers,
      {
        question: questions[currentQuestion],
        answer: answer
      }
    ]

    try {

      const response = await axios.post(
        'http://localhost:5000/api/interview/save',
        {
          username: 'Sandy',
          answers: finalAnswers
        }
      )

      alert(response.data.message)

      setSubmitted(true)

      console.log(finalAnswers)

    } catch (error) {

      console.log(error)

      alert('Error submitting interview')
    }
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">

      <div className="max-w-4xl mx-auto">

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-lg">

          {/* HEADER */}

          <div className="flex justify-between items-center mb-8">

            <div>

              <h1 className="text-4xl font-bold text-blue-500">
                AI Mock Interview
              </h1>

              <p className="text-zinc-400 mt-2">
                Question {currentQuestion + 1} / {questions.length}
              </p>

            </div>

            {!submitted && (
              <Timer duration={300} />
            )}

          </div>

          {/* QUESTION */}

          <div className="bg-zinc-800 rounded-xl p-6 mb-6">

            <h2 className="text-2xl font-semibold mb-4">
              {questions[currentQuestion]}
            </h2>

            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here..."
              className="w-full h-40 bg-zinc-900 border border-zinc-700 rounded-xl p-4 text-white outline-none resize-none"
            />

          </div>

          {/* BUTTON */}

          <div className="flex justify-end">

            {currentQuestion === questions.length - 1 ? (

              <button
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl"
              >
                Submit Interview
              </button>

            ) : (

              <button
                onClick={nextQuestion}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
              >
                Next Question
              </button>

            )}

          </div>

        </div>

      </div>

    </div>
  )
}

export default Interview