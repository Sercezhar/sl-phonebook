import { useAuth } from '@/hooks/useAuth';
import SecondaryButton from './ui/buttons/SecondaryButton';

function UserMenu() {
  const { user, logOutUser } = useAuth();

  return (
    <div className="flex items-center gap-4 font-medium text-right text-white">
      <div>
        <p className="text-sm">Greetings,</p>
        <p className="max-w-[260px] text-ellipsis overflow-hidden">
          {user.name}
        </p>
      </div>

      <SecondaryButton text="Log out" onClick={() => logOutUser()} />
    </div>
  );
}

export default UserMenu;
