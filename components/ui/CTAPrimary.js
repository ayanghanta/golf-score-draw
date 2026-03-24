import { PiGolfFill, PiHeartFill } from "react-icons/pi";

function CTAPrimary() {
  return (
    <section id="impact" className="px-6 py-12">
      <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-1 rounded-full mb-8 border border-green-500/20">
            <PiHeartFill size={18} />
            <span className="text-sm font-bold uppercase tracking-widest">
              Our Mission
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Golfing for a Greater Purpose
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            We believe every swing should count. That’s why we’ve built charity
            into our core. No extra fees, just a shared passion for the game and
            helping others.
          </p>
          <button className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-green-500 hover:text-white transition-all duration-300">
            Meet Our Partners
          </button>
        </div>
        <div className="absolute bottom-[-10%] right-[-5%] opacity-10">
          <PiGolfFill size={300} className="text-white" />
        </div>
      </div>
    </section>
  );
}

export default CTAPrimary;
