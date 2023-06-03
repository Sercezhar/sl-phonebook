import { AuthorizedUser, authState } from '@/types/redux';
import { UserAttributes } from '@/types/user';

export function handlePending(state: authState) {
  state.isLoading = true;
}

export function handlePendingRefresh(state: authState) {
  state.isRefreshing = true;
}

export function handleFulfilled(state: authState) {
  state.isLoading = false;
  state.error = null;
}

export function handleFulfilledRegister(
  state: authState,
  { payload }: { payload: AuthorizedUser }
) {
  handleFulfilled(state);
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
}

export function handleFulfilledLogIn(
  state: authState,
  { payload }: { payload: AuthorizedUser }
) {
  handleFulfilled(state);
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
}

export function handleFulfilledLogOut(state: authState) {
  handleFulfilled(state);
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
}

export function handleFulfilledRefresh(
  state: authState,
  { payload }: { payload: UserAttributes }
) {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
}

export function handleRejected(
  state: authState,
  { payload }: { payload: string | undefined }
) {
  state.isLoading = false;
  state.error = payload || 'Something went wrong';
}

export function handleRejectedRefresh(state: authState) {
  state.isRefreshing = false;
}
