import Input from '@/components/form/Input';
import PrimaryButton from '@/components/ui/buttons/PrimaryButton';
import SecondaryButton from '@/components/ui/buttons/SecondaryButton';
import { patternPhone } from '@/constants/regExPatterns';
import { editContact } from '@/redux/contacts/contactsOperations';
import { useAppDispatch } from '@/redux/hooks';
import { ContactAttributes, NewContactAttributes } from '@/types/contact';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface EditContactFormProps {
  contact: ContactAttributes | null;
  onClose: () => void;
  closeModal: () => void;
  closeActions: () => void;
}

function EditContactForm({
  contact,
  onClose,
  closeModal,
  closeActions,
}: EditContactFormProps) {
  const dispatch = useAppDispatch();

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

  async function onSubmit(data: NewContactAttributes) {
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

    closeModal();
    await dispatch(editContact(editedContact));
    closeActions();
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6 grid gap-6">
        <Input
          label="Name"
          name="edit-name"
          placeholder="John"
          defaultValue={contact?.name}
          register={register('name')}
          error={errors.name}
        />

        <Input
          label="Phone number"
          name="edit-number"
          placeholder="123-45-678"
          defaultValue={contact?.number}
          register={register('number')}
          error={errors.number}
        />
      </div>

      <ul className="flex justify-end gap-4">
        <li>
          <SecondaryButton text="Cancel" onClick={onClose} />
        </li>

        <li>
          <PrimaryButton type="submit" text="Edit" />
        </li>
      </ul>
    </form>
  );
}

export default EditContactForm;
