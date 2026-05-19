import { useNavigate } from "react-router";
import { useState } from "react";
import Modal from "../../shared/component/Modal";
import Form from "../../shared/component/Forms/Form";
import FormInput from "../../shared/component/Forms/FormInput";
import FormSelect, { type SelectOption } from "../../shared/component/Forms/FormSelect";
import FormMultiSelect from "../../shared/component/Forms/FormMultiSelect";

interface FormValues {
  name: string;
  format: SelectOption;
}

const Tournament = () => {
  const [createTournamentModal, setCreateTournamentModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const submitData = (data: FormValues) => {
    console.log(data)
  }

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
        <Form 
          onSubmit={submitData}
          buttons={[
            {
              label: 'Cancel',
              className: 'w-fit',
              action: toggleCreateTournamentModal
            },
            {
              label: 'Create',
              className: 'w-fit',
              type: 'submit',
            }
          ]}
        >
          <FormInput 
            id="name"
            label="Tournament Name"
            isRequired={true}
            type="text"
            placeholder="Enter tournament name"
            className="w-full"
          />
          <FormSelect 
            id="format"
            label="Tournament format"
            isRequired={true}
            placeholder="Select format"
            options={[
              {
                value: 'RR',
                label: 'Round Robin'
              },
              {
                value: 'DD',
                label: 'Double Elimination'
              }
            ]}
          />
          <FormMultiSelect
            id="players"
            label="Players"
            isRequired
            options={[
              {
                label: "Valorant",
                value: "valorant",
              },
              {
                label: "Dota 2",
                value: "dota2",
              },
              {
                label: "League of Legends",
                value: "lol",
              },
            ]}
          />
        </Form>
      </Modal>
    </div>
  )
}

export default Tournament;