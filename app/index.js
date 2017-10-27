import React from 'react'
import { render } from 'react-dom'

import './styles/base.css'

const App = () => (
  <div className="title">
    EC React - Semana 2: React Components
  </div>
)

render(
  <App />,
  document.getElementById('root')
)


//HOC: higher order components: es una funcion que recibe un componente react y retornar un componente basado en el componente q se le dió, va a mejorar
