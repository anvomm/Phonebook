import { RegisterForm } from 'components/RegisterForm';
import { Heading, Text, Box } from '@chakra-ui/react';

const RegisterPage = () => (
  <Box w={['300px', '440px', '750px', '970px', '1200px']} mx="auto" pt="60px">
    <Heading position={'relative'} zIndex='1000' as={'h2'} textAlign={'center'} mb={'25px'} color={'#613975'}>
      Ready to get started?
    </Heading>
    <Text
      textAlign={'center'}
      mb={'65px'}
      color={'#6B6B6B'}
      fontSize={['16px', '16px', '18px', '20px', '22px']}
    >
      Fill in your contact information and become a happy phonebook user!
    </Text>
    <RegisterForm />
  </Box>
);

export default RegisterPage;
