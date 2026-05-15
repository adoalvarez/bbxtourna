// import Card from "../../shared/components/Card";

import Card from "../../shared/component/Card";

const Home = () => {

  return (
    <div className="Home">
      <div className="flex flex-col">
        {/* <label className="items-center content-center justify-center flex">Welcome</label> */}
        <div className="matches">
          <div className="matches-container flex flex-col w-full gap-4">
            <label className="text-2xl font-extrabold uppercase w-full text-center">Matches</label>
            <div className="ongoing-matches">
              <label className="text-lg uppercase font-bold">Ongoing Matches</label>
              <div className="ongoing-matches-container grid grid-cols-3 gap-3 mt-2">
                <Card title="Match 1">
                  test
                </Card>
              </div>
            </div>
            <div className="recent-matches">
              <label className="text-lg uppercase font-bold">Recent Matches</label>
              <div className="ongoing-matches-container grid grid-cols-3 gap-3 mt-2">
                <Card title="Match 2">
                  Test
                </Card>
              </div>
            </div>
          </div>
        </div>
        {/** Leaderboard */}
        <div className="leaderboard justify-center items-center flex flex-col mt-6">
          <label className="text-2xl font-extrabold uppercase">Leaderboard</label>
          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-200 w-3/4 mt-2">
            <table className="table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Blader</th>
                  <th>Match Win - Loss</th>
                  <th>Total Match</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Player 1</td>
                  <td>1 - 0</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home;