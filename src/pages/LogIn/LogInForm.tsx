import Input from '@/components/form/Input';
import PasswordInput from '@/components/form/PasswordInput';
import PrimaryButton from '@/components/ui/buttons/PrimaryButton';
import { patternEmail } from '@/constants/regExPatterns';
import { useAuth } from '@/hooks/useAuth';
import { LogInAttributes } from '@/types/user';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

function LogInForm() {
  const { logInUser } = useAuth();

  const logInSchema = yup.object().shape({
    email: yup
      .string()
      .required('is a required field')
      .matches(patternEmail, 'must be valid'),
    password: yup
      .string()
      .required('is a required field')
      .min(6, 'must be at least 6 characters'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LogInAttributes>({
    resolver: yupResolver(logInSchema),
  });

  function onSubmit(data: LogInAttributes) {
    logInUser(data);
    reset();
  }

  return (
    <div className="mb-4 rounded border border-sky-400 p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6 grid gap-6">
          <Input
            label="Email address"
            type="email"
            name="email"
            placeholder="john.doe@example.com"
            register={register('email')}
            error={errors.email}
          />

          <PasswordInput
            register={register('password')}
            error={errors.password}
          />
        </div>

        <PrimaryButton type="submit" text="Log in" />
      </form>
    </div>
  );
}

export default LogInForm;
