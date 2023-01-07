import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Navigation } from 'components/Navigation/Navigation';

export const Layout = () => (
  <>
    <header>
      <Navigation />
    </header>
    <main>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
    <footer>footer</footer>
  </>
);
