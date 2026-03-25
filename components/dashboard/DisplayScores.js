import { PiClockCounterClockwiseBold } from "react-icons/pi";

const DUMMPY_SCORES = [
  {
    date: "Mar 20, 2026",
    course: "Pebble Beach",
    score: "74",
    status: "Verified",
  },
  {
    date: "Mar 15, 2026",
    course: "St Andrews",
    score: "68",
    status: "Verified",
  },
  {
    date: "Mar 10, 2026",
    course: "Pinehurst No. 2",
    score: "81",
    status: "Processing",
  },
  {
    date: "Mar 02, 2026",
    course: "Riviera CC",
    score: "72",
    status: "Verified",
  },
  {
    date: "Feb 28, 2026",
    course: "TPC Sawgrass",
    score: "75",
    status: "Verified",
  },
];

function DisplayScores() {
  return (
    <div className="lg:col-span-2">
      <div>
        <h3 className="text-xl font-black mb-6 flex items-center gap-2">
          <PiClockCounterClockwiseBold className="text-slate-400" size={24} />{" "}
          Last 5 Round Scores
        </h3>
        <div className="w-full space-y-1">
          <div className="grid grid-cols-3 px-4 py-3 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-50 gap-x-4">
            <span>Date</span>
            <span>Course</span>
            <span>Score</span>
          </div>
          {DUMMPY_SCORES.map((score, i) => (
            <div
              key={i}
              className="grid grid-cols-3 px-4 py-4 font-bold text-sm border-b border-slate-50 hover:bg-slate-50 transition group cursor-default gap-x-4"
            >
              <span className="text-slate-400">{score.date}</span>
              <span className="text-slate-900">{score.course}</span>
              <span className="text-green-600 font-black">{score.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DisplayScores;
