import Button from '../components/Button'
import StatCard from '../components/StatCard'

function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div>
            <h1 className="text-4xl font-bold">
              Dashboard
            </h1>

            <p className="text-zinc-400 mt-2">
              Track your interview preparation progress.
            </p>
          </div>

          <div className="w-full md:w-52">
            <Button text="Start Interview" />
          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <StatCard
            title="Total Interviews"
            value="12"
          />

          <StatCard
            title="Average Score"
            value="84%"
          />

          <StatCard
            title="Hours Practiced"
            value="18h"
          />

        </div>

        <div className="mt-12">

          <h2 className="text-2xl font-bold mb-6">
            Recent Sessions
          </h2>

          <div className="space-y-4">

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <div>
                <h3 className="font-semibold text-lg">
                  Frontend Developer Interview
                </h3>

                <p className="text-zinc-400 text-sm mt-1">
                  Completed on May 22, 2026
                </p>
              </div>

              <div className="text-blue-500 font-bold text-xl">
                88%
              </div>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <div>
                <h3 className="font-semibold text-lg">
                  React Technical Round
                </h3>

                <p className="text-zinc-400 text-sm mt-1">
                  Completed on May 20, 2026
                </p>
              </div>

              <div className="text-blue-500 font-bold text-xl">
                79%
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard