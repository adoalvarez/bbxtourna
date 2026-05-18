interface ModalProps {
  title?: string;
  children: React.ReactNode
  closeModal: () => void
  isOpen: boolean;
}
const Modal = ({
  title = 'Modal',
  isOpen = false,
  closeModal,
  children
}: ModalProps) => {
  return (
    <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>X</button>
        <div className="text-lg font-bold">
          {title}
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal;