type AuthContainerProps = {
  children: JSX.Element | JSX.Element[];
};

function AuthContainer({ children }: AuthContainerProps) {
  return <div className="mx-auto w-[328px] ">{children}</div>;
}

export default AuthContainer;
