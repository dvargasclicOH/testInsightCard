// src/components/FormularioSinPadding.jsx
import './Formulario.css'; // Usaremos este archivo CSS más adelante

function FormularioSinPadding() {
  return (
    <div className="card-like-element"> {/* Un div que simula una "tarjeta" o un contenedor */}
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

export default FormularioSinPadding;