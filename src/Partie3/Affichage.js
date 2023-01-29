import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../App.css';
import AddTask from './Composants/AddTask';
import TaskList from './Composants/TaskList';
import UpTask from './Composants/UpTask';
function Affichage() {
  return (
    <div style={{paddingLeft:40}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/Ajouter' element={<AddTask />} />
          <Route path='/Modifier/:id' element={<UpTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Affichage;
