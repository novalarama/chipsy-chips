import { Box, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function ThirdSection() {
  return (
    <Box>
      <Flex
        flexDir="row"
        alignItems="flex-start"
        justifyContent="center"
        mt="10%"
      >
        <Box flex="1">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              fontSize="5vw"
              fontWeight="medium"
              lineHeight="0.9"
              color="#E3C993"
            >
              NO SUGAR <br />
              ADDED
            </Heading>
          </motion.div>
        </Box>
        <Box flex="1">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              fontSize="5vw"
              fontWeight="medium"
              lineHeight="0.9"
              color="#E3C993"
            >
              NO <br />
              ARTIFICIAL <br />
              COLOUR & <br />
              FALVOURS
            </Heading>
          </motion.div>
        </Box>
        <Box flex="1">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
          >
            <Heading
              fontSize="5vw"
              fontWeight="medium"
              lineHeight="0.9"
              color="#E3C993"
            >
              USE REFINED <br />
              COCONUT <br />
              OIL
            </Heading>
          </motion.div>
        </Box>
      </Flex>
    </Box>
  );
}
