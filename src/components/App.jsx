import { lazy } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { StyledToastContainer } from './ContactForm/ContactForm.styled';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { buttonTheme } from './Button';
import '@fontsource/gothic-a1';

const HomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "home-page" */)
);
const RegisterPage = lazy(() =>
  import('pages/RegisterPage' /* webpackChunkName: "register-page" */)
);
const LoginPage = lazy(() =>
  import('pages/LoginPage' /* webpackChunkName: "login-page" */)
);
const ContactsPage = lazy(() =>
  import('pages/ContactsPage' /* webpackChunkName: "contacts-page" */)
);

export const App = () => {
  const theme = {
    styles: {
      global: {
        'h1, h2': {
          fontWeight: '700',
        },

        body: {
          fontFamily: 'Gothic A1, sans-serif',
        },
      },
    },
  };

  const customTheme = extendTheme({
    components: { Button: buttonTheme },
    theme,
  });

  return (
    <ChakraProvider theme={customTheme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/" component={<LoginPage />} />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
      <StyledToastContainer />
    </ChakraProvider>
  );
};
