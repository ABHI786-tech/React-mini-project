import React, { useState } from "react";

const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

const Box = ({ color, onChange }) => {
    return (
        <div
            onClick={onChange}
            className="w-[100px] h-[100px] m-3 rounded-lg cursor-pointer transition-all duration-300"
            style={{ backgroundColor: color }}
        ></div>
    );
};

const ColorBoxApp = () => {
    const num = 50;

    const initialColors = Array.from({ length: num }, () => randomColor());
    const [colors, setColors] = useState(initialColors);

    const changeColor = (index) => {
        setColors((prevColors) =>
            prevColors.map((col, idx) => {
                if (idx === index) {
                    let newColor = randomColor();
                    while (newColor === col) {
                        newColor = randomColor();
                    }
                    return newColor;
                }
                return col;
            })
        );
    };

    return (
        <div className="flex flex-wrap justify-center p-6">
            {colors.map((color, index) => (
                <Box key={index} color={color} onChange={() => changeColor(index)} />
            ))}
        </div>
    );
};

export default ColorBoxApp;
