
import { useDispatch , useSelector} from 'react-redux';
import { useState } from 'react';
import { addTask } from '../Config/actions';
import { useNavigate} from "react-router-dom"

function AjtTach() { 
    const count = useSelector(data => data.task.length);
    const [nom,setNom]=useState("")
    const dispatch=useDispatch()
    const navigator=useNavigate()
    const handelSubmit = () => {
        dispatch (addTask({
            id:count+1,
            name:nom
        }));
        navigator('/')
    }
    
    return(
        
        <form className='App'>
            <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} ></input>
            <button onClick={handelSubmit} > Add task</button>
        </form>   
        
        )
     
}
        
    export default AjtTach