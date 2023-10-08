import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, BtnClose, ModalContent } from './Modal.styled';
// import iconClose from 'images/close.svg';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onClose();
        document.body.style.overflow = 'visible';
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
      document.body.style.overflow = 'visible';
    }
  };

  const handleIconClose = () => {
    onClose();
    document.body.style.overflow = 'visible';
  };

  document.body.style.overflow = 'hidden';

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent>
        <BtnClose type="button" onClick={handleIconClose}>
          {/* <svg width="24" height="24">
            <use href={iconClose + '#close'}></use>
          </svg> */}
          x
        </BtnClose>
        {children}
      </ModalContent>
    </Backdrop>,
    modalRoot
  );
};
