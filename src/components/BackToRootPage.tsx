import { FC } from 'react';
import { Outlet, Link } from 'react-router-dom';

const BackToRootPage: FC = () => {
  return (
    <>
      <Link to="/" className="back-home-link">
        home
      </Link>
      <Outlet />
    </>
  );
};

export default BackToRootPage;
