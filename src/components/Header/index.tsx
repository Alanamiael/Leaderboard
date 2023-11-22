import headerImg from '../../assets/heading.svg';
import HeaderUser from '../HeaderUser';
import cl from './Header.module.scss';

const Header = () => {
  return (
    <div className={cl.container}>
      <div className={cl.headerContent}>
        <h2>All-time highest scorers</h2>
        <p>You can be among the leaders already today</p>
        <div className={cl.wrapper}>
          <HeaderUser />
          <HeaderUser />
          <HeaderUser />
          <HeaderUser />
        </div>
      </div>
      <div className={cl.headerImg}>
        <img src={headerImg} alt="img" />
      </div>
    </div>
  );
};
export default Header;
