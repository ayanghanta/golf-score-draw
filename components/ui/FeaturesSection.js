import { PiCalendarCheckBold, PiHeartFill, PiTargetBold } from "react-icons/pi";

const FEATURES = [
  {
    icon: <PiCalendarCheckBold size={40} />,
    title: "1. Log 5 Scores",
    desc: "Just played? Enter your last 5 scores. Accuracy is verified via our handicap API integration.",
  },
  {
    icon: <PiTargetBold size={40} />,
    title: "2. Monthly Draws",
    desc: "Every month, we draw winning score patterns. If your sequence matches, you win the prize pool.",
  },
  {
    icon: <PiHeartFill size={40} />,
    title: "3. Give Back",
    desc: "10% of your subscription goes directly to our rotating charity partners to help underserved youth.",
  },
];

function FeaturesSection() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">
          How It Works
        </h2>
        <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full"></div>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {FEATURES.map((item, idx) => (
          <div
            key={idx}
            className="p-10 rounded-3xl bg-white border border-slate-100 hover:border-green-200 hover:translate-y-1.25 transition-all duration-300"
          >
            <div className="mb-6 text-green-600">{item.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">
              {item.title}
            </h3>
            <p className="text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
