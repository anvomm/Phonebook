import { lazy } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { StyledToastContainer } from './ContactForm/ContactForm.styled';

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
          color: '#5c3c8c',
          fontSize: '28px',
          fontWeight: '700',
        },

        body: {
          fontFamily: 'Poppins, sans-serif',
        },
      },
    },
  };

  const customTheme = extendTheme(theme);

  return (
    <ChakraProvider theme={customTheme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
      <StyledToastContainer />
    </ChakraProvider>
  );
};
