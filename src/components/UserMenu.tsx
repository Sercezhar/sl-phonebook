import { useAuth } from '@/hooks/useAuth';
import { NavigationProps } from '@/types';
import PrimaryButton from './ui/buttons/PrimaryButton';
import SecondaryButton from './ui/buttons/SecondaryButton';

function UserMenu({ closeMenu }: NavigationProps) {
  const { user, logOutUser } = useAuth();

  function handleLogOutUser() {
    logOutUser();
    closeMenu?.();
  }

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 font-medium lg:text-right text-gray-700 lg:text-white">
      <div>
        <p className="text-lg lg:text-sm">Logged in as</p>
        <p className="max-w-[220px] font-semibold text-xl lg:text-base text-ellipsis break-words lg:break-normal overflow-hidden">
          {user.name}
        </p>
      </div>

      <div className="hidden lg:block">
        <SecondaryButton text="Log out" onClick={() => logOutUser()} />
      </div>

      <div className="block lg:hidden">
        <PrimaryButton text="Log out" onClick={() => handleLogOutUser()} />
      </div>
    </div>
  );
}

export default UserMenu;
