import React, { useState } from 'react'
import axios from 'axios'

const JokeGenerator = () => {
    const [joke, setJoke] = useState("")
    const [loading, setLoading] = useState(false)

    const generateJoke = async () => {
        try {
            setLoading(true)
            const res = await axios.get(
                "https://sv443.net/jokeapi/v2/joke/Programming?type=single"
            )
            setJoke(res.data.joke)
        } catch (err) {
            setJoke("Failed to load joke 😔")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-green-300 to-green-500 p-5">
            <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-xl w-full text-center transition-all duration-300">
                
                <h1 className="text-3xl font-bold text-green-700 mb-6">
                    😂 Joke Generator
                </h1>

                <button
                    className="bg-green-700 hover:bg-green-900 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-lg transition-all duration-200"
                    onClick={generateJoke}
                >
                    {loading ? "Loading..." : "Generate Joke"}
                </button>

                <div className="mt-6 bg-green-100 p-5 rounded-xl shadow-inner min-h-[100px]">
                    <p className="text-lg text-gray-800 font-medium">
                        {joke ? joke : "Your joke will appear here 😄"}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default JokeGenerator
