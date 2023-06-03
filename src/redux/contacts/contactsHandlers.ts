import { ContactAttributes } from '@/types/contact';
import { ContactsState, Status } from '@/types/redux';

export function handlePending(state: ContactsState, status: Status) {
  state.status = status;
}

export function handleFulfilled(state: ContactsState) {
  state.status = 'fulfilled';
  state.error = null;
}

export function handleFulfilledGet(
  state: ContactsState,
  { payload }: { payload: ContactAttributes[] }
) {
  handleFulfilled(state);
  state.items = payload;
}

export function handleFulfilledCreate(
  state: ContactsState,
  { payload }: { payload: ContactAttributes }
) {
  handleFulfilled(state);
  state.items.push(payload);
}

export function handleFulfilledDelete(
  state: ContactsState,
  { payload }: { payload: ContactAttributes }
) {
  handleFulfilled(state);
  state.items = state.items.filter(item => item.id !== payload.id);
}

export function handleFulfilledEdit(
  state: ContactsState,
  { payload }: { payload: ContactAttributes }
) {
  handleFulfilled(state);
  state.items = state.items.map(item =>
    item.id === payload.id ? payload : item
  );
}

export function handleRejected(
  state: ContactsState,
  { payload }: { payload: string | undefined }
) {
  state.status = 'rejected';
  state.error = payload || 'Something went wrong';
}
