import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { Navigation } from 'components/Navigation';
import { Box, Text, Spinner } from '@chakra-ui/react';
import { Background } from './Background';

export const Layout = () => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return location.pathname === '/' ||
    (!location.pathname !== '/contacts' &&
      location.pathname !== '/register' &&
      location.pathname !== '/login' && !isLoggedIn) ? (
    <Box
      bgGradient="linear(287.15deg, #450E4B 0%, #3C0C41 24.48%, rgba(207, 0, 99, 0) 100%)"
      bgColor={'#CF0063'}
      w={'100%'}
      h={'100vh'}
      display="flex"
      flexDirection={'column'}
    >
      <Box
        as="header"
        w={['300px', '440px', '750px', '970px', '1200px']}
        mx="auto"
        pt={30}
      >
        <Navigation />
      </Box>
      <main>
        <Suspense
          fallback={
            <Spinner
              thickness="4px"
              emptyColor="gray.200"
              color="#FC0A7E"
              size="xl"
              position={'absolute'}
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Box as="footer" mt={'auto'} pb={'15px'} pt="30px">
        <Box
          w={['300px', '440px', '750px', '970px', '1200px']}
          mx="auto"
          display={'flex'}
          justifyContent={'flex-end'}
        >
          <Text color={'#fff'} fontSize={'13px'}>
            @2023 Phonebook. Created by anvomm.
          </Text>
        </Box>
      </Box>
    </Box>
  ) : (
    <>
      <Box
        bgColor={'#fff'}
        w={'100%'}
        h={'100vh'}
        display="flex"
        flexDirection={'column'}
      >
        <Box
          as="header"
          w={'100%'}
          bgColor={'#FC0A7E'}
          position="relative"
          zIndex={'1000'}
        >
          <Box
            w={['300px', '440px', '750px', '970px', '1200px']}
            mx="auto"
            py={30}
          >
            <Navigation />
          </Box>
        </Box>
        <main>
          <Suspense
            fallback={
              <Spinner
                thickness="4px"
                emptyColor="gray.200"
                color="#FC0A7E"
                size="xl"
                position={'absolute'}
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
              />
            }
          >
            {location.pathname === '/login' && <Background />}
            <Outlet />
          </Suspense>
        </main>
        <Box
          as="footer"
          pb={'15px'}
          bgColor={'#3C0C41'}
          mt={'auto'}
          position="relative"
          zIndex={'1000'}
        >
          <Box
            w={['300px', '440px', '750px', '970px', '1200px']}
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
    </>
  );
};
