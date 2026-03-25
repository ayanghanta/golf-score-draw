import React from "react";
import {
  PiUsersBold,
  PiTrophyFill,
  PiHandHeartBold,
  PiDotsThreeVerticalBold,
  PiPlayFill,
  PiPlusCircleBold,
  PiPencilSimpleBold,
  PiSealCheckFill,
  PiTrendUpBold,
} from "react-icons/pi";

function Page() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 pb-20">
      {/* --- ADMIN HEADER & PRIMARY ACTION --- */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-50 pb-10">
        <div>
          <h1 className="text-4xl font-black tracking-tight mb-2">
            Admin Control
          </h1>
          <p className="text-slate-400 font-medium italic">
            Overseeing the monthly draw and charity impact.
          </p>
        </div>
        <button className="bg-green-600 text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-slate-900 transition-all duration-500 shadow-2xl shadow-green-100 cursor-pointer group">
          <PiPlayFill
            size={20}
            className="group-hover:scale-125 transition-transform"
          />{" "}
          Start Monthly Draw
        </button>
      </header>

      {/* --- STATS OVERVIEW --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="border-b-4 border-slate-900 pb-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
            Total Prize Pool
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black text-slate-900">
              $42,850.00
            </span>
            <span className="text-green-500 text-xs font-bold flex items-center gap-1">
              <PiTrendUpBold /> +12%
            </span>
          </div>
        </div>
        <div className="border-b-4 border-slate-100 pb-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
            Active Members
          </p>
          <span className="text-4xl font-black text-slate-900">1,284</span>
        </div>
        <div className="border-b-4 border-slate-100 pb-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
            Charity Payout (Est.)
          </p>
          <span className="text-4xl font-black text-green-600">$6,427.50</span>
        </div>
      </div>

      {/* --- WINNERS CIRCLE (Current Draw) --- */}
      <section>
        <h3 className="text-xl font-black mb-6 flex items-center gap-2">
          <PiTrophyFill className="text-amber-400" size={24} /> Current Winners
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Justin Rose", prize: "$5,000", rank: "1st Match" },
            { name: "Brooks Koepka", prize: "$2,500", rank: "2nd Match" },
            { name: "Nelly Korda", prize: "$1,200", rank: "3rd Match" },
          ].map((winner, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100"
            >
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-tighter">
                  {winner.rank}
                </p>
                <p className="font-bold text-slate-900">{winner.name}</p>
              </div>
              <span className="text-lg font-black text-green-600">
                {winner.prize}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* --- USER MANAGEMENT TABLE --- */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-black flex items-center gap-2">
            <PiUsersBold className="text-slate-400" size={24} /> Member Score
            Management
          </h3>
        </div>
        <div className="w-full space-y-1">
          <div className="grid grid-cols-5 px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-300 border-b border-slate-50">
            <span className="col-span-1">Member</span>
            <span className="col-span-3 text-center">
              Last 5 Scores (Sequence)
            </span>
            <span className="text-right">Actions</span>
          </div>
          {[
            { name: "Rory McIlroy", scores: [68, 70, 72, 69, 71] },
            { name: "Scottie Scheffler", scores: [65, 67, 66, 68, 67] },
            { name: "Jon Rahm", scores: [72, 74, 71, 70, 72] },
          ].map((user, i) => (
            <div
              key={i}
              className="grid grid-cols-5 px-6 py-6 font-bold text-sm border-b border-slate-50 hover:bg-slate-50/50 items-center group transition-colors"
            >
              <span className="text-slate-900">{user.name}</span>
              <div className="col-span-3 flex justify-center gap-3">
                {user.scores.map((s, idx) => (
                  <span
                    key={idx}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 text-slate-600 text-xs font-black border border-slate-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex justify-end">
                <button className="p-2 text-slate-300 hover:text-slate-900 transition cursor-pointer">
                  <PiDotsThreeVerticalBold size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CHARITY CONFIGURATION --- */}
      <section className="pt-12">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-black flex items-center gap-2">
            <PiHandHeartBold className="text-green-600" size={24} /> Charity
            Partner Registry
          </h3>
          <button className="flex items-center gap-2 text-green-600 font-black text-xs uppercase tracking-widest py-2 px-4 bg-green-50 rounded-full hover:bg-green-100 transition cursor-pointer">
            <PiPlusCircleBold size={18} /> Add Partner
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Youth Golf Foundation",
              status: "Verified",
              color: "text-blue-500",
            },
            {
              name: "GreenFairways Project",
              status: "Verified",
              color: "text-blue-500",
            },
          ].map((charity, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-6 border-b-2 border-slate-50 hover:border-green-600 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="bg-slate-100 p-3 rounded-2xl group-hover:bg-green-50 transition-colors">
                  <PiHandHeartBold
                    size={24}
                    className="text-slate-400 group-hover:text-green-600"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">
                      {charity.name}
                    </span>
                    <PiSealCheckFill className={charity.color} size={18} />
                  </div>
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                    {charity.status}
                  </p>
                </div>
              </div>
              <button className="text-slate-300 hover:text-slate-900 transition cursor-pointer">
                <PiPencilSimpleBold size={20} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Page;
