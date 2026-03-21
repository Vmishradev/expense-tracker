import { useState } from "react";

const CATEGORIES = [
  "Food",
  "Transport",
  "Shopping",
  "Entertainment",
  "Health",
  "Rent",
  "Other",
];

function ExpenseForm({ onAddExpense }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !amount || !date) return;

    const newExpense = {
      id: Date.now().toString(),
      name,
      amount: parseFloat(amount),
      category,
      date,
    };

    onAddExpense(newExpense);
    setName("");
    setAmount("");
    setDate("");
    setCategory("Food");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 rounded-2xl p-6 border border-gray-800"
    >
      <h2 className="text-white font-semibold text-lg mb-5">Add Expense</h2>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Expense name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-800 text-white rounded-xl px-4 py-3 outline-none border border-gray-700 focus:border-violet-500 transition-colors placeholder:text-gray-500"
        />

        <input
          type="number"
          placeholder="Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="bg-gray-800 text-white rounded-xl px-4 py-3 outline-none border border-gray-700 focus:border-violet-500 transition-colors placeholder:text-gray-500"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-gray-800 text-white rounded-xl px-4 py-3 outline-none border border-gray-700 focus:border-violet-500 transition-colors"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="bg-gray-800 text-white rounded-xl px-4 py-3 outline-none border border-gray-700 focus:border-violet-500 transition-colors"
        />

        <button
          type="submit"
          className="bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
