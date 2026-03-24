import AddGolfScore from "@/components/dashboard/AddGolfScore";
import {
  PiArrowRightBold,
  PiClockCounterClockwiseBold,
  PiHeartFill,
  PiPlusCircleBold,
  PiTrophyBold,
  PiUserBold,
} from "react-icons/pi";

const DUMMPY_SCORES = [
  {
    date: "Mar 20",
    course: "Pebble Beach",
    score: "74",
    status: "Verified",
  },
  {
    date: "Mar 15",
    course: "St Andrews",
    score: "68",
    status: "Verified",
  },
  {
    date: "Mar 10",
    course: "Pinehurst No. 2",
    score: "81",
    status: "Processing",
  },
  {
    date: "Mar 02",
    course: "Riviera CC",
    score: "72",
    status: "Verified",
  },
  {
    date: "Feb 28",
    course: "TPC Sawgrass",
    score: "75",
    status: "Verified",
  },
];

function Page() {
  return (
    <>
      <header className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-3xl font-black tracking-tight mb-1">
            Welcome back, Tiger
          </h1>
          <p className="text-slate-400 font-medium italic">
            &quot;The more I practice, the luckier I get.&quot;
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Next Draw In
            </p>
            <p className="font-bold text-slate-900">12d : 04h : 12m</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center border-2 border-white ring-2 ring-slate-50">
            <PiUserBold size={20} className="text-slate-500" />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="border-b-4 border-green-600 pb-6">
          <div className="flex items-center gap-2 mb-4 text-green-600 uppercase text-[11px] font-black tracking-[0.2em]">
            <PiTrophyBold size={18} /> Current Draw Pool
          </div>
          <p className="text-5xl font-black text-slate-900 mb-2">$12,450.00</p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-tighter">
              Status: Entry Phase Active
            </p>
          </div>
        </div>

        <div className="border-b-4 border-slate-100 pb-6 group hover:border-green-200 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-4 text-slate-400 uppercase text-[11px] font-black tracking-[0.2em]">
                <PiHeartFill size={18} /> Active Charity
              </div>
              <p className="text-2xl font-black text-slate-900">
                Youth Golf Foundation
              </p>
              <p className="text-sm text-slate-400 font-medium">
                15% of your sub is donated here
              </p>
            </div>
            <button className="text-green-600 font-black text-xs uppercase tracking-widest py-2 px-4 hover:bg-green-50 rounded-full transition">
              Choose New
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <AddGolfScore />
      </div>
    </>
  );
}

export default Page;
