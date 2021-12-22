import { Box, Button, Text, Image, Flex } from "@chakra-ui/react";

const Banner = () => {
  return (
    <>
      <Box bg="white" rounded="xl" m="0 auto" maxW="6xl" p="10">
        <Flex alignItems="center">
          <Box w="50%">
            <Text textColor="black" fontSize="5xl" fontWeight="bold">
              Analytics
            </Text>
            <Text textColor="black" fontWeight="semibold">
              Netlify Analytics is available for $9/month/site.
            </Text>
            <Text mt="6">
              Get a deeper understanding of your site via privacy-sensitive
              analytics with no performance penalty. Without any extra
              configuration, Netlify's server-side solution lets you monitor and
              find trends in pageviews, visitors, sources, and more.
            </Text>
            <Text textColor="teal" fontWeight="semibold" mt="6">
              Learn more about A,nalytics in the docs.
            </Text>
            <Box mt="4">
              <Button colorScheme="teal">Enable Analytics for $9/month.</Button>
            </Box>
          </Box>
          <Box w="50%">
            <Image
              w="full"
              src="https://cdn.discordapp.com/attachments/725914863225798656/923116587148537866/svg3e.png"
              alt="image"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default Banner;
