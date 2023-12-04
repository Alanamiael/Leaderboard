import { FC } from 'react';
import { UserProps } from '../services/interfaces';
import UserInfo from '../UserInfo';

interface TableContentProps {
  users: UserProps[] | undefined;
}
const TableContent: FC<TableContentProps> = ({ users }) => {
  return (
    <div>
      {users
        ?.slice(0, 8)
        .map((user: UserProps, index) => (
          <UserInfo key={user.id} user={user} index={index} />
        ))}
    </div>
  );
};
export default TableContent;
