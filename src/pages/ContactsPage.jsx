import { Box, Text } from '@chakra-ui/react';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

const ContactsPage = () => (
  <Box w={['300px', '440px', '750px', '970px', '1200px']} mx="auto" pt="30px">
    <Filter />
    <Text
      color={'#613975'}
      fontSize={['18px', '18px', '20px', '22px', '24px']}
      mb={'35px'}
    >
      Add new contact:
    </Text>
    <ContactForm />
    <ContactList />
  </Box>
);

export default ContactsPage;
