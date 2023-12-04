import { FC } from 'react';
import TableContent from '../TableContent';
import TableHeading from '../TableHeading';
import { UserProps } from '../services/interfaces';
import cl from './Table.module.scss';

interface TableProps {
  users: UserProps[] | undefined;
}

const Table: FC<TableProps> = ({ users }) => {
  return (
    <div className={cl.container}>
      <TableHeading />
      <TableContent users={users} />
    </div>
  );
};
export default Table;
