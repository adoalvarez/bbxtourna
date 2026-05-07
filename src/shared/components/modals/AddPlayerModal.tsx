import { useState } from "react";
import Input from "../Input";
import Modal from "./Modal"

interface ModalProps {
  onClose: () => void;

}

const AddPlayerModal = ({ onClose }: ModalProps) => {
  const [name, setName] = useState<string>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const handleSave = () => {

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