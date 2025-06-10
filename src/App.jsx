// src/App.js
import FormularioSinPadding from './FormularioSinPadding';
import FormularioConPadding from './FormularioConPadding';
import './App.css'; // Estilos generales de la app

function App() {
  return (
    <div className="App">
      <h1>Ejemplos de Padding en React</h1>

      {/*<h2>Formulario Sin Padding (Contenido pegado)</h2>
      <FormularioSinPadding />

      <hr />*/}

      <h2>Formulario Con Padding (Contenido espaciado)</h2>
      <FormularioConPadding />
    </div>
  );
}

export default App;