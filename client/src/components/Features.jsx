export default function Features() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">
      <div className="md:col-span-8 glass-card p-10 rounded-[2rem] overflow-hidden relative group">
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <span className="material-symbols-outlined text-4xl">account_balance</span>
            </div>
            <h3 className="font-headline-lg text-[32px] font-bold text-white">Institutional Trust</h3>
          </div>
          <p className="font-body-lg text-[18px] text-on-surface-variant mb-8 max-w-md">
            Join over 500+ global universities and accreditation bodies using the Academic Ledger protocol to prevent credential fraud.
          </p>
          <div className="flex -space-x-4">
            <img className="w-12 h-12 rounded-full border-4 border-slate-950" alt="Inst 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXvu9w3FgNMfhZ3tz2aHgmYvm8rfhjaak1QwJkLfIF0LXQRDN9LKAbFA9v54EWOrzovXmNFEAHIKgaPJ7qZW6fk1DvaAydGuRiXUEagzKLp9RPimDlrkN6PnFVYjXkae9c5wxtXIUokA2_Ncijj5X8K1t-hnzVbKFts38Qdyr-upk7p3W89ZEVlKGXu5gqLoGw_TFD2zuiKb8055zmPfoGQ6LztTwT-g6ql5fq5rm1naDfL12dBgW9VlAXHosj_lt9ffL7kGtbBOI7"/>
            <img className="w-12 h-12 rounded-full border-4 border-slate-950" alt="Inst 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYSXUVMoFR3d_mEOdecSl4-KacRGl6zaCI6c2J6yfOBX9Y2z8smyltLeYj86J71Gt4LVBkqvCMEd2H7iTc6voFNJVwZICmLhOHYE3dk-fT4DQNcWHqb6np1htELb-VJjhA3e2HuNI51IXOBPtDykAdJY8q8mOjboHUrodanQWgW_s_x47AVeiCLPXFkOEATwItGZ5npZ3W9ilw22bDoc2fTIhRHL-wB3E99RUw4ku4Bpb-t9lrNLE9wAaAYO97IFHO-bl28F-7tvFW"/>
            <img className="w-12 h-12 rounded-full border-4 border-slate-950" alt="Inst 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXb7TOQRLqve1lQqMnTZ0Cko2JbIVhmEp1yQp6n86RhO7-LjxZXRcs7JDgnIwQC6aio1lIwIETluKh71a_T3ygcsu-I51zNb7p9dOEPACKvZ0Vhv772QBPPyNtul5mYBOa7vVrfOpg_uGdNKhmMuASBGyEDhNG0tXOoyzY1di6STXU2_K97b_WqcrKn2eW23kAj3uCrLVgamrWJP6GMlO0JrNkbxxy9iQ3rfRFhewmAGVYyfQoNral7CEBKp-Tk7iiadsJaxQ9Si6Z"/>
            <div className="w-12 h-12 rounded-full border-4 border-slate-950 bg-surface-container-high flex items-center justify-center text-[12px] font-semibold text-white">+497</div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full -z-0 opacity-20 group-hover:opacity-40 transition-opacity">
          <img className="w-full h-full object-cover" alt="Abstract" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg9cy5UHJeFmM4jjSW9a97E5DAI8HrkXsylkcAoO0ttbhxZJaOT7Pg_i3toi80ilprcfM9sdGDoZLoUp6iVsQUZGA732WXPhXOIf0l_sSkpXYYHGOPbrUhYGLELo7iLq258ozbQMQH4Du8aRzLXFM19khFNCoGO2cCuRWojlr_YBAIuMQVOBLw9mEfF9nOdxyPOluToCsxBP-geiL5dodOEhJiHDcl8YicZ3bcGxXPTRMZeHAxm9D0jsgpu0YLRSedwghrJU64MbIa"/>
        </div>
      </div>
      
      <div className="md:col-span-4 glass-card p-10 rounded-[2rem] flex flex-col justify-between">
        <div className="p-3 bg-secondary/10 rounded-xl text-secondary w-fit mb-6">
          <span className="material-symbols-outlined text-4xl">qr_code_scanner</span>
        </div>
        <div>
          <h3 className="font-headline-md text-[24px] font-bold text-white mb-4">Instant Scan</h3>
          <p className="font-body-md text-[16px] text-on-surface-variant">
            Every certificate includes a unique, encrypted QR code for immediate offline verification.
          </p>
        </div>
      </div>
      
      <div className="md:col-span-4 glass-card p-10 rounded-[2rem]">
        <div className="p-3 bg-tertiary/10 rounded-xl text-tertiary w-fit mb-6">
          <span className="material-symbols-outlined text-4xl">lock</span>
        </div>
        <h3 className="font-headline-md text-[24px] font-bold text-white mb-4">Tamper Proof</h3>
        <p className="font-body-md text-[16px] text-on-surface-variant">
          Utilizing Merkle trees and cryptographic hashing to ensure certificates can never be altered.
        </p>
      </div>
      
      <div className="md:col-span-8 glass-card p-1 rounded-[2rem] flex flex-col md:flex-row items-center">
        <div className="p-10 md:w-1/2">
          <h3 className="font-headline-lg text-[32px] font-bold text-white mb-4">Immutable Timeline</h3>
          <p className="font-body-md text-[16px] text-on-surface-variant mb-6">
            Trace the chain of custody from issuance to verification in real-time.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-secondary">
              <span className="material-symbols-outlined">verified</span>
              <span className="text-[12px] font-semibold tracking-widest">BLOCK #19284 VERIFIED</span>
            </div>
            <div className="flex items-center gap-4 text-on-surface-variant/40">
              <span className="material-symbols-outlined">pending</span>
              <span className="text-[12px] font-semibold tracking-widest">WAITING FOR CONSENSUS...</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 h-64 md:h-full p-4 w-full">
          <div className="w-full h-full glass-card border-none rounded-2xl bg-white/5 flex items-center justify-center">
            <img className="w-full h-full object-cover rounded-xl" alt="Blockchain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjvBZMvoj5i7ZUY67dKYk1yQk9ZOkjOn0E8hF3KepxBaelCBQOls9XJtCGvMFYmzi8uWGliMQiqxu4jz2arpAvVLMed7AN188gOD42JyLzfR2uZi-v46_wp2iEd4ccG32F5UtmLN-kQUblAFhOZ6C24rx8xpsBN1wE7lMFErJHVaWXB-xh626RZauQBihKe1RntwJTYGKmU2I-IdV8Tmbj0em-w8Q5xksyZqGLVrX12uePVXf28DPljLdf_Dxp7BVLzW95NyXt46iV"/>
          </div>
        </div>
      </div>
    </section>
  );
}
