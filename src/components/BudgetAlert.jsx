import { motion } from "framer-motion";

function BudgetAlert({ totalExpenses, monthlyBudget }) {
  const percentage =
    monthlyBudget > 0 ? (totalExpenses / monthlyBudget) * 100 : 0;

  if (percentage < 80) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`rounded-2xl px-6 py-4 border flex items-center justify-between
        ${
          percentage >= 100
            ? "bg-red-500/10 border-red-500/30 text-red-400"
            : "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
        }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-xl">{percentage >= 100 ? "🚨" : "⚠️"}</span>
        <div>
          <p className="font-semibold">
            {percentage >= 100 ? "Over budget!" : "Approaching budget limit!"}
          </p>
          <p className="text-sm opacity-75">
            You have used {Math.round(percentage)}% of your monthly budget
          </p>
        </div>
      </div>
      <span className="text-2xl font-bold">{Math.round(percentage)}%</span>
    </motion.div>
  );
}

export default BudgetAlert;
