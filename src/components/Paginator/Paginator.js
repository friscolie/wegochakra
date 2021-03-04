import React, { useState } from 'react';
import { Flex, Button, Stack } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

export default function Paginator({ page, handleClick }) {
  const [disabled, setDisabled] = useState(true);

  const getDisabled = () => {
    if (page === 5 || page === 1) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const isDisabled = getDisabled(page);

  console.log(page);

  return (
    <Flex justifyContent="center">
      <Stack
        direction="row"
        spacing={{
          md: '2',
          lg: '4',
        }}
        align="center"
        py={5}
      >
        <Button
          colorScheme="teal"
          name="prevTabs"
          onClick={evt => handleClick(evt)}
          isDisabled={isDisabled}
        >
          <ArrowLeftIcon />
        </Button>
        <Button colorScheme="teal" name="1" onClick={evt => handleClick(evt)}>
          1
        </Button>
        <Button colorScheme="teal" name="2" onClick={evt => handleClick(evt)}>
          2
        </Button>
        <Button colorScheme="teal" name="3" onClick={evt => handleClick(evt)}>
          3
        </Button>
        <Button colorScheme="teal" name="4" onClick={evt => handleClick(evt)}>
          4
        </Button>
        <Button name="5" onClick={evt => handleClick(evt)} colorScheme="teal">
          5
        </Button>
        <Button
          colorScheme="teal"
          name="nextTabs"
          onClick={evt => handleClick(evt)}
        >
          <ArrowRightIcon />
        </Button>
      </Stack>
    </Flex>
  );
}
