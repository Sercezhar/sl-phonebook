import { animated, useTransition } from '@react-spring/web';
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
  const actionsTransition = useTransition(isMenuVisible, {
    from: { opacity: 0, scale: 0.8 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0.8 },
    config: {
      duration: 100,
    },
  });

  return (
    <div className="relative">
      <button
        className="group rounded-full p-2"
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

      {actionsTransition(
        (styles, isMenuVisible) =>
          isMenuVisible && (
            <div>
              <div
                className="fixed inset-0 z-20 bg-transparent"
                onClick={toggleMenu}
              ></div>

              <animated.ul
                style={{ ...styles, transform: 'translateY(-50%)' }}
                className="absolute right-full top-1/2 z-30 flex w-fit overflow-hidden rounded border bg-white py-1 text-gray-900 shadow-sm"
              >
                <li className="border-r">
                  <button
                    className="group flex w-full gap-1 bg-white px-3 py-1 transition-colors hover:text-sky-400"
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
                    className="group flex w-full gap-1 bg-white px-3 py-1 transition-colors hover:text-sky-400"
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
              </animated.ul>
            </div>
          )
      )}
    </div>
  );
}

export default ContactsItemActions;
