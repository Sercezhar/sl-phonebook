import { useAuth } from '@/hooks/useAuth';
import useClickOutside from '@/hooks/useClickOutside';
import classNames from 'classnames';
import { useState } from 'react';
import AuthNav from './AuthNav';
import PrimaryNav from './PrimaryNav';
import UserMenu from './UserMenu';
import CloseMenuButton from './ui/buttons/CloseMenuButton';
import OpenMenuButton from './ui/buttons/OpenMenuButton';

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { isLoggedIn } = useAuth();

  const ref = useClickOutside(() => handleMenuToggle(false));

  function handleMenuToggle(isOpen: boolean) {
    setIsMenuOpen(isOpen);
    document.body.classList.toggle('overflow-hidden');
  }

  return (
    <div className="flex lg:hidden">
      <OpenMenuButton setIsMenuOpen={() => handleMenuToggle(true)} />

      <div
        className={classNames(
          'absolute top-0 left-0 right-0 h-[100dvh] bg-black transition overflow-hidden',

          isMenuOpen
            ? 'bg-opacity-30 pointer-events-auto delay-0'
            : 'bg-opacity-0 pointer-events-none delay-100'
        )}
      >
        <div
          ref={ref}
          className={classNames(
            'absolute top-0 right-0 flex flex-col justify-between py-12 px-6 w-64 sm:w-96 h-full font-medium bg-white transition-transform shadow overflow-hidden',

            isMenuOpen ? 'transform-none delay-100' : 'translate-x-full delay-0'
          )}
        >
          <CloseMenuButton setIsMenuOpen={() => handleMenuToggle(false)} />

          <div>
            <PrimaryNav closeMenu={() => setIsMenuOpen(false)} />

            {!isLoggedIn && <AuthNav closeMenu={() => setIsMenuOpen(false)} />}
          </div>

          {isLoggedIn && <UserMenu closeMenu={() => setIsMenuOpen(false)} />}
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
