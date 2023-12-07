import { useEffect } from 'react';
import Loader from '@components/Loader';
import Header from '@components/Header';
import Table from '@components/Table';
import Logo from '@components/Logo';
import { fetchUsers } from '@redux/slice';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import cl from './styles/App.module.scss';

function App() {
  const isLoading = useAppSelector((store) => store.leaderboard.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className={cl.container}>
      <Logo />
      <Header />
      {isLoading ? <Loader /> : <Table />}
    </div>
  );
}

export default App;
