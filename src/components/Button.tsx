import * as React from 'react';
import { theme } from '../theme';
import {motion } from "framer-motion"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color:
    | 'blue'
    | 'pink'
    | 'green'
    | 'yellow'
    | 'gray'
    | 'white'
    | 'red'
    | 'transparent';
  size?: 'lg' | 'sm';
  children?: React.ReactNode;
}

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const Button = ({
  className,
  color = 'green',
  size = 'lg',
  ...props
}: ButtonProps) => {
  const bgColor = 'primary-' + color;

  return (
    <motion.div
    variants={buttonVariants}
    whileHover="hover">
      <button
        className={`${className === undefined ? '' : className} ${
          props.disabled ? 'opacity-40' : ''
        } ${
          color === 'transparent' ? 'text-primary-white' : 'text-primary-black'
        } rounded-[200px] ${
          size === 'lg' ? 'w-full p-5 text-3xl' : 'w-[125px] px-5 py-3 text-xs'
        } text-center font-extrabold max-md:ml-px`}
        {...props}
        style={{
          /* @ts-expect-error-next-line */
          backgroundColor: theme[bgColor],
        }}
      />
    </motion.div>
  );
};

export default Button;
