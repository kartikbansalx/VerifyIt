export default function HowItWorks() {
  return (
    <section className="px-8 pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-[32px] md:text-[40px] font-bold text-white mb-4">How VerifyIt Works</h2>
          <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">A seamless, decentralized flow ensuring absolute privacy and tamper-proof verification.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="glass-card p-10 rounded-[2rem] hover:bg-white/5 transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">receipt_long</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Issue Certificate</h3>
            <p className="text-slate-400 leading-relaxed">
              Universities upload a student’s certificate as a PDF. A unique digital fingerprint (hash) is generated and securely stored on Ethereum.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-10 rounded-[2rem] hover:bg-white/5 transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">enhanced_encryption</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Secure Storage</h3>
            <p className="text-slate-400 leading-relaxed">
              Only the hash of the document is stored on the blockchain, ensuring data privacy while making the record tamper-proof and permanent.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-10 rounded-[2rem] hover:bg-white/5 transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">upload_file</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Upload for Verification</h3>
            <p className="text-slate-400 leading-relaxed">
              Employers or institutions upload the certificate PDF to the system for verification. No IDs or sensitive information required.
            </p>
          </div>

          {/* Card 4 */}
          <div className="glass-card p-10 rounded-[2rem] hover:bg-white/5 transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">task_alt</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Instant Verification</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              The system generates a hash of the uploaded file and compares it with blockchain records.
            </p>
            <div className="bg-slate-900/50 rounded-xl p-4 border border-white/5">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-emerald-400 text-sm">check_circle</span>
                <span className="text-sm font-semibold text-white">Match → Valid Certificate</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-red-400 text-sm">cancel</span>
                <span className="text-sm font-semibold text-white">No Match → Invalid or Modified</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
