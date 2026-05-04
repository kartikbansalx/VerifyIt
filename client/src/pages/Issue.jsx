import { useState } from "react";
import { getContract } from "../utils/contract";
import SHA256 from "crypto-js/sha256";
import CryptoJS from "crypto-js";

const generateHash = async (file) => {
  const arrayBuffer = await file.arrayBuffer();
  const wordArray = CryptoJS.lib.WordArray.create(arrayBuffer);
  return SHA256(wordArray).toString();
};

export default function Issue() {
  const [form, setForm] = useState({ name: '', course: '', year: '' });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
        alert("Please upload a PDF file.");
        return;
    }
    setLoading(true);
    try {
      const contract = await getContract();
      const hash = await generateHash(file);
      const tx = await contract.issueCertificate(
        form.name,
        form.course,
        parseInt(form.year),
        hash
      );
      await tx.wait();
      alert("Certificate Issued Successfully!");
      setForm({ name: '', course: '', year: '' });
      setFile(null);
      e.target.reset(); // reset file input
    } catch (error) {
      console.error(error);
      alert("Error issuing certificate. It may already exist or you are not the admin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 px-8 flex justify-center items-start">
      <div className="glass-card p-10 rounded-[2rem] w-full max-w-2xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-primary/10 rounded-xl text-primary">
            <span className="material-symbols-outlined text-4xl">workspace_premium</span>
          </div>
          <div>
            <h2 className="font-headline-lg text-[32px] font-bold text-white">Issue Certificate</h2>
            <p className="text-on-surface-variant font-body-md">Mint a new credential securely on the blockchain.</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-slate-400 font-label-sm text-[12px] uppercase mb-2">Student Name</label>
            <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" 
              placeholder="e.g. Alexander R. Vandergrift" />
          </div>
          <div>
            <label className="block text-slate-400 font-label-sm text-[12px] uppercase mb-2">Course / Degree</label>
            <input required type="text" value={form.course} onChange={e => setForm({...form, course: e.target.value})} 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" 
              placeholder="e.g. Blockchain Architecture" />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-slate-400 font-label-sm text-[12px] uppercase mb-2">Year</label>
              <input required type="number" value={form.year} onChange={e => setForm({...form, year: e.target.value})} 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" 
                placeholder="2024" />
            </div>
            <div className="flex-[2]">
              <label className="block text-slate-400 font-label-sm text-[12px] uppercase mb-2">Upload PDF Certificate</label>
              <input required type="file" accept="application/pdf" onChange={handleFile} 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-indigo-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
            </div>
          </div>
          
          <button disabled={loading} type="submit" 
            className="w-full primary-gradient text-white py-4 rounded-xl font-headline-md text-[18px] font-semibold mt-8 shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:scale-[1.02] transition-transform duration-300 disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2">
            {loading ? <span className="material-symbols-outlined animate-spin">sync</span> : <span className="material-symbols-outlined">send</span>}
            {loading ? 'Issuing...' : 'Mint Certificate'}
          </button>
        </form>
      </div>
    </div>
  );
}
