import { useState } from 'react';
import ContactsList from './ContactsList';
import Filter from './Filter';

function RightSide() {
  const [filter, setFilter] = useState<string>('');

  return (
    <div className="h-full w-full overflow-hidden rounded border-solid border-sky-400 bg-white p-1 sm:w-[490px] sm:max-lg:mx-auto lg:border-x-[6px] lg:border-y-8 lg:p-6 lg:pl-12">
      <h2 className="mb-4 text-center text-xl font-semibold text-gray-700">
        Contacts
      </h2>

      <Filter filter={filter} setFilter={setFilter} />

      <ContactsList filter={filter} />
    </div>
  );
}

export default RightSide;
