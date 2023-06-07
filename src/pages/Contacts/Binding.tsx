function Binding() {
  const binders: string[] = [
    'top-[10%]',
    'top-[20%]',
    'top-[30%]',
    'top-[40%]',
    'top-1/2',
    'top-[60%]',
    'top-[70%]',
    'top-[80%]',
    'top-[90%]',
  ];

  return (
    <ul className="hidden lg:block">
      {binders.map((top, index) => (
        <li
          key={index}
          className={`absolute ${top} left-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          <span className="block h-2 w-14 rounded bg-slate-200 shadow-[inset_0_0_8px_-6px_#2C3E50] before:absolute before:left-[-12px] before:top-1/2 before:-z-[1] before:h-6 before:w-6 before:-translate-y-1/2 before:rounded-full before:bg-slate-400 before:shadow-[inset_5px_0_1px_0px_#ccc;] before:content-[''] after:absolute after:right-[-12px] after:top-1/2 after:-z-[1] after:h-6 after:w-6 after:-translate-y-1/2 after:rounded-full after:bg-slate-400 after:shadow-[inset_-5px_0_1px_0px_#ccc;] after:content-['']"></span>
        </li>
      ))}
    </ul>
  );
}

export default Binding;
