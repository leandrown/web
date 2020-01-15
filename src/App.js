import React, { useState } from 'react';


// Componente: Bloco isolado de HTML, CSS e JS, o qual nao interfere no restante da aplicacao
// Sempre com primeira letra maiuscula, o componente eh uma funcao que retorna algum
// conteudo HTML, CSS ou mesmo JavaScript
// Como regra, o React usa sempre UM componente por arquivo

// Propriedade: Informacoes que um componente PAI passa para o componente FILHO
// Caracteristica do componente (atributos em HTML)
// NOTA: quando mais de um componente eh inserido dentro do render() deve-se usar um container,
// geralmente usando uma tag <div></div>, porem isso pode atrapalhar a estilizacao em alguns casos.
// Como alternativa, pode ser usado o conceito de fragment, usando tags vazias ' <></> '

// Estado: Informacoes mantidas pelo componente (Lembrar: conceito de imutabilidade)
// Informacao que o componente vai manipular, Nunca altera uma informacao do estado diretamente.
// Usamos sempre uma funcao auxiliar que vai dar a opcao para alterar o estado.

function App() {
   const [counter, setCounter] = useState(0);

   function incrementCounter() {
      setCounter(counter + 1);
   }

  return (
      <>
         <h1>Contador: {counter}</h1>
         <button onClick={incrementCounter}>Incrementar</button>
      </>
  );
}

export default App;
