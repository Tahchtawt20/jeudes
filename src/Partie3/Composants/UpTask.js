import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { updateTask } from "../Config/actions"
import { useNavigate } from "react-router-dom";
import { useState } from "react"

function UpTask() {
    const {id} = useParams()
    const Tache = useSelector(data=>data.task.find((t)=>t.id===parseInt(id)));
    const [nom, setNom] = useState(Tache.nom);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClick = () => {
        dispatch(updateTask({
            id:id,
            name:nom,
        }))
        navigate('/')
    }
    return (
        <form>
            <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} />
            <button onClick={handleClick}>Enregistrer</button>
        </form>
    )
}
export default UpTask