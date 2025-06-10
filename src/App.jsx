// src/App.js
import { Container } from '@kustomer/apps-platform'; // Asegúrate de importar los componentes necesarios
import FormularioSinPadding from './FormularioSinPadding';
import FormularioConPadding from './FormularioConPadding';
import './App.css'; // Estilos generales de la app

function App() {
  return (
    <Container usePadding={true}>
      <div className="App">
        <h1>Ejemplos de Padding en React</h1>

        <h2>Formulario Sin Padding (Contenido pegado)</h2>
        <FormularioSinPadding />

        <hr />

        <h2>Formulario Con Padding (Contenido espaciado)</h2>
        <FormularioConPadding />
      </div>
    </Container>
  );
}

export default App;