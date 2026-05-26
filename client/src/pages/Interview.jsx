import { useState } from 'react'
import Timer from '../components/Timer'
import questions from '../data/questions'

function Interview() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answer, setAnswer] = useState('')
  const [timerKey, setTimerKey] = useState(0)

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setAnswer('')
      setTimerKey(timerKey + 1)
    }
  }

  const handleSubmit = () => {
    alert('Interview Submitted Successfully!')
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-lg">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

            <div>
              <h1 className="text-4xl font-bold text-blue-500 mb-2">
                AI Mock Interview
              </h1>

              <p className="text-zinc-400">
                Question {currentQuestion + 1} / {questions.length}
              </p>
            </div>

            <Timer key={timerKey} duration={300} />
          </div>

          <div className="bg-zinc-800 rounded-xl p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              {questions[currentQuestion]}
            </h2>

            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here..."
              className="w-full h-40 bg-zinc-900 border border-zinc-700 rounded-xl p-4 text-white outline-none focus:border-blue-500 resize-none"
            />
          </div>

          <div className="flex justify-end">

            {currentQuestion === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-xl font-semibold"
              >
                Submit Interview
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold"
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