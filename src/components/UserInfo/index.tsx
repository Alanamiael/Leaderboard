import { FC, useState } from 'react';
import editButton from 'assets/edit.svg';
import { place } from 'helpers/helpers';
import ModalEdit from '../ModalEdit';
import { UserProps } from '../../services/interfaces';
import cl from './UserInfo.module.scss';

interface UserInfoProps {
  user: UserProps | undefined;
  index: number;
}

const UserInfo: FC<UserInfoProps> = ({ user, index }) => {
  const [modal, setModal] = useState(false);
  const actionModalFunction = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      <div className={cl.container}>
        <div className={cl.info}>
          <p className={cl.place}>{place(index)}</p>
          <img src={user?.avatar} alt="avatar" />
          <p className={cl.score}>{user?.score}</p>
          <p className={cl.name}>{user?.name}</p>
        </div>
        <div className={cl.position}>
          <p className={cl.change}>No change</p>
          <div
            role="presentation"
            onClick={actionModalFunction}
            className={cl.editButton}
          >
            <img src={editButton} alt="edit score" />
          </div>
        </div>
      </div>
      <ModalEdit modal={modal} setModal={actionModalFunction} user={user} />
    </>
  );
};
export default UserInfo;
