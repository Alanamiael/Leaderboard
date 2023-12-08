import { useState } from 'react';
import LeftArrow from '@assets/arrows/leftArrow.svg';
import RightArrow from '@assets/arrows/rightArrow.svg';
import ModalAdd from '@components/ModalAdd';
import cl from './TableHeading.module.scss';

const TableHeading = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal((prev) => !prev);
  };
  return (
    <div className={cl.container}>
      <p>Leaders table for this period</p>
      <div className={cl.wrapper}>
        <div>
          <img src={LeftArrow} alt="LeftArrow" />
        </div>
        <div>
          <img src={RightArrow} alt="RightArrow" />
        </div>
        <button type="button" className={cl.next}>
          Next Day
        </button>
        <button type="button" className={cl.new} onClick={toggleModal}>
          Add New User
        </button>
        <ModalAdd modal={modal} setModal={toggleModal} />
      </div>
    </div>
  );
};
export default TableHeading;
