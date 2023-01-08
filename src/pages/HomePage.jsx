import { Heading, Text, Button, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Box w={1200} mx="auto" pt={180}>
      <Heading as="h1" size="3xl" color="#fff" fontWeight={400} mb={10}>
        Phonebook
      </Heading>
      <Text fontSize={'30px'} color="#fff" mb={25}>
        For those, who don't want to loose their contacts.
      </Text>
      <Button variant={'pinkButton'} onClick={() => navigate('register')}>
        Join now
      </Button>
    </Box>
  );
};

export default HomePage;
