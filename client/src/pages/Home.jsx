function Home() {
  return (
    <div className="px-8 py-20">

      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Crack Your Next
          <span className="text-blue-500"> Technical Interview</span>
        </h1>

        <p className="text-zinc-400 mt-6 text-base md:text-lg">
          Practice AI-powered mock interviews and improve your confidence,
          communication, and technical skills.
        </p>

        <button className="mt-8 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold">
          Start Interview
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-24 max-w-6xl mx-auto">

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-blue-500 transition">
          <h2 className="text-xl font-bold mb-3">
            AI Feedback
          </h2>

          <p className="text-zinc-400">
            Get instant AI-generated feedback on your answers and communication.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h2 className="text-xl font-bold mb-3">
            Real Interview Experience
          </h2>

          <p className="text-zinc-400">
            Simulate real technical interviews with timed responses.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h2 className="text-xl font-bold mb-3">
            Performance Tracking
          </h2>

          <p className="text-zinc-400">
            Track your progress and improve interview performance over time.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Home