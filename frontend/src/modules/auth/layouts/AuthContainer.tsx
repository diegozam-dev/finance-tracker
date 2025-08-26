import type { PropsWithChildren } from 'react';

const AuthContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-screen h-screen grid p-4 place-items-center bg-slate-400">
      {children}
    </div>
  );
};

export default AuthContainer;
