import { Link } from 'react-router-dom';

export default function Navbar() {
  const handleConnect = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      alert("Wallet connected!");
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/40 backdrop-blur-lg border-b border-white/10 shadow-[0_4px_30px_rgba(99,102,241,0.15)] font-['Plus_Jakarta_Sans'] antialiased">
      <div className="flex justify-between items-center px-8 h-16 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2"><span className="material-symbols-outlined text-indigo-400">verified</span>VerifyIt</Link>
          <div className="hidden md:flex gap-6">
            <Link to="/" className="text-indigo-400 border-b-2 border-indigo-500 pb-1 font-label-sm text-[12px] uppercase font-semibold">Dashboard</Link>
            <Link to="/verify" className="text-slate-400 hover:text-white transition-colors hover:bg-white/5 rounded-lg font-label-sm text-[12px] uppercase font-semibold px-2">Verify</Link>
            <Link to="/issue" className="text-slate-400 hover:text-white transition-colors hover:bg-white/5 rounded-lg font-label-sm text-[12px] uppercase font-semibold px-2">Issue</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={handleConnect} className="primary-gradient text-white px-6 py-2 rounded-lg font-label-sm text-[12px] font-semibold uppercase active:scale-95 duration-150 transition-all shadow-lg shadow-indigo-500/20">Connect Wallet</button>
          <div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden border border-white/10">
            <img alt="User avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa4fI8dYV5f3k-QCzmB8n9hZGE1OQ5VpGc7DC8QHC5-s4nLc1ej1Xh1d50kNE-Qo5XMnQK-ePXXsbdzWSafqJxffi3tHK0QyRaay6pvQ42KgLC4WwQoBM3vFKrAFR-NmqZeI2_QdoMF3VxMrNBugLuxryNzzwfkhvdLDXLotjTokuyg2sjegJGtuJZFdvgJODbm_tRnlkwnDo1f0VPf5NYkHxeLGDWYcneNUXjpW6PwHT4X9RnRM03_wP5ph3qKRZBf-_uC6LGWYzW" />
          </div>
        </div>
      </div>
    </nav>
  );
}
