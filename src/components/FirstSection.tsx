import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function FirstSection() {
  return (
    <Flex
      flexDir="row"
      alignItems="flex-start"
      justifyContent="center"
      mt="10%"
    >
      <Box flex="2">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <Heading
            fontSize="6vw"
            fontWeight="medium"
            lineHeight="5.5vw"
            color="#300D0D"
            textShadow="0 0 2.5px #E5DFC7, 0 0 2.5px #E5DFC7"
          >
            FIRST MOVER <br />
            NO SULFITE <br />
            CHIPS
          </Heading>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <Heading
            fontSize="6vw"
            fontWeight="medium"
            lineHeight="5.5vw"
            color="#E5DFC7"
          >
            INTERNATIONAL <br />
            CERTIFICATION <br />
          </Heading>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <Heading
            fontSize="6vw"
            fontWeight="medium"
            lineHeight="5.5vw"
            color="#300D0D"
            textShadow="0 0 2.5px #E5DFC7, 0 0 2.5px #E5DFC7"
          >
            FOR FOOD SAFETY
          </Heading>
        </motion.div>
      </Box>
      <Box flex="1">
        <Box>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5}}
          >
            <Heading
              fontSize="6vw"
              fontWeight="medium"
              lineHeight="1"
              color="#E3C993"
            >
              80ºC
            </Heading>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
          >
            <Text fontSize="1vw" lineHeight="1" color="#E3C993">
              Low temperature <br />
              processing
            </Text>
          </motion.div>
        </Box>
        <Box>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              fontSize="6vw"
              fontWeight="medium"
              lineHeight="1"
              color="#E3C993"
              mt="2vw"
            >
              8Y
            </Heading>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
          >
            <Text fontSize="1vw" lineHeight="1" color="#E3C993">
              Research &<br />
              Development
              <br />
              the tech
            </Text>
          </motion.div>
        </Box>
        <Box>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              fontSize="6vw"
              fontWeight="medium"
              lineHeight="1"
              color="#E3C993"
              mt="2vw"
            >
              5%
            </Heading>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
          >
            <Text
              fontWeight="normal"
              fontSize="1vw"
              lineHeight="1"
              color="#E3C993"
            >
              Oil Content
            </Text>
          </motion.div>
        </Box>
      </Box>
    </Flex>
  );
}
