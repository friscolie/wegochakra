import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="64px"
            height="64px"
          >
            <path fill="#FF5722" d="M32,15v28H10c-2.2,0-4-1.8-4-4V15H32z" />
            <path
              fill="#FFCCBC"
              d="M14,5v34c0,2.2-1.8,4-4,4h29c2.2,0,4-1.8,4-4V5H14z"
            />
            <path
              fill="#FF5722"
              d="M20 10H38V14H20zM20 17H28V19H20zM30 17H38V19H30zM20 21H28V23H20zM30 21H38V23H30zM20 25H28V27H20zM30 25H38V27H30zM20 29H28V31H20zM30 29H38V31H30zM20 33H28V35H20zM30 33H38V35H30zM20 37H28V39H20zM30 37H38V39H30z"
            />
          </svg>
          WEGONEWS
        </a>
      </Text>
    </Box>
  );
}
