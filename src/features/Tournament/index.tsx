import { useNavigate } from "react-router";
// import Button from "../../shared/components/Button";
// import CreateTournamentModal from "../../shared/components/modals/CreateTournamentModal";
import { useState } from "react";
import Modal from "../../shared/component/Modal";

const Tournament = () => {
  const [createTournamentModal, setCreateTournamentModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleCreateTournamentModal = () => setCreateTournamentModal(!createTournamentModal);

  return (
    <div className="tournament">
      <div className="tournament-container flex flex-col gap-4 mt-4">
        <h1 className="text-center text-3xl font-bold">Tournaments</h1>
        <div className="tournament-buttons flex flex-row gap-4 justify-center">
          <button
            className="btn"
            onClick={toggleCreateTournamentModal}
          > Create Tournament </button>
          <button
           className="btn"
          
          onClick={() => navigate('/tournament/matches')}> View Matches </button>
        </div>
      </div>

      <Modal title="Create Tournament" isOpen={createTournamentModal} closeModal={toggleCreateTournamentModal}>
        <div> Test </div>
      </Modal>
    </div>
  )
}

export default Tournament;