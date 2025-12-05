import React, { useState } from "react";
import generateNames from "@rstacruz/startup-name-generator";

const DomainNameFinder = () => {
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    const data = e.target.value
    if (data.trim() === "") {
      setList([]);
    } else {
      setList(generateNames(data));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-center">

      {/* Heading */}
      <h1 className="text-3xl font-semibold mb-6">Domain Finder</h1>

      {/* Input box */}
      <input
        type="text"
        placeholder="Type a word..."
        onChange={(e) => handleChange(e)}
        className="border border-gray-300 p-3 rounded-lg w-72 focus:outline-none"
      />

      {/* Generated names */}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {list.map((name) => (
          <span
            key={name}
            className=" bg-linear-to-br from-blue-400 to-blue-600 text-white px-4 py-2 rounded-lg"
          >
            {name}
          </span>
        ))}
      </div>

    </div>
  );
};

export default DomainNameFinder;
