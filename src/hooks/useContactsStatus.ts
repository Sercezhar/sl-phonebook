import { statusSelector } from '@/redux/contacts/contactsSelectors';
import { useAppSelector } from '@/redux/hooks';
import { Status } from '@/types/redux';

export function useContactsStatus() {
  const status: Status = useAppSelector(statusSelector);

  const isFetching = status === 'fetching';
  const isCreating = status === 'creating';
  const isDeleting = status === 'deleting';
  const isUpdating = status === 'updating';

  return {
    isFetching,
    isCreating,
    isDeleting,
    isUpdating,
  };
}
