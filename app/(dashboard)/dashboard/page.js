import ActiveCharityDisplayCard from "@/components/dashboard/ActiveCharityDisplayCard";
import AddGolfScore from "@/components/dashboard/AddGolfScore";
import DisplayScores from "@/components/dashboard/DisplayScores";
import { PiTrophyBold, PiUserBold } from "react-icons/pi";

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

        <ActiveCharityDisplayCard />
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <AddGolfScore />
        <DisplayScores />
      </div>
    </>
  );
}

export default Page;
