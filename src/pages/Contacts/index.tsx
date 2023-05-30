import ContactsForm from '@/pages/Contacts/ContactsForm';
import Filter from '@/pages/Contacts/Filter';
import Binding from './Binding';
import ContactsList from './ContactsList';

function Contacts() {
  return (
    <div className="relative flex mx-auto w-full lg:w-fit h-full lg:h-[540px]">
      <div className="hidden lg:block mr-[4px] p-6 pr-12 w-[490px] h-full bg-white border-solid border-x-[6px] border-y-8 border-sky-400 rounded overflow-hidden">
        <h2 className="mb-4 font-semibold text-xl text-center text-gray-700">
          Create a contact
        </h2>

        <ContactsForm />
      </div>

      <div className="sm:max-lg:mx-auto p-1 lg:p-6 lg:pl-12 w-full sm:w-[490px] h-full bg-white border-solid lg:border-x-[6px] lg:border-y-8 border-sky-400 rounded overflow-hidden">
        <h2 className="mb-4 font-semibold text-xl text-center text-gray-700">
          Contacts
        </h2>

        <Filter />

        <ContactsList />
      </div>

      <Binding />
    </div>
  );
}

export default Contacts;
