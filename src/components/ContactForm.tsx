function ContactForm() {
  return (
    <form className="flex flex-col">
      <div className="grid gap-6 mb-6">
        <div>
          <label
            htmlFor="first-name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            First name
          </label>
          <input
            type="text"
            id="first-name"
            className="block p-2.5 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-2 focus:ring-sky-200"
            placeholder="John"
            required
          />
        </div>

        <div>
          <label
            htmlFor="last-name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Last name
          </label>
          <input
            type="text"
            id="last-name"
            className="block p-2.5 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-2 focus:ring-sky-200"
            placeholder="Doe"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            className="block p-2.5 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-2 focus:ring-sky-200"
            placeholder="123-45-678"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
        </div>
      </div>

      <button
        className="mx-auto px-6 py-2 w-fit bg-sky-400 font-medium text-white rounded transition-opacity hover:opacity-80 outline-none focus:ring-4 focus:ring-sky-200"
        type="submit"
      >
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
