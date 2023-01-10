import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Box, Text, CircularProgress } from '@chakra-ui/react';
import Sparkle from 'react-sparkle';

export const Layout = () => {
  const location = useLocation();

  return location.pathname === '/' ? (
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
            <CircularProgress
              isIndeterminate
              color="#FC0A7E"
              size="60px"
              display={'flex'}
              justifyContent="center"
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Box as="footer" mt={'auto'} pb={'15px'}>
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
  ) : (
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
            <CircularProgress
              isIndeterminate
              color="#FC0A7E"
              size="60px"
              display={'flex'}
              justifyContent="center"
            />
          }
        >
          {location.pathname !== '/contacts' && (
            <Box w="100%">
              <Sparkle
                color={'#3C0C41'}
                fadeOutSpeed={10}
                newSparkleOnFadeOut={false}
                flicker
                flickerSpeed="fast"
                count={80}
              />
            </Box>
          )}

          <Outlet />
        </Suspense>
      </main>
      <Box as="footer" pb={'15px'} bgColor={'#3C0C41'} mt={'auto'}>
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
  );
};
