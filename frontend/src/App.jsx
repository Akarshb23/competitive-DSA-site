import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Problems from "./pages/Problems.jsx";        // this is now Problem List
import Problem from "./pages/Problem.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/problems/:id" element={<Problem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;