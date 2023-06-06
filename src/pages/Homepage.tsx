import NavigationButton from '@/components/ui/buttons/NavigationButton';

function Homepage() {
  return (
    <div className="flex h-[calc(100dvh-112px)] items-center justify-center text-gray-700 max-md:flex-col-reverse">
      <div className="flex w-[300px] flex-col md:w-[400px] lg:w-[500px]">
        <div className="mb-6 w-full md:mb-8 md:w-[300px] lg:w-[400px]">
          <h1 className="mb-6 text-2xl font-bold lg:text-3xl xl:text-4xl">
            Keep your contacts in one place
          </h1>

          <p className="lg:text-xl">
            Take control of your contacts with our intuitive and reliable
            platform and stay connected effortlessly.
          </p>
        </div>

        <NavigationButton text="Open Phonebook" />
      </div>

      <div className="h-[300px] w-[300px] bg-hero bg-contain bg-center bg-no-repeat max-md:mb-6 md:block md:h-full md:w-[400px] lg:w-[500px] xl:w-[600px]"></div>
    </div>
  );
}

export default Homepage;
