import { Dispatch, FC, SetStateAction } from 'react';
import closeIcon from '../../assets/modal/close.svg';
import plant from '../../assets/modal/plant.svg';
import upArrow from '../../assets/arrows/upArrow.svg';
import downArrow from '../../assets/arrows/downArrow.svg';
import cl from './Modal.module.scss';

interface ModalProps {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}
const Modal: FC<ModalProps> = ({ modal, setModal }) => {
  const rootClasses = [cl.modal];
  // if (!modal) {
  //   return null;
  // }

  if (modal) {
    rootClasses.push(cl.active);
  }
  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => setModal(false)}
      role="presentation"
    >
      <div
        className={cl.modalContent}
        onClick={(event) => event.stopPropagation()}
        role="presentation"
      >
        {' '}
        <div
          onClick={() => setModal(false)}
          className={cl.closeBtn}
          role="presentation"
        >
          <img src={closeIcon} alt="close" />
        </div>
        <div className={cl.wrapper}>
          <h3>Edit user score</h3>
          <form>
            <div>
              <input type="text" id="title" placeholder="Name" />
            </div>
            <div className={cl.scoreInput}>
              <input type="text" id="author" placeholder="Points" />
              <img src={upArrow} className={cl.upArrow} alt="+" />
              <img src={downArrow} className={cl.downArrow} alt="-" />
            </div>
            <button type="submit">Save</button>
          </form>
          <img src={plant} alt="" className={cl.plant} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
