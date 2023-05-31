import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
}

function Input({
  label,
  type = 'text',
  name,
  placeholder = '',
  defaultValue = '',
  register,
  error,
}: InputProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-900"
      >
        {label}
        {error && (
          <span className="ml-1 text-sm font-medium text-red-400">
            {error.message}
          </span>
        )}
      </label>
      <input
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-sky-200"
        type={type}
        id={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register}
      />
    </div>
  );
}

export default Input;
