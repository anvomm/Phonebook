import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn, selectToken } from 'redux/auth/auth-selectors';
import { Link } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/auth/auth-operations';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  return (
    <nav>
      <ul>
        <li>
          <Link
            as={NavLink}
            end
            to="/"
            _activeLink={{ color: '#5c3c8c', fontWeight: '700' }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            as={NavLink}
            to={'/contacts'}
            _activeLink={{ color: '#5c3c8c', fontWeight: '700' }}
          >
            Contacts
          </Link>
        </li>
        <li>
          <Link
            as={NavLink}
            to={'/register'}
            _activeLink={{ color: '#5c3c8c', fontWeight: '700' }}
          >
            Sign up
          </Link>
        </li>
        <li>
          {isLoggedIn ? (
            <Link onClick={() => dispatch(logOutUser())}>Log out</Link>
          ) : (
            <Link
              as={NavLink}
              to={'/login'}
              _activeLink={{ color: '#5c3c8c', fontWeight: '700' }}
            >
              Log in
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};
