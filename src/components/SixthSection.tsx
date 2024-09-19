import { VStack, Heading, HStack, Image } from "@chakra-ui/react";

export default function SixthSection() {
  return (
    <VStack
      py="10%"
      flex="1"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        fontSize="28vw"
        lineHeight="0.9"
        fontWeight="medium"
        color="#E3C993"
      >
        CHIPSY
      </Heading>
      <HStack alignItems="start">
        <Heading
          fontSize="28vw"
          lineHeight="0.9"
          fontWeight="medium"
          transform="rotate(-6deg)"
          color="#E3C993"
        >
          CHIPS
        </Heading>
        <VStack alignItems="start" justifyContent="start">
          <Image src="/assets/vector-chips1.png" alt="" zIndex="100" ps="8vw" />
          <Image src="/assets/vector-chips2.png" alt="" zIndex="100" />
          <Image
            src="/assets/vector-chips3.png"
            alt=""
            zIndex="100"
            pt="4vw"
            ps="2vw"
          />
        </VStack>
      </HStack>
    </VStack>
  );
}
