import { Box, Flex, Heading, Text, HStack, Image } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" w="100%" my="10%">
      <Flex flexDir="column" alignItems="center" justifyContent="center">
        <HStack>
          <Heading
            fontSize="9vw"
            fontWeight="medium"
            lineHeight="0.9"
            color="#E3C993"
          >
            BUILD
          </Heading>
          <Heading
            fontSize="9vw"
            fontWeight="medium"
            lineHeight="0.9"
            color="#300D0D"
            textShadow="0 0 2.5px #E5DFC7, 0 0 2.5px #E5DFC7"
          >
            WITH
          </Heading>
          <Heading
            fontSize="9vw"
            fontWeight="medium"
            lineHeight="0.9"
            color="#E3C993"
          >
            LOVE
          </Heading>
        </HStack>
        <Text fontSize="1.5vw" lineHeight="1" color="#E3C993" mt="1vw">
          by Retrux
        </Text>
        <HStack mt="2vw">
         <Image w="2vw" src="/assets/icon_Instagram.png" alt="" color="#E3C993"/>
         <Image w="1.8vw"src="/assets/icon_TikTok.png" alt="" color="#E3C993" ms="2vw"/>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
