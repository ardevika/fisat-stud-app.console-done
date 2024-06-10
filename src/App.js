
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddStudent from './component/AddStudent';
import SearchStudent from './component/SearchStudent';
import ViewAll from './component/ViewAll';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<AddStudent/>}/>
      <Route path='/SearchStudent' element={<SearchStudent/>}/>
      <Route path='/ViewAll' element={<ViewAll/>}/>
  
     
      </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
