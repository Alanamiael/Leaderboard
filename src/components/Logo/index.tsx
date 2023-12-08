import { FC } from 'react';
import cl from './Logo.module.scss';

const Logo: FC = () => {
  return (
    <h1 className={cl.logo}>
      <span>Five </span>Leaderboard
    </h1>
  );
};
export default Logo;
