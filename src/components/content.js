import { Box, SimpleGrid, Text, HStack } from "@chakra-ui/react";
import { ImBooks } from "react-icons/im";
import { FiArrowUpRight } from "react-icons/fi";
import { SiNetlify } from "react-icons/si";
const Content = () => {
  return (
    <>
      <Box bg="white" m="0 auto" maxW="6xl">
        <Text textColor="black" fontSize="3xl" fontWeight="bold">
          Resources
        </Text>
        <Text textColor="gray.500" fontWeight="semibold">
          Discover more abou Analytics.
        </Text>
      </Box>
      <SimpleGrid m="0 auto" columns="2" maxW="6xl" mt="6" spacing="5">
        <Box
          bg="white"
          borderTop="8px solid teal"
          shadow="lg"
          rounded="lg"
          p="6"
        >
          <Text textColor="black" fontWeight="bold" fontSize="3xl">
            Documentation
          </Text>
          <HStack>
            <Text textColor="gray.500">
              Learn the lnJ-and-outs by checking out our very thorough
              documentatlon.
            </Text>
            <Box fontSize="8xl">
              <ImBooks />
            </Box>
          </HStack>
          <HStack>
            <Text textColor="teal" fontWeight="bold">
              Read the docs
            </Text>
            <Box textColor="teal">
              <FiArrowUpRight />
            </Box>
          </HStack>
        </Box>
        <Box
          bg="white"
          borderTop="8px solid teal"
          shadow="lg"
          rounded="lg"
          p="6"
        >
          <Text textColor="black" fontWeight="bold" fontSize="3xl">
            Forums
          </Text>
          <HStack>
            <Text textColor="gray.500">
              Start orjoin a discussion to ask questions, share ideas, and get
              inspired. We'd love to hear from you!
            </Text>
            <Box fontSize="8xl">
              <SiNetlify />
            </Box>
          </HStack>
          <HStack>
            <Text textColor="teal" fontWeight="bold">
              visit the netlify Forum
            </Text>
            <Box textColor="teal">
              <FiArrowUpRight />
            </Box>
          </HStack>
        </Box>
      </SimpleGrid>
    </>
  );
};
export default Content;
