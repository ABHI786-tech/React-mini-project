import React, { useState } from 'react'
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

// const RockPaperScissor = () => {
//   const [playerChoice, setPlayerChoice] = useState("");
//   const [computerChoice, setComputerChoice] = useState("");
//   const [playerScore, setPlayerScore] = useState(0);
//   const [computerScore, setComputerScore] = useState(0);

//   const choices = ["Rock", "Paper", "Scissor"];

//   const handleChange = (choice) => {
//     setPlayerChoice(choice);

//     const randomChoice = choices[Math.floor(Math.random() * choices.length)];
//     setComputerChoice(randomChoice);

//     checkWinner(choice, randomChoice);
//   };

//   const checkWinner = (player, computer) => {
//     if (player === computer) return;

//     if (
//       (player === "Rock" && computer === "Scissor") ||
//       (player === "Paper" && computer === "Rock") ||
//       (player === "Scissor" && computer === "Paper")
//     ) {
//       setPlayerScore(playerScore + 1);
//     } else {
//       setComputerScore(computerScore + 1);
//     }
//   };

//   return (
//     <div className="w-full min-h-screen flex flex-col items-center bg-linear-to-b from-gray-900 to-gray-800 text-white py-12 px-4">
//       <h1 className="text-5xl font-bold mb-8 drop-shadow-lg tracking-wide">
//         Rock • Paper • Scissors
//       </h1>

//       {/* Scoreboard */}
//       <div className="flex gap-10 mb-10">
//         <div className="bg-gray-700 rounded-2xl px-8 py-5 shadow-xl text-center">
//           <h3 className="text-xl font-semibold text-gray-300">Your Score</h3>
//           <p className="text-4xl font-bold mt-2">{playerScore}</p>
//         </div>

//         <div className="bg-gray-700 rounded-2xl px-8 py-5 shadow-xl text-center">
//           <h3 className="text-xl font-semibold text-gray-300">Computer Score</h3>
//           <p className="text-4xl font-bold mt-2">{computerScore}</p>
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="flex gap-6">
//         <button
//           onClick={() => handleChange("Rock")}
//           className="px-6 py-4 bg-red-600 rounded-2xl shadow-lg text-lg font-semibold
//           hover:bg-red-700 active:scale-90 transition flex items-center gap-3"
//         >
//           <FaHandRock size={24} /> Rock
//         </button>

//         <button
//           onClick={() => handleChange("Paper")}
//           className="px-6 py-4 bg-blue-600 rounded-2xl shadow-lg text-lg font-semibold
//           hover:bg-blue-700 active:scale-90 transition flex items-center gap-3"
//         >
//           <FaHandPaper size={24} /> Paper
//         </button>

//         <button
//           onClick={() => handleChange("Scissor")}
//           className="px-6 py-4 bg-green-600 rounded-2xl shadow-lg text-lg font-semibold
//           hover:bg-green-700 active:scale-90 transition flex items-center gap-3"
//         >
//           <FaHandScissors size={24} /> Scissor
//         </button>
//       </div>

//       {/* Result Info */}
//       <div className="mt-10 text-center space-y-3">
//         <h3 className="text-2xl">
//           Your Choice:{" "}
//           <span className="font-bold text-yellow-300">
//             {playerChoice || "--"}
//           </span>
//         </h3>
//         <h3 className="text-2xl">
//           Computer's Choice:{" "}
//           <span className="font-bold text-pink-300">
//             {computerChoice || "--"}
//           </span>
//         </h3>
//       </div>
//     </div>
//   );
// };

// export default RockPaperScissor;


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

    // 🛑 Prevent repeating the same choice twice
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
    <div className="w-full min-h-screen flex flex-col items-center bg-linear-to-b from-gray-900 to-gray-800 text-white py-12 px-4">
      <h1 className="text-5xl font-bold mb-8 drop-shadow-lg tracking-wide">
        Rock • Paper • Scissors
      </h1>

      {/* Scoreboard */}
      <div className="flex gap-10 mb-10">
        <div className="bg-gray-700 rounded-2xl px-8 py-5 shadow-xl text-center">
          <h3 className="text-xl font-semibold text-gray-300">Your Score</h3>
          <p className="text-4xl font-bold mt-2">{playerScore}</p>
        </div>

        <div className="bg-gray-700 rounded-2xl px-8 py-5 shadow-xl text-center">
          <h3 className="text-xl font-semibold text-gray-300">Computer Score</h3>
          <p className="text-4xl font-bold mt-2">{computerScore}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-6">
        <button
          onClick={() => handleChange("Rock")}
          className="px-6 py-4 bg-red-600 rounded-2xl shadow-lg text-lg font-semibold
          hover:bg-red-700 active:scale-90 transition flex items-center gap-3"
        >
          <FaHandRock size={24} /> Rock
        </button>

        <button
          onClick={() => handleChange("Paper")}
          className="px-6 py-4 bg-blue-600 rounded-2xl shadow-lg text-lg font-semibold
          hover:bg-blue-700 active:scale-90 transition flex items-center gap-3"
        >
          <FaHandPaper size={24} /> Paper
        </button>

        <button
          onClick={() => handleChange("Scissor")}
          className="px-6 py-4 bg-green-600 rounded-2xl shadow-lg text-lg font-semibold
          hover:bg-green-700 active:scale-90 transition flex items-center gap-3"
        >
          <FaHandScissors size={24} /> Scissor
        </button>
      </div>

      {/* Result Info */}
      <div className="mt-10 text-center space-y-3">
        <h3 className="text-2xl">
          Your Choice:{" "}
          <span className="font-bold text-yellow-300">
            {playerChoice || "--"}
          </span>
        </h3>
        <h3 className="text-2xl">
          Computer's Choice:{" "}
          <span className="font-bold text-pink-300">
            {computerChoice || "--"}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default RockPaperScissor;
