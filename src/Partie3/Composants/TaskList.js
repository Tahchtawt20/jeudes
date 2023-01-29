import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import {delTask} from '../Config/action'
function TaskList() {
    const Tache = useSelector((data)=>data.task);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(delTask(id))
    }
    return (
        <div>
            <p>
                <input type="text"></input>
                <Link to="/Ajouter">
                    <button>Add Taks</button>
                </Link>
            </p>
            <table>
                <tbody>
                    {Tache.map((task, index)=> {
                            return (
                            <tr key={index}>
                                <td>{task.name}</td>
                                <td>
                                    <Link to={`/Modifier/${task.id}`}>
                                        <button>Update</button>
                                    </Link>
                                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                                </td>
                            </tr>
                            )
                        }) }
                </tbody>
            </table>
        </div>
    )
}
export default TaskList