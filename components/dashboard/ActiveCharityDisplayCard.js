import Link from "next/link";
import { PiHeartFill } from "react-icons/pi";

function ActiveCharityDisplayCard() {
  return (
    <div className="border-b-4 border-slate-100 pb-6 group hover:border-green-200 transition-all">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 mb-4 text-slate-400 uppercase text-[11px] font-black tracking-[0.2em]">
            <PiHeartFill size={18} className="text-pink-600" /> Active Charity
          </div>
          <p className="text-2xl font-black text-slate-900">
            Youth Golf Foundation
          </p>
          <p className="text-sm text-slate-400 font-medium">
            15% of your sub is donated here
          </p>
        </div>
        <Link href="/dashboard/charities">
          <button className="text-green-600 font-black text-xs uppercase tracking-widest py-2 px-4 hover:bg-green-50 rounded-full transition cursor-pointer">
            Choose New
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ActiveCharityDisplayCard;
