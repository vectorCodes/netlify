import { Box, Text, HStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="#0D1E25" w="full" mt="20">
      <Box px="12" py="6">
        <HStack textColor="gray.500" spacing="7" fontWeight="semibold">
          <Text>Docs</Text>
          <Text>Pricing</Text>
          <Text>Support</Text>
          <Text>News</Text>
          <Text>Terms</Text>
        </HStack>
        <Box my="5">
          <Text textColor="gray.500">© 2021 Netlify</Text>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
