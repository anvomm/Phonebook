import { LoginForm } from 'components/LoginForm';
import { Heading, Box } from '@chakra-ui/react';

const LoginPage = () => (
  <Box w={['300px', '440px', '750px', '970px', '1200px']} mx="auto" pt="60px">
    <Heading as={'h2'} textAlign={'center'} mb={'25px'} color={'#613975'}>
      Welcome back!
    </Heading>
    <LoginForm />
  </Box>
);

export default LoginPage;
