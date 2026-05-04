import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Issue from "./pages/Issue";
import Verify from "./pages/Verify";

function App() {
  return (
    <div className="min-h-screen bg-[#020617] font-body-md text-on-surface mesh-gradient selection:bg-primary/30 pb-24 relative overflow-x-hidden">
      <Navbar />
      <main className="max-w-7xl mx-auto w-full relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/issue" element={<Issue />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </main>
      <footer className="w-full border-t border-white/5 bg-slate-950 mt-auto absolute bottom-0">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-6 w-full max-w-7xl mx-auto gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-widest text-slate-500">VerifyIt. Secured by Ethereum.</span>
            <a href="mailto:kartikb.work@gmail.com" className="font-['Plus_Jakarta_Sans'] text-xs tracking-wider text-indigo-400 hover:text-indigo-300 transition-colors">Contact: kartikb.work@gmail.com</a>
          </div>
          <div className="flex gap-8">
            <a className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-widest text-slate-500 hover:text-indigo-400 transition-colors" href="#">Terms of Service</a>
            <a className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-widest text-slate-500 hover:text-indigo-400 transition-colors" href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
