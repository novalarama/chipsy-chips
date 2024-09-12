"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/_app.js
import { Box, ChakraProvider, Text, Flex } from "@chakra-ui/react";
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
        </Box>
      </>
    </ChakraProvider>
  );
}
