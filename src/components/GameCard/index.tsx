/* eslint-disable @next/next/no-img-element */

// Global module imports
import { FC } from 'react';


// Game card component props declaration
interface GameCardProps {
  image: string;
  title: string;
  url: string;
}


// Game card component declaration
export const GameCard: FC<GameCardProps> = ({ image, title, url }) => {
  return (
    <a className="gamecard-styled" href={url}>
      {/* Card image */}
      <img
        src={image}
        alt={title}
        className="card-image"
      />

      {/* Card overlay */}
      <div className="card-description">
        <p className="card-title">{title}</p>
      </div>
    </a>
  );
};
