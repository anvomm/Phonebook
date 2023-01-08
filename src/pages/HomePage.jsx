import { Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Heading as="h1" size="3xl" color="#fff" fontWeight={400}>
        Phonebook
      </Heading>
      <Text fontSize={'30px'} color="#fff">
        For those, who don't want to loose their contacts
      </Text>
      <Button variant={'pinkButton'} onClick={() => navigate('register')}>
        Join now
      </Button>
    </div>
  );
};

export default HomePage;
