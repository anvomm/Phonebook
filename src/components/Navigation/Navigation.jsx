import { NavLink } from 'react-router-dom';
import { Link as ReachLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { Link, Flex, List } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';
import '@fontsource/courgette';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <Flex align="center" w={'100%'} justify="space-between" color="#fff">
        <Link
          as={ReachLink}
          to="/"
          fontFamily={'Courgette, cursive'}
          fontSize={'28'}
          alignSelf={['baseline', 'baseline', 'center']}
          _hover={{ textDecoration: 'none' }}
        >
          Phonebook
        </Link>
        <List display="flex" gap="38">
          <li>
            <Link
              as={NavLink}
              to="/"
              _activeLink={{ color: '#FC0A7E', fontWeight: '700' }}
              _hover={{ textDecoration: 'none' }}
              display={['none', 'none', 'inline-block']}
            >
              Home
            </Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link
                as={NavLink}
                to={'/contacts'}
                _activeLink={{ color: '#FC0A7E', fontWeight: '700' }}
                _hover={{ textDecoration: 'none' }}
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
                _activeLink={{ color: '#FC0A7E', fontWeight: '700' }}
                _hover={{ textDecoration: 'none' }}
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
                _activeLink={{ color: '#FC0A7E', fontWeight: '700' }}
                _hover={{ textDecoration: 'none' }}
              >
                Log in
              </Link>
            )}
          </li>
        </List>
      </Flex>
    </nav>
  );
};
