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
          'absolute top-full left-0 right-0 h-[calc(100dvh-56px)] bg-black transition overflow-hidden',

          isMenuOpen
            ? 'bg-opacity-30 pointer-events-auto delay-0'
            : 'bg-opacity-0 pointer-events-none delay-100'
        )}
      >
        <div
          className={classNames(
            'absolute top-0 right-0 flex flex-col justify-between p-4 w-64 h-full font-medium bg-white transition-transform shadow overflow-hidden',

            isMenuOpen ? 'transform-none delay-100' : 'translate-x-full delay-0'
          )}
        >
          <div>
            <Navigation closeMenu={() => setIsMenuOpen(false)} />

            {!isLoggedIn && <AuthNav closeMenu={() => setIsMenuOpen(false)} />}
          </div>

          {isLoggedIn && <UserMenu closeMenu={() => setIsMenuOpen(false)} />}
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
