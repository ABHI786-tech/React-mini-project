import React, { useState } from 'react'
import { Bs5CircleFill } from 'react-icons/bs';
import { FaBitcoin } from 'react-icons/fa';

const CoinFlipper = () => {
    const [side, setSide] = useState(null);
    const [isFlipping, SetIsFlipping] = useState()
    const [flips, setFlips] = useState(0);
    const [heads, setHeads] = useState(0);
    const [tails, setTails] = useState(0);
    const [resultText, setResultText] = useState("Click Flip to start");


    const renderCoin = () => {
        if (side === "heads") {
            return <FaBitcoin className="absolute inset-0 w-full h-full text-yellow-500 text-[90%]" />;
        } else if (side === "tails") {
            return <Bs5CircleFill className="absolute inset-0 w-full h-full text-blue-600 text-[90%]" />;
        } else {
            return (
                <div className="text-xl text-gray-500 flex items-center justify-center absolute inset-0">
                    Ready
                </div>
            );
        }
    };


    const handleFlip = () => {
        // console.log("clicked")
        const coinSides = ["heads", "tails"]
        const randomIndex = Math.floor(Math.random() * coinSides.length)
        const result = coinSides[randomIndex];
        setSide(result);
        setFlips(e => e + 1);

        setResultText(`${result.charAt(0).toUpperCase() + result.slice(1)}`);

        if (result === "heads") setHeads(head => head + 1);
        else setTails(tail => tail + 1);

    }

    const handleReset = () => {
        setSide(null);
        setFlips(0);
        setHeads(0);
        setTails(0);
    }


    return (
        <div className='min-h-screen flex justify-center items-start py-8 bg-linear-to-b from-gray-300 to-gray-400'>
            <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md text-center">
                <h2 className="text-2xl font-semibold mb-4">Coin Flipper</h2>

                <div className="w-36 h-36 mx-auto mb-4 flex items-center justify-center rounded-full border-4 relative overflow-hidden">{renderCoin()}</div>

                {/* Result text */}
                <p className="mb-4 text-lg">
                   <strong>Result :</strong> {resultText}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 justify-center mb-4">
                    <button onClick={handleFlip}
                        className="px-4 py-2 rounded-lg bg-indigo-600 text-white disabled:opacity-50">
                        Flip
                    </button>

                    <button onClick={handleReset}
                        className="px-4 py-2 rounded-lg border border-zinc-300">
                        Reset
                    </button>
                </div>

                {/* Stats */}
                <div className=" text-zinc-700">
                    <div>Flips: <strong>{flips}</strong></div>
                    <div>Heads: <strong>{heads}</strong> · Tails: <strong>{tails}</strong></div>
                </div>
            </div>
        </div>
    )
}

export default CoinFlipper