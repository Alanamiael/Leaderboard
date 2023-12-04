import { Dispatch, FC, SetStateAction } from 'react';
import closeIcon from 'assets/modal/close.svg';
import plant from 'assets/modal/plant.svg';
import cl from './ModalEdit.module.scss';

interface ModalEditProps {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  text: string;
}
const ModalEdit: FC<ModalEditProps> = ({ modal, setModal, text }) => {
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
            <h3>{text}</h3>
            <form>
              <div>
                <input type="text" id="title" placeholder="Name" />

                <div className={cl.scoreInput}>
                  <input
                    type="number"
                    id="author"
                    placeholder="Points"
                    max={12}
                    min={0}
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