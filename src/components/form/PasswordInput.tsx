import { useState } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import PasswordVisibilityToggle from '../ui/PasswordVisibilityToggle';

interface PasswordInputProps {
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
}

function PasswordInput({ register, error }: PasswordInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div>
      <label
        htmlFor="password"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Password
        {error && (
          <span className="ml-1 text-red-400 font-medium text-sm">
            {error.message}
          </span>
        )}
      </label>
      <span className="relative">
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          id="password"
          className="block p-2.5 pr-10 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-2 focus:ring-sky-200"
          placeholder="•••••••••"
          {...register}
        />

        <PasswordVisibilityToggle
          isPasswordVisible={isPasswordVisible}
          onClick={() => setIsPasswordVisible(prevState => !prevState)}
        />
      </span>
    </div>
  );
}

export default PasswordInput;
