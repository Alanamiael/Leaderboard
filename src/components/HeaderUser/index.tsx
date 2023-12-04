import { FC } from 'react';
import { UserProps } from 'components/services/interfaces';
import { twelveRange } from 'components/helpers/helpers';
import cl from './HeaderUser.module.scss';

interface HeaderUserProps {
  user: UserProps | undefined;
}

const HeaderUser: FC<HeaderUserProps> = ({ user }) => {
  return (
    <div className={cl.container}>
      <img src={user?.avatar} alt="" />
      <p>
        {user?.name} - {twelveRange(user?.score as number)}
      </p>
    </div>
  );
};
export default HeaderUser;
