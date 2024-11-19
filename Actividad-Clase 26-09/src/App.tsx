import React, {useState, useEffect, FC, FormEvent} from 'react';


const Ej_1: FC = () => {
  
  const [numeroSecreto, setNumeroSecreto] = useState<number>(
    Math.floor(Math.random() * 100) + 1
  );
  const [intento, setIntento] = useState <number>(0);
  const [mensaje, setMensaje] = useState <string>("");

  const envioForm = (e: FormEvent) => {
    e.preventDefault();

  if (intento < numeroSecreto ){
    setMensaje("Demaciado Bajo");
  } else if (intento > numeroSecreto ) {
    setMensaje("Demasiado Alto");
  } else {
    setMensaje("Correcto! adivinaste el nro");
  }
  }

  const handleRestartGame = () => {
    setNumeroSecreto(Math.floor(Math.random() * 100) + 1);
    setIntento(0);
    setMensaje('');
  };
return (
  <div> 
    <h1>Juego de Adivinanza de Números</h1>
      <p>Adivina un número entre 1 y 100</p>

      <form onSubmit={envioForm}>
        <input
          type="number"
          value={intento}
          onChange={(e) => setIntento(Number(e.target.value))}
          min="1"
          max="100"
          required
        />
        <button type="submit">Adivinar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
      <button onClick={handleRestartGame}>Reiniciar juego</button>
  </div>
);
};
export default Ej_1;