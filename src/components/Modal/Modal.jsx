import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, BtnClose, ModalContent } from './Modal.styled';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, openModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        openModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openModal]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      openModal();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent>
        <BtnClose type="button" onClick={() => openModal()}>
          <AiOutlineCloseCircle style={{ width: '22px', height: '22px' }} />
        </BtnClose>
        {children}
      </ModalContent>
    </Backdrop>,
    modalRoot
  );
};
