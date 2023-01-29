import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import {deleteTask} from '../Config/actions'
function TaskList() {
    const Tache = useSelector((data)=>data.task);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }
    return (
        <div>
            <p>
                <input type="text"></input>
                <Link to="/Ajouter">
                    <button>Add Task</button>
                </Link>
            </p>
            <table>
                <tbody>
                    {Tache.map((t, index)=> {
                            return (
                            <tr key={index}>
                                <td>{t.name}</td>
                                <td>
                                    <Link to={`/Modifier/${t.id}`}>
                                        <button>Update</button>
                                    </Link>
                                    <button onClick={() => handleDelete(t.id)}>Delete</button>
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