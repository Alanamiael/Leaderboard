import { FC } from 'react';
import TableContent from '../TableContent';
import TableHeading from '../TableHeading';

import cl from './Table.module.scss';

const Table: FC = () => {
  return (
    <div className={cl.container}>
      <TableHeading />
      <TableContent />
    </div>
  );
};
export default Table;
