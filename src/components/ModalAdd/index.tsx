import {
  ChangeEvent,
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import closeIcon from '@assets/modal/close.svg';
import plant from '@assets/modal/plant.svg';
import { avatars } from '@helpers/helpers';
import { createUser } from '@redux/slice';
import { useAppDispatch } from '@redux/hooks';
import cl from './ModalAdd.module.scss';

interface ModalAddProps {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}
const ModalAdd: FC<ModalAddProps> = ({ modal, setModal }) => {
  const rootClasses = [cl.modal];
  const dispatch = useAppDispatch();

  if (modal) {
    rootClasses.push(cl.active);
  }

  const [userName, setUserName] = useState('');
  const [userScore, setUserScore] = useState(0);
  const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      createUser({
        name: userName,
        score: userScore,
        avatar: randomAvatar.src,
        id: uuidv4(),
      }),
    );
    setUserName('');
    setUserScore(0);
    setModal(false);
  };
  const handleAddName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const handleAddScore = (event: ChangeEvent<HTMLInputElement>) => {
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
            <h3>Add New User</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  id="title"
                  placeholder="Name"
                  value={userName}
                  onChange={handleAddName}
                />

                <div className={cl.scoreInput}>
                  <input
                    type="number"
                    id="author"
                    placeholder="Points"
                    max={100}
                    min={0}
                    value={userScore}
                    onChange={handleAddScore}
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

export default ModalAdd;
