import Button from '../components/Button'
import Timer from '../components/Timer'

function Interview() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">

      <div className="max-w-5xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

          <div>
            <h1 className="text-4xl font-bold">
              Mock Interview
            </h1>

            <p className="text-zinc-400 mt-2">
              Answer the following interview question carefully.
            </p>
          </div>

          <Timer />

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

          <p className="text-sm text-zinc-400 mb-3">
            Question 1
          </p>

          <h2 className="text-2xl font-bold leading-relaxed">
            Tell me about yourself and explain your experience with React development.
          </h2>

        </div>

       <div className="mt-8">

            <label className="block text-lg font-semibold mb-4">
                Your Answer
            </label>

            <textarea
                rows="10"
                placeholder="Write your answer here..."
                className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5 outline-none focus:border-blue-500 transition resize-none"
            />

            <p className="text-sm text-zinc-400 mt-2">
                0 / 1000 characters
            </p>

        </div>
        <div className="mt-8 flex justify-end">

          <div className="w-full md:w-56">
            <Button text="Submit Answer" />
          </div>

        </div>

      </div>

    </div>
  )
}

export default Interview