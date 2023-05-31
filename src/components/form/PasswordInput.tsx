import { useState } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import PasswordVisibilityToggle from '../ui/buttons/PasswordVisibilityToggle';

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
        className="mb-2 block text-sm font-medium text-gray-900"
      >
        Password
        {error && (
          <span className="ml-1 text-sm font-medium text-red-400">
            {error.message}
          </span>
        )}
      </label>
      <span className="relative">
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          id="password"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pr-10 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-sky-200"
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
