import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../App.css';
import AjtTach from './Composants/AjtTach';
import TaskList from './Composants/TaskList';
import UpTask from './Composants/UpTask';
function Affichage() {
  return (
    <div style={{paddingLeft:40}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/Ajouter' element={<AjtTach />} />
          <Route path='/Modifier/:id' element={<UpTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Affichage;
