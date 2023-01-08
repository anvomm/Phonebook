import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Navigation } from 'components/Navigation/Navigation';
import { Box, Text } from '@chakra-ui/react';

export const Layout = () => (
  <Box
    bgGradient="linear(287.15deg, #450E4B 0%, #3C0C41 24.48%, rgba(207, 0, 99, 0) 100%)"
    bgColor={'#CF0063'}
    h={'100vh'}
    display="flex"
    flexDirection={'column'}
  >
    <Box as="header" w={1200} mx="auto" pt={30}>
      <Navigation />
    </Box>
    <main>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
    <Box as="footer" mt={'auto'} pb={'15px'}>
      <Box
        w={1200}
        mx="auto"
        pt={30}
        display={'flex'}
        justifyContent={'flex-end'}
      >
        <Text color={'#fff'} fontSize={'13px'}>
          @2023 Phonebook. Created by anvomm.
        </Text>
      </Box>
    </Box>
  </Box>
);
