import Loader from '@/components/Loader';
import Header from '@/pages/Layout/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Header />

      <div className="container mx-auto px-4">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default Layout;
