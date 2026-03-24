import { PiTrophyBold } from "react-icons/pi";

function CTASecondary() {
  return (
    <section className="py-24 px-6 bg-green-600">
      <div className="max-w-4xl mx-auto text-center text-white">
        <PiTrophyBold
          size={64}
          className="mx-auto mb-8 opacity-40 text-white"
        />
        <h2 className="text-4xl md:text-6xl font-black mb-8 italic">
          Ready to make your <br />
          swing count?
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-slate-800 transition-all shadow-2xl">
            Get Started at $19/mo
          </button>
          <span className="text-green-200 font-medium">
            No hidden fees. Cancel anytime.
          </span>
        </div>
      </div>
    </section>
  );
}

export default CTASecondary;
