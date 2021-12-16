import React from "react";
import Backdrop from "./Backdrop/Backdrop";
import styles from './Modal.module.css'

const modal = (props)=>{
  return(
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed}/>
      <div className={styles.Modal}  
    style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'}}>
      {props.children}
   </div>
    </React.Fragment>
    
  );
  
}

export default modal;