import { PiReceiptBold } from "react-icons/pi";

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

function TransactionHistory() {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          Transaction History
        </h3>
        <button className="text-[10px] font-black text-green-600 uppercase tracking-widest hover:underline underline-offset-4">
          Download All
        </button>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-4 px-4 py-3 text-[10px] font-black uppercase tracking-widest text-slate-300 border-b border-slate-50">
          <span>Date</span>
          <span>Ref No.</span>
          <span>Amount</span>
          <span className="text-right">Receipt</span>
        </div>

        {DUMMPY_TRANSACTIONS.map((tx, i) => (
          <div
            key={i}
            className="grid grid-cols-4 px-4 py-5 font-bold text-sm border-b border-slate-50 hover:bg-slate-50 transition group items-center"
          >
            <span className="text-slate-500 font-medium">{tx.date}</span>
            <span className="text-slate-900 uppercase">{tx.ref}</span>
            <span className="text-slate-900">{tx.amount}</span>
            <div className="flex justify-end">
              <button className="p-2 text-slate-300 hover:text-green-600 transition cursor-pointer">
                <PiReceiptBold size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TransactionHistory;
