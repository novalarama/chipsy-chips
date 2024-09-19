import { Box, HStack, VStack, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function FifthSection() {
  return (
    <Box>
      <HStack spacing="30px" justify="center" mt="10%">
        <motion.div whileHover={{ scale: 1.1}}>
          <VStack alignItems="flex-end">
            <Text
              fontWeight="normal"
              fontSize="1vw"
              lineHeight="1"
              color="#E3C993"
            >
              Instagram
            </Text>
            <Heading
              flex="1"
              fontSize="2vw"
              fontWeight="medium"
              lineHeight="0.9"
              color="#E3C993"
              textAlign="right"
            >
              hello@retrux.com
            </Heading>
          </VStack>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1}}>
        <VStack alignItems="right">
          <Text
            fontWeight="normal"
            fontSize="1vw"
            lineHeight="1"
            color="#E3C993"
          >
            TikTok
          </Text>
          <Heading
            flex="1"
            fontSize="2vw"
            fontWeight="medium"
            lineHeight="0.9"
            color="#E3C993"
          >
            +6285102345
          </Heading>
        </VStack>
        </motion.div>
      </HStack>
    </Box>
  );
}
