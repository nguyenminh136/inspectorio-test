import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import Person from './components/Person/Person';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Person/:name' element={<Person />} />
        </Routes>
    </div>
  );
}

export default App;