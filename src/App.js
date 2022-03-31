import classes from './App.module.scss';

import Modal2 from './Modal/Modal2'

const  App = () => {
  return (
    <div className={classes.App}>
      <header className={classes.AppHeader}>
        <Modal2 />
      </header>
    </div>
  );
}

export default App;
