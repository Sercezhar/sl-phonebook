import { patternPhone } from '@/constants/regExPatterns';
import { useContacts } from '@/hooks/useContacts';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Input from './form/Input';
import PrimaryButton from './ui/buttons/PrimaryButton';
import SecondaryButton from './ui/buttons/SecondaryButton';

export interface ContactAttributes {
  firstName: string;
  lastName: string;
  number: string;
}

interface CreateContactFormProps {
  onClose?: () => void;
}

function CreateContactForm({ onClose }: CreateContactFormProps) {
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
    onClose?.();
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6 grid gap-6">
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

      <ul className="flex justify-end gap-4 lg:justify-center">
        <li className="block lg:hidden">
          <SecondaryButton text="Close" onClick={onClose} />
        </li>

        <li>
          <PrimaryButton type="submit" text="Create" />
        </li>
      </ul>
    </form>
  );
}

export default CreateContactForm;
