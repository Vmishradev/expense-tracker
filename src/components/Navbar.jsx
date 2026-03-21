function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-violet-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
          F
        </div>
        <h1 className="text-white font-semibold text-lg">FinSight</h1>
      </div>
      <span className="text-gray-400 text-sm">Smart Expense Tracker</span>
    </nav>
  );
}

export default Navbar;
