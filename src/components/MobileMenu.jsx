import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
  Link,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { UserMenu } from './UserMenu';

export const MobileMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const activeLinkColor = location.pathname === '/' ? '#FC0A7E' : '#613975';

  return (
    <Box visibility={['visible', 'visible', 'hidden']}>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon h="25px" w="25px" />}
          bgColor="transparent"
          color="#613975"
          _active={{ bgColor: 'transparent', color: '#613975' }}
          _focus={{ bgColor: 'transparent', color: '#613975' }}
        ></MenuButton>
        
        {!isLoggedIn ? <MenuList bgColor="#FC0A7E"><MenuItem bgColor="#FC0A7E">
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
          </MenuItem></MenuList> : <MenuList bgColor="#FC0A7E" py='30px'><UserMenu /></MenuList>}
          
        
      </Menu>
    </Box>
  );
};
