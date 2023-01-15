import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact, addContact } from 'redux/contacts/contacts-operations';
import { useRef } from 'react';
import Countdown from 'react-countdown';
import {
  IconButton,
  Link,
  Text,
  Tooltip,
  useToast,
  Alert,
  AlertTitle,
  AlertDescription,
  Button,
} from '@chakra-ui/react';
import { PhoneIcon, DeleteIcon } from '@chakra-ui/icons';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const toastIdRef = useRef();
  let deleteIsPressed = false;

  const close = () => {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  };

  const addToast = () => {
    toastIdRef.current = toast({
      duration: null,
      position: 'bottom-right',
      render: () => (
        <Alert
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
          bgColor={'#ff96cb'}
        >
          <AlertTitle mt={4} mb={1} fontSize="lg">
            {name} is deleted from your contacts.{' '}
          </AlertTitle>
          <AlertDescription mb="10px">
            You have
            {deleteIsPressed && <Countdown
              date={Date.now() + 15000}
              intervalDelay={1000}
              precision={1}
              renderer={props => {
                if (props.seconds === 0) {deleteIsPressed = false; close()};
                return <div>{props.seconds}</div>;
              }}
            />}
            seconds to undo this action
          </AlertDescription>

          <Button
            variant={'pinkButton'}
            _hover={{
              bgColor: 'transparent',
              border: '1px solid #B04BB3',
              color: '#B04BB3',
            }}
            onClick={() => {
              dispatch(addContact({ name, number }));
              deleteIsPressed = false;
              close();
            }}
          >
            Undo
          </Button>
        </Alert>
      ),
    });
  };

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
            deleteIsPressed = true;
            addToast();
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
