import Link from "next/link";
import { PiGolfFill } from "react-icons/pi";

function LandingPageNavbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
      <div className="flex items-center gap-2">
        <div className="bg-green-600 p-1.5 rounded-lg">
          <PiGolfFill size={24} className="text-white" />
        </div>
        <span className="text-2xl font-bold tracking-tight text-slate-800">
          Lucky<span className="text-green-600">Swing</span>
        </span>
      </div>
      <div className="hidden md:flex gap-8 font-medium text-slate-600">
        <Link
          href="#how-it-works"
          className="hover:text-green-600 transition underline-offset-4 hover:underline"
        >
          How it Works
        </Link>
        <Link
          href="#impact"
          className="hover:text-green-600 transition underline-offset-4 hover:underline"
        >
          Our Impact
        </Link>
        <Link
          href="#features"
          className="hover:text-green-600 transition underline-offset-4 hover:underline"
        >
          Features
        </Link>
      </div>
      <Link href="/signup">
        <button className="bg-slate-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition duration-300 cursor-pointer">
          Join Now
        </button>
      </Link>
    </nav>
  );
}

export default LandingPageNavbar;
