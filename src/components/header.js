import {
  Box,
  HStack,
  Text,
  Spacer,
  Button,
  Avatar,
  Divider
} from "@chakra-ui/react";
import { SiNetlify } from "react-icons/si";
import { AiOutlineRight } from "react-icons/ai";
import { BiBell, BiAperture } from "react-icons/bi";
import Menu from "./menu";
import Banner from "./banner";

const Header = () => {
  return (
    <Box bg="#0D1E25" h="250px">
      <Box m="0 auto" maxW="6xl" p="8" position="relative">
        <HStack flexFlow="wrap" spacing="10" cursor="pointer">
          <Box fontSize="4xl" textColor="blue.600">
            <SiNetlify />
          </Box>
          <HStack flexFlow="wrap">
            <Box>
              <Text textColor="gray.500" fontWeight="bold" fontSize="3xl">
                vectorCodes
              </Text>
            </Box>
            <Box textColor="gray.500" fontSize="xl" fontWeight="bold">
              <AiOutlineRight />
            </Box>
            <Box>
              <Text fontWeight="bold" fontSize="3xl" textColor="white">
                frosty-darwin-797327
              </Text>
            </Box>
          </HStack>
          <Spacer />
          <HStack spacing="6">
            <Button colorScheme="yellow">upgrade</Button>
            <Box fontSize="2xl" textColor="white">
              <BiBell />
            </Box>
            <Box fontSize="2xl" textColor="white">
              <BiAperture />
            </Box>
            <Box>
              <Avatar
                name="Dan Abrahmov"
                size="sm"
                src="https://bit.ly/dan-abramov"
              />
            </Box>
          </HStack>
        </HStack>
        <Box my="4">
          <Divider />
        </Box>
        <Box my="5">
          <Menu />
        </Box>
        <Box left="0" position="absolute" bottom="-200%" shadow="lg">
          <Banner />
        </Box>
      </Box>
    </Box>
  );
};
export default Header;
