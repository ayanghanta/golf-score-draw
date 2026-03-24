import { PiClockCounterClockwiseBold } from "react-icons/pi";

function DisplayScores() {
  return (
    <div className="lg:col-span-2">
      <h3 className="text-xl font-black mb-6 flex items-center gap-2">
        <PiClockCounterClockwiseBold className="text-slate-400" size={24} />{" "}
        Last 5 Round Scores
      </h3>
      <div className="w-full space-y-1">
        <div className="grid grid-cols-4 px-4 py-3 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-50">
          <span>Date</span>
          <span>Course</span>
          <span>Score</span>
          <span className="text-right">Entry Status</span>
        </div>
        {DUMMPY_SCORES.map((score, i) => (
          <div
            key={i}
            className="grid grid-cols-4 px-4 py-4 font-bold text-sm border-b border-slate-50 hover:bg-slate-50 transition group cursor-default"
          >
            <span className="text-slate-400">{score.date}</span>
            <span className="text-slate-900">{score.course}</span>
            <span className="text-green-600 font-black">{score.score}</span>
            <span
              className={`text-right text-[10px] uppercase tracking-tighter ${score.status === "Verified" ? "text-green-500" : "text-amber-500"}`}
            >
              {score.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayScores;
