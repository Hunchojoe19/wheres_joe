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
    <motion.div className='flex h-full w-full items-stretch justify-between'>
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
        <h1 className='text-24xl z-10 max-w-full overflow-visible whitespace-nowrap text-center font-extrabold leading-[40.56px] tracking-tight text-primary-white animate-bounce'>
          WHERE'S
          <br />
          JOE?
        </h1>
        <p className='z-10 mb-8 mt-8 max-w-[400px] text-center text-base font-bold tracking-tight text-primary-white'>
          A thrilling game showcasing the power of Aleo and the Puzzle
          multiparty privacy stack through a wager between friends!
        </p>
        <Button
          className='max-w-[250px]'
          onClick={connect}
          color='yellow'
          disabled={loading}
        >
          {loading ? 'Loading...' : loading ? 'Connecting...' : 'Play!'}
        </Button>
        <img
          src={bottomImageSrc}
          alt='Bottom Alex'
          className='center -translate-y-100 fixed bottom-0 h-full max-h-[12rem] w-full max-w-full transform object-contain'
        />
      </div>
    </motion.div>
  );
};
