import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

function App() { 

  const times = [  //tipos
    {
      nome: 'Hot Coffee',
      corPrimaria: '#DEB887',
      corSecundaria: '#CD853F'
    },
    {
      nome: 'Iced Coffee',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFE4B5'
    }
  ]

  const [cafes, setCafes] = useState([]) 

  const aoNovoCafeAdicionado = (cafe) => {
    debugger
    console.log(cafe)
    setCafes([...cafes, cafe])
  }

  return ( 
    <div className="App">                                                                                         {/* JSX */}
      <Banner />                                                                                                  {/* JSX */}
      <Formulario times={times.map(tipo => tipo.nome)} aoCafeCadastrado={cafe => aoNovoCafeAdicionado(cafe)} />   {/* JSX */}
    

    {times.map(time => <Time                                                                                       // JS
        key={time.nome}                                                                                            // JS
        nome={time.nome}                                                                                           // JS
        corPrimaria={time.corPrimaria}                                                                             // JS
        corSecundaria={time.corSecundaria}                                                                         // JS
        cafes={cafes.filter(cafe => cafe.tipo == time.nome)} />)}                                                {/* JSX */}
        <Rodape />
    </div> 
  );
}

export default App;
