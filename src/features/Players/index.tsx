import { useState } from "react";
import Button from "../../shared/components/Button";
import AddPlayerModal from "../../shared/components/modals/AddPlayerModal";
import { usePlayerContext } from "../../app/PlayerStore";

const Players = () => {
  const { state } = usePlayerContext();
  const [addPlayerModal, setAddPlayerModal] = useState<boolean>(false);

  const toggleModal = () => setAddPlayerModal(!addPlayerModal);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <h1 className="text-center">BLADERS</h1>
        <Button
          onClick={toggleModal}
        >
          Add Player
        </Button>
      </div>
      <div className="playersList">
        <div>
          <h2>Current Players</h2>
        </div>
        <ul>
          {state.players.map((player, index) => (
            <li key={index}>{player.name}</li>
          ))}
        </ul>
        {/* <div className="table-container">
          <table className="w-full">
            <thead>
              <tr>
                <th>Player</th>
                <th>Win</th>
                <th>Loss</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>name</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>name2</td>
                <td>2</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </div>

      {addPlayerModal && 
        <AddPlayerModal onClose={toggleModal} />
      }
    </div>
  )
}

export default Players;