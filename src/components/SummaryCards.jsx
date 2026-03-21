function SummaryCards({
  totalExpenses,
  monthlyBudget,
  remaining,
  onBudgetChange,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <p className="text-gray-400 text-sm mb-1">Monthly Budget</p>
        <p className="text-white text-2xl font-bold">
          ₹{monthlyBudget.toLocaleString()}
        </p>
        <input
          type="number"
          value={monthlyBudget}
          onChange={(e) => onBudgetChange(parseFloat(e.target.value))}
          className="mt-3 bg-gray-800 text-white rounded-xl px-3 py-2 w-full outline-none border border-gray-700 focus:border-violet-500 transition-colors text-sm"
        />
      </div>

      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <p className="text-gray-400 text-sm mb-1">Total Spent</p>
        <p className="text-violet-400 text-2xl font-bold">
          ₹{totalExpenses.toLocaleString()}
        </p>
        <p className="text-gray-500 text-sm mt-3">
          {monthlyBudget > 0
            ? Math.round((totalExpenses / monthlyBudget) * 100)
            : 0}
          % of budget used
        </p>
      </div>

      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <p className="text-gray-400 text-sm mb-1">Remaining</p>
        <p
          className={`text-2xl font-bold`}
        >
          ₹{remaining.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default SummaryCards;
