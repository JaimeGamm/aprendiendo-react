
import './App.css'
import responseMovies from './mocks/with-results.json'
import withoutResult from './mocks/No_results.json'
import {Movies} from './components/Movies.jsx'

function App() {
  const movies = responseMovies.Search
  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input type="Avengers, Star wars..." />
          <button type='submit'>Buscar</button>
        </form> 
      </header>
      <main>
        <Movies movies = {movies} />
      </main>  

    </div>
  )
}

export default App
