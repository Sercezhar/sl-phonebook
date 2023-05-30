import classNames from 'classnames';
import { HiDotsVertical, HiPencil, HiTrash } from 'react-icons/hi';

interface ContactsItemActionsProps {
  id: string;
  isMenuVisible: boolean;
  toggleMenu: () => void;
  setIsModalOpen: (modalType: string) => void;
}

function ContactsItemActions({
  isMenuVisible,
  toggleMenu,
  setIsModalOpen,
}: ContactsItemActionsProps) {
  return (
    <div className="relative">
      <button
        className="group p-2 rounded-full"
        type="button"
        onClick={toggleMenu}
      >
        <HiDotsVertical
          size={20}
          className={classNames(
            'fill-gray-500 transition-colors group-hover:fill-sky-400',
            {
              'fill-sky-400': isMenuVisible,
            }
          )}
        />
      </button>

      {isMenuVisible && (
        <div>
          <div
            className="fixed top-0 left-0 bottom-0 right-0 bg-transparent z-20"
            onClick={toggleMenu}
          ></div>

          <ul className="absolute right-full top-1/2 transform -translate-y-1/2 flex py-1 w-fit text-gray-600 bg-white rounded overflow-hidden shadow-sm border z-30">
            <li className="border-r">
              <button
                className="group flex gap-1 w-full px-3 py-1 bg-white transition-colors hover:text-sky-400"
                type="button"
                onClick={() => setIsModalOpen('edit')}
              >
                <HiPencil
                  size={20}
                  className="fill-gray-500 transition-colors group-hover:fill-sky-400"
                />
                Edit
              </button>
            </li>

            <li>
              <button
                className="group flex gap-1 w-full px-3 py-1 bg-white transition-colors hover:text-sky-400"
                type="button"
                onClick={() => setIsModalOpen('delete')}
              >
                <HiTrash
                  size={20}
                  className="fill-gray-500 transition-colors group-hover:fill-sky-400"
                />
                Delete
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ContactsItemActions;
