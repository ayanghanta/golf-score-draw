import {
  PiCalendarCheckBold,
  PiShieldCheckBold,
  PiTrophyBold,
} from "react-icons/pi";

const FEATURES = [
  {
    title: "Secure & Verified",
    desc: "We use bank-level encryption and official handicap verification to ensure every draw is 100% fair.",
    icon: <PiShieldCheckBold className="text-green-600" size={32} />,
  },
  {
    title: "Epic Prize Pools",
    desc: "From custom-fitted clubs to luxury golf retreats, our prizes are curated for real golfers.",
    icon: <PiTrophyBold className="text-green-600" size={32} />,
  },
  {
    title: "Monthly Updates",
    desc: "Receive detailed reports on how your subscription funds are impacting our partner charities.",
    icon: <PiCalendarCheckBold className="text-green-600" size={32} />,
  },
];

function MoreFeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div className="order-2 md:order-1">
          <div className="grid gap-10">
            {FEATURES.map((feature, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="shrink-0 bg-slate-50 p-4 rounded-2xl group-hover:bg-green-50 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-slate-500 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-black mb-6 text-slate-800 leading-tight">
            Beyond the Score: <br />
            <span className="text-green-600">Pure Utility.</span>
          </h2>
          <p className="text-slate-500 mb-8 text-lg">
            LuckySwing isn&apos;t just a game of chance. It&apos;s a suite of
            tools for the modern golfer to track progress while giving back.
          </p>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-slate-50">
            <img
              src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=800"
              alt="Green Field"
              className="w-full hover:scale-105 transition duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoreFeaturesSection;
