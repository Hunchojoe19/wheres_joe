/* eslint-disable @typescript-eslint/no-explicit-any */
import Nav from '@components/Nav';
import PageHeader from '@components/PageHeader';
import Button from '@components/Button';
import { useAccount } from '@puzzlehq/sdk';
import { aleoAddressRegex } from '../../utils.js';
import { Step, useNewGameStore } from './store.js';
import { motion } from 'framer-motion';



const pageVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4
    }
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" }
}
}

function NewGame() {
  const [inputs, setInputs, setStep] = useNewGameStore((state) => [
    state.inputs,
    state.setInputs,
    state.setStep,
  ]);
  const { account } = useAccount();

  const opponent = inputs?.opponent;

  return (
    <motion.div className='flex h-full w-full flex-col items-center justify-between gap-2 px-5'
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Nav step={1} />
      <PageHeader
        text='WHO WOULD YOU LIKE TO CHALLENGE?'
        bg='bg-primary-blue'
      />
      <input
        type='text'
        className='mt-5 w-full rounded-lg border-[3px] border-solid border-primary-gray bg-transparent p-4 text-sm font-semibold leading-4 max-md:mr-px'
        placeholder="Enter Opponent's Address"
        id='opponent'
        value={opponent ?? ''}
        onChange={(e) => {
          setInputs({ ...inputs, opponent: e.target.value });
        }}
      />
      <div className='flex flex-grow flex-col' />
      <Button
        className='mb-6'
        onClick={() => setStep(Step._02_HideAlex)}
        color='green'
        disabled={
          !inputs ||
          !account ||
          !aleoAddressRegex.test(inputs.opponent ?? '') ||
          inputs.opponent === account.address
        }
      >
        NEXT
      </Button>
    </motion.div>
  );
}

export default NewGame;