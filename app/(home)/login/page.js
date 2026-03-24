import Link from "next/link";
import {
  PiArrowLeftBold,
  PiArrowRightBold,
  PiEnvelopeSimpleBold,
  PiGolfFill,
  PiLockKeyBold,
} from "react-icons/pi";

function page() {
  return (
    <div className="flex h-screen w-full bg-white overflow-hidden">
      {/* LEFT SIDE */}
      <div className="hidden lg:block lg:w-1/2 h-full relative">
        <img
          src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80&w=1200"
          alt="Golf Course Close-up"
          className="absolute inset-0 w-full h-full object-cover grayscale-[30%] brightness-75 hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-linear-to-t from-green-900/80 via-transparent to-transparent flex flex-col justify-between p-16">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md self-start px-4 py-2 rounded-full border border-white/20">
            <PiGolfFill size={24} className="text-green-400" />
            <span className="text-xl font-bold text-white tracking-tighter uppercase">
              LuckySwing
            </span>
          </div>

          <div className="max-w-md">
            <h2 className="text-5xl font-black text-white leading-tight mb-4">
              Your Swing <br />
              <span className="text-green-400 italic font-light">
                Has Purpose.
              </span>
            </h2>
            <p className="text-green-50 text-lg opacity-90 leading-relaxed">
              Log in to sync your handicap and contribute to our monthly youth
              golf scholarship fund.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-20 lg:px-32 bg-white py-8">
        <div className="lg:hidden flex items-center gap-2 mb-6">
          <PiGolfFill size={28} className="text-green-600" />
          <span className="text-xl font-black text-slate-800 tracking-tighter">
            LuckySwing
          </span>
        </div>

        <div className="mb-6">
          <Link href="/">
            <button className="flex items-center gap-2 text-slate-400 hover:text-green-600 transition mb-4 group font-bold text-xs uppercase tracking-widest cursor-pointer bg-slate-50 py-1.5 px-3 rounded-full w-fit">
              <PiArrowLeftBold className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>
          </Link>
          <h1 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            Enter your credentials to manage your scores.
          </p>
        </div>

        <form className="space-y-6">
          <div className="relative border-b-2 border-slate-100 focus-within:border-green-600 transition-all py-1 group">
            <label className="block text-[9px] uppercase tracking-widest font-black text-slate-400 group-focus-within:text-green-600 mb-0.5">
              Email Address
            </label>
            <div className="flex items-center">
              <PiEnvelopeSimpleBold
                size={18}
                className="text-slate-300 group-focus-within:text-green-600 mr-3"
              />
              <input
                type="email"
                placeholder="golf@example.com"
                className="w-full bg-transparent border-none text-slate-900 font-bold placeholder-slate-200 focus:ring-0 outline-none text-base py-1.5"
                required
              />
            </div>
          </div>

          <div className="relative border-b-2 border-slate-100 focus-within:border-green-600 transition-all py-1 group">
            <div className="flex justify-between items-end mb-0.5">
              <label className="block text-[9px] uppercase tracking-widest font-black text-slate-400 group-focus-within:text-green-600">
                Password
              </label>
              <a
                href="#"
                className="text-[10px] font-bold text-slate-400 hover:text-green-600 transition uppercase tracking-tighter"
              >
                Lost Password?
              </a>
            </div>
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

          <div className="pt-4">
            <button className="w-full bg-slate-950 text-white py-4 rounded-full font-black text-lg flex items-center justify-center gap-3 hover:bg-green-600 transition-all duration-300 active:scale-95 group cursor-pointer shadow-lg shadow-slate-100">
              Access LuckySwing
              <PiArrowRightBold
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>
        </form>

        <div className="mt-8 text-center lg:text-left">
          <p className="text-sm text-slate-400 font-medium">
            New to the club?
            <Link
              href="/signup"
              className="text-green-600 font-black hover:underline underline-offset-4 ml-1"
            >
              Join Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
