/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { Flex, Heading } from "@chakra-ui/react";

interface HeadingProps {
  titleAnimation: any;
  isLoadingDone: boolean;
}

export default function Header({
  titleAnimation,
  isLoadingDone,
}: HeadingProps) {
  return (
    <Flex flexDir="column" alignItems="center" justifyContent="center" mt="8%">
      <motion.div
        initial={"loadingNotDone"}
        variants={titleAnimation}
        animate={isLoadingDone ? "loadingDone" : "loadingNotDone"}
      >
        <Heading
          textAlign="center"
          lineHeight="11vw"
          fontSize="12vw"
          color="#E3C993"
          fontWeight="regular"
        >
          EMPOWERING <br />
          FARMERS <br />
          REDUCING WASTE
        </Heading>
      </motion.div>
    </Flex>
  );
}
