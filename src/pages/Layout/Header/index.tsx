import { useAuth } from '@/hooks/useAuth';
import AuthNav from './AuthNav';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import PrimaryNav from './PrimaryNav';
import UserMenu from './UserMenu';

function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <header className="sticky top-0 z-20 mb-7 h-[56px] bg-sky-400 shadow">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <div className="hidden w-full lg:block lg:max-w-[40%]">
          <PrimaryNav />
        </div>

        <div className="justify-left flex w-full lg:max-w-[20%] lg:justify-center">
          <Logo />
        </div>

        <div className="hidden w-full justify-end lg:flex lg:max-w-[40%]">
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}

export default Header;
