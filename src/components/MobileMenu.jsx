import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export const MobileMenu = () => (
  <Box visibility={['visible', 'visible', 'hidden']}>
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            /* isActive={isOpen} */
            as={IconButton}
            icon={<HamburgerIcon h="25px" w="25px" />}
            bgColor="transparent"
            color="#613975"
            _active={{ bgColor: 'transparent', color: '#613975' }}
            _focus={{ bgColor: 'transparent', color: '#613975' }}
          >
            {isOpen ? 'Close' : 'Open'}
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem onClick={() => alert('Kagebunshin')}>
              Create a Copy
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  </Box>
);
