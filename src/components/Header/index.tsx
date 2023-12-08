import headerImg from '@assets/heading.svg';
import HeaderUser from '@components/HeaderUser';
import { useAppSelector } from '@redux/hooks';
import { UserProps } from '@ts/interfaces';
import cl from './Header.module.scss';

const Header = () => {
  const users = useAppSelector((store) => store.leaderboard.leaders);
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
