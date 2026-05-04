export default function CertificatePreview() {
  return (
    <section className="mb-32">
      <div className="text-center mb-16">
        <h2 className="font-headline-lg text-[32px] font-bold text-white mb-4">The Digital Standard</h2>
        <p className="font-body-lg text-[18px] text-on-surface-variant">Designed for prestige, engineered for permanence.</p>
      </div>
      <div className="max-w-4xl mx-auto glass-card p-2 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
        <div className="bg-white p-12 md:p-20 rounded-[2.2rem] text-slate-900 relative">
          <div className="absolute inset-0 border-[20px] border-slate-100/50 pointer-events-none rounded-[2.2rem]"></div>
          <div className="flex justify-between items-start mb-16">
            <div>
              <h4 className="font-bold text-slate-400 tracking-widest text-xs uppercase mb-2">Academic Record</h4>
              <p className="font-display text-4xl font-extrabold text-slate-900">Certificate of Completion</p>
            </div>
            <img className="w-16 h-16 rounded-xl" alt="Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU9fJel2L5SWkqssx1A5XQEcmCwKSCjKEcVUwHrJgPCLCpJ-rnHuzOKoYpDSILqXf1CkBi4CbaryQQ6PYZFlFmIHrZw2bXEy85QBDmV6tz1PIfi8vA2l1rxiKuxXXS2ZT-7TRlKBZ8rgmOspNfu6lZyemCxNKO6j9MxVQWLN9b4vX6kLVUxWgSex-CZ9Cp2Sy80szFIoenhkdgZ4mFnEJqdp7KiHU_1RAJ4Jy3r1pKuHllD6VgMcYIUshhejXebv7sq4vIompAwQ8O"/>
          </div>
          <div className="mb-12">
            <p className="text-slate-500 mb-2">This is to certify that</p>
            <h5 className="text-3xl font-bold mb-4 uppercase">Alexander R. Vandergrift</h5>
            <p className="text-slate-500 leading-relaxed max-w-lg">
                has successfully fulfilled all requirements for the Professional Degree in 
                <span className="text-slate-900 font-semibold italic"> Blockchain Architecture &amp; Smart Contract Audit </span>
                granted on this day, September 14, 2024.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-end pt-12 border-t border-slate-100 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-lg">
                <span className="material-symbols-outlined text-indigo-600">fingerprint</span>
                <span className="text-[10px] font-mono text-slate-400 truncate w-48">TX: 0x71C7656EC7ab88b098defB751B7401B5f6d8976F</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-lg">
                <span className="material-symbols-outlined text-emerald-600">verified_user</span>
                <span className="text-[10px] font-bold text-slate-700">VERIFIED ON ETHEREUM MAINNET</span>
              </div>
            </div>
            <div className="bg-white p-2 border border-slate-100 rounded-xl">
              <img className="w-24 h-24 grayscale opacity-80" alt="QR" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEep_aSy5vaeWoDi8l4P9cY35_9ra5cYhHCam36ePDc74TJz5pYJCCMSSBdZrYlKbMCV1S_d0OnY6YWAIFl7CubSlIROwzywb-78tJQXBdJIM3sJAABPpdFAJpbDSwF8dEX-j3ROvwoevK17hGV8kBcN9yljwEQR-lWX4I3fd4hne5sQhraxz0GT73FEdcYfpxl1Vnovhwl_c2Ozu-3SjsXmo45AfnFsDUQpZwepObwqavsiIz74nn2LiFL6RSlJr-PnYeSmpOsTaU"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
