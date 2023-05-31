import { RiBookletFill } from 'react-icons/ri';

function Logo() {
  return (
    <span className="pointer-events-none flex select-none items-center">
      <RiBookletFill className="mr-2" size={36} color="#fff" />

      <span className="flex flex-col leading-4 text-white">
        <span className="font-caveat">Your</span>
        <span className="uppercase">Phonebook</span>
      </span>
    </span>
  );
}

export default Logo;
