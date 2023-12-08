import { FC, useState } from 'react';
import LeftArrow from '@assets/arrows/leftArrow.svg';
import RightArrow from '@assets/arrows/rightArrow.svg';
import ModalAdd from '@components/ModalAdd';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { goBack, nextDay, goAhead } from '@redux/slice';
import cl from './TableHeading.module.scss';

const TableHeading: FC = () => {
  const dispatch = useAppDispatch();
  const currentDay = useAppSelector((store) => store.leaderboard.currentDay);
  const history = useAppSelector((store) => store.leaderboard.history);

  const handleNextDay = () => {
    dispatch(nextDay());
  };
  const goPreviousDay = () => {
    dispatch(goBack());
  };
  const goNextDay = () => {
    dispatch(goAhead());
  };
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <div className={cl.container}>
      <p>Leaders table for this history</p>
      <div className={cl.wrapper}>
        <div
          onClick={goPreviousDay}
          role="presentation"
          className={`${cl.arrowBtn} ${currentDay === 0 ? cl.disabled : ''}`}
        >
          <img src={LeftArrow} alt="LeftArrow" />
        </div>
        <div
          onClick={goNextDay}
          role="presentation"
          className={`${cl.arrowBtn} ${
            !history[currentDay + 1] ? cl.disabled : ''
          }`}
        >
          <img src={RightArrow} alt="RightArrow" />
        </div>
        <button type="button" className={cl.next} onClick={handleNextDay}>
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
