import React, { useEffect } from 'react';
const Modal = ({ handleClose }) => {
  useEffect(() => {
    function escapekeydown(event) {
      console.log('event:', event.keyCode);
      if (event.keyCode === 27) {
        handleClose(event);
      }
    }

    document.addEventListener('keydown', escapekeydown);

    return () => {
      document.removeEventListener('keydown', escapekeydown);
    };
  });
  return (
    <>
      <div className="modalbackground">
        <div className="modalcontent">
          <div className="modalHeader">
            <span className="modalTitle"> Modal Header</span>
            <span className="modalClose" onClick={handleClose}>
              X
            </span>
          </div>
          <div>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impreso
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
