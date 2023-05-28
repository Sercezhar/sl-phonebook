import MobileMenu from '@/components/MobileMenu';
import UserMenu from '@/components/UserMenu';
import { useAuth } from '@/hooks/useAuth';
import AuthNav from '../../components/AuthNav';
import Logo from '../../components/Logo';
import Navigation from '../../components/Navigation';

function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <header className="sticky top-0 mb-8 h-[56px] bg-sky-400 shadow z-20">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="hidden lg:block w-full lg:max-w-[40%]">
          <Navigation />
        </div>

        <div className="flex justify-left lg:justify-center w-full lg:max-w-[20%]">
          <Logo />
        </div>

        <div className="hidden lg:flex justify-end w-full lg:max-w-[40%]">
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}

export default Header;
