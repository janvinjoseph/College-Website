import { Box, Img, Text } from '@chakra-ui/react';
import * as React from 'react';

const Quotee = (props) => {
  const {
    name, jobTitle, imageSrc, ...boxProps
  } = props;
  return (
    <Box {...boxProps}>
      <Img src={imageSrc} mx="auto" objectFit="cover" w="16" h="16" rounded="full" alt="" />
      <Box mt="3">
        <Text as="cite" fontStyle="normal" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {jobTitle}
        </Text>
      </Box>
    </Box>
  );
};

export default Quotee;
