import React, { useState } from "react";

const ToDooList = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(null);


    const handleChange = (e) => {
        setInputValue(e.target.value);
    };


    const handleAdd = () => {
        if (!inputValue.trim()) return;


        if (editId !== null) {
            const updatedList = todos.map((item) =>
                item.id === editId ? { ...item, text: inputValue } : item
            );
            setTodos(updatedList);
            setEditId(null);
        }

        else {
            const newTodo = {
                id: todos.length + 1,
                text: inputValue,
            };
            setTodos([...todos, newTodo]);
        }


        setInputValue("");
    };

    // Delete Todo
    const handleDelete = (id) => {
        setTodos(todos.filter((item) => item.id !== id));
    };

    const handleEdit = (item) => {
        setInputValue(item.text);
        setEditId(item.id);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 bg-linear-to-b from-gray-300 to-gray-400">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">

                {/* Heading */}
                <h1 className="text-3xl font-bold text-center mb-5">Todo App</h1>

                {/* Input Section */}
                <div className="flex gap-2 mb-5">
                    <input
                        value={inputValue}
                        type="text"
                        placeholder="Enter a task..."
                        className="flex-1 border rounded-xl px-3 py-2 focus:outline-none"
                        onChange={handleChange}
                    />

                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow"
                        onClick={handleAdd}
                    >
                        {editId !== null ? "Save" : "Add"}
                    </button>
                </div>

                {/* Todo List */}
                <div className="space-y-3">
                    {todos.length === 0 && (
                        <p className="text-center text-gray-500">No tasks yet...</p>
                    )}

                    {todos.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between bg-gray-50 p-3 rounded-xl shadow"
                        >
                            <span className="text-gray-800">{item.text}</span>

                            {/* Buttons */}
                            <div className="flex gap-3">
                                <button
                                    className="text-green-600 font-semibold"
                                    onClick={() => handleEdit(item)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="text-red-500 font-semibold"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ToDooList;
