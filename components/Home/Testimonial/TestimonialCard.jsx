import {
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';
import { RichText } from 'prismic-reactjs';
import * as React from 'react';
import Quotee from './Quotee';
import QuoteIcon from './QuoteIcon';

const TestimonialCard = ({ testimonial }) => (
  <Box
    as="section"
    bg="gray.50"
    marginY="64px"
    borderRadius="md"
    boxShadow="2xl"
    rounded="md"
  >

    <Box
      maxW="xl"
      height="100%"
      mx="auto"
      px="12"
      py="12"
    >
      <Flex
        direction="column"
        align="left"
        justify="space-between"
        height="100%"
        textAlign="center"
      >
        <QuoteIcon
          color="gray.200"
          fontSize="5xl"
        />
        <Text
          as="span"
          fontSize="md"
          fontWeight="medium"
          textAlign="justify"
          mt="6"
        >
          {RichText.render(testimonial.text)}
        </Text>
        <Quotee
          name={testimonial.testimonial_author}
          jobTitle={testimonial.testimonial_author_title}
          imageSrc={testimonial.author_profile_pic.url}
          mt="8"
        />
      </Flex>
    </Box>
  </Box>
);

export default TestimonialCard;
