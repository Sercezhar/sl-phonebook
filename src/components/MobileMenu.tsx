import { useAuth } from '@/hooks/useAuth';
import classNames from 'classnames';
import { useState } from 'react';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import NavigationToggle from './ui/buttons/NavigationToggle';

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { isLoggedIn } = useAuth();

  return (
    <div className="flex lg:hidden">
      <NavigationToggle
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={() => setIsMenuOpen(prev => !prev)}
      />

      <div
        className={classNames(
          'absolute top-full left-0 w-screen h-[calc(100dvh-56px)] bg-black/[.3] transition-opacity overflow-hidden pointer-events-none',

          isMenuOpen
            ? 'opacity-100 pointer-events-auto delay-0'
            : 'opacity-0 pointer-events-none delay-100'
        )}
      >
        <div
          className={classNames(
            'absolute top-0  flex flex-col justify-between p-4 w-[calc(100%-20%)] h-full font-medium bg-white transition-all shadow overflow-hidden',

            isMenuOpen
              ? 'left-[20%] sm:left-1/2 delay-100'
              : 'left-[100%] delay-0'
          )}
        >
          <Navigation closeMenu={() => setIsMenuOpen(false)} />

          {isLoggedIn ? (
            <UserMenu closeMenu={() => setIsMenuOpen(false)} />
          ) : (
            <AuthNav closeMenu={() => setIsMenuOpen(false)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
