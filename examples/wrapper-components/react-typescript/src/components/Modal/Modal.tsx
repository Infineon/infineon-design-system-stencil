import { IfxModal, IfxButton } from '@infineon/infineon-design-system-react';
import { useRef } from 'react';

function Modal() {
  const modalRef = useRef();

  const handleCloseModal = () => {
    modalRef.current.close();
  };

  const handleModalBtnClick = () => {
    console.log("modal button clicked")
  };


  return (
    <div>
      <IfxModal ref={modalRef} caption="Modal Title" variant="default" close-on-overlay-click="false">
        <div slot="content">
          <span>Hello. Welcome. What a pleasure it is to have you.</span>
        </div>
        <div slot="buttons">
          <IfxButton variant="secondary" onClick={handleModalBtnClick}>Console output</IfxButton>
          <IfxButton onClick={handleCloseModal}>Close</IfxButton>
        </div>
      </IfxModal>
      <ifx-button onClick={() => modalRef.current.open()}>Open Modal</ifx-button>
    </div>
  );
}

export default Modal;