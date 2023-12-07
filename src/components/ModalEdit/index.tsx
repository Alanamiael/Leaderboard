import {
  ChangeEvent,
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useState,
} from 'react';
import closeIcon from '@assets/modal/close.svg';
import plant from '@assets/modal/plant.svg';
import { UserProps } from '@ts/interfaces';
import { updateUser } from '@redux/slice';
import { useAppDispatch } from '@redux/hooks';
import cl from './ModalEdit.module.scss';

interface ModalEditProps {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  user: UserProps | undefined;
}
const ModalEdit: FC<ModalEditProps> = ({ modal, setModal, user }) => {
  const dispatch = useAppDispatch();
  const rootClasses = [cl.modal];

  if (modal) {
    rootClasses.push(cl.active);
  }

  const [userName, setUserName] = useState(user?.name);
  const [userScore, setUserScore] = useState(user?.score);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateUser({ ...user, name: userName, score: userScore }));
    setModal(false);
  };
  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const handleChangeScore = (event: ChangeEvent<HTMLInputElement>) => {
    setUserScore(+event.target.value);
  };
  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => setModal(false)}
      role="presentation"
    >
      <div className={cl.wrapper}>
        <div
          className={cl.modalContent}
          onClick={(event) => event.stopPropagation()}
          role="presentation"
        >
          <div
            onClick={() => setModal(false)}
            className={cl.closeBtn}
            role="presentation"
          >
            <img src={closeIcon} alt="close" />
          </div>
          <div className={cl.positionBlock}>
            <h3>Edit User</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  id="title"
                  placeholder="Name"
                  value={userName}
                  onChange={handleChangeName}
                />

                <div className={cl.scoreInput}>
                  <input
                    type="number"
                    id="author"
                    placeholder="Points"
                    max={100}
                    min={0}
                    value={userScore}
                    onChange={handleChangeScore}
                  />
                </div>
                <button type="submit">Save</button>
              </div>
            </form>
          </div>
          <img src={plant} alt="" className={cl.plant} />
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
