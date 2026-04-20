import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Editor from "@monaco-editor/react";

function Problem() {
  const { id } = useParams();

  const templates = {
    cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {
    
    return 0;
}`,
    javascript: `function main() {
    
}

main();`,
    python: `def main():
    pass

if __name__ == "__main__":
    main()`,
  };

  const [language, setLanguage] = useState("cpp");
  const [code, setCode] = useState(templates["cpp"]);

  const problems = [
    {
      id: "1",
      title: "Two Sum",
      difficulty: "Easy",
      description:
        "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    },
    {
      id: "2",
      title: "Reverse Linked List",
      difficulty: "Easy",
      description:
        "Reverse a singly linked list and return the new head.",
    },
    {
      id: "3",
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
      description:
        "Find the length of the longest substring without repeating characters.",
    },
    {
      id: "4",
      title: "Add Two Numbers",
      difficulty: "Medium",
      description:
        "Add two numbers represented by linked lists and return the sum as a linked list.",
    },
    {
      id: "5",
      title: "Merge k Sorted Lists",
      difficulty: "Hard",
      description:
        "Merge k sorted linked lists into one sorted list.",
    },
    {
      id: "6",
      title: "LRU Cache",
      difficulty: "Hard",
      description:
        "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    },
    {
      id: "7",
      title: "Binary Tree Level Order Traversal",
      difficulty: "Medium",
      description:
        "Return the level order traversal of a binary tree.",
    },
    {
      id: "8",
      title: "Valid Parentheses",
      difficulty: "Easy",
      description:
        "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    },
  ];

  const problem = problems.find((p) => p.id === id);
  if (!problem) return <div>Problem not found</div>;

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    setCode(templates[lang]);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white">
      <Navbar />

      <div className="flex h-[90vh]">
        <div className="w-1/2 p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold">{problem.title}</h1>
          <p className="text-gray-400 mb-4">{problem.difficulty}</p>
          <p>{problem.description}</p>
        </div>

        <div className="w-1/2 p-6 flex flex-col">
          <select
            value={language}
            onChange={handleLanguageChange}
            className="mb-4 bg-black border border-gray-700 p-2"
          >
            <option value="cpp">C++</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>

          <div className="flex-1 border border-gray-700 rounded">
            <Editor
              height="100%"
              language={language}
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || "")}
            />
          </div>

          <button
            onClick={() => console.log(code)}
            className="mt-4 px-4 py-2 bg-white text-black rounded"
          >
            Run
          </button>
        </div>
      </div>
    </div>
  );
}

export default Problem;