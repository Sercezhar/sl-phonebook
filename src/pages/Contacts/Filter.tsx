import { ChangeEvent } from 'react';

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
      <input
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-sky-200"
        type="text"
        id="filter"
        placeholder="John Doe"
        onChange={handleFilterInputChange}
        value={filter}
        required
      />
    </div>
  );
}

export default Filter;
