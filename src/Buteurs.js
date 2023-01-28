import './App.css';
 
function Buteurs() {

 const Buteurs=[
      { "id":1,
      "player":{"Player_id":19779,"player_name":" karim Benzema"},
      "team":"Real Madrid",
      "goals":{"home":7,"away":7},
      },
      { "id":2,
      "player":{"Player_id":4934,"player_name":" Hakim Ziyach"},
      "team":"Chelsea",
      "goals":{"home":9,"away":4},
      }
  ]

// Partie N°1 : Ex 1 
  var  Goals = (Buteurs.filter( but => but.player.player_name === "karim Benzema"))
  .reduce((acc,curValue) => acc+(curValue.goals.home + curValue.goals.away),0)
  
// Partie N°1 : Ex 2
  var GoalsAway = (Buteurs.filter ( but => but.goals.away > 3 )).map ( index => index.id)
  
// Partie N°1 : Ex 3
  var maxGoalsHome = (Buteurs.map( but => but.goals.home)).reduce ((Homa1,Homa2)=> Math.max(Homa1,Homa2))
  
// Partie N°1 : Ex 4
 var sumGoalsAway = (Buteurs.map( but => but.goals.away)).reduce ((acc,curValue)=> acc+curValue,0)

// Partie N°1 : Ex 5

const newPl={ "id":21,
            "player":{"Player_id":500,"player_name":" Haland"},
            "team":"Manchester City ",
            "goals":{"home":9,"away":9},
          }
const NewArr = (But,elem) =>[...But, elem]
  
const Buteurs2 = NewArr(Buteurs,newPl)
var players = Buteurs2.map (but => but.player.player_name)
console.log(Buteurs2);

  return (
    <div className="App"> 
    le nombre de buts marqués par le joueurs karim Benzema est :  {Goals} <br></br>
    le nombre  des joueurs qui ont marqué plus que 3 buts à l'extérieur : {GoalsAway.length} <br></br>
    le plus grand nombre de buts marqués à l'intérieur : {maxGoalsHome} <br></br>
    la somme des buts qui sont marqués à l'extérieur : {sumGoalsAway} <br></br>
    les noms des joueurs du tableau "Buteurs2" : {players }





    </div>
  );
}

export default Buteurs;

