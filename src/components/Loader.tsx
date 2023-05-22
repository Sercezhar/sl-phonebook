function Loader() {
  return (
    <div
      role="status"
      className="absolute inset-x-0 inset-y-0 flex items-center justify-center bg-white/[.6] z-10"
    >
      <div
        className="animate-spin inline-block w-24 h-24 border-[9px] border-current border-t-sky-400/[.2] text-sky-400 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
