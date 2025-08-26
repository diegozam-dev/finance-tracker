import { Navigate, Outlet, useLocation } from 'react-router';

const AuthContainer = () => {
  const location = useLocation();

  if (location.pathname === '/auth' || location.pathname === '/auth/') {
    return <Navigate to={'/auth/login'} />;
  }

  return (
    <div className="w-screen h-screen grid p-4 place-items-center bg-slate-400">
      <Outlet />
    </div>
  );
};

export default AuthContainer;
