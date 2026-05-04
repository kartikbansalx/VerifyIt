import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center mb-24 relative pt-16">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
      <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-card rounded-full mb-8">
        <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
        <span className="font-label-sm text-[12px] font-semibold text-secondary tracking-widest uppercase">Secured by Ethereum Protocol</span>
      </div>
      <h1 className="font-display text-[64px] md:text-[80px] font-extrabold text-white max-w-4xl mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 leading-tight">
        VerifyIt
      </h1>
      <p className="font-body-lg text-[20px] md:text-[24px] text-on-surface-variant max-w-3xl mb-16 leading-relaxed">
        Decentralized Academic Credential Verification System
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-20">
        <Link to="/issue" className="primary-gradient text-white px-10 py-4 rounded-xl font-headline-md text-[24px] font-semibold shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:scale-105 transition-transform duration-300 flex items-center gap-3">
          <span className="material-symbols-outlined">workspace_premium</span>
          Issue Certificate
        </Link>
        <Link to="/verify" className="glass-card text-white px-10 py-4 rounded-xl font-headline-md text-[24px] font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-3 border border-white/20">
          <span className="material-symbols-outlined">fact_check</span>
          Verify Certificate
        </Link>
      </div>

    </section>
  );
}
