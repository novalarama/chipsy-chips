"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  ChakraProvider,
  Image,
  Progress,
} from "@chakra-ui/react";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import FirstSection from "@/components/FirstSection";
import Footer from "@/components/Footer";
import theme from "@/constants/theme";
import { motion, AnimatePresence } from "framer-motion";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import FourthSection from "@/components/FourthSection";
import FifthSection from "@/components/FifthSection";
import SixthSection from "@/components/SixthSection";

export default function Home() {
  const [isLoadingDone, setIsLoadingDone] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

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

  const titleAnimation = {
    loadingDone: {
      y: 0,
      transition: {
        y: { duration: 1, ease: "easeInOut" },
      },
    },
    loadingNotDone: {
      y: "100%",
      transition: {
        y: { duration: 1, ease: "easeInOut" },
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsLoadingDone(true);
        }
        return newProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence>
        {!isLoadingDone && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              bg="#300D0D"
              height="100vh"
              width="100vw"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Progress
                value={progress}
                size="xs"
                width="100%"
                colorScheme="yellow"
                position="fixed"
                top="0"
                zIndex="10"
              />
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width="150px"
                height="auto"
              />
            </Box>
          </motion.div>
        )}

        {isLoadingDone && (
          <motion.div
            key="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box bg="#300D0D" w="100%" py="8" px="12">
              <Navbar />
              <Header isLoadingDone={isLoadingDone} titleAnimation={titleAnimation}/>
              <FirstSection />
              <SecondSection />
              <ThirdSection />
              <FourthSection />
              <FifthSection />
              <SixthSection />
              <Footer />
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </ChakraProvider>
  );
}
