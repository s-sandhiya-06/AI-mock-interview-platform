import { useEffect, useState } from 'react'
import axios from 'axios'

import Button from '../components/Button'
import StatCard from '../components/StatCard'

function Dashboard() {

  const [interviews, setInterviews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetchInterviews()

  }, [])

  const fetchInterviews = async () => {

    try {

      const response = await axios.get(
        'http://localhost:5000/api/interview/all'
      )

      setInterviews(response.data)

    } catch (error) {

      console.log(error)

    } finally {

      setLoading(false)
    }
  }

  const totalInterviews = interviews.length

  const averageScore =
  interviews.length > 0
    ? Math.round(
        interviews.reduce(
          (acc, item) =>
            acc + (item.score || 0),
          0
        ) / interviews.length
      )
    : 0
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
            value={totalInterviews}
          />

          <StatCard
            title="Average Score"
            value={`${averageScore}%`}
          />

          <StatCard
            title="Recent Sessions"
            value={interviews.length}
          />

        </div>

        <div className="mt-12">

          <h2 className="text-2xl font-bold mb-6">
            Recent Sessions
          </h2>

          {
            loading ? (

              <p className="text-zinc-400">
                Loading...
              </p>

            ) : interviews.length === 0 ? (

              <p className="text-zinc-400">
                No interviews found
              </p>

            ) : (

              <div className="space-y-4">

                {
                  interviews.map((item) => (

                    <div
                      key={item._id}
                      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:border-blue-500 transition-all"
                    >

                      <div>

                        <h3 className="font-semibold text-lg">

                          {item.title || 'Mock Interview'}

                        </h3>

                        <p className="text-zinc-400 text-sm mt-1">

                          Completed on {' '}

                          {
                            new Date(
                              item.date
                            ).toLocaleDateString()
                          }

                        </p>

                      </div>

                      <div className="text-blue-500 font-bold text-xl">

                        {item.score || 0}%

                      </div>

                    </div>
                  ))
                }

              </div>
            )
          }

        </div>

      </div>

    </div>
  )
}

export default Dashboard