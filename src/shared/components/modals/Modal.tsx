import Button from '../Button';
import './modal.css';

interface ModalProps {
  children: React.ReactNode;
  title?: string;
  onClose?: () => void;
  onConfirm?: () => void;
}

const Modal = ({ 
  children,
  title = "Title",
  onClose, 
  onConfirm
}: ModalProps) => {
  return (
    <div className="modal-bg">
      <div className="modal-container">
        <div className="modal-header">
          <label
            className="text-2xl font-extrabold uppercase"
          >{title}</label>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          {onClose && <Button 
            onClick={onClose}
            className="modal-button"
          >
            Cancel
          </Button>}
          {onConfirm && <Button 
            onClick={onConfirm}
            className="modal-button"
            type='submit'
          >
            Confirm
          </Button>}
        </div>
      </div>
      
    </div>
  )
}

export default Modal;