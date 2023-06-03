import { patternPhone } from '@/constants/regExPatterns';
import { useContactsStatus } from '@/hooks/useContactsStatus';
import { createContact } from '@/redux/contacts/contactsOperations';
import { useAppDispatch } from '@/redux/hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Loader from './Loader';
import Input from './form/Input';
import PrimaryButton from './ui/buttons/PrimaryButton';
import SecondaryButton from './ui/buttons/SecondaryButton';

interface ContactAttributes {
  firstName: string;
  lastName: string;
  number: string;
}

interface CreateContactFormProps {
  onClose?: () => void;
}

function CreateContactForm({ onClose }: CreateContactFormProps) {
  const dispatch = useAppDispatch();

  const { isCreating } = useContactsStatus();

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

    dispatch(createContact(newContact));
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
          {isCreating ? (
            <Loader
              position="static"
              background="none"
              size="42px"
              borderWidth="6px"
            />
          ) : (
            <PrimaryButton type="submit" text="Create" />
          )}
        </li>
      </ul>
    </form>
  );
}

export default CreateContactForm;
