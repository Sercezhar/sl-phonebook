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
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
        {error && (
          <span className="ml-1 text-red-400 font-medium text-sm">
            {error.message}
          </span>
        )}
      </label>
      <input
        className="block p-2.5 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-2 focus:ring-sky-200"
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
