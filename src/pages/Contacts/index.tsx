import Filter from '@/pages/Contacts/Filter';
import ContactForm from '@/pages/Contacts/ContactForm';

function Contacts() {
  const binding: string[] = [
    'top-[10%]',
    'top-[20%]',
    'top-[30%]',
    'top-[40%]',
    'top-1/2',
    'top-[60%]',
    'top-[70%]',
    'top-[80%]',
    'top-[90%]',
  ];

  return (
    <div className="relative flex gap-1 mx-auto w-fit h-[540px]">
      <div className="p-6 pr-12 w-[490px] h-full bg-white border-solid border-x-[6px] border-y-8 border-sky-400 rounded overflow-hidden">
        <h2 className="mb-4 font-semibold text-xl text-center">
          Create a contact
        </h2>

        <ContactForm />
      </div>

      <div className=" p-6 pl-12 w-[490px] h-full bg-white border-solid border-x-[6px] border-y-8 border-sky-400 rounded overflow-hidden">
        <h2 className="mb-4 font-semibold text-xl text-center">Contacts</h2>

        <Filter />
      </div>

      {binding.map((top, index) => (
        <span
          key={index}
          className={`absolute ${top} left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
        >
          <span className="block w-14 h-2 bg-slate-200 rounded shadow-[inset_0_0_8px_-6px_#2C3E50] before:content-[''] before:absolute before:top-1/2 before:left-[-12px] before:transform before:-translate-y-1/2 before:w-6 before:h-6 before:bg-slate-400 before:rounded-full before:-z-[1] before:shadow-[inset_5px_0_1px_0px_#ccc;] after:content-[''] after:absolute after:top-1/2 after:right-[-12px] after:transform after:-translate-y-1/2 after:w-6 after:h-6 after:bg-slate-400 after:rounded-full after:-z-[1] after:shadow-[inset_-5px_0_1px_0px_#ccc;]"></span>
        </span>
      ))}
    </div>
  );
}

export default Contacts;
