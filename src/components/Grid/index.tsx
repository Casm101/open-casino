// Global module imports
import React from 'react';


// Grid component props
interface GridProps {
  children: React.ReactNode;
}


// Frid component declaration
export const Grid: React.FC<GridProps> = ({ children }) => {
  return <div className="grid-container">{children}</div>;
};
