import { motion, AnimatePresence } from 'framer-motion'

const CATEGORIES = ['All', 'Food', 'Transport', 'Shopping', 'Entertainment', 'Health', 'Rent', 'Other']

function ExpenseList({ expenses, onDeleteExpense, selectedCategory, onCategoryChange }) {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white font-semibold text-lg">Expenses</h2>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="bg-gray-800 text-white rounded-xl px-3 py-2 outline-none border border-gray-700 focus:border-violet-500 transition-colors text-sm"
        >
          {CATEGORIES.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {expenses.length === 0 ? (
        <p className="text-gray-500 text-sm text-center">
          {selectedCategory === 'All'
            ? 'No expenses yet. Add one above!'
            : `No ${selectedCategory} expenses found.`}
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          <AnimatePresence>
            {expenses.map(expense => (
              <motion.div
                key={expense.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-between bg-gray-800 rounded-xl px-4 py-3"
              >
                <div className="flex flex-col">
                  <span className="text-white font-medium">{expense.name}</span>
                  <span className="text-gray-400 text-sm">{expense.category} • {expense.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-violet-400 font-semibold">₹{expense.amount}</span>
                  <button
                    onClick={() => onDeleteExpense(expense.id)}
                    className="text-gray-500 hover:text-red-400 transition-colors text-sm"
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}

export default ExpenseList