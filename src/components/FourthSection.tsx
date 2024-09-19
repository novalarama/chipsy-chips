import { Box, Flex, Heading, Button, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function FourthSection() {
  return (
    <Box>
      <Flex flexDir="row" alignItems="center" justifyContent="center" mt="10%">
        <Box flex="1">
          <motion.div
            whileInView={{ scale: 1.2, originX: 0 }}
            initial={{ scale: 1 }}
            // transition={{ duration: 0.5 }}
          >
            <Heading
              fontSize="6vw"
              fontWeight="medium"
              lineHeight="0.9"
              color="#E5DFC7"
            >
              SELL IT <br />
              WITH YOUR <br />
              OWN BRAND
            </Heading>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, originX: 0 }}
            whileTap={{ scale: 0.8 }}
          >
            <Button
              mt="40px"
              variant="solid"
              bg="#E1D7BC"
              color="#421e1d"
              _hover={{ bg: "#d0c3a9" }}
              borderRadius="full"
            >
              <Text fontWeight="medium">Request Sample</Text>
            </Button>
          </motion.div>
        </Box>
        <Box
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <motion.div whileInView={{ scale: 1.2, originX: 0 }}>
            <Image src="/assets/photo1.png" alt="" width="72%" height="auto" />
          </motion.div>
        </Box>
      </Flex>
    </Box>
  );
}
