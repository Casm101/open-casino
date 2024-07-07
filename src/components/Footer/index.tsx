import { FC } from 'react';

type FooterProps = {
  companyName: string;
  year: number;
};

export const Footer: FC<FooterProps> = ({ companyName, year }) => {
  return (
    <footer className='footerStyled'>
      <p className='legal'>
        Gambling should be entertaining. Remember that you always risk losing the money you bet, so do not spend more than you can afford to lose. If you think you may have a problem, click here.
      </p>
      <p className="legal">
        This site is not a real gambling site and is developed as a proof of work and experience, no money will ever be charged by this, and all subsecuent games this site displays are free-to-play.
      </p>
      <p>
        &copy; {year} {companyName}. All rights reserved.
      </p>
    </footer>
  );
};
