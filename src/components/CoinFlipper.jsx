import React, { useState } from 'react'
import { Bs5CircleFill } from 'react-icons/bs';
import { FaBitcoin } from 'react-icons/fa';

const CoinFlipper = () => {
    const [side, setSide] = useState(null);
    const [isFlipping, setIsFlipping] = useState(false);
    const [flips, setFlips] = useState(0);
    const [heads, setHeads] = useState(0);
    const [tails, setTails] = useState(0);
    const [resultText, setResultText] = useState("Click Flip to start");

    const renderCoin = () => {
        if (isFlipping) {
            return (
                <div className="absolute inset-0 w-full flex items-center justify-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-gray-400 rounded-full animate-spin"></div>
                </div>
            );
        } else if (side === "heads") {
            return <FaBitcoin className="absolute inset-0 w-full h-full text-yellow-500 text-[90%]" />;
        } else if (side === "tails") {
            return <Bs5CircleFill className="absolute inset-0 w-full h-full text-blue-600 text-[90%]" />;
        } else {
            return (
                <div className="text-lg sm:text-xl text-gray-500 flex items-center justify-center absolute inset-0">
                    Ready
                </div>
            );
        }
    };

    const handleFlip = () => {
        if (isFlipping) return; // Prevent double click

        setIsFlipping(true);
        setResultText("Flipping...");

        const coinSides = ["heads", "tails"];
        const randomIndex = Math.floor(Math.random() * coinSides.length);
        const result = coinSides[randomIndex];

        // Delay showing result
        setTimeout(() => {
            setSide(result);
            setFlips(prev => prev + 1);

            setResultText(`${result.charAt(0).toUpperCase() + result.slice(1)}`);

            if (result === "heads") setHeads(prev => prev + 1);
            else setTails(prev => prev + 1);

            setIsFlipping(false);
        }, 500); 
    }

    const handleReset = () => {
        setSide(null);
        setFlips(0);
        setHeads(0);
        setTails(0);
        setResultText("Click Flip to start");
        setIsFlipping(false);
    }

    return (
        <div className='min-h-screen flex justify-center items-start py-8 bg-linear-to-b from-gray-300 to-gray-400 px-4'>
            <div className="w-full max-w-md mx-auto p-6 sm:p-8 bg-white rounded-2xl shadow-md text-center">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Coin Flipper</h2>

                {/* Coin */}
                <div className="w-32 sm:w-36 h-32 sm:h-36 mx-auto mb-4 flex items-center justify-center rounded-full border-4 relative overflow-hidden">
                    {renderCoin()}
                </div>

                {/* Result text */}
                <p className="mb-4 text-base sm:text-lg">
                    <strong>Result :</strong> {resultText}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
                    <button
                        onClick={handleFlip}
                        disabled={isFlipping}
                        className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition w-full sm:w-auto disabled:opacity-50"
                    >
                        Flip
                    </button>

                    <button
                        onClick={handleReset}
                        className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg border border-zinc-300 hover:bg-zinc-100 transition w-full sm:w-auto"
                    >
                        Reset
                    </button>
                </div>

                {/* Stats */}
                <div className="text-zinc-700 text-sm sm:text-base">
                    <div>Flips: <strong>{flips}</strong></div>
                    <div>Heads: <strong>{heads}</strong> · Tails: <strong>{tails}</strong></div>
                </div>
            </div>
        </div>
    )
}

export default CoinFlipper;

