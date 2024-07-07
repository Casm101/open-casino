/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';

// Header component props declaration
interface HeaderProps {
  logo: string;
  links: { name: string; url: string }[];
}

// Header component declaration
export const Header: FC<HeaderProps> = ({ logo, links }) => {
  return (
    <header className="headerStyled">
      <div className="header-content">

        {/* Header logo */}
        <img src={logo} alt="Site Logo" />

        {/* Header links */}
        <nav>
          <ul className='header-navigation'>
            {links.map((link, index) => (
              <li key={index}>
                <a className="navigation-item" href={link.url}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Login / Profile buttons */}
        <div className="header-buttons">

        </div>
      </div>
    </header>
  );
};
