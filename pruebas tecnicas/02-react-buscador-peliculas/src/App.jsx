
import './App.css'
import {useMovies} from './hooks/useMovies.js'
import {Movies} from './components/Movies.jsx'
import { useEffect, useState } from 'react'



function App() {
  const {movies} = useMovies()
  const [query , setQuery]  = useState('')
  const [error, setError] = useState(null)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({query})
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    console.log(newQuery)
    if(newQuery.startsWith(' ')) return 
    setQuery(event.target.value)

    if (newQuery ==='') {
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if(newQuery.length < 3){
      setError('la busqueda de bebe tener almenos 3 caraacteres')
      return
    }
    setError(null)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
            <input style={{border: '1px soid transpareent',
            borderColor: error ? 'red' : 'transparent'}}
            onChange={handleChange} value = {query} name ='query' placeholder="Avengers, Star wars..." />
          <button type='submit'>Buscar</button>
        </form> 
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main>
        <Movies movies = {movies} />
      </main>  

    </div>
  )
}

export default App
