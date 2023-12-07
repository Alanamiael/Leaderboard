import { FC } from 'react';
import { UserProps } from '@types/interfaces';

import cl from './HeaderUser.module.scss';

interface HeaderUserProps {
  user: UserProps | undefined;
}

const HeaderUser: FC<HeaderUserProps> = ({ user }) => {
  return (
    <div className={cl.container}>
      <img src={user?.avatar} alt="" />
      <p>
        {user?.name} - {user?.score}
      </p>
    </div>
  );
};
export default HeaderUser;
