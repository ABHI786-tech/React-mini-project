import React, { useState } from 'react'
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

const RockPaperScissor = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const choices = ["Rock", "Paper", "Scissor"];

  const handleChange = (choice) => {
    setPlayerChoice(choice);

    // computer choice
    let newComputerChoice = choices[Math.floor(Math.random() * choices.length)];

    // prevent repeating same choice
    while (newComputerChoice === computerChoice) {
      newComputerChoice = choices[Math.floor(Math.random() * choices.length)];
    }

    setComputerChoice(newComputerChoice);
    checkWinner(choice, newComputerChoice);
  };

  const checkWinner = (player, computer) => {
    if (player === computer) return;

    if (
      (player === "Rock" && computer === "Scissor") ||
      (player === "Paper" && computer === "Rock") ||
      (player === "Scissor" && computer === "Paper")
    ) {
      setPlayerScore(playerScore + 1);
    } else {
      setComputerScore(computerScore + 1);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-linear-to-b from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6">
      <h1 className="text-3xl sm:text-5xl font-bold mb-8 drop-shadow-lg tracking-wide text-center">
        Rock • Paper • Scissors
      </h1>

      {/* Scoreboard */}
      <div className="flex flex-row gap-4 mb-10 w-full max-w-md justify-center flex-wrap">
        {/* Player Score */}
        <div className="bg-gray-700 rounded-2xl px-6 py-4 shadow-xl flex flex-col justify-between flex-1 min-w-[120px] h-32">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-300 text-center">Your Score</h3>
          <p className="text-3xl sm:text-4xl font-bold mt-2 text-center">{playerScore}</p>
        </div>

        {/* Computer Score */}
        <div className="bg-gray-700 rounded-2xl px-6 py-4 shadow-xl flex flex-col justify-between flex-1 min-w-[120px] h-32">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-300 text-center">Computer Score</h3>
          <p className="text-3xl sm:text-4xl font-bold mt-2 text-center">{computerScore}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md">
        <button
          onClick={() => handleChange("Rock")}
          className="flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-4 bg-red-600 rounded-2xl shadow-lg text-lg sm:text-lg font-semibold hover:bg-red-700 active:scale-95 transition w-full sm:w-auto"
        >
          <FaHandRock size={20} /> Rock
        </button>

        <button
          onClick={() => handleChange("Paper")}
          className="flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-4 bg-blue-600 rounded-2xl shadow-lg text-lg sm:text-lg font-semibold hover:bg-blue-700 active:scale-95 transition w-full sm:w-auto"
        >
          <FaHandPaper size={20} /> Paper
        </button>

        <button
          onClick={() => handleChange("Scissor")}
          className="flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-4 bg-green-600 rounded-2xl shadow-lg text-lg sm:text-lg font-semibold hover:bg-green-700 active:scale-95 transition w-full sm:w-auto"
        >
          <FaHandScissors size={20} /> Scissor
        </button>
      </div>

      {/* Result Info */}
      <div className="mt-8 sm:mt-10 text-center space-y-2 sm:space-y-3 w-full max-w-md">
        <h3 className="text-xl sm:text-2xl">
          Your Choice:{" "}
          <span className="font-bold text-yellow-300">{playerChoice || "--"}</span>
        </h3>
        <h3 className="text-xl sm:text-2xl">
          Computer's Choice:{" "}
          <span className="font-bold text-pink-300">{computerChoice || "--"}</span>
        </h3>
      </div>
    </div>
  );
};

export default RockPaperScissor;
