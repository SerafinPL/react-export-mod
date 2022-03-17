import classes from './App.module.scss';

import Modal from './Modal/Modal'

const  App = () => {
  return (
    <div className={classes.App}>
      <header className={classes.AppHeader}>
        <Modal/>
      </header>
    </div>
  );
}

export default App;
