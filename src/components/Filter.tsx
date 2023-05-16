function Filter() {
  return (
    <div>
      <label
        htmlFor="filter"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Find contact by name
      </label>
      <input
        type="text"
        id="filter"
        className="block p-2.5 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-2 focus:ring-sky-200"
        placeholder="John Doe"
        required
      />
    </div>
  );
}

export default Filter;
