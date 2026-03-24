import { PiArrowRightBold } from "react-icons/pi";

function HeroSection() {
  return (
    <section className="relative px-6 pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 text-xs font-bold tracking-widest text-green-700 uppercase bg-green-100 rounded-md">
              v1.2 Launch
            </span>
            <span className="text-sm font-medium text-slate-400">
              Swing, Score, Support
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 text-slate-900">
            Turn Your <span className="text-green-600 italic">Scorecard</span>{" "}
            Into Rewards.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-lg leading-relaxed">
            LuckySwing is the only subscription platform where entering your
            last 5 golf scores puts you in the running for monthly jackpots
            while supporting global charities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-500 transition shadow-xl shadow-green-100 cursor-pointer">
              Start Subscription <PiArrowRightBold size={20} />
            </button>
            <button className="bg-white border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition cursor-pointer">
              Past Draws
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-liner-to-r from-green-400 to-emerald-600 rounded-[4xl] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <img
            src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=800"
            alt="Professional Golfer"
            className="rounded-[2rem] shadow-2xl relative z-10 w-full object-cover aspect-[4/3] grayscale-[20%] hover:grayscale-0 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
