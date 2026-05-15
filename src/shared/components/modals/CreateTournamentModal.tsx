import FormSingleInput from "../Form/FormSingleInput";
import Modal from "./Modal";

interface ModalProps {
  onClose: () => void
}

const CreateTournamentModal = ({ 
  onClose 
}: ModalProps) => {
  
  const handleConfirm = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject)
  }

  return (
    <Modal 
      // onClose={onClose}
      // onConfirm={handleConfirm}
    >
      <form onSubmit={handleConfirm}>
        <FormSingleInput
          name="name"
          id="name"
          labelProps={{ label: "Tournament Name", className: '' }}
        />
        <FormSingleInput
          name="desc"
          id="desc"
          labelProps={{ label: "Description (optional)", className: '' }}
        />
        {/* Format */}
        {/* Players */}
        <button type='submit'>Submit</button>
      </form>
    </Modal>
  )
}

export default CreateTournamentModal;