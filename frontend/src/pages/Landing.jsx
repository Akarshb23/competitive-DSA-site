import React, { useState } from 'react';
import Navbar from "../components/Navbar.jsx";

export default function Landing() {
  const [index, setIndex] = useState(0);

  const content = [
    { 
      title: "InCode", 
      desc: "Forge your future in modern development.", 
      extra: "A platform built to sharpen your problem-solving mindset while preparing you for real-world engineering challenges.",
      color: "#6366f1" 
    },
    { 
      title: "Master Logic", 
      desc: "Break down problems into clean solutions.", 
      extra: "Develop structured thinking that helps you approach complex systems with clarity and confidence.",
      color: "#06b6d4" 
    },
    { 
      title: "Build Fast", 
      desc: "Ship optimized, production-ready code.", 
      extra: "Focus on writing efficient, scalable code that performs under real constraints.",
      color: "#10b981" 
    },
    { 
      title: "Stay Ahead", 
      desc: "Keep up with evolving tech.", 
      extra: "Adapt quickly to new tools, frameworks, and paradigms shaping the industry.",
      color: "#f59e0b" 
    },
    { 
      title: "Collaborate", 
      desc: "Work with developers worldwide.", 
      extra: "Learn from a global community and grow through shared knowledge and competition.",
      color: "#ec4899" 
    },
  ];

  const totalSteps = content.length;
  const progress = ((index + 1) / totalSteps) * 100;

  const radius = 140;
  const strokeWidth = 18;
  const viewBoxSize = 340;
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
        <div className="flex items-center justify-center gap-24 w-full max-w-5xl mx-auto">

          <div className="relative w-[340px] h-[340px] flex-shrink-0">
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

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-bold" style={{ color: currentColor }}>
                InCode
              </span>
            </div>
          </div>

          <div className="w-[520px]">
            <div className="text-sm tracking-widest uppercase mb-6 h-6" style={{ color: currentColor }}>
              Step {index + 1} / {totalSteps}
            </div>

            <h2 className="text-6xl font-semibold mb-6 min-h-[72px]">
              {content[index].title}
            </h2>

            <p className="text-2xl text-slate-400 mb-6 leading-relaxed min-h-[64px]">
              {content[index].desc}
            </p>

            <p className="text-lg text-slate-500 mb-10 leading-relaxed min-h-[80px]">
              {content[index].extra}
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