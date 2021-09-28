import React from 'react'
import Filho from './Filho'

export default props =>
     <div>
         <h1>{props.nome} {props.sobrenome}</h1>
         <h2>Filhos</h2>
         <ul>
             <Filho nome="Pedro" sobrenome={props.sobrenome} />
             <Filho {...props} /> {/* Operador SPREAD, a partir dele eu posso pegar os componentes do pai e aplicar ao filho */} 
             <Filho {...props} nome="Carla" />
         </ul>
     </div>