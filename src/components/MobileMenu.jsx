import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { UserMenu } from './UserMenu';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export const MobileMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  const activeLinkColor = location.pathname === '/' ? '#FC0A7E' : '#613975';
  const buttonColor = location.pathname === '/' ? '#fff' : '#613975';
  const activeButtonColor = location.pathname === '/' ? '#FC0A7E' : '#fff';

  return (
    <Box visibility={['visible', 'visible', 'hidden']}>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon h="25px" w="25px" />}
          bgColor="transparent"
          color={buttonColor}
          _active={{ bgColor: 'transparent', color: activeButtonColor }}
          _focus={{ bgColor: 'transparent', color: activeButtonColor }}
        ></MenuButton>

        {!isLoggedIn ? (
          <MenuList bgColor="#FC0A7E">
            <MenuItem bgColor="#FC0A7E">
              <Link
                as={NavLink}
                to={'/register'}
                _activeLink={{ color: activeLinkColor, fontWeight: '700' }}
                _hover={{ textDecoration: 'none' }}
              >
                Sign up
              </Link>
            </MenuItem>
            <MenuItem bgColor="#FC0A7E">
              <Link
                as={NavLink}
                to={'/login'}
                _activeLink={{ color: activeLinkColor, fontWeight: '700' }}
                _hover={{ textDecoration: 'none' }}
              >
                Log in
              </Link>
            </MenuItem>
          </MenuList>
        ) : (
          <MenuList bgColor="#FC0A7E" py="30px">
            <UserMenu />
          </MenuList>
        )}
      </Menu>
    </Box>
  );
};
