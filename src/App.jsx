import { useState, useEffect, useRef } from 'react';
import { Container } from './Container.jsx';
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

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
  };

  
  useEffect(() => {
    console.log('Estoy en iframe?', window.self !== window.top);
    const sendHeight = () => {
      if (formRef.current) {
        const height = formRef.current.scrollHeight;
        console.log('Enviando resize con altura...:', height);

        window.parent.postMessage(
          {
            type: 'kustomer:resize',
            height,
          },
          '*'
        );
      }
    };

    // Llamar al cargar
    sendHeight();

    // Observar cambios de tamaño
    const observer = new ResizeObserver(sendHeight);
    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  return (
    <Container>
      <form onSubmit={handleSubmit} ref={formRef}>
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
