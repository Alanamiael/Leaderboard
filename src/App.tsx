import Header from './components/Header';
import Table from './components/Table';
import cl from './styles/App.module.scss';

function App() {
  return (
    <div className={cl.container}>
      <h1>
        <span>Five </span>Leaderboard
      </h1>
      <Header />
      <Table />
    </div>
  );
}

export default App;
