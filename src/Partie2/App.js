import { useState } from "react";
import Show from "./Show";
import '../App.css';

function App() {
    const [student , setStudent]= useState([
        {nom: "Brissi", prenom: "Abderahman", age: 20, filiere: "DDWFS"},
        {nom: "Alaoui", prenom: "Zineb", age: 22, filiere: "INFRASTRUCTURE"},
        {nom: "Rami", prenom: "Hicham", age: 30, filiere: "GESTION"},
        {nom: "Zahra", prenom: "Fatima", age: 28, filiere: "DDWFS"}
        ])
    const [filiere , setFiliere]=useState("")
    const [Filtre , setFiltre] = useState([]);
    const handleFilterClick = () => {
        setFiltre(
          student.filter(st => st.filiere === filiere)
        );
      };
 

   return (
     
     <div className="App">
        <input type="text"  onChange={(e)=>setFiliere(e.target.value.toUpperCase())}/> <br></br>
        <button onClick={handleFilterClick}>Filter</button>
        <Show  stagiaire={Filtre}/>
     </div>
   ) 
}

export default App 