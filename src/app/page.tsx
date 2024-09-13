"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/_app.js
import {
  Box,
  ChakraProvider,
  Text,
  Flex,
  Image,
  Button,
  VStack,
  HStack,
  Heading,
} from "@chakra-ui/react";
import Lenis from "lenis";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import theme from "@/constants/theme";

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
    <ChakraProvider theme={theme}>
      <>
        <Box bg="#300D0D" w="100%" py="8" px="12">
          <Navbar />
          <Flex
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            mt="8%"
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
          </Flex>
          <Flex
            flexDir="row"
            alignItems="flex-start"
            justifyContent="center"
            mt="10%"
          >
            <Box flex="2">
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
              <Heading
                fontSize="6vw"
                fontWeight="medium"
                lineHeight="5.5vw"
                color="#E5DFC7"
              >
                INTERNATIONAL <br />
                CERTIFICATION <br />
              </Heading>
              <Heading
                fontSize="6vw"
                fontWeight="medium"
                lineHeight="5.5vw"
                color="#300D0D"
                textShadow="0 0 2.5px #E5DFC7, 0 0 2.5px #E5DFC7"
              >
                FOR FOOD SAFETY
              </Heading>
            </Box>
            <Box flex="1">
              <Box>
                <Heading
                  fontSize="6vw"
                  fontWeight="medium"
                  lineHeight="1"
                  color="#E3C993"
                >
                  80ºC
                </Heading>
                <Text fontSize="1vw" lineHeight="1" color="#E3C993">
                  Low temperature <br />
                  processing
                </Text>
              </Box>
              <Box>
                <Heading
                  fontSize="6vw"
                  fontWeight="medium"
                  lineHeight="1"
                  color="#E3C993"
                  mt="2vw"
                >
                  8Y
                </Heading>
                <Text fontSize="1vw" lineHeight="1" color="#E3C993">
                  Research &<br />
                  Development
                  <br />
                  the tech
                </Text>
              </Box>
              <Box>
                <Heading
                  fontSize="6vw"
                  fontWeight="medium"
                  lineHeight="1"
                  color="#E3C993"
                  mt="2vw"
                >
                  5%
                </Heading>
                <Text
                  fontWeight="normal"
                  fontSize="1vw"
                  lineHeight="1"
                  color="#E3C993"
                >
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
            <Heading
              fontSize="9vw"
              fontWeight="medium"
              lineHeight="0.9"
              color="#E5DFC7"
            >
              100%
            </Heading>
            <Heading
              fontSize="9vw"
              fontWeight="medium"
              lineHeight="0.9"
              color="#300D0D"
              textShadow="0 0 2.5px #E5DFC7, 0 0 2.5px #E5DFC7"
            >
              REAL FRUIT
            </Heading>
          </Flex>
          <Box>
            <Flex
              flexDir="row"
              alignItems="flex-start"
              justifyContent="center"
              mt="10%"
            >
              <Box flex="1">
                <Heading
                  fontSize="5vw"
                  fontWeight="medium"
                  lineHeight="0.9"
                  color="#E3C993"
                >
                  NO SUGAR <br />
                  ADDED
                </Heading>
              </Box>
              <Box flex="1">
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
              </Box>
              <Box flex="1">
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
              </Box>
              <Box flex="1" display="flex" alignItems="center" justifyContent="center">
                <Image
                  src="/assets/photo1.png"
                  alt="Deskripsi Gambar"
                  // position="absolute"
                  // top={0}
                  // left={-420}
                  // zIndex={10}
                  width="72%"
                  height="auto"
                />
              </Box>
            </Flex>
          </Box>
          <Box>
            <HStack spacing="30px" justify="center" mt="10%">
              <Heading
                flex="1"
                fontSize="2vw"
                fontWeight="medium"
                lineHeight="0.9"
                color="#E3C993"
                textAlign="right"
              >
                INSTAGRAM <br />
                hello@retrux.com
              </Heading>
              <Heading
                flex="1"
                fontSize="2vw"
                fontWeight="medium"
                lineHeight="0.9"
                color="#E3C993"
              >
                TIKTOK <br />
                +6285102345
              </Heading>
            </HStack>
          </Box>
          <VStack py="10%" flex="1" display="flex" alignItems="center" justifyContent="center">
            <Heading
              fontSize="28vw"
              lineHeight="0.9"
              fontWeight="medium"
              color="#E3C993"
            >
              CHIPSY
            </Heading>
            <Heading
              fontSize="28vw"
              lineHeight="0.9"
              fontWeight="medium"
              transform="rotate(-6deg)"
              color="#E3C993"
            >
              CHIPS
            </Heading>
          </VStack>
        </Box>
      </>
    </ChakraProvider>
  );
}
