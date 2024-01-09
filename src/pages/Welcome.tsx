import { useConnect, useAccount } from '@puzzlehq/sdk';
import rightImageSrc from '../assets/charles.jpg';
import leftImageSrc from '../assets/godfather.jpg';
import bottomImageSrc from '../assets/eerie.jpg';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '@components/Button.js';
import { motion } from 'framer-motion';


const welcomeVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh"
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 120
    }
    
  }, 
  exit: {
    opacity: 0,
    y: "1000vh"
  }
}
const imgVariants = {
  hidden: {
    opacity: 0,
    x: "-100vh"
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      type: "spring",
      stiffness: 120
    }
    
  }, 
  exit: {
    opacity: 0,
    x: "1000vh"
  }
}

export const Welcome = () => {
  const navigate = useNavigate();
  const { account } = useAccount();
  const { loading, connect } = useConnect();

  useEffect(() => {
    if (account) {
      navigate('/');
    }
  }, [account, navigate]);

  return (
    <div className='flex h-full w-full items-stretch justify-between'>
      <div className='relative flex h-full w-full flex-col items-center justify-center'>
        {/* <img
          src={rightImageSrc}
          alt='Top-right Alex'
          className='fixed right-0 top-0 h-full max-h-[18rem] max-w-[50%] object-contain'
        /> */}
        {/* <img
          src={leftImageSrc}
          alt='Left Alex'
          className='fixed left-0 top-1/4 h-full max-h-[20rem] max-w-[50%] -translate-y-20 object-contain'
        /> */}
        <motion.h1 className='text-24xl z-10 max-w-full overflow-visible whitespace-nowrap text-center font-extrabold leading-[40.56px] tracking-tight text-primary-white animate-bounce'
        
        variants={welcomeVariants}
        initial="hidden"
        animate="visible"
        exit="exit">
          WHERE'S
          <br />
          JOE?
        </motion.h1>
        <motion.p className='z-10 mb-8 mt-8 max-w-[400px] text-center text-base font-bold tracking-tight text-primary-white'
        variants={welcomeVariants}
        initial="hidden"
        animate="visible"
        exit="exit">
          A thrilling game showcasing the power of Aleo and the Puzzle
          multiparty privacy stack through a wager between friends!
        </motion.p>
        <Button
          className='max-w-[250px]'
          onClick={connect}
          color='yellow'
          disabled={loading}
        >
          {loading ? 'Loading...' : loading ? 'Connecting...' : 'Play!'}
        </Button>
        <motion.img
        variants={imgVariants}
        initial="hidden"
        animate="visible"  
        exit="exit"        
        src={bottomImageSrc}
          alt='Bottom Alex'
          className='center -translate-y-100 fixed bottom-0 h-full max-h-[12rem] w-3 max-w-[35%] transform object-contain'
        />
      </div>
    </div>
  );
};
