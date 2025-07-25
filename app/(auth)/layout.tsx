import React, { ReactNode } from "react";

// here in layout page we will accept a prop to know wheter this is a sign-in form or a sign-up form as we have different input fields on the form
const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <div className="auth-layout"> {children} </div>;
};

export default AuthLayout;
