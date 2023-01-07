import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selectors';
import { logOutUser } from 'redux/auth/auth-operations';
import { Link } from '@chakra-ui/react';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUser).name;

  return (
    <div>
      <p>{name}</p>
      <Link onClick={() => dispatch(logOutUser())}>Log out</Link>
    </div>
  );
};
