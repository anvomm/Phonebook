import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { IconButton, Link, Text, Tooltip } from '@chakra-ui/react';
import { PhoneIcon, DeleteIcon } from '@chakra-ui/icons';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Tooltip label="Make a call" bg="#613975">
        <Link href={`tel:${number}`}>
          <PhoneIcon
            color="#CF0063"
            _hover={{ color: '#613975', transform: 'scale(1.4)' }}
          />
        </Link>
      </Tooltip>
      <Text color={'#613975'} fontSize={['16px', '16px', '18px']}>
        {name}
      </Text>
      <Text color={'#613975'} fontSize={['16px', '16px', '18px']}>
        {number}
      </Text>
      <Tooltip label="Delete" bg="#613975">
        <IconButton
          color="#CF0063"
          bgColor={'transparent'}
          _hover={{ bgColor: 'transparent', color: '#613975' }}
          aria-label="Delete contact"
          size="lg"
          icon={<DeleteIcon />}
          onClick={() => {
            dispatch(deleteContact({ id, name }));
          }}
        />
      </Tooltip>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
