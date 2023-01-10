import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filter/filterSlice';
/* import { FilterLabel, FilterInput } from './Filter.styled'; */
import { Input, Flex } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Flex align={'center'} justify={'flex-end'} mb="20px">
      <Input
        variant="flushed"
        borderColor="#613975"
        autoComplete="off"
        focusBorderColor="#FC0A7E"
        w="200px"
        pl="15px"
        type="text"
        placeholder="Find contact by name"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={e => dispatch(setFilterValue(e.target.value))}
      />
      <SearchIcon color="#FC0A7E" w="20px" h="20px" />
    </Flex>
  );
};
