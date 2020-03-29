import React, { useState }from 'react';
import Header from './Header';

function App() {

  let [counter, setCounter] = useState(0);
  //Array [valor, funçãodeatualização]

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <>
      <Header title="Semana OmniStack" />
      <Header>Segundo Texto</Header>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </>
  );
}

export default App;
