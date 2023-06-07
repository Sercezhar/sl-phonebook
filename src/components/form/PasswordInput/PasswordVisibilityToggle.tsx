import { HiEye, HiEyeOff } from 'react-icons/hi';

interface PasswordVisibilityToggleProps {
  isPasswordVisible: boolean;
  onClick?: () => void;
}

function PasswordVisibilityToggle({
  isPasswordVisible,
  onClick,
}: PasswordVisibilityToggleProps) {
  return (
    <button
      className="group absolute right-2 top-1/2 -translate-y-1/2 p-1"
      type="button"
      onClick={onClick}
    >
      {isPasswordVisible ? (
        <HiEye
          size={20}
          className="fill-gray-300 transition-colors group-hover:fill-sky-400"
        />
      ) : (
        <HiEyeOff
          size={20}
          className="fill-gray-300 transition-colors group-hover:fill-sky-400"
        />
      )}
    </button>
  );
}

export default PasswordVisibilityToggle;
