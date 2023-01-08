import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Navigation } from 'components/Navigation/Navigation';
import { Box } from '@chakra-ui/react';

export const Layout = () => (
  <Box
    bgGradient="linear(287.15deg, #450E4B 0%, #3C0C41 24.48%, rgba(207, 0, 99, 0) 100%)"
    bgColor={'#CF0063'}
    h={'100vh'}
  >
    <header>
      <Box w={1200} mx="auto" pt={30}>
        <Navigation />
      </Box>
    </header>
    <main>
      <Box w={1200} mx="auto">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Box>
    </main>
    <footer>footer</footer>
  </Box>
);
