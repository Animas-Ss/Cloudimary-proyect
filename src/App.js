import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navegation } from './components/Navegation';
import { Home } from './pages/Home';
import { Camara } from './pages/Camara';
import { Remove} from './pages/Remove';
import { Perfil } from './pages/Perfil';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navegation />
        <Routes>
          <Route exat path='/' element={<Home />} />
          <Route path='/camara' element={<Camara />} />
          <Route path='/remove' element={<Remove/>}/>
          <Route path='/perfil' element={<Perfil/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
