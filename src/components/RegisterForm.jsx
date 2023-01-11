import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/auth-operations';
import {
  Flex,
  IconButton,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  Button,
  InputRightElement,
  FormHelperText,
  useToast,
} from '@chakra-ui/react';
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const dispatch = useDispatch();

  const toast = useToast();

  const resetForm = () => {
    setEmail('');
    setName('');
    setPassword('');
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    const confirmPassword = e.target.elements.passwordRepeat.value;
    if (confirmPassword !== password) {
      toast({
        title: "Your passwords aren't equal.",
        description: 'Please try one more time',
        status: 'error',
        position: 'top-right',
        duration: 5000,
        isClosable: true,
      });
      e.target.reset();
      setPassword('');
      return;
    }
    dispatch(registerUser({ name, email, password }));
    e.target.reset();
    resetForm();
  };

  return (
    <Flex
      as="form"
      flexDirection={'column'}
      gap={'50px'}
      bgGradient="linear(to-t, #450E4B 0%, #3C0C41 24.48%, rgba(207, 0, 99, 0) 100%)"
      bgColor={'#CF0063'}
      borderRadius={'8px'}
      p={'40px'}
      mx={'auto'}
      mb={'120px'}
      w={['280px', '400px', '450px', '500px']}
      position="relative"
      zIndex={'1000'}
      onSubmit={handleSubmit}
    >
      <Flex flexDirection={'column'} align={'center'} gap={'20px'}>
        <FormControl isRequired>
          <FormLabel color={'#fff'}>Name</FormLabel>
          <Input
            type="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Enter your name or nikname"
            _placeholder={{
              color: '#000',
              fontSize: ['12px', '13px', '14px', '15px', '16px'],
            }}
            variant={'styled'}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel color={'#fff'}>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            variant={'styled'}
            placeholder="Enter the email you'd like to use as login"
            _placeholder={{
              color: '#000',
              fontSize: ['12px', '13px', '14px', '15px', '16px'],
            }}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel color={'#fff'}>Password</FormLabel>
          <InputGroup>
            <Input
              name="password"
              value={password}
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
              _placeholder={{
                color: '#000',
                fontSize: ['12px', '13px', '14px', '15px', '16px'],
              }}
              onChange={handleInputChange}
              variant={'styled'}
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
          <FormHelperText color={'#fff'}>
            Your password should contain at least 7 symbols.
          </FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel color={'#fff'}>Password</FormLabel>
          <InputGroup>
            <Input
              variant={'styled'}
              name="passwordRepeat"
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Repeat password"
              _placeholder={{
                color: '#000',
                fontSize: ['12px', '13px', '14px', '15px', '16px'],
              }}
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
      <Button alignSelf={'center'} type="submit" variant="pinkButton">
        Sign up
      </Button>
    </Flex>
  );
};
