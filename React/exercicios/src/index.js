import React from 'react'
// import React, {aqui dentro pode ser importada outras coisas dentro de react} from 'react'
import ReactDOM from 'react-dom'

// import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Alzimar" sobrenome="Sousa">
        <Filho nome="Alan" />
        <Filho nome="Alvaro" />
        <Filho nome="Thayna" />
        </Pai>
    </div>,
    document.getElementById('root'))