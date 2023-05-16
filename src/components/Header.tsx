import AuthNav from './AuthNav';
import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="sticky top-0 mb-8 bg-sky-400 drop-shadow z-20">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Navigation />

        <Logo />

        <AuthNav />
      </div>
    </header>
  );
}

export default Header;
