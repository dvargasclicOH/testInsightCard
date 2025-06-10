import './Formulario.css'; // Importamos el archivo CSS

function FormularioConPadding() {
  return (
    // Aquí, la clase 'container-with-padding' simula el efecto de 'Container usePadding'
    <div className="container-with-padding"> 
      <h2>Información de Usuario</h2>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <button>Enviar</button>
    </div>
  );
}

export default FormularioConPadding;