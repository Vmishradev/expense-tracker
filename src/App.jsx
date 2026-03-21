import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SummaryCards from "./components/SummaryCards";
import Charts from "./components/Charts";
import BudgetAlert from "./components/BudgetAlert";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [monthlyBudget, setMonthlyBudget] = useState(10000);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0,
  );
  const remaining = monthlyBudget - totalExpenses;
  const filteredExpenses =
    selectedCategory === "All"
      ? expenses
      : expenses.filter((expense) => expense.category === selectedCategory);

  // Job 1 — Load once on first open
  useEffect(() => {
    const saved = localStorage.getItem("expenses");
    if (saved) setExpenses(JSON.parse(saved));

    const savedBudget = localStorage.getItem("budget");
    if (savedBudget) setMonthlyBudget(JSON.parse(savedBudget));
  }, []);

  // Job 2 — Save every time expenses changes
  useEffect(() => {
    if (expenses.length > 0) {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  }, [expenses]);

  // Job 3 — Save budget whenever it changes
  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(monthlyBudget));
  }, [monthlyBudget]);

  function handleAddExpense(newExpense) {
    setExpenses([...expenses, newExpense]);
  }

  function handleDeleteExpense(id) {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <div className="mx-auto px-4 py-8 flex flex-col gap-6">
        <SummaryCards
          totalExpenses={totalExpenses}
          monthlyBudget={monthlyBudget}
          remaining={remaining}
          onBudgetChange={setMonthlyBudget}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ExpenseForm onAddExpense={handleAddExpense} />
          <ExpenseList
            expenses={filteredExpenses}
            onDeleteExpense={handleDeleteExpense}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        <Charts expenses={expenses} />
        <BudgetAlert
          totalExpenses={totalExpenses}
          monthlyBudget={monthlyBudget}
        />
      </div>
    </div>
  );
}

export default App;
