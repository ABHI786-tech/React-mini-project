import React, { useState } from 'react'

const DiceRolling = () => {

    const [firstDice, setFirstDice] = useState()
    const [secondDice, setSecondDice] = useState()

    const rolling = () => {
        const numberOne = Math.floor(Math.random() * 6 + 1)
        const numberSecond = Math.floor(Math.random() * 6 + 1)

        setFirstDice(numberOne)
        setSecondDice(numberSecond)
    }

    return (
        <>
            {/* MAIN CONTAINER */}
            <div className="flex flex-col items-center min-h-screen bg-linear-to-br from-gray-100 to-gray-300 p-8">

                {/* TITLE */}
                <div className="text-3xl font-bold text-gray-800 mb-8">
                    Dice Rolling App
                </div>

                {/* BOTH DICE SIDE BY SIDE */}
                <div className="flex gap-6">
                    
                    {/* FIRST DICE */}
                    <div
                        className="h-28 w-28 flex items-center justify-center text-4xl font-bold 
                        bg-white shadow-lg rounded-xl border border-gray-300 
                        transform transition duration-300 hover:scale-105"
                    >
                        {firstDice ?? "-"}
                    </div>

                    {/* SECOND DICE */}
                    <div
                        className="h-28 w-28 flex items-center justify-center text-4xl font-bold 
                        bg-white shadow-lg rounded-xl border border-gray-300 
                        transform transition duration-300 hover:scale-105"
                    >
                        {secondDice ?? "-"}
                    </div>
                </div>

                {/* BUTTON */}
                <button
                    className="mt-8 bg-blue-600 text-white text-lg font-semibold px-6 py-3 
                    rounded-lg shadow-md hover:bg-blue-700 active:scale-95 transition"
                    onClick={rolling}
                >
                    Roll Dice
                </button>

            </div>
        </>
    )
}

export default DiceRolling
