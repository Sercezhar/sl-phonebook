import {
  logIn,
  logOut,
  refreshUser,
  register,
} from '@/redux/auth/authOperations';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  LogInAttributes,
  RegisterAttributes,
  UserAttributes,
} from '@/types/user';

export function useAuth() {
  const dispatch = useAppDispatch();

  const user: UserAttributes = useAppSelector(state => state.auth.user);
  const token: string | null = useAppSelector(state => state.auth.token);
  const isLoggedIn: boolean = useAppSelector(state => state.auth.isLoggedIn);
  const isRefreshing: boolean = useAppSelector(
    state => state.auth.isRefreshing
  );

  const handleRegister = (data: RegisterAttributes) => dispatch(register(data));
  const handleLogIn = (data: LogInAttributes) => dispatch(logIn(data));
  const handleOut = () => dispatch(logOut());
  const handleRefreshUser = () => dispatch(refreshUser());

  return {
    user,
    token,
    isLoggedIn,
    isRefreshing,
    registerUser: handleRegister,
    logInUser: handleLogIn,
    logOutUser: handleOut,
    refreshUser: handleRefreshUser,
  };
}
