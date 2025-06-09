import { useState } from 'react';
import { Container } from './Container';

function App() {
  const [formData, setFormData] = useState({
    campo1: '',
    campo2: '',
    campo3: '',
    campo4: '',
    campo5: '',
    campo6: '',
    campo7: '',
    campo8: '',
    campo9: '',
    campo10: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((campo, index) => (
          <div key={index}>
            <label htmlFor={campo}>{campo}:</label>
            <input
              id={campo}
              type="text"
              name={campo}
              value={formData[campo]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
}

export default App;
