import AuthCallout from '@/components/AuthCallout';
import AuthContainer from '@/components/AuthContainer';
import LogInForm from './LogInForm';

function LogIn() {
  return (
    <AuthContainer>
      <LogInForm />

      <AuthCallout
        message="Don't have an account?"
        linkText="Sign up"
        navigateTo="/signup"
      />
    </AuthContainer>
  );
}

export default LogIn;
