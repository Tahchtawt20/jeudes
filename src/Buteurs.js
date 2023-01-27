import './App.css';
 
function Buteurs() {
 Buteurs=[
      { "id":1,
      "player":{"Player_id":19779,"player_name":"karim Benzema"},
      "team":"Real Madrid",
      "goals":{"home":7,"away":7},
      },
      { "id":2,
      "player":{"Player_id":4934,"player_name":"Hakim Ziyach"},
      "team":"Chelsea",
      "goals":{"home":9,"away":4},
      }
  ]
  let hakimZiyachGoals = Buteurs.filter(buteur => buteur.player.player_name === "Hakim Ziyach")
  .map(buteur => buteur.goals.home + buteur.goals.away)
  .reduce((total, current) => total + current);
console.log(hakimZiyachGoals);

  return (
    <div className="App">
     {hakimZiyachGoals}
    </div>
  );
}

export default Buteurs;

