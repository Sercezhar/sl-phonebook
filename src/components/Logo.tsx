import { IoBook } from 'react-icons/io5';

function Logo() {
  return (
    <span className="flex items-center select-none pointer-events-none">
      <IoBook className="mr-3" size={40} color="#fff" />

      <span className="flex flex-col leading-4 text-white">
        <span className="font-caveat">Your</span>
        <span className="uppercase">Phonebook</span>
      </span>
    </span>
  );
}

export default Logo;
