import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import Person from './components/Person/Person';
import { ThemeProvider, createTheme } from '@mui/material/styles';
function App() {
  const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Person/:name' element={<Person />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
