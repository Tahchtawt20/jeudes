import { useState } from "react";
import Show from "./Show";
import '../App.css';

function App() {
// Ex1 ------------------------------------------------------------------------
    // JsonArray= [
    //     {nom: "Azrou", prenom: "Mina", age: 20, filiere: "DDWFS"},
    //     {nom: "Rami", prenom: "Ali", age: 22, filiere: "Marketing"},
    //     {nom: "Alaoui", prenom: "Ayoub", age: 30, filiere: "Finance"},
    //     {nom: "Fatima", prenom: "Terbouch", age: 28, filiere: "Ressources humaines"}
    //     ];
    const [stagiaire , setStagiaire]= useState([
        {nom: "Azrou", prenom: "Mina", age: 20, filiere: "DDWFS"},
        {nom: "Rami", prenom: "Ali", age: 22, filiere: "MARKETING"},
        {nom: "Alaoui", prenom: "Ayoub", age: 30, filiere: "FINANCE"},
        {nom: "Terbouch", prenom: "Fatima", age: 28, filiere: "DDWFS"}
        ])
    const [filiere , setFiliere]=useState("")
    const [StagFiltre , setStagFiltre] = useState([]);
    const handleFilterClick = () => {
        setStagFiltre(
          stagiaire.filter(st => st.filiere === filiere)
        );
      };
 

   return (
     
     <div className="App">
        <input type="text"  onChange={(e)=>setFiliere(e.target.value.toUpperCase())}/> <br></br>
        <button onClick={handleFilterClick}>Filter</button>
        <Show  stagiaire={StagFiltre}/>
     </div>
   ) 
}

export default App 