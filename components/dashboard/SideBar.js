import {
  PiChartBarBold,
  PiClockCounterClockwiseBold,
  PiGearBold,
  PiGolfFill,
  PiHandHeartBold,
  PiPlusCircleBold,
  PiQuestionBold,
  PiSignOutBold,
} from "react-icons/pi";

function SideBar() {
  return (
    <aside className="w-64 border-r border-slate-100 flex flex-col p-6 h-full">
      <div className="flex items-center gap-2 mb-12 px-2">
        <PiGolfFill size={28} className="text-green-600" />
        <span className="text-xl font-black tracking-tighter">LuckySwing</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {[
          {
            icon: <PiChartBarBold size={22} />,
            label: "Overview",
            active: true,
          },
          {
            icon: <PiPlusCircleBold size={22} />,
            label: "Add Score",
            active: false,
          },
          {
            icon: <PiClockCounterClockwiseBold size={22} />,
            label: "History",
            active: false,
          },
          {
            icon: <PiHandHeartBold size={22} />,
            label: "My Charities",
            active: false,
          },
        ].map((item, i) => (
          <button
            key={i}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer
                  ${item.active ? "bg-green-50 text-green-700" : "text-slate-400 hover:text-slate-900 hover:bg-slate-50"}`}
          >
            {item.icon} {item.label}
          </button>
        ))}
      </nav>

      {/* Sidebar Bottom Actions */}
      <div className="pt-6 border-t border-slate-50 space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl font-bold text-sm text-slate-400 hover:text-slate-900 transition cursor-pointer">
          <PiGearBold size={22} /> Account
        </button>
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
