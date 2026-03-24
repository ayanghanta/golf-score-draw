import { PiEnvelopeSimpleBold, PiGolfFill } from "react-icons/pi";

function PrimaryFooter() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <PiGolfFill size={32} className="text-green-500" />
            <span className="text-2xl font-bold text-white tracking-tighter">
              LuckySwing
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            The premier subscription platform combining the thrill of golf
            rewards with the impact of charitable giving.
          </p>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6">Explore</h5>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Draw History
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Charity Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6">Legals</h5>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Fair Play Rules
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6">Stay Updated</h5>
          <p className="text-xs mb-4">
            Join 5,000+ golfers receiving monthly draw updates.
          </p>
          <div className="flex gap-2 bg-slate-900 p-2 rounded-xl border border-slate-800">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent border-none px-2 py-1 w-full text-sm focus:ring-0 outline-none text-white"
            />
            <button className="bg-green-600 p-2 rounded-lg hover:bg-green-500 transition">
              <PiEnvelopeSimpleBold size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
        <p>
          &copy; 2026 LuckySwing. Registered Charity Partner #GS-2024. Play
          responsibly.
        </p>
      </div>
    </footer>
  );
}

export default PrimaryFooter;
