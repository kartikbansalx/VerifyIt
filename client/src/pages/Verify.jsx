import { useState } from "react";
import { getContract } from "../utils/contract";
import SHA256 from "crypto-js/sha256";
import CryptoJS from "crypto-js";

const generateHash = async (file) => {
  const arrayBuffer = await file.arrayBuffer();
  const wordArray = CryptoJS.lib.WordArray.create(arrayBuffer);
  return SHA256(wordArray).toString();
};

export default function Verify() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const verify = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please upload a PDF file to verify.");
      return;
    }
    setLoading(true);
    setError("");
    setData(null);
    try {
      const contract = await getContract();
      const hash = await generateHash(file);
      const result = await contract.verifyCertificate(hash);
      
      if (!result.studentName || result.studentName === "") {
        setError("Certificate not found on the blockchain. Ensure the file is completely unmodified.");
      } else {
        setData(result);
      }
    } catch (err) {
      console.error(err);
      setError("Error verifying certificate. Make sure you are connected to the network.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 px-8 flex flex-col items-center">
      <div className="glass-card p-10 rounded-[2rem] w-full max-w-2xl mb-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
            <span className="material-symbols-outlined text-4xl">fact_check</span>
          </div>
          <div>
            <h2 className="font-headline-lg text-[32px] font-bold text-white">Verify Certificate</h2>
            <p className="text-on-surface-variant font-body-md">Upload the PDF document to check its authenticity and integrity.</p>
          </div>
        </div>
        
        <form onSubmit={verify} className="flex gap-4">
          <input required type="file" accept="application/pdf" onChange={handleFile} 
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-secondary/20 file:text-secondary hover:file:bg-secondary/30 cursor-pointer" />
          <button disabled={loading} type="submit" 
            className="bg-secondary text-slate-900 px-8 rounded-xl font-headline-md text-[18px] font-bold shadow-[0_0_20px_rgba(76,215,246,0.3)] hover:scale-[1.02] transition-transform duration-300 disabled:opacity-70 flex items-center gap-2 cursor-pointer">
            {loading ? <span className="material-symbols-outlined animate-spin">sync</span> : <span className="material-symbols-outlined">search</span>}
            Verify
          </button>
        </form>
        {error && <p className="text-red-400 mt-4 font-label-sm">{error}</p>}
      </div>

      {data && (
        <div className="max-w-2xl w-full glass-card p-2 rounded-[2.5rem]">
          <div className="bg-white p-10 rounded-[2.2rem] text-slate-900 relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-2 ${data.isValid ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
            <div className="flex justify-between items-start mb-8">
              <div>
                <h4 className="font-bold text-slate-400 tracking-widest text-xs uppercase mb-1">Blockchain Record</h4>
                <p className="font-display text-2xl font-bold text-slate-900">{data.studentName}</p>
              </div>
              <div className={`px-4 py-2 rounded-full flex items-center gap-2 ${data.isValid ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
                <span className="material-symbols-outlined text-xl">{data.isValid ? 'verified' : 'cancel'}</span>
                <span className="text-xs font-bold uppercase">{data.isValid ? 'Valid' : 'Revoked'}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-slate-400 text-xs uppercase font-bold mb-1">Course</p>
                <p className="text-slate-700 font-semibold">{data.course}</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase font-bold mb-1">Year</p>
                <p className="text-slate-700 font-semibold">{data.year.toString()}</p>
              </div>
            </div>
            
            <div className="pt-6 border-t border-slate-100 flex items-center gap-3">
               <span className="material-symbols-outlined text-indigo-400">fingerprint</span>
               <div className="overflow-hidden">
                 <p className="text-slate-400 text-[10px] uppercase font-bold mb-0.5">Verified Document Hash (SHA256)</p>
                 <p className="text-slate-600 font-mono text-xs truncate">{data.hash}</p>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
