import NavigationButton from '@/components/ui/buttons/NavigationButton';

function ErrorPage() {
  return (
    <div className="flex h-[100dvh] items-center justify-center py-7 text-gray-700 max-md:flex-col-reverse">
      <div className="w-[300px] md:mr-8 lg:mr-10 lg:w-[400px]">
        <h2 className="mb-6 text-2xl font-bold">
          Oops! It appears you've veered off course.
        </h2>

        <div className="mb-8">
          Just look for the trusty Home button, patiently awaiting your return.
          Give it a gentle press, and it will whisk you away to familiar
          territory.
        </div>

        <NavigationButton to="/" text="Home" />
      </div>

      <div className="h-[300px] w-[300px] bg-error-404 bg-contain bg-center bg-no-repeat max-md:mb-6 md:h-[400px] md:w-[400px]"></div>
    </div>
  );
}

export default ErrorPage;
