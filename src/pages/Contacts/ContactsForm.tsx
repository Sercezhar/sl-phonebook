import Input from '@/components/form/Input';
import Button from '@/components/ui/buttons/Button';
import { patternPhone } from '@/constants/regExPatterns';
import { useContacts } from '@/hooks/useContacts';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export interface ContactAttributes {
  firstName: string;
  lastName: string;
  number: string;
}

function ContactsForm() {
  const { createContact } = useContacts();

  const contactSchema = yup.object().shape({
    firstName: yup.string().required('is a required field'),
    lastName: yup.string(),
    number: yup
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
  } = useForm<ContactAttributes>({
    resolver: yupResolver(contactSchema),
  });

  function onSubmit(data: ContactAttributes) {
    const newContact = {
      name: `${data.firstName} ${data.lastName}`,
      number: data.number,
    };

    createContact(newContact);
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
          name="number"
          placeholder="123-45-678"
          register={register('number')}
          error={errors.number}
        />
      </div>

      <Button type="submit" text="Add contact" />
    </form>
  );
}

export default ContactsForm;