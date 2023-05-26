import Loader from '@/components/Loader';
import { useAuth } from '@/hooks/useAuth';
import Header from '@/pages/Layout/Header';
import { Suspense, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

function Layout() {
  const { refreshUser, isRefreshing } = useAuth();

  useEffect(() => {
    refreshUser();
  }, []);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <Header />

      <div className="container mx-auto px-4">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>

      <Toaster toastOptions={{ style: { borderRadius: '5px' } }} />
    </div>
  );
}

export default Layout;
