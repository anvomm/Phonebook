import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selectors';
import { logOutUser } from 'redux/auth/auth-operations';
import { Link, Flex, Avatar, Text, useToast } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUser).name;

  const toast = useToast();
  function closeAll() {
    toast.closeAll()
  }

  return (
    <Flex
      gap={['5', '5', '4']}
      direction={['column', 'column', 'row']}
      align={'flex-start'}
      px={['15px', '15px', '0']}
    >
      <Flex gap={2}>
        <Avatar size="xs" bg={'#613975'} src="https://bit.ly/broken-link" />
        <Text fontSize={20} lineHeight={1.1} color={'#613975'}>
          {name}
        </Text>
      </Flex>
      <Link
        _hover={{ textDecoration: 'none' }}
        onClick={() => {dispatch(logOutUser());
          closeAll()}}
      >
        Log out
      </Link>
    </Flex>
  );
};
