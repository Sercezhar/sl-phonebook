import Input from '@/components/form/Input';
import Button from '@/components/ui/buttons/Button';
import SecondaryButton from '@/components/ui/buttons/SecondaryButton';
import { patternPhone } from '@/constants/regExPatterns';
import { useContacts } from '@/hooks/useContacts';
import { ContactAttributes, NewContactAttributes } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface EditContactFormProps {
  contact: ContactAttributes | null;
  onClose: () => void;
}

function EditContactForm({ contact, onClose }: EditContactFormProps) {
  const { editContact } = useContacts();

  const contactSchema = yup.object().shape({
    name: yup.string().required('is a required field'),
    number: yup
      .string()
      .required('is a required field')
      .min(5, 'must be at least 5 characters')
      .matches(patternPhone, 'is not valid'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewContactAttributes>({
    resolver: yupResolver(contactSchema),
  });

  function onSubmit(data: NewContactAttributes) {
    const noChanges =
      contact!.name === data.name && contact!.number === data.number;

    if (noChanges) {
      onClose();
      return;
    }

    const editedContact = {
      id: contact!.id,
      ...data,
    };

    editContact(editedContact);
    onClose();
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-6 mb-6">
        <Input
          label="Name"
          name="name"
          placeholder="John"
          defaultValue={contact?.name}
          register={register('name')}
          error={errors.name}
        />

        <Input
          label="Phone number"
          name="number"
          placeholder="123-45-678"
          defaultValue={contact?.number}
          register={register('number')}
          error={errors.number}
        />
      </div>

      <ul className="flex gap-4 justify-end">
        <li>
          <SecondaryButton text="Cancel" onClick={onClose} />
        </li>

        <li>
          <Button type="submit" text="Edit" />
        </li>
      </ul>
    </form>
  );
}

export default EditContactForm;
