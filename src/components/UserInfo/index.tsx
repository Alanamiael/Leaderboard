import { useState } from 'react';
import mockImg from '../../assets/mockImg.svg';
import editButton from '../../assets/edit.svg';
import Modal from '../Modal';
import cl from './UserInfo.module.scss';

const UserInfo = () => {
  const [modal, setModal] = useState(false);
  const actionModalFunction = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      <div className={cl.container}>
        <div className={cl.info}>
          <p className={cl.place}>1st</p>
          <img src={mockImg} alt="avatar" />
          <p className={cl.score}>8</p>
          <p className={cl.name}>Stay</p>
        </div>
        <div className={cl.position}>
          <p className={cl.change}>No change</p>
          <div role="presentation" onClick={actionModalFunction}>
            <img src={editButton} alt="edit score" />
          </div>
        </div>
      </div>
      <Modal modal={modal} setModal={actionModalFunction} />
    </>
  );
};
export default UserInfo;
