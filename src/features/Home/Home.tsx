import { useNavigate } from "react-router";
import Button from "../../shared/components/Button";
// import Button from "../../shared/components/Button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
      <div className="Home">
        <div className="flex flex-col">
          <label className="items-center content-center justify-center flex">Welcome</label>
          <Button onClick={() => navigate("/create-tournament")}>Create a Tournament</Button>
          <Button onClick={() => navigate("/add-player")}> Add Players </Button>
        </div>
      </div>
      
    </div>
  )
}

export default Home;