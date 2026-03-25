import {
  PiCaretRightBold,
  PiCheckCircleFill,
  PiHandHeartFill,
  PiSealCheckFill,
} from "react-icons/pi";

function CharitiCard({ charity, selectedCharity, onSelectCharity }) {
  return (
    <div
      onClick={() => onSelectCharity(charity.id)}
      className={`flex items-center justify-between p-6 cursor-pointer border-b-2 transition-all duration-300 group
                  ${
                    selectedCharity === charity.id
                      ? "border-green-600 bg-green-50/30"
                      : "border-slate-50 hover:border-slate-200"
                  }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`p-3 rounded-full transition-colors 
                    ${selectedCharity === charity.id ? "bg-green-600 text-white" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"}`}
        >
          <PiHandHeartFill size={20} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-black text-lg">{charity.name}</h3>
            {charity.verified && (
              <PiSealCheckFill className="text-blue-500" size={18} />
            )}
          </div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
            {charity.category}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {selectedCharity === charity.id && (
          <PiCheckCircleFill className="text-green-600" size={24} />
        )}
        <PiCaretRightBold
          className={`transition-opacity ${selectedCharity === charity.id ? "opacity-0" : "opacity-20"}`}
        />
      </div>
    </div>
  );
}

export default CharitiCard;
