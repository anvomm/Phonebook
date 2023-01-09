import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectUser } from 'redux/auth/auth-selectors';
import { logOutUser } from 'redux/auth/auth-operations';
import { Link, Flex, Avatar, Text, Box } from '@chakra-ui/react';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUser).name;

  const location = useLocation();
  const activeColor = location.pathname === '/' ? '#FC0A7E' : '#613975';

  return (
    <Flex
      gap={['2', '2', '4']}
      direction={['column-reverse', 'column-reverse', 'row']}
      align={'center'}
    >
      <Flex gap={2}>
        <Avatar size="xs" bg={activeColor} src="https://bit.ly/broken-link" />
        <Text fontSize={20} lineHeight={1.1} color={activeColor}>
          {name}
        </Text>
      </Flex>
      <Link
        _hover={{ textDecoration: 'none' }}
        onClick={() => dispatch(logOutUser())}
      >
        Log out
      </Link>
    </Flex>
  );
};
