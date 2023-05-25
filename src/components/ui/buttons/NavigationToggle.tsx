import classNames from 'classnames';

interface NavigationToggle {
  isMenuOpen: boolean;
  setIsMenuOpen: () => void;
}

function NavigationToggle({ isMenuOpen, setIsMenuOpen }: NavigationToggle) {
  return (
    <button className="space-y-1.5" type="button" onClick={setIsMenuOpen}>
      <div
        className={classNames(
          'w-8 h-[3px] bg-white rounded transition-transform',
          {
            'rotate-45 translate-y-[0.55rem]': isMenuOpen,
          }
        )}
      ></div>
      <div
        className={classNames(
          'w-8 h-[3px] bg-white rounded transition-opacity',
          {
            'opacity-0': isMenuOpen,
          }
        )}
      ></div>
      <div
        className={classNames(
          'w-8 h-[3px] bg-white rounded transition-transform',
          {
            '-rotate-45 -translate-y-[0.55rem]': isMenuOpen,
          }
        )}
      ></div>
    </button>
  );
}

export default NavigationToggle;
