import classNames from 'classnames';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

export interface NavigationLinkProps {
  to: string;
  closeMenu?: () => void;
  children: ReactNode;
}

function NavigationLink({ to, closeMenu, children }: NavigationLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(
          'relative flex py-4 text-3xl font-semibold transition-colors lg:text-base lg:font-medium lg:before:absolute lg:before:left-1/2 lg:before:top-1/2 lg:before:h-[60%] lg:before:w-[130%] lg:before:-translate-x-1/2 lg:before:-translate-y-1/2 lg:before:rounded lg:before:bg-white lg:before:opacity-0 lg:before:transition-opacity lg:before:content-[""] lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:h-1 lg:after:w-full lg:after:bg-white lg:after:content-[""] lg:hover:text-sky-400 lg:hover:before:opacity-100',
          isActive
            ? 'text-sky-400 after:block max-lg:fill-sky-400 lg:text-white'
            : 'text-gray-700 after:hidden max-lg:fill-gray-500 lg:text-white'
        )
      }
      onClick={closeMenu}
    >
      <span className="z-10 max-lg:flex max-lg:items-center">{children}</span>
    </NavLink>
  );
}

export default NavigationLink;
