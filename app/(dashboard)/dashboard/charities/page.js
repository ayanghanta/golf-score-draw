"use client";
import CharitiCard from "@/components/ui/CharitiCard";
import { getAllCharities } from "@/services/apiCharities";
import { MAX_DONATION, MIN_DONATION } from "@/utils/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  PiArrowLeftBold,
  PiCheckCircleFill,
  PiSealCheckFill,
  PiInfoBold,
  PiCaretRightBold,
  PiHandHeartFill,
} from "react-icons/pi";

const DUMMY_CHARITIES = [
  {
    id: 1,
    name: "Youth Golf Scholarship Fund",
    verified: true,
    category: "Education",
  },
  {
    id: 2,
    name: "GreenFairways Environmental",
    verified: true,
    category: "Environment",
  },
  {
    id: 3,
    name: "Veteran Caddy Support",
    verified: false,
    category: "Social",
  },
  {
    id: 4,
    name: "Urban Junior Golf Initiative",
    verified: true,
    category: "Community",
  },
];

function Page() {
  const [donationPercent, setDonationPercent] = useState(MIN_DONATION);
  const [selectedCharity, setSelectedCharity] = useState(1);

  useEffect(function () {
    getAllCharities().then((data) => console.log(data));
  }, []);

  function handleSubmit() {
    if (!donationPercent || !selectedCharity) return;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 p-8 lg:p-16 max-w-5xl mx-auto">
      <div className="mb-16">
        <Link href="/dashboard">
          <button className="flex items-center gap-2 text-slate-400 hover:text-green-600 transition mb-8 group font-bold text-xs uppercase tracking-widest cursor-pointer bg-slate-50 py-1.5 px-3 rounded-full w-fit">
            <PiArrowLeftBold className="group-hover:-translate-x-1 transition-transform" />
            Back to Dashboard
          </button>
        </Link>
        <h1 className="text-4xl font-black tracking-tight mb-4">
          Choose Your Impact
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl font-medium">
          Select a verified charity partner and decide how much of your monthly
          subscription you&apos;d like to contribute.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-16">
        <div className="lg:col-span-3 space-y-2">
          <div className="flex items-center justify-between mb-6 px-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Available Partners
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Verified Status
            </span>
          </div>

          {DUMMY_CHARITIES.map((charity) => (
            <CharitiCard
              key={charity.id}
              charity={charity}
              selectedCharity={selectedCharity}
              onSelectCharity={setSelectedCharity}
            />
          ))}
        </div>

        <div className="lg:col-span-2 space-y-12">
          <div>
            <div className="grid grid-cols-2 items-center mb-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">
                Monthly Contribution
              </h3>
              <span className="text-5xl font-black text-green-600">
                {donationPercent}%
              </span>
            </div>

            <input
              type="range"
              min={`${MIN_DONATION}`}
              max={`${MAX_DONATION}`}
              step="1"
              value={donationPercent}
              onChange={(e) => setDonationPercent(e.target.value)}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-green-600"
            />

            <div className="flex justify-between mt-4 text-[10px] font-black text-slate-300 uppercase tracking-widest">
              <span>Min: {MIN_DONATION}%</span>
              <span>Max: {MAX_DONATION}%</span>
            </div>

            <div className="mt-8 flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <PiInfoBold size={24} className="text-slate-400 shrink-0" />
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                By increasing your contribution, you provide more support to
                your chosen charity. This does not change your subscription
                cost.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <button
              className="w-full bg-slate-900 text-white py-5 rounded-full font-black text-lg flex items-center justify-center gap-3 hover:bg-green-600 transition-all duration-300 shadow-2xl shadow-slate-200 active:scale-95 group cursor-pointer"
              onClick={handleSubmit}
            >
              Save Changes
              <PiCheckCircleFill
                size={22}
                className="group-hover:scale-110 transition-transform"
              />
            </button>
            <p className="text-center mt-6 text-xs text-slate-400 font-medium">
              Changes will apply to your next billing cycle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
