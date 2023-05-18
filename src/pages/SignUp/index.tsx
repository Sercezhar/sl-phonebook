import AuthCallout from '@/components/AuthCallout';
import SignUpForm from './SignUpForm';

function SignUp() {
  return (
    <div className="mx-auto w-[320px] ">
      <SignUpForm />

      <AuthCallout
        message="Have an account?"
        linkText="Log in"
        navigateTo="/login"
      />
    </div>
  );
}

export default SignUp;
