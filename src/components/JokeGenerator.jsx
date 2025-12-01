import React, { useState } from 'react'
import axios from 'axios'

const JokeGenerator = () => {
    const [joke, setJoke] = useState("")


    const generateJoke = async () => {

        const response = axios.get("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => {
                console.log(res.data.joke)
                setJoke(
                res.data.joke
                )
            })
            .catch((err) => { console.log(err) })


    }

    return (
        <div className='w-full p-5'>
            <div className='flex flex-col justify-center text-center bg-green-500 m-[5%] p-14'>
                <div><h1>JOKE GENERATOR USING REACT OR JOKE API</h1></div>
                <div>
                    <button className='bg-green-900 px-7' onClick={generateJoke}>Click to generate joke</button>
                </div>
                <div>
                    <p>{joke}</p>
                </div>

            </div>
        </div>
    )
}

export default JokeGenerator