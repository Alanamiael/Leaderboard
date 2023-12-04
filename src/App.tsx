import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import Loader from 'components/Loader';
import Header from './components/Header';
import Table from './components/Table';
import Logo from './components/Logo';
import { useAppDispatch } from './redux/hooks';
import { fetchUsers } from './redux/actions';
import cl from './styles/App.module.scss';

function App() {
  const users = useSelector((store: RootState) => store.leaderboard.leaders);
  const isLoading = useSelector(
    (store: RootState) => store.leaderboard.loading,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log(users);
  return (
    <div className={cl.container}>
      <Logo />
      <Header users={users} />
      {isLoading ? <Loader /> : <Table users={users} />}
    </div>
  );
}

export default App;
