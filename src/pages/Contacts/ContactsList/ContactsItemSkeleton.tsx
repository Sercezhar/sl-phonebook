function ContactsItemSkeleton() {
  const skeletons = [...Array(6).keys()];

  return (
    <ul className="h-[350px] overflow-y-auto">
      {skeletons.map(index => (
        <li
          key={index}
          className="flex animate-pulse border-b py-2 last:border-b-0"
        >
          <div className="mr-2 h-[40px] w-[40px] rounded-full bg-gray-200"></div>

          <div className="flex flex-col justify-center gap-1">
            <div className="h-[18px] w-40 rounded bg-gray-200 "></div>
            <div className="h-[18px] w-52 rounded bg-gray-200"></div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ContactsItemSkeleton;
