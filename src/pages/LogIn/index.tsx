import AuthCallout from '@/components/AuthCallout';
import LogInForm from './LogInForm';

function LogIn() {
  return (
    <div className="mx-auto w-[320px] ">
      <LogInForm />

      <AuthCallout
        message="Don't have an account?"
        linkText="Sign up"
        navigateTo="/signup"
      />
    </div>
  );
}

export default LogIn;
