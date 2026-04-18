import { useState } from "react";

function Navbar({ onLearnClick, onPracticeClick }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0c]/80 backdrop-blur-xl border-b border-white/5 px-8 py-4 flex items-center justify-between">
      
      {/* Logo Section */}
      <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
        <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
           <span className="text-[#0a0a0c] font-black text-xl">I</span>
        </div>
        <h1 className="text-2xl font-black tracking-tighter text-white">
          InCode
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-10">
        <button 
          onClick={onLearnClick} 
          className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-all"
        >
          Learn
        </button>
        <button 
          onClick={onPracticeClick} 
          className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-all"
        >
          Practice
        </button>
        
        <div className="h-5 w-[1px] bg-white/10 mx-2"></div>
        
        <button className="text-sm font-bold text-slate-300 hover:text-white transition-colors">
          Log in
        </button>
        
        <button className="bg-white text-black px-6 py-2.5 rounded-xl text-sm font-extrabold hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95">
          Join Pro
        </button>
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <span className="text-2xl font-bold">✕</span>
        ) : (
          <div className="space-y-1.5">
            <div className="w-6 h-0.5 bg-current"></div>
            <div className="w-6 h-0.5 bg-current"></div>
          </div>
        )}
      </button>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-[#0a0a0c] border-b border-white/10 p-8 flex flex-col gap-6 md:hidden shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <button 
            onClick={() => { onLearnClick(); setOpen(false); }}
            className="text-left text-2xl font-black text-white hover:pl-2 transition-all"
          >
            Learn
          </button>
          <button 
            onClick={() => { onPracticeClick(); setOpen(false); }}
            className="text-left text-2xl font-black text-white hover:pl-2 transition-all"
          >
            Practice
          </button>
          <hr className="border-white/5" />
          <button className="w-full bg-white text-black py-4 rounded-2xl font-black text-lg shadow-xl">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;