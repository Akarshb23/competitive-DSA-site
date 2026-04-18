import React, { useState } from 'react';
import Navbar from "../components/Navbar.jsx";

export default function Landing() {
  const [index, setIndex] = useState(0);

  const content = [
    { title: "InCode", desc: "Forge your future in modern development.", color: "#6366f1" },
    { title: "Master Logic", desc: "Break down problems into clean solutions.", color: "#06b6d4" },
    { title: "Build Fast", desc: "Ship optimized, production-ready code.", color: "#10b981" },
    { title: "Stay Ahead", desc: "Keep up with evolving tech.", color: "#f59e0b" },
    { title: "Collaborate", desc: "Work with developers worldwide.", color: "#ec4899" },
  ];

  const totalSteps = content.length;
  const progress = ((index + 1) / totalSteps) * 100;

  const radius = 120;
  const strokeWidth = 16;
  const viewBoxSize = 300;
  const center = viewBoxSize / 2;

  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  const currentColor = content[index].color;

  const nextStep = () => {
    setIndex((prev) => (prev + 1) % totalSteps);
  };

  return (
    <div className="h-screen w-full flex flex-col bg-[#0a0a0c] text-slate-100">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-16">
        <div className="flex items-center gap-28 w-full max-w-7xl">

          <div className="relative w-80 h-80 flex-shrink-0">
            <svg
              viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
              className="w-full h-full transform -rotate-90"
            >
              <circle
                cx={center}
                cy={center}
                r={radius}
                stroke="#1e1e24"
                strokeWidth={strokeWidth}
                fill="transparent"
              />
              <circle
                cx={center}
                cy={center}
                r={radius}
                stroke={currentColor}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                style={{
                  strokeDashoffset,
                  transition: "stroke-dashoffset 0.6s ease, stroke 0.4s ease"
                }}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-bold" style={{ color: currentColor }}>
                {Math.round(progress)}%
              </span>
            </div>
          </div>

          <div className="flex-1 max-w-2xl">
            <div className="text-sm tracking-widest uppercase mb-6" style={{ color: currentColor }}>
              Step {index + 1} / {totalSteps}
            </div>

            <h2 className="text-6xl font-semibold mb-6">
              {content[index].title}
            </h2>

            <p className="text-2xl text-slate-400 mb-10 leading-relaxed">
              {content[index].desc}
            </p>

            <div className="flex items-center gap-8">
              <button
                onClick={nextStep}
                style={{ backgroundColor: currentColor }}
                className="px-10 py-4 rounded-xl font-semibold text-black text-lg hover:brightness-110 active:scale-95 transition"
              >
                {index === totalSteps - 1 ? "Restart" : "Next"}
              </button>

              <div className="flex gap-3">
                {content.map((_, i) => (
                  <div
                    key={i}
                    className="h-3 rounded-full transition-all duration-300"
                    style={{
                      width: i === index ? "40px" : "10px",
                      backgroundColor: i === index ? currentColor : "#1e1e24"
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}