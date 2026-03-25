"use client";
import ActiveCharityDisplayCard from "@/components/dashboard/ActiveCharityDisplayCard";
import TransactionHistory from "@/components/dashboard/TransactionHistory";
import { useState } from "react";
import {
  PiUserCircleFill,
  PiPencilSimpleBold,
  PiCheckBold,
  PiXBold,
  PiReceiptBold,
  PiWarningCircleFill,
  PiSignOutBold,
} from "react-icons/pi";

const DUMMPY_TRANSACTIONS = [
  {
    date: "Mar 01, 2026",
    ref: "#LS-9921",
    amount: "$19.00",
    status: "Paid",
  },
  {
    date: "Feb 01, 2026",
    ref: "#LS-8241",
    amount: "$19.00",
    status: "Paid",
  },
  {
    date: "Jan 01, 2026",
    ref: "#LS-7102",
    amount: "$19.00",
    status: "Paid",
  },
];

function Page() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Tiger Woods");

  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1 className="text-3xl font-black tracking-tight mb-2">
          Account Settings
        </h1>
        <p className="text-slate-400 font-medium">
          Manage your membership profile and billing history.
        </p>
      </div>

      <section className="mb-16">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
          Personal Information
        </h3>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="relative">
            <div className="h-24 w-24 rounded-full bg-slate-100 flex items-center justify-center border-4 border-white ring-2 ring-slate-100 overflow-hidden">
              <PiUserCircleFill
                size={80}
                className="text-slate-300 translate-y-2"
              />
            </div>
            <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md border border-slate-100 text-green-600 hover:scale-110 transition cursor-pointer">
              <PiPencilSimpleBold size={16} />
            </button>
          </div>

          <div className="flex-1 w-full max-w-md">
            <label className="block text-[9px] uppercase tracking-widest font-black text-slate-400 mb-1">
              Display Name
            </label>
            <div className="relative border-b-2 border-slate-100 focus-within:border-green-600 transition-all py-1 group flex items-center justify-between">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent border-none text-slate-900 font-bold outline-none text-xl py-2"
                    autoFocus
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="text-green-600 p-2 hover:bg-green-50 rounded-full transition"
                    >
                      <PiCheckBold size={20} />
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="text-slate-300 p-2 hover:bg-slate-50 rounded-full transition"
                    >
                      <PiXBold size={20} />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <span className="text-xl font-bold text-slate-900 py-2">
                    {name}
                  </span>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="text-slate-300 hover:text-green-600 p-2 transition cursor-pointer"
                  >
                    <PiPencilSimpleBold size={20} />
                  </button>
                </>
              )}
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              Your name is visible to other members on the monthly leaderboard.
            </p>
          </div>
        </div>
      </section>
      <div className="mb-12">
        <ActiveCharityDisplayCard />
      </div>
      <TransactionHistory />

      <section className="pt-8 border-t border-slate-100 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-slate-950 text-white px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition cursor-pointer">
            <PiSignOutBold size={18} /> Logout
          </button>
        </div>

        <div className="flex flex-col items-end gap-2">
          <button className="bg-red-500 py-3 px-6 text-red-100 font-black text-xs uppercase tracking-wide hover:text-red-200 hover:bg-red-700 transition rounded-full flex items-center gap-2 group cursor-pointer">
            <PiWarningCircleFill
              size={16}
              className="group-hover:animate-pulse"
            />{" "}
            Cancel Subscription
          </button>
          <p className="text-[10px] text-slate-400 font-medium">
            Members lose draw eligibility immediately upon cancellation.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Page;
