import { Input } from '@chakra-ui/react';
import {
  Flex,
  IconButton,
  FormControl,
  FormLabel,
  InputGroup,
  Button,
  InputRightElement,
} from '@chakra-ui/react';
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/auth-operations';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const dispatch = useDispatch();

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logInUser({ email, password }));
    resetForm();
  };

  return (
    <Flex
      as={'form'}
      position="relative"
      zIndex={'1000'}
      flexDirection={'column'}
      gap={'50px'}
      bgGradient="linear(to-t, #450E4B 0%, #3C0C41 24.48%, rgba(207, 0, 99, 0) 100%)"
      bgColor={'#CF0063'}
      borderRadius={'8px'}
      p={'40px'}
      mx={'auto'}
      mb={'120px'}
      w={['280px', '400px', '450px', '500px']}
      onSubmit={handleSubmit}
    >
      <Flex flexDirection={'column'} align={'center'} gap={'20px'}>
        <FormControl isRequired>
          <FormLabel color={'#fff'}>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            width="400px"
            placeholder="Email"
            _placeholder={{
              color: '#000',
              fontSize: ['12px', '13px', '14px', '15px', '16px'],
            }}
            variant={'styled'}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel color={'#fff'}>Password</FormLabel>
          <InputGroup width="400px">
            <Input
              name="password"
              value={password}
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Password"
              _placeholder={{
                color: '#000',
                fontSize: ['12px', '13px', '14px', '15px', '16px'],
              }}
              variant={'styled'}
              onChange={handleInputChange}
            />
            <InputRightElement width="4.5rem">
              <IconButton
                h="1.75rem"
                size="sm"
                onClick={handleClick}
                icon={
                  show ? (
                    <ViewOffIcon color="#CF0063" />
                  ) : (
                    <ViewIcon color="#CF0063" />
                  )
                }
              ></IconButton>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Flex>
      <Button type="submit" variant="pinkButton" alignSelf={'center'}>
        Log in
      </Button>
    </Flex>
  );
};
