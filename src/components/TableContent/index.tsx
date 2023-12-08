import { UserProps } from '@ts/interfaces';
import { useAppSelector } from '@redux/hooks';
import UserInfo from '../UserInfo';

const TableContent = () => {
  const users = useAppSelector((store) => store.leaderboard.leaders);
  console.log('users', users);
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
