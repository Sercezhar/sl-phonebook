import Input from '@/components/form/Input';
import PasswordInput from '@/components/form/PasswordInput';
import Button from '@/components/ui/Button';
import { patternEmail } from '@/constants/regExPatterns';
import { useAuth } from '@/hooks/useAuth';
import { RegisterAttributes } from '@/types/authTypes';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

function SignUpForm() {
  const { registerUser } = useAuth();

  const signUnSchema = yup.object().shape({
    name: yup
      .string()
      .required('is a required field')
      .max(28, 'must be at most 28 characters'),
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
  } = useForm<RegisterAttributes>({
    resolver: yupResolver(signUnSchema),
  });

  function onSubmit(data: RegisterAttributes) {
    registerUser(data);
    reset();
  }

  return (
    <div className="mb-4 p-4 border border-sky-400 rounded">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-6 mb-6">
          <Input
            label="Username"
            name="name"
            placeholder="John"
            register={register('name')}
            error={errors.name}
          />

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

        <Button type="submit" text="Sign up" />
      </form>
    </div>
  );
}

export default SignUpForm;
