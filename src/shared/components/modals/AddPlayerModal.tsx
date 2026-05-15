import { useState } from "react";
import Input from "../Input";
import Modal from "./Modal"
import { usePlayerContext } from "../../../app/PlayerStore";

interface ModalProps {
  onClose: () => void;
}

const AddPlayerModal = ({ onClose }: ModalProps) => {
  const { dispatch } = usePlayerContext();
  const [name, setName] = useState<string>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const handleSave = () => {
    dispatch({ type: 'ADD_PLAYER', payload: name });
    onClose();
  }
  
  return (
    <Modal 
      onClose={onClose}
      onConfirm={handleSave}
      title={'Add player'}
    >
      <form>
        <Input
          name={'name'}
          value={name}
          onChange={handleNameChange}
          label="Name:"
        />
      </form>
    </Modal>
  )
}

export default AddPlayerModal;