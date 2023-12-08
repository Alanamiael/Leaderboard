import cl from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={cl.container}>
      <span className={cl.loader} />
      <p>This page is loading</p>
    </div>
  );
};
export default Loader;
