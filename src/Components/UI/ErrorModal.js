import React from 'react'
import Card from './Card'
import Button from './Button'
import classes from './ErrorModal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm}></div>
  )
}

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.action}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  )
}

const ErrorModal = (props) => {
  return (
    /* <React.Fragment>
      <div className={classes.backdrop} onClick={props.onConfirm}></div>
      <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.action}>
            <Button onClick={props.onConfirm}>Okay</Button>
          </footer>
      </Card>
    </React.Fragment> */
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}></Backdrop>, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}></ModalOverlay>, document.getElementById('overlay-root'))}
    </React.Fragment>
  )
}

export default ErrorModal