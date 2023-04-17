import {
  Avatar, Heading, Text, IconButton, Link, VStack, HStack,
} from '@chakra-ui/react';

import {
  FaLinkedinIn, FaInstagram, FaGithub, FaTwitter, FaBehance,
} from 'react-icons/fa';
import FadeInUp from '../FadeInUp';

  const CreditsContent = (props) =>{
  const {name, image, position, linkedIn, instagram, github, twitter, behance,ec} = props;
  var avtrSize="xl";
  if(ec==="true")
  {
    avtrSize="2xl";
  }
  return(
  <FadeInUp>
    <VStack
      marginY="2em"
      justifyItems="start"
      alignItems="center"
    >
      <Avatar
        size={avtrSize}
        src={image}
      />
      <Heading
        pt="2"
        as="h4"
        textAlign="center"
        size="md"
      >
        {name}
      </Heading>
      <Text
        fontSize="md"
        color="#8a9494"
        fontWeight="medium"
        textAlign="center"
      >
        {position}
      </Text>
      <HStack
        width="100%"
        justify="center"
      >
        {linkedIn && (
        <IconButton
          target="_blank"
          as={Link}
          href={linkedIn}
          variant="ghost"
          aria-label={`Linkedin link of ${name}`}
          icon={<FaLinkedinIn />}
          colorScheme="linkedin"
        />
        )}
        {instagram && (
        <IconButton
          target="_blank"
          as={Link}
          href={instagram}
          variant="ghost"
          aria-label={`Instagram link of ${name}`}
          icon={<FaInstagram />}
          colorScheme="pink"
        />
        )}
        {github && (
        <IconButton
          target="_blank"
          as={Link}
          href={github}
          variant="ghost"
          aria-label={`GitHub link of ${name}`}
          icon={<FaGithub />}
          colorScheme="facebook"
        />
        )}
        {twitter && (
        <IconButton
          target="_blank"
          as={Link}
          href={twitter}
          variant="ghost"
          aria-label={`Twitter link of ${name}`}
          icon={<FaTwitter />}
          colorScheme="facebook"
        />
        )}
        {behance && (
        <IconButton
          target="_blank"
          as={Link}
          href={behance}
          variant="ghost"
          aria-label={`Behance link of ${name}`}
          icon={<FaBehance />}
          colorScheme="facebook"
        />
        )}
      </HStack>
    </VStack>
  </FadeInUp>
);
        }

export default CreditsContent;
