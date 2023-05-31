function ContactsItemSkeleton() {
  const skeletons = [...Array(6).keys()];

  return (
    <ul className="h-[350px] overflow-y-auto">
      {skeletons.map(index => (
        <li
          key={index}
          className="flex py-2 border-b last:border-b-0 animate-pulse"
        >
          <div className="mr-2 w-[40px] h-[40px] bg-gray-200 rounded-full"></div>

          <div className="flex flex-col gap-1 justify-center">
            <div className="w-40 h-[18px] bg-gray-200 rounded "></div>
            <div className="w-52 h-[18px] bg-gray-200 rounded"></div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ContactsItemSkeleton;
