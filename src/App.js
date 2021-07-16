import logo from './logo.svg';
import './App.css';
import { useToggle } from './context/ToggleProvedor';
import ComponenteFilho from './components/ComponenteFilho';

function App() {
  const { estadoPai, handleClickEstadoPai } = useToggle();
  return (
   <div>
      <div>
        <h1>Componente Pai</h1>
        <button onClick={handleClickEstadoPai} >Clique aqui</button>
        {estadoPai&&<p>aberto</p>}
        <ComponenteFilho />
      </div>
   </div>
    
  );
}

export default App;
