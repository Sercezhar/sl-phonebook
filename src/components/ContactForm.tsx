import { patternPhone } from '@/constants/regExPatterns';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Input from './form/Input';
import Button from './ui/Button';

interface ContactProps {
  firstName: string;
  lastName: string;
  phone: string;
}

function ContactForm() {
  const contactSchema = yup.object().shape({
    firstName: yup.string().required('is a required field'),
    lastName: yup.string(),
    phone: yup
      .string()
      .required('is a required field')
      .min(5, 'must be at least 5 characters')
      .matches(patternPhone, 'is not valid'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactProps>({
    resolver: yupResolver(contactSchema),
  });

  function onSubmit(data: ContactProps) {
    console.log(data);
    reset();
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-6 mb-6">
        <Input
          label="First name"
          name="first-name"
          placeholder="John"
          register={register('firstName')}
          error={errors.firstName}
        />

        <Input
          label="Last name"
          name="last-name"
          placeholder="Doe"
          register={register('lastName')}
          error={errors.lastName}
        />

        <Input
          label="Phone number"
          name="phone"
          placeholder="123-45-678"
          register={register('phone')}
          error={errors.phone}
        />
      </div>

      <Button type="submit" text="Add contact" />
    </form>
  );
}

export default ContactForm;
