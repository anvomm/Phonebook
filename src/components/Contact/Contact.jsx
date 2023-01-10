import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { IconButton, Link, Text } from '@chakra-ui/react';
import { PhoneIcon, DeleteIcon } from '@chakra-ui/icons';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Link href={`tel:${number}`}>
        <PhoneIcon color="#CF0063" _hover={{ color: '#3C0C41' }} />
      </Link>
      <Text color={'#613975'} fontSize={['16px', '16px', '18px']}>
        {name}
      </Text>
      <Text color={'#613975'} fontSize={['16px', '16px', '18px']}>
        {number}
      </Text>
      <IconButton
        color="#CF0063"
        bgColor={'transparent'}
        _hover={{ bgColor: 'transparent', color: '#3C0C41' }}
        aria-label="Delete contact"
        size="lg"
        icon={<DeleteIcon />}
        onClick={() => {
          dispatch(deleteContact({ id, name }));
        }}
      />
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
