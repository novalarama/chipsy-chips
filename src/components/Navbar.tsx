import { Flex, Text, Button, Spacer, Image, Box } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box
      as="nav"
      position="sticky"
      top="1vw"
      zIndex="1000"
      bg="transparent"
      p={4}
    >
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
            <Text fontWeight="medium">Request Sample</Text>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
