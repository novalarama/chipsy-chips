import { Box, Flex, Heading, Text, HStack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Box as="footer" w="100%" my="10%">
      <Flex flexDir="column" alignItems="center" justifyContent="center">
        <HStack>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 1 }}
          >
            <Heading
              fontSize="9vw"
              fontWeight="medium"
              lineHeight="0.9"
              color="#E3C993"
            >
              BUILD
            </Heading>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Heading
              fontSize="9vw"
              fontWeight="medium"
              lineHeight="0.9"
              color="#300D0D"
              textShadow="0 0 2.5px #E5DFC7, 0 0 2.5px #E5DFC7"
            >
              WITH
            </Heading>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
          >
            <Heading
              fontSize="9vw"
              fontWeight="medium"
              lineHeight="0.9"
              color="#E3C993"
            >
              LOVE
            </Heading>
          </motion.div>
        </HStack>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
        >
          <Text fontSize="1.5vw" lineHeight="1" color="#E3C993" mt="1vw">
            by Retrux
          </Text>
        </motion.div>
        <HStack mt="2vw">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
          >
            <Image
              w="2vw"
              src="/assets/icon_Instagram.png"
              alt=""
              color="#E3C993"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
          >
            <Image
              w="1.8vw"
              src="/assets/icon_TikTok.png"
              alt=""
              color="#E3C993"
              ms="2vw"
            />
          </motion.div>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
