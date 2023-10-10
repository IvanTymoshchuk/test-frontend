import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import Footer from 'components/Footer/Footer';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Layout;
