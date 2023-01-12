import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { notifyAboutSuccess } from 'redux/contacts/contacts-operations';
import {
  Flex,
  Button,
  Input,
  FormControl,
  FormLabel,
  useToast,
} from '@chakra-ui/react';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const toast = useToast();

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const inputHandler = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log('here');
    const isExist = contacts.find(
      contacts => contacts.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      toast({
        title: `${name} is already in contacts.`,
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });
      resetForm();
      return;
    }
    dispatch(addContact({ name, number }));
    notifyAboutSuccess(
      `${name} is successfully added to your contacts.`
    );
    resetForm();
  };

  return (
    <Flex
      as={'form'}
      flexDirection={['column', 'column', 'row']}
      align={'center'}
      justify={'center'}
      gap={'40px'}
      mb="50px"
      onSubmit={submitHandler}
    >
      <FormControl w={'300px'} isRequired>
        <FormLabel
          display={'flex'}
          gap={'10px'}
          alignItems={'center'}
          color={'#6B6B6B'}
          fontSize={['14px', '14px', '14px', '16px', '18px']}
        >
          Name
          <Input
            variant="flushed"
            borderColor="#613975"
            autoComplete="off"
            focusBorderColor="#FC0A7E"
            fontSize={['14px', '14px', '14px', '16px', '18px']}
            pl="10px"
            type="name"
            name="name"
            value={name}
            onChange={inputHandler}
          />
        </FormLabel>
      </FormControl>
      <FormControl w={'300px'} isRequired>
        <FormLabel
          display={'flex'}
          gap={'10px'}
          alignItems={'center'}
          color={'#6B6B6B'}
          fontSize={['14px', '14px', '14px', '16px', '18px']}
        >
          Number
          <Input
            variant="flushed"
            borderColor="#613975"
            focusBorderColor="#FC0A7E"
            fontSize={['14px', '14px', '14px', '16px', '18px']}
            pl="10px"
            autoComplete="off"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={inputHandler}
            required
          />
        </FormLabel>
      </FormControl>

      <Button
        type="submit"
        variant={'pinkButton'}
        _hover={{
          bgColor: 'transparent',
          border: '1px solid #B04BB3',
          color: '#B04BB3',
        }}
      >
        Add contact
      </Button>
    </Flex>
  );
};
