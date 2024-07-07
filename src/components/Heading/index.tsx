// Global module imports
import { FC } from 'react';

// Heading component props
interface HeadingProps {
  title: string;
}

// Heading component declaration
export const Heading: FC<HeadingProps> = ({ title }) => {
  return (
    <h3 className='heading-styled'>{title}</h3>
  );
};