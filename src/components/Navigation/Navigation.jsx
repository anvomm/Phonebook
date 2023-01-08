import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { Link } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

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
        {isLoggedIn && (
          <li>
            <Link
              as={NavLink}
              to={'/contacts'}
              _activeLink={{ color: '#5c3c8c', fontWeight: '700' }}
            >
              Contacts
            </Link>
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <Link
              as={NavLink}
              to={'/register'}
              _activeLink={{ color: '#5c3c8c', fontWeight: '700' }}
            >
              Sign up
            </Link>
          </li>
        )}

        <li>
          {isLoggedIn ? (
            <UserMenu />
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
