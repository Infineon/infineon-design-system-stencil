import React, { useRef } from 'react';
import { IfxModal, IfxButton } from '@infineon/infineon-design-system-react';

function Modal() {
  const modalRef = useRef();

  const handleCloseModal = () => {
    modalRef.current.opened = false;
  };

  const handleModalBtnClick = () => {
    console.log("modal button clicked")
  };


  return (
    <div>
      <IfxModal ref={modalRef} caption="Modal Title" variant="default" width='l' loseOnOverlayClick="true"  showCloseButton='false'>
        <div slot="content">
          <span>Hello. Welcome. What a pleasure it is to have you.</span>
        </div>
        <div slot="buttons">
          <IfxButton variant="secondary" onClick={handleModalBtnClick}>Console output</IfxButton>
          <IfxButton onClick={handleCloseModal}>Close</IfxButton>
        </div>
      </IfxModal>
      <ifx-button onClick={() => modalRef.current.opened = true}>Open Modal</ifx-button>
    </div>
  );
}

export default Modal;