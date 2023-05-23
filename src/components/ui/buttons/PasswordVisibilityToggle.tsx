import { HiEye, HiEyeOff } from 'react-icons/hi';

interface ButtonProps {
  isPasswordVisible: boolean;
  onClick?: () => void;
}

function PasswordVisibilityToggle({ isPasswordVisible, onClick }: ButtonProps) {
  return (
    <button
      className="group absolute top-1/2 right-2 transform -translate-y-1/2 p-1"
      type="button"
      onClick={onClick}
    >
      {isPasswordVisible ? (
        <HiEye
          size={20}
          className="fill-gray-300 group-hover:fill-sky-400 transition-colors"
        />
      ) : (
        <HiEyeOff
          size={20}
          className="fill-gray-300 group-hover:fill-sky-400 transition-colors"
        />
      )}
    </button>
  );
}

export default PasswordVisibilityToggle;
