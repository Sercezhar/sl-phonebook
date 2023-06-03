import { ChangeEvent } from 'react';
import { HiSearch, HiX } from 'react-icons/hi';

interface FilterProps {
  filter: string;
  setFilter: (value: string) => void;
}

function Filter({ filter, setFilter }: FilterProps) {
  function handleFilterInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;
    setFilter(value);
  }

  return (
    <div className="mb-4">
      <label
        htmlFor="filter"
        className="mb-2 block text-sm font-medium text-gray-900"
      >
        Search among contacts
      </label>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <HiSearch size={20} className="fill-gray-400" />
        </div>

        <input
          className="peer block w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pl-10 pr-10 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-sky-200"
          type="text"
          id="filter"
          placeholder="John Doe"
          onChange={handleFilterInputChange}
          value={filter}
          required
        />

        <button
          className="group absolute inset-y-0 right-0 block px-3 peer-placeholder-shown:hidden"
          type="button"
          onClick={() => setFilter('')}
        >
          <HiX
            size={18}
            className=" fill-gray-500 transition-colors group-hover:fill-sky-400"
          />
        </button>
      </div>
    </div>
  );
}

export default Filter;
