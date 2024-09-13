"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/_app.js
import {
  Box,
  ChakraProvider,
  Text,
  Flex,
  AspectRatio,
  Button,
  Wrap,
  VStack,
  HStack,
} from "@chakra-ui/react";
import Lenis from "lenis";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      smoothWheel: true,
      // infinite: true,
      // syncTouch: true,
      // touchInertiaMultiplier: 12,
      // touchMultiplier: 0.5,
    });
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  });
  return (
    <ChakraProvider>
      <>
        <Box bg="#300D0D" w="100%" py="8" px="12">
          <Navbar />
          <Flex
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            mt="8%"
          >
            <Text
              align="center"
              lineHeight="8vw"
              fontSize="10vw"
              color="#E3C993"
              fontWeight="bold"
            >
              EMPOWERING <br />
              FARMERS <br />
              REDUCING WASTE
            </Text>
          </Flex>
          <Flex
            flexDir="row"
            alignItems="flex-start"
            justifyContent="center"
            mt="10%"
          >
            <Box flex="2">
              <Text
                fontSize="6vw"
                fontWeight="extrabold"
                lineHeight="0.9"
                color="#300D0D"
                textShadow="0 0 2.5px #E3C993, 0 0 2.5px #E3C993"
              >
                FIRST MOVER <br />
                NO SULFITE <br />
                CHIPS
              </Text>
              <Text
                fontSize="6vw"
                fontWeight="extrabold"
                lineHeight="0.9"
                color="#E5DFC7"
              >
                INTERNATIONAL <br />
                CERTIFICATION <br />
              </Text>
              <Text
                fontSize="6vw"
                fontWeight="extrabold"
                lineHeight="0.9"
                color="#300D0D"
                textShadow="0 0 2.5px #E3C993, 0 0 2.5px #E3C993"
              >
                FOR FOOD SAFETY
              </Text>
            </Box>
            <Box flex="1">
              <Box>
                <Text
                  fontSize="6vw"
                  fontWeight="extrabold"
                  lineHeight="1"
                  color="#E3C993"
                >
                  80ºC
                </Text>
                <Text fontSize="1vw" lineHeight="1" color="#E3C993">
                  Low temperature <br />
                  processing
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="6vw"
                  fontWeight="extrabold"
                  lineHeight="1"
                  color="#E3C993"
                  mt="2vw"
                >
                  8Y
                </Text>
                <Text fontSize="1vw" lineHeight="1" color="#E3C993">
                  Researh &<br />
                  Development
                  <br />
                  the tech
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="6vw"
                  fontWeight="extrabold"
                  lineHeight="1"
                  color="#E3C993"
                  mt="2vw"
                >
                  5%
                </Text>
                <Text fontSize="1vw" lineHeight="1" color="#E3C993">
                  Oil Content
                </Text>
              </Box>
            </Box>
          </Flex>
          <Flex
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            mt="10%"
          >
            <Text
              fontSize="9vw"
              fontWeight="extrabold"
              lineHeight="0.9"
              color="#E5DFC7"
            >
              100%
            </Text>
            <Text
              fontSize="9vw"
              fontWeight="extrabold"
              lineHeight="0.9"
              color="#300D0D"
              textShadow="0 0 2.5px #E3C993, 0 0 2.5px #E3C993"
            >
              REAL FRUIT
            </Text>
          </Flex>
          <Box>
            <Flex
              flexDir="row"
              alignItems="flex-start"
              justifyContent="center"
              mt="10%"
            >
              <Box flex="1">
                <Text
                  fontSize="4vw"
                  fontWeight="extrabold"
                  lineHeight="0.9"
                  color="#E3C993"
                >
                  NO SUGAR <br />
                  ADDED
                </Text>
              </Box>
              <Box flex="1">
                <Text
                  fontSize="4vw"
                  fontWeight="extrabold"
                  lineHeight="0.9"
                  color="#E3C993"
                >
                  NO <br />
                  ARTIFICIAL <br />
                  COLOUR & <br />
                  FALVOURS
                </Text>
              </Box>
              <Box flex="1">
                <Text
                  fontSize="4vw"
                  fontWeight="extrabold"
                  lineHeight="0.9"
                  color="#E3C993"
                >
                  USE REFINED <br />
                  COCONUT <br />
                  OIL
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex
              flexDir="row"
              alignItems="center"
              justifyContent="center"
              mt="10%"
            >
              <Box flex="1">
                <Text
                  fontSize="6vw"
                  fontWeight="extrabold"
                  lineHeight="0.9"
                  color="#E5DFC7"
                >
                  SELL IT <br />
                  WITH YOUR <br />
                  OWN BRAND
                </Text>
                <Button
                  mt="40px"
                  variant="solid"
                  bg="#E1D7BC"
                  color="#421e1d"
                  _hover={{ bg: "#d0c3a9" }}
                  borderRadius="full"
                >
                  Request Sample
                </Button>
              </Box>
              <Box flex="1">
                <AspectRatio maxW="523px" ratio={4 / 3}>
                  <iframe
                    title="naruto"
                    src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                    allowFullScreen
                  />
                </AspectRatio>
              </Box>
            </Flex>
          </Box>
          <Box>
            <HStack spacing="30px" justify="center" mt="10%">
              <Text
                flex="1"
                fontSize="2vw"
                fontWeight="extrabold"
                lineHeight="0.9"
                color="#E3C993"
                textAlign="right"
              >
                INSTAGRAM <br />
                hello@retrux.com
              </Text>
              <Text
                flex="1"
                fontSize="2vw"
                fontWeight="extrabold"
                lineHeight="0.9"
                color="#E3C993"
              >
                TIKTOK <br />
                +6285102345
              </Text>
            </HStack>
          </Box>
          <VStack py="10%" alignItems="start" justifyContent="start">
            <Text fontSize="24vw" lineHeight="0.9" fontWeight="extrabold" color="#E3C993">
              CHIPSY
            </Text>
            <Text fontSize="24vw" lineHeight="0.9" fontWeight="extrabold" transform="rotate(-6deg)" color="#E3C993">
              CHIPS
            </Text>
          </VStack>
        </Box>
      </>
    </ChakraProvider>
  );
}
