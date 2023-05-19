import AuthCallout from '@/components/AuthCallout';
import AuthContainer from '@/components/AuthContainer';
import SignUpForm from './SignUpForm';

function SignUp() {
  return (
    <AuthContainer>
      <SignUpForm />

      <AuthCallout
        message="Have an account?"
        linkText="Log in"
        navigateTo="/login"
      />
    </AuthContainer>
  );
}

export default SignUp;
