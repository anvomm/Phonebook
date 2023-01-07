import { Input } from '@chakra-ui/react';
import {
  IconButton,
  FormControl,
  FormLabel,
  InputGroup,
  Button,
  InputRightElement,
} from '@chakra-ui/react';
import { ArrowForwardIcon, ViewOffIcon, ViewIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

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
    resetForm();
  };

  /* const isError = input === ''; */

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          width="400px"
          placeholder="Email"
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
            placeholder="Password"
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
      </FormControl>
      <Button
        type="submit"
        rightIcon={<ArrowForwardIcon />}
        colorScheme="teal"
        variant="outline"
      >
        Log in
      </Button>
    </form>
  );
};
