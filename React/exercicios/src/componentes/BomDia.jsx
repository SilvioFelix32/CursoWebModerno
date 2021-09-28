import React from 'react'
/* import React, {Fragment} from 'react' */

//"props" = propriedades passadas de um componente, nome padrão usado
export default props => 
 <div>
    <h1>Bom Dia {props.nome}!</h1> 
    <h2>Até breve!</h2>
</div>

/* [
    <h1 key='h1'>Bom Dia {props.nome}!</h1>, 
    <h2 key='h2'>Até breve!</h2>
] */


//React fragment não é renderizado no HTML
 /*    <React.Fragment>
        <h1>Bom Dia {props.nome}!</h1> 
        <h2>Até breve!</h2>
    </React.Fragment> */
/* 
    <Fragment>
        <h1>Bom Dia {props.nome}!</h1> 
        <h2>Até breve!</h2>
    </Fragment> */

    