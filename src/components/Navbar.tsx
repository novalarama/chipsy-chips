import { Flex, Text, Button, Spacer, Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex alignItems="flex-start">
      <Image src="assets/logo.png" alt="Chipsy Chips" />

      <Spacer />

      <Flex alignItems="center">
        <Text color="#E1D7BC" fontSize="lg" mr="6">
          +62345678910
        </Text>

        <Button
          top="0"
          variant="solid"
          bg="#E1D7BC"
          color="#421e1d"
          _hover={{ bg: "#d0c3a9" }}
          borderRadius="full"
        >
          Request Sample
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
