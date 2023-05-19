import { useAuth } from '@/hooks/useAuth';

function UserMenu() {
  const { user, logOutUser } = useAuth();

  return (
    <div className="flex items-center gap-4 font-medium text-right text-white">
      <div>
        <p className="text-sm">Greetings,</p>
        <p>{user.name}</p>
      </div>

      <button
        className="bg-white px-2 py-1 h-fit rounded text-sky-400"
        type="button"
        onClick={() => logOutUser()}
      >
        Log out
      </button>
    </div>
  );
}

export default UserMenu;
