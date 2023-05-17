import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Input from './form/Input';

interface ContactProps {
  firstName: string;
  lastName: string;
  phone: string;
}

function ContactForm() {
  const phoneRegExp =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

  const contactSchema = yup.object().shape({
    firstName: yup.string().required('is a required field'),
    lastName: yup.string(),
    phone: yup
      .string()
      .required('is a required field')
      .min(5, 'must be at least 5 characters')
      .matches(phoneRegExp, 'is not valid'),
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

      <button
        className="mx-auto px-6 py-2 w-fit bg-sky-400 font-medium text-white rounded transition-opacity hover:opacity-80 outline-none focus:ring-4 focus:ring-sky-200"
        type="submit"
      >
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
