import { Route, Routes } from 'react-router-dom';
import './App.css';
import Docs from './Components/Docs';
import EditDocs from './Components/EditDocs';
import {app, database } from './Components/firebaseConfig';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Docs database={database}/>}/>
      <Route path='/editdoc/:id' element={  <EditDocs database={database} />}/>
    </Routes>

  );
}

export default App;
