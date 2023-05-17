import AuthCallout from '@/components/AuthCallout';
import Input from '@/components/form/Input';
import PasswordInput from '@/components/form/PasswordInput';
import Button from '@/components/ui/Button';
import { patternEmail } from '@/constants/regExPatterns';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface UserProps {
  email: string;
  password: string;
}

function SignIn() {
  const signInSchema = yup.object().shape({
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
  } = useForm<UserProps>({
    resolver: yupResolver(signInSchema),
  });

  function onSubmit(data: UserProps) {
    console.log(data);
    reset();
  }

  return (
    <div className="mx-auto w-[320px] ">
      <div className="mb-4 p-4 border border-sky-400 rounded">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 mb-6">
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

          <Button type="submit" text="Log in" />
        </form>
      </div>

      <AuthCallout
        message="Don't have an account?"
        linkText="Sign up"
        navigateTo="/signup"
      />
    </div>
  );
}

export default SignIn;
