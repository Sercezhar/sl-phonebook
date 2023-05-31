function Loader() {
  return (
    <div
      role="status"
      className="absolute inset-x-0 inset-y-0 z-10 flex items-center justify-center bg-white/[.6]"
    >
      <div
        className="inline-block h-24 w-24 animate-spin rounded-full border-[9px] border-current border-t-sky-400/[.2] text-sky-400"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
