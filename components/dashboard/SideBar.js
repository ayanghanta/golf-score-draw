import Link from "next/link";
import {
  PiChartBarBold,
  PiGearBold,
  PiGolfFill,
  PiPlusCircleBold,
  PiQuestionBold,
  PiSignOutBold,
} from "react-icons/pi";

function SideBar() {
  const isActive = false; //FIXME:

  return (
    <aside className="w-64 border-r border-slate-100 flex flex-col p-6 h-full">
      <div className="flex items-center gap-2 mb-12 px-2">
        <PiGolfFill size={28} className="text-green-600" />
        <span className="text-xl font-black tracking-tighter">LuckySwing</span>
      </div>

      <nav className="flex-1 space-y-2">
        <Link href="/dashboard">
          <button
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer
            ${isActive ? "bg-green-50 text-green-700" : "text-slate-400 hover:text-slate-900 hover:bg-slate-50"}`}
          >
            <PiChartBarBold size={22} /> Home
          </button>
        </Link>
        <button
          className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer
                  ${isActive ? "bg-green-50 text-green-700" : "text-slate-400 hover:text-slate-900 hover:bg-slate-50"}`}
        >
          <PiPlusCircleBold size={22} /> Add Score
        </button>
      </nav>

      <div className="pt-6 border-t border-slate-50 space-y-1">
        <Link href="/dashboard/myaccount">
          <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl font-bold text-sm text-slate-400 hover:text-slate-900 transition cursor-pointer">
            <PiGearBold size={22} /> Account
          </button>
        </Link>
        <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl font-bold text-sm text-slate-400 hover:text-slate-900 transition cursor-pointer">
          <PiQuestionBold size={22} /> Help Center
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl font-bold text-sm text-red-400 hover:text-red-600 hover:bg-red-50 transition mt-4 cursor-pointer">
          <PiSignOutBold size={22} /> Logout
        </button>
      </div>
    </aside>
  );
}

export default SideBar;
