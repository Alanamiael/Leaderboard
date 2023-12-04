import LeftArrow from 'assets/arrows/leftArrow.svg';
import RightArrow from 'assets/arrows/rightArrow.svg';
import ModalEdit from 'components/ModalEdit';
import { useState } from 'react';
import cl from './TableHeading.module.scss';

const TableHeading = () => {
  const [modal, setModal] = useState(false);
  const actionModalFunction = () => {
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
        <button type="button" className={cl.new} onClick={actionModalFunction}>
          Add New User
        </button>
        <ModalEdit
          modal={modal}
          setModal={actionModalFunction}
          text="Add new user"
        />
      </div>
    </div>
  );
};
export default TableHeading;
