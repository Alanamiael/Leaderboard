import LeftArrow from '../../assets/arrows/leftArrow.svg';
import RightArrow from '../../assets/arrows/rightArrow.svg';
import cl from './TableHeading.module.scss';

const TableHeading = () => {
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
        <button type="button" className={cl.new}>
          Add New User
        </button>{' '}
      </div>
    </div>
  );
};
export default TableHeading;
