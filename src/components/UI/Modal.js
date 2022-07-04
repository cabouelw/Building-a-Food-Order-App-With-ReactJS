import React , { Fragment } from 'react'
import ReactDom from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = props => {
	return <div className={classes.backdrop} onClick={props.onHideCart} />
}

const ModalOverlay = props => {
	return <div className={classes.modal}>
		<div className={classes.content}>{props.children}</div>
	</div>
}

const Modal = props => {
	return (
		<Fragment>
			{ReactDom.createPortal(<Backdrop onHideCart={props.onHideCart} />, document.getElementById('overlays'))}
			{ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
		</Fragment>
	);
};

export default Modal;