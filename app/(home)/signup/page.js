import Link from "next/link";
import {
  PiGolfFill,
  PiUserBold,
  PiEnvelopeSimpleBold,
  PiLockKeyBold,
  PiArrowRightBold,
  PiArrowLeftBold,
  PiCheckCircleFill,
  PiHandsPrayingFill,
} from "react-icons/pi";

const SMALL_FEATURES = [
  "Enter scores, win monthly prizes.",
  "15% of subs go to youth golf.",
  "Verified handicap tracking.",
];

function page() {
  return (
    <div className="flex h-screen w-full bg-white overflow-hidden font-sans">
      <div className="hidden lg:block lg:w-1/2 h-full relative">
        <img
          src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=1200"
          alt="Lush Golf Course"
          className="absolute inset-0 w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/40 via-transparent to-green-900/90 flex flex-col justify-between p-16">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg self-start px-5 py-2.5 rounded-full border border-white/20">
            <PiGolfFill size={24} className="text-green-400" />
            <span className="text-xl font-black text-white tracking-tighter uppercase">
              LuckySwing
            </span>
          </div>

          <div className="max-w-md pb-10">
            <div className="flex items-center gap-2 text-green-400 mb-4 font-bold tracking-widest uppercase text-sm">
              <PiHandsPrayingFill size={20} />
              <span>Join the Mission</span>
            </div>
            <h2 className="text-5xl font-black text-white leading-tight mb-6">
              Start Your <br />
              <span className="text-green-400 italic font-light underline decoration-1 underline-offset-8">
                Impactful
              </span>{" "}
              Round.
            </h2>
            <ul className="space-y-4">
              {SMALL_FEATURES.map((text, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-white/90 font-medium"
                >
                  <PiCheckCircleFill className="text-green-400" size={20} />{" "}
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/*RIGHT SIDE*/}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-20 lg:px-32 bg-white py-8">
        <div className="lg:hidden flex items-center gap-2 mb-6">
          <PiGolfFill size={28} className="text-green-600" />
          <span className="text-xl font-black text-slate-800 tracking-tighter">
            LuckySwing
          </span>
        </div>

        <div className="mb-8">
          <Link href="/">
            <button className="flex items-center gap-2 text-slate-400 hover:text-green-600 transition mb-4 group font-bold text-xs uppercase tracking-widest bg-slate-200 py-1 px-2.5 rounded-full">
              <PiArrowLeftBold className="group-hover:-translate-x-1 transition-transform" />
              Back
            </button>
          </Link>
          <h1 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">
            Create Membership
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            Become part of the community that plays for a cause.
          </p>
        </div>

        <form className="space-y-5">
          <div className="relative border-b-2 border-slate-100 focus-within:border-green-600 transition-all py-1 group">
            <label className="block text-[9px] uppercase tracking-[0.2em] font-black text-slate-400 group-focus-within:text-green-600 mb-0.5">
              Full Name
            </label>
            <div className="flex items-center">
              <PiUserBold
                size={18}
                className="text-slate-300 group-focus-within:text-green-600 mr-3"
              />
              <input
                type="text"
                placeholder="Tiger Woods"
                className="w-full bg-transparent border-none text-slate-900 font-bold placeholder-slate-200 focus:ring-0 outline-none text-base py-1.5"
                required
              />
            </div>
          </div>

          <div className="relative border-b-2 border-slate-100 focus-within:border-green-600 transition-all py-1 group">
            <label className="block text-[9px] uppercase tracking-[0.2em] font-black text-slate-400 group-focus-within:text-green-600 mb-0.5">
              Email Address
            </label>
            <div className="flex items-center">
              <PiEnvelopeSimpleBold
                size={18}
                className="text-slate-300 group-focus-within:text-green-600 mr-3"
              />
              <input
                type="email"
                placeholder="pro@luckyswing.com"
                className="w-full bg-transparent border-none text-slate-900 font-bold placeholder-slate-200 focus:ring-0 outline-none text-base py-1.5"
                required
              />
            </div>
          </div>

          <div className="relative border-b-2 border-slate-100 focus-within:border-green-600 transition-all py-1 group">
            <label className="block text-[9px] uppercase tracking-[0.2em] font-black text-slate-400 group-focus-within:text-green-600 mb-0.5">
              Set Password
            </label>
            <div className="flex items-center">
              <PiLockKeyBold
                size={18}
                className="text-slate-300 group-focus-within:text-green-600 mr-3"
              />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-transparent border-none text-slate-900 font-bold placeholder-slate-200 focus:ring-0 outline-none text-base py-1.5"
                required
              />
            </div>
          </div>

          <div className="flex gap-3 pt-1 items-end">
            <input
              type="checkbox"
              className="mt-1 w-3.5 h-3.5 rounded border-slate-300 text-green-600 focus:ring-green-500 cursor-pointer"
              required
            />
            <p className="text-[11px] text-slate-500 leading-snug font-medium">
              I agree to the{" "}
              <Link href="#" className="text-slate-800 underline font-bold">
                Terms
              </Link>{" "}
              and understand that 15% goes to charities.
            </p>
          </div>

          <div className="pt-4">
            <button className="w-full bg-green-600 text-white py-4 rounded-full font-black text-lg flex items-center justify-center gap-3 hover:bg-slate-900 transition-all duration-500 active:scale-95 group shadow-lg shadow-green-100 cursor-pointer">
              Join the Club
              <PiArrowRightBold
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>
        </form>

        <div className="mt-8 text-center lg:text-left">
          <p className="text-xs text-slate-400 font-medium">
            Already have a membership?
            <Link
              href="/login"
              className="text-green-600 font-black hover:underline underline-offset-4 ml-1"
            >
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
