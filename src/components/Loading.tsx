import { useState, useEffect } from 'react';
import { Image, Progress, Flex } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 1000);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: '#300D0D',
            zIndex: 9999,
          }}
        >
          <Progress 
            value={progress} 
            size="sm" 
            colorScheme="orange" 
            position="absolute"
            top={0}
            left={0}
            right={0}
          />
          <Flex 
            justify="center" 
            align="center" 
            height="100%"
          >
            <motion.div
              animate={{ y: progress === 100 ? -50 : 0, opacity: progress === 100 ? 0 : 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image src="/assets/logo.png" alt="Chipsy Chips" width="200px" />
            </motion.div>
          </Flex>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;