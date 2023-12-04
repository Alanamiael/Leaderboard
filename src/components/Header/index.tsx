import HeaderUser from 'components/HeaderUser';
import headerImg from 'assets/heading.svg';
import { UserProps } from 'components/services/interfaces';
import { FC } from 'react';
import cl from './Header.module.scss';

interface HeaderProps {
  users: UserProps[] | undefined;
}

const Header: FC<HeaderProps> = ({ users }) => {
  return (
    <div className={cl.container}>
      <div className={cl.headerContent}>
        <h2>All-time highest scorers</h2>
        <p>You can be among the leaders already today</p>
        <div className={cl.wrapper}>
          {users
            ?.slice(0, 4)
            .map((user: UserProps) => <HeaderUser key={user.id} user={user} />)}
        </div>
      </div>
      <div className={cl.headerImg}>
        <img src={headerImg} alt="img" />
      </div>
    </div>
  );
};
export default Header;
