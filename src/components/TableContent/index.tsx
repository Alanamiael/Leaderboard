import { FC } from 'react';
import { UserProps } from '@ts/interfaces';
import { useAppSelector } from '@redux/hooks';
import UserInfo from '../UserInfo';

const TableContent: FC = () => {
  const users = useAppSelector(
    (store) => store.leaderboard.history[store.leaderboard.currentDay],
  );

  return (
    <div>
      {users
        ?.slice()
        .map((user: UserProps, index) => (
          <UserInfo key={user.id} user={user} index={index} />
        ))}
    </div>
  );
};
export default TableContent;
