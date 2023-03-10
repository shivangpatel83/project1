import './index.css';
import Home from './components/Home'
import AllModule from './components/AllModule';
import {Routes, Route} from 'react-router-dom'
// import Tabs from './components/Tab';

function App() {
  return (
 
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='module-list' element={<AllModule/>}></Route>
  </Routes>
   
  );
}

export default App;
