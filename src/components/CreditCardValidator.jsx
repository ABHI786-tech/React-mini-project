import React, { useState } from "react";

const CreditCardValidator = () => {
    const [creditData, setCreditData] = useState("");
    const [result, setResult] = useState("");

    const inputHandler = (e) => {
        let num = e.target.value
        num = num.replace(/\D/g, "");
        if (num.length > 16) {
            num = num.slice(0, 16);
        }

        // Format into XXXX XXXX XXXX XXXX
        let formatted = num.replace(/(.{4})/g, "$1 ").trim();
        setCreditData(formatted);

        if (num.length === 16) {
            setResult("Valid Card Number");
        } else {
            setResult("InValid Card Number");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-900 via-gray-900 to-black p-4">

            <div className="w-full max-w-md bg-white/10 backdrop-blur-xl text-white rounded-2xl shadow-2xl p-8 border border-white/20">

                <h1 className="text-3xl font-bold mb-6 text-center tracking-wide">
                    Credit Card Validator
                </h1>

                {/* Input Box */}
                <div className="relative">
                    <label className="text-sm text-gray-300 mb-1 block">
                        Enter Card Number
                    </label>

                    <input
                        type="text"
                        maxLength="19"
                        value={creditData}
                        onChange={inputHandler}
                        className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/20 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none text-lg tracking-widest placeholder-gray-400"
                        placeholder="XXXX XXXX XXXX XXXX"
                    />
                </div>

                {/* Result Text */}
                <p
                    className={`mt-5 text-center text-lg font-semibold ${result === "Valid Card Number" ? "text-green-400" : "text-red-400"
                        }`}
                >
                    {result}
                </p>

                {/* Decorative Animated Line */}
                <div className="mt-6 h-1 w-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse" />
            </div>
        </div>
    );
};

export default CreditCardValidator;
