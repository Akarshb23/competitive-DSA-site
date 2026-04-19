import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

function Problems() {
  const navigate = useNavigate();

  const content = [
    { id: 1, title: "Two Sum", difficulty: "Easy" },
    { id: 2, title: "Reverse Linked List", difficulty: "Easy" },
    { id: 3, title: "Longest Substring Without Repeating Characters", difficulty: "Medium" },
    { id: 4, title: "Add Two Numbers", difficulty: "Medium" },
    { id: 5, title: "Merge k Sorted Lists", difficulty: "Hard" },
    { id: 6, title: "LRU Cache", difficulty: "Hard" },
    { id: 7, title: "Binary Tree Level Order Traversal", difficulty: "Medium" },
    { id: 8, title: "Valid Parentheses", difficulty: "Easy" },
  ];

  const getColor = (difficulty) => {
    if (difficulty === "Easy") return "text-green-400";
    if (difficulty === "Medium") return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white">
      <Navbar />

      <div className="max-w-3xl mx-auto mt-10 px-4">
        {content.map((problem) => (
          <div
            key={problem.id}
            onClick={() => navigate(`/problems/${problem.id}`)}
            className="flex items-center justify-between p-4 border-b border-gray-800 cursor-pointer hover:bg-[#111111] transition"
          >
            <div className="flex gap-4">
              <span className="text-gray-500">{problem.id}.</span>
              <span>{problem.title}</span>
            </div>

            <span className={getColor(problem.difficulty)}>
              {problem.difficulty}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Problems;