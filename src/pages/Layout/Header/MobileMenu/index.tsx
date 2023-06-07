import { useAuth } from '@/hooks/useAuth';
import { useClickOutside } from '@/hooks/useClickOutside';
import classNames from 'classnames';
import { useState } from 'react';
import AuthNav from '../AuthNav';
import PrimaryNav from '../PrimaryNav';
import UserMenu from '../UserMenu';
import CloseMenuButton from './CloseMenuButton';
import OpenMenuButton from './OpenMenuButton';

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { isLoggedIn } = useAuth();

  const ref = useClickOutside(() => handleMenuToggle(false));

  function handleMenuToggle(isOpen: boolean, isScroll: boolean = false) {
    setIsMenuOpen(isOpen);
    isScroll
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden');
  }

  return (
    <div className="flex lg:hidden">
      <OpenMenuButton setIsMenuOpen={() => handleMenuToggle(true, true)} />

      <div
        className={classNames(
          'absolute left-0 right-0 top-0 h-[100dvh] overflow-hidden bg-black transition',

          isMenuOpen
            ? 'pointer-events-auto bg-opacity-30 delay-0'
            : 'pointer-events-none bg-opacity-0 delay-100'
        )}
      >
        <div
          ref={ref}
          className={classNames(
            'absolute right-0 top-0 flex h-full w-64 flex-col justify-between overflow-hidden bg-white px-6 py-12 font-medium shadow transition-transform sm:w-96',

            isMenuOpen ? 'transform-none delay-100' : 'translate-x-full delay-0'
          )}
        >
          <CloseMenuButton setIsMenuOpen={() => handleMenuToggle(false)} />

          <div>
            <PrimaryNav closeMenu={() => handleMenuToggle(false)} />

            {!isLoggedIn && (
              <AuthNav closeMenu={() => handleMenuToggle(false)} />
            )}
          </div>

          {isLoggedIn && <UserMenu closeMenu={() => handleMenuToggle(false)} />}
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
