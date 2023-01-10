import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import {
  selectContacts,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import { selectFilter } from 'redux/filter/filter-selectors';
import { Contact } from 'components/Contact/Contact';
import { List, ListItem, Text, CircularProgress } from '@chakra-ui/react';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return contacts.length === 0 && isLoading ? (
    <CircularProgress
      isIndeterminate
      color="#FC0A7E"
      size="60px"
      display={'flex'}
      justifyContent="center"
    />
  ) : contacts.length !== 0 && filteredContacts.length !== 0 ? (
    <List
      display={'flex'}
      flexWrap={'wrap'}
      gap={'20px'}
      mb={'80px'}
      justifyContent="center"
    >
      {filteredContacts.map(({ name, number, id }) => (
        <ListItem
          key={id}
          minW={'350px'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
          gap="8px"
          pr="10px"
          pl="20px"
          py="10px"
          bgColor={function getRandomColor() {
            const color = 'hsl(' + Math.random() * 360 + ', 100%, 75%)';
            return color;
          }}
          borderRadius="8px"
        >
          <Contact name={name} number={number} id={id}></Contact>
        </ListItem>
      ))}
    </List>
  ) : contacts.length === 0 ? (
    <Text
      textAlign={'center'}
      color={'#613975'}
      fontSize={['15px', '16px', '18px', '20px']}
    >
      Unfortunately your contacts list is empty
    </Text>
  ) : (
    <Text
      textAlign={'center'}
      color={'#613975'}
      fontSize={['15px', '16px', '18px', '20px']}
    >
      Your list does not contain the contact named
      <Text color={'#FC0A7E'} fontSize={['15px', '16px', '18px', '20px']}>
        {filter}
      </Text>
    </Text>
  );
};
