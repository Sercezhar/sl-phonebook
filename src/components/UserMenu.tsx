import { useAuth } from '@/hooks/useAuth';

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

      <button
        className="bg-white px-3 py-1 h-fit rounded text-sky-400 outline-none transition-opacity hover:opacity-90 focus:ring-4 focus:ring-sky-200"
        type="button"
        onClick={() => logOutUser()}
      >
        Log out
      </button>
    </div>
  );
}

export default UserMenu;
