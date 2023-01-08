import { Input } from '@chakra-ui/react';
import {
  IconButton,
  FormControl,
  FormLabel,
  InputGroup,
  Button,
  InputRightElement,
  FormHelperText,
} from '@chakra-ui/react';
import { ArrowForwardIcon, ViewOffIcon, ViewIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelect } from 'react-redux';
import { registerUser } from 'redux/auth/auth-operations';

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
    toast({
      title: 'Welcome!',
      description: 'Your account is created',
      status: 'success',
      position: 'top-right',
      duration: 5000,
      isClosable: true,
    });
    e.target.reset();
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          type="name"
          name="name"
          value={name}
          onChange={handleInputChange}
          width="400px"
          placeholder="Enter your name or nikname"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          width="400px"
          placeholder="Enter the email you'd like to use as login"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup width="400px">
          <Input
            name="password"
            value={password}
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            onChange={handleInputChange}
          />
          <InputRightElement width="4.5rem">
            <IconButton
              h="1.75rem"
              size="sm"
              onClick={handleClick}
              icon={show ? <ViewOffIcon /> : <ViewIcon />}
            ></IconButton>
          </InputRightElement>
        </InputGroup>
        <FormHelperText>
          Your password should contain at least 7 symbols.
        </FormHelperText>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup width="400px">
          <Input
            name="passwordRepeat"
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Repeat password"
          />
          <InputRightElement width="4.5rem">
            <IconButton
              h="1.75rem"
              size="sm"
              onClick={handleClick}
              icon={show ? <ViewOffIcon /> : <ViewIcon />}
            ></IconButton>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        type="submit"
        rightIcon={<ArrowForwardIcon />}
        colorScheme="teal"
        variant="outline"
      >
        Sign up
      </Button>
    </form>
  );
};
