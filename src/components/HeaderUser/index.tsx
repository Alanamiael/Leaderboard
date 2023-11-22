import mockImg from '../../assets/mockImg.svg';
import cl from './HeaderUser.module.scss';

const HeaderUser = () => {
  return (
    <div className={cl.container}>
      <img src={mockImg} alt="" />
      <p>Rome - 10</p>
    </div>
  );
};
export default HeaderUser;
