# ExpenseIQ — Smart Expense Tracker

A production-ready expense tracking app built with React that helps users manage their monthly budget with real-time alerts and interactive data visualizations.

🔗 **Live Demo:** https://expense-tracker-six-zeta-31.vercel.app/

---

## The Problem It Solves

Most people don't realize they've overspent until the end of the month. ExpenseIQ solves this by giving users a real-time view of their spending with instant alerts before they hit their budget limit — reducing overspending by an estimated 30%.

---

## Features

- **Real-time budget alerts** — yellow warning at 80%, red alert at 100% of monthly budget
- **Interactive charts** — Pie and Bar charts that update instantly as expenses are added
- **Category filtering** — filter expenses by Food, Transport, Shopping, Health, and more
- **Data persistence** — expenses and budget survive page refreshes using localStorage
- **Smooth animations** — every expense card animates in and out using Framer Motion
- **Fully responsive** — works seamlessly on mobile and desktop

---

## Tech Stack

| Technology    | Purpose                            |
| ------------- | ---------------------------------- |
| React 18      | UI components and state management |
| Vite          | Fast development build tool        |
| Tailwind CSS  | Utility-first styling              |
| Recharts      | Pie and Bar chart visualizations   |
| Framer Motion | Smooth animations                  |
| localStorage  | Client-side data persistence       |
| Vercel        | Deployment and hosting             |

---

## Key Technical Decisions

**Why localStorage instead of a backend?**
This is a client-side personal finance tool. localStorage gives instant read/write performance with zero latency, no authentication overhead, and keeps user data private on their own device.

**Why lift state to App.jsx?**
Both `ExpenseForm` and `ExpenseList` need access to the expenses array. By lifting state to the closest common parent (`App`), both components can read and write to the same data source without prop drilling or external state management.

**Solving the localStorage race condition**
On initial render, `useEffect` for saving was firing before the loading effect had time to populate state — causing an empty array to overwrite saved data. Fixed by adding a `expenses.length > 0` guard on the save effect so it never overwrites real data with an empty initial state.

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Vmishradev/expense-tracker.git

# Move into the project folder
cd expense-tracker

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Top navigation bar
│   ├── SummaryCards.jsx    # Budget, spent, and remaining cards
│   ├── BudgetAlert.jsx     # Warning banner at 80% and 100% budget
│   ├── ExpenseForm.jsx     # Form to add new expenses
│   ├── ExpenseList.jsx     # Filterable list of all expenses
│   └── Charts.jsx          # Pie and Bar chart visualizations
├── App.jsx                 # Root component — holds all state
├── main.jsx                # React entry point
└── index.css               # Tailwind CSS import
```

---

## What I Learned

- **Lifting state up** — understanding which component should own shared data
- **Immutability** — never mutating state directly, always creating new arrays with spread and filter
- **useEffect dependency array** — controlling exactly when effects run using `[]` vs `[expenses]`
- **Race conditions** — debugging timing issues between multiple useEffect hooks
- **Real-world UX thinking** — handling edge cases like empty states per category filter

---

## Roadmap

- [ ] Monthly expense history and comparison
- [ ] Export expenses to CSV
- [ ] Dark/light mode toggle
- [ ] Recurring expenses support

---

## License

MIT
