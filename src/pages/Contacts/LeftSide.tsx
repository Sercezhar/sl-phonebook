import CreateContactForm from '@/components/CreateContactForm';

function LeftSide() {
  return (
    <div className="mr-[4px] hidden h-full w-[490px] overflow-hidden rounded border-x-[6px] border-y-8 border-solid border-sky-400 bg-white p-6 pr-12 lg:block 2xl:w-[620px] 2xl:border-x-[8px] 2xl:border-y-[10px] 2xl:pr-14">
      <h2 className="mb-4 text-center text-xl font-semibold text-gray-700">
        Create a contact
      </h2>

      <CreateContactForm />
    </div>
  );
}

export default LeftSide;
