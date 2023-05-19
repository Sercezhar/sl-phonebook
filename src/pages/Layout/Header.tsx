import UserMenu from '@/components/UserMenu';
import { useAuth } from '@/hooks/useAuth';
import AuthNav from '../../components/AuthNav';
import Logo from '../../components/Logo';
import Navigation from '../../components/Navigation';

function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <header className="sticky top-0 mb-8 h-[56px] bg-sky-400 drop-shadow z-20">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="w-full max-w-[40%]">
          <Navigation />
        </div>

        <div className="flex justify-center w-full max-w-[20%]">
          <Logo />
        </div>

        <div className="flex justify-end w-full max-w-[40%]">
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </div>
    </header>
  );
}

export default Header;
