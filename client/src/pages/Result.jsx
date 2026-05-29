import { useLocation, useNavigate } from 'react-router-dom'

function Result() {

  const location = useLocation()

  const navigate = useNavigate()

  const score = location.state?.score || 0

  let feedback = ''
  let badge = ''
  let badgeColor = ''

  if (score >= 85) {

  feedback =
    'Excellent performance! Strong technical and communication skills.'

  badge = 'Excellent'

  badgeColor = 'bg-green-600'

} else if (score >= 70) {

  feedback =
    'Good job! You have solid understanding but can improve confidence.'

  badge = 'Good'

  badgeColor = 'bg-blue-600'

} else {

  feedback =
    'Needs improvement. Practice more mock interviews and technical concepts.'

  badge = 'Needs Improvement'

  badgeColor = 'bg-red-600'
}
  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-3xl p-10 shadow-2xl">

        <h1 className="text-4xl font-bold text-center mb-8 text-blue-500">

          Interview Result

        </h1>

        <div className="flex justify-center mb-8">

          <div className="w-40 h-40 rounded-full border-8 border-blue-500 flex items-center justify-center text-5xl font-bold">

            {score}%

          </div>

        </div>

        <div className="text-center mb-8">

          <span className={`${badgeColor} px-5 py-2 rounded-full text-sm font-semibold`}>

            {badge}

          </span>

        </div>

        <div className="bg-zinc-800 rounded-2xl p-6 mb-8">

          <h2 className="text-2xl font-semibold mb-4">

            AI Feedback

          </h2>

          <p className="text-zinc-300 leading-7">

            {feedback}

          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">

          <div className="bg-zinc-800 p-5 rounded-2xl text-center hover:scale-105 transition-all duration-300">

            <h3 className="font-semibold mb-2">
              Communication
            </h3>

            <p className="text-blue-400">
              Good
            </p>

          </div>

          <div className="bg-zinc-800 p-5 rounded-2xl text-center hover:scale-105 transition-all duration-300">

            <h3 className="font-semibold mb-2">
              Technical Skills
            </h3>

            <p className="text-blue-400">
              Strong
            </p>

          </div>

          <div className="bg-zinc-800 p-5 rounded-2xl text-center hover:scale-105 transition-all duration-300">

            <h3 className="font-semibold mb-2">
              Confidence
            </h3>

            <p className="text-blue-400">
              Moderate
            </p>

          </div>

        </div>

        <button
          onClick={() => navigate('/dashboard')}
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all py-4 rounded-2xl font-semibold"
        >

          Back to Dashboard

        </button>

      </div>

    </div>
  )
}

export default Result