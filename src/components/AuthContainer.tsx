import { ReactNode } from "react";

type AuthContainerProps = {
  children: ReactNode;
};

function AuthContainer({ children }: AuthContainerProps) {
  return <div className="mx-auto w-[328px] ">{children}</div>;
}

export default AuthContainer;
