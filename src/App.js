import React, { useState } from 'react';
import './style.css';
import Modal from './components/Modal';

export default function App() {
  const [show, setShow] = useState(false);
  const handleShow = (e) => {
    console.log('setshow calling');
    e.stopPropagation();
    setShow((prevState) => !prevState);
  };
  const handleClose = (e) => {
    e.stopPropagation();
    console.log('handleCLose');
    console.log(show);
    setShow((prevState) => !prevState);
  };

  return (
    <div onClick={handleShow}>
      <button onClick={handleShow}>Show Modal</button>
      {show ? <Modal handleClose={handleClose} /> : null}
    </div>
  );
}
