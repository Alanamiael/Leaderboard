import { FC, useState } from 'react';
import editButton from 'assets/edit.svg';
import { twelveRange } from 'components/helpers/helpers';
import { UserProps } from '../services/interfaces';
import ModalEdit from '../ModalEdit';
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

  const place = () => {
    switch (index) {
      case 0:
        return `${index + 1}st`;
      case 1:
        return `${index + 1}nd`;
      case 2:
        return `${index + 1}rd`;
      default:
        return `${index + 1}th`;
    }
  };
  return (
    <>
      <div className={cl.container}>
        <div className={cl.info}>
          <p className={cl.place}>{place()}</p>
          <img src={user?.avatar} alt="avatar" />
          <p className={cl.score}>{twelveRange(user?.score as number)}</p>
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
      <ModalEdit
        modal={modal}
        setModal={actionModalFunction}
        text="Edit user Score"
      />
    </>
  );
};
export default UserInfo;
