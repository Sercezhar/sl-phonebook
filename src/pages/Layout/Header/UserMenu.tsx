import PrimaryButton from '@/components/ui/buttons/PrimaryButton';
import SecondaryButton from '@/components/ui/buttons/SecondaryButton';
import { useAuth } from '@/hooks/useAuth';
import { NavigationProps } from '@/types';

function UserMenu({ closeMenu }: NavigationProps) {
  const { user, logOutUser } = useAuth();

  function handleLogOutUser() {
    logOutUser();
    closeMenu?.();
  }

  return (
    <div className="flex flex-col items-start gap-4 font-medium text-gray-700 lg:flex-row lg:items-center lg:text-right lg:text-white">
      <div>
        <p className="text-lg lg:text-sm">Logged in as</p>
        <p className="max-w-[220px] overflow-hidden text-ellipsis break-words text-xl font-semibold lg:break-normal lg:text-base">
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
