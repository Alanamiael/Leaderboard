import TableContent from '../TableContent';
import TableHeading from '../TableHeading';

import cl from './Table.module.scss';

const Table = () => {
  return (
    <div className={cl.container}>
      <TableHeading />
      <TableContent />
    </div>
  );
};
export default Table;
