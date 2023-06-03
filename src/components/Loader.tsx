type Position = 'static' | 'absolute';

interface LoaderProps {
  position?: Position;
  background?: string;
  size?: string;
  borderWidth?: string;
}

function Loader({
  position = 'absolute',
  background = 'rgb(255 255 255 / .6)',
  size = '6rem',
  borderWidth = '10px',
}: LoaderProps) {
  return (
    <div
      role="status"
      className="absolute inset-x-0 inset-y-0 z-10 flex items-center justify-center"
      style={{
        position,
        background,
      }}
    >
      <div
        className="inline-block animate-spin rounded-full border-current border-t-sky-400/[.2] text-sky-400"
        style={{
          width: size,
          height: size,
          borderWidth,
        }}
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
