import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { UserProps } from '../../services/interfaces';
import UserInfo from '../UserInfo';

const TableContent = () => {
  const users = useSelector((store: RootState) => store.leaderboard.leaders);
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
