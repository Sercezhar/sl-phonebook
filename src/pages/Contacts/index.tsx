import CreateContactForm from '@/components/CreateContactForm';
import Binding from './Binding';
import ContactsList from './ContactsList';
import Filter from './Filter';

function Contacts() {
  return (
    <div className="relative mx-auto mb-7 flex h-full w-full lg:h-[540px] lg:w-fit">
      <div className="mr-[4px] hidden h-full w-[490px] overflow-hidden rounded border-x-[6px] border-y-8 border-solid border-sky-400 bg-white p-6 pr-12 lg:block">
        <h2 className="mb-4 text-center text-xl font-semibold text-gray-700">
          Create a contact
        </h2>

        <CreateContactForm />
      </div>

      <div className="h-full w-full overflow-hidden rounded border-solid border-sky-400 bg-white p-1 sm:w-[490px] sm:max-lg:mx-auto lg:border-x-[6px] lg:border-y-8 lg:p-6 lg:pl-12">
        <h2 className="mb-4 text-center text-xl font-semibold text-gray-700">
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
