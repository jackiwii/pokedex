
export default function SearchBar() {
    return (
        <form className="flex w-full max-w-xl gap-3">
            <input 
                aria-label="Search Pokemon"
                type="text"
                placeholder="Enter a Pokemon name..."
                className="min-w flex-1 rounded-xl border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <button
                type="button"
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            />
        </form>
    )
}