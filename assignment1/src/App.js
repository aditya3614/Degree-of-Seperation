import logo from './logo.svg';
import './App.css';
import {InputForm} from './Components/InputForm'
import {OutputForm} from './Components/OutputForm'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    
<div>
  <Routes>
    <Route path="/" element={<InputForm/>}/>
    <Route path="/OutputForm" element={<OutputForm/>}/>
  </Routes>
</div>

  );
}

export default App;
