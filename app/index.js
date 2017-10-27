import React from 'react'
import { render } from 'react-dom'

import './styles/base.css'
// no se puede renderizra objetos como hijos

const App = ({ movie }) => {
  const movie={
    title,
    rating,
    length,
  }
  return (
    <div className="title">
      {title} {rating} {length}
    </div>
  )
}

App.propTypes = { //proptypes es una libreria(se instala con npm prototypes) sirve para evitar errores, para asegurarnos que estamos ingresando y recibiendo datos de un tipo determinado, codigo legible, para ayudar al sgte developer
  movie: PropTypes.shape({ //shape permite validar las propiedades de un objeto
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    length: PropTypes.number.isRequired
  })
}

render(
  <App
    movie = {{
      title: 'Thor: Ragnarok',
      rating: 5,
      length: 120
    }}
  />,
  document.getElementById('root')
)
