export default function Navbar() {
  return (
    <div className="w-full py-5 px-6 bg-slate-900 text-white font-bold flex justify-between items-center">
      <div className="flex gap-1">
        <span>Travel</span>
        <span className="text-blue-400">App</span> 
      </div>

      <div>
        <button href="#" className="hover:text-slate-300 transition-colors bg-blue-700 p-2 w-30 sm:w-30 rounded text-sm">
          Login
        </button>
      </div>
    </div>
  );
}