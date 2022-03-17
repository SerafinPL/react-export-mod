import classes from "./Modal.module.scss";



const Modal = () => {
  return (
    <div className={classes.Backdrop}>
      <div className={classes.Modal}>
        <header className={classes.ModalHeader}></header>
      </div>
    </div>
  );
};

export default Modal;
