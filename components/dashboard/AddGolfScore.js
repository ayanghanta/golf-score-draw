"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PiArrowRightBold, PiPlusCircleBold } from "react-icons/pi";

function AddGolfScore() {
  const [score, setScore] = useState("");
  const [courseName, setCourseName] = useState("");
  const [date, setDate] = useState(() => new Date());

  //   console.log({ score, courseName, date });
  //   console.log(formatDate(date));

  function handleSubmit() {
    if (!score || !courseName || !date) return;
    if (score < 1 || score > 45) return; // FIXME:

    // API CALL FIXME:
  }

  return (
    <div className="lg:col-span-1">
      <h3 className="text-xl font-black mb-6 flex items-center gap-2">
        <PiPlusCircleBold className="text-green-600" size={24} /> Add Golf Score
      </h3>
      <div className="space-y-4">
        <div className="border-b-2 border-slate-50 py-2 focus-within:border-green-600 transition-all">
          <label
            className="block text-[10px] uppercase font-black text-slate-500 tracking-widest"
            htmlFor="gross_score"
          >
            Gross Score
          </label>
          <input
            id="gross_score"
            type="number"
            placeholder="32"
            className="w-full bg-transparent border-none py-2 text-2xl font-black outline-none placeholder-slate-300"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>

        <div className="border-b-2 border-slate-50 py-2 focus-within:border-green-600 transition-all">
          <label
            className="block text-[10px] uppercase font-black text-slate-500 tracking-widest"
            htmlFor="course_name"
          >
            Course Name
          </label>
          <input
            id="course_name"
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            placeholder="Augusta National"
            className="w-full bg-transparent border-none py-2 text-lg font-bold outline-none placeholder-slate-300"
          />
        </div>

        <div className="border-b-2 border-slate-50 py-2 focus-within:border-green-600 transition-all">
          <label
            className="block text-[10px] uppercase font-black text-slate-500 tracking-widest"
            htmlFor="playing_date"
          >
            Playing Date
          </label>
          <div className="text-lg font-bold outline-none">
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              id="playing_date"
            />
          </div>
        </div>

        <button
          className="w-full bg-slate-950 text-white py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-green-600 transition-all cursor-pointer flex items-center justify-center gap-2"
          onClick={handleSubmit}
        >
          Submit for Draw <PiArrowRightBold />
        </button>
      </div>
    </div>
  );
}

export default AddGolfScore;
