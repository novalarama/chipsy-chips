import { Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function SecondSection() {
  return (
    <Flex flexDir="column" alignItems="center" justifyContent="center" mt="10%">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        <Heading
          fontSize="9vw"
          fontWeight="medium"
          lineHeight="0.9"
          color="#E5DFC7"
        >
          100%
        </Heading>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
      >
        <Heading
          fontSize="9vw"
          fontWeight="medium"
          lineHeight="0.9"
          color="#300D0D"
          textShadow="0 0 2.5px #E5DFC7, 0 0 2.5px #E5DFC7"
        >
          REAL FRUIT
        </Heading>
      </motion.div>
    </Flex>
  );
}
