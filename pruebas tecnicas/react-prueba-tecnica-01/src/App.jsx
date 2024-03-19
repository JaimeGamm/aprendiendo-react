import {useEffect, useState} from 'react'
import {getRandomFact} from './services/facts.js'
import './App.css'


//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firsWord}?size=50&color=red&json=true`
export default function App (){
    const [fact, setFact] =  useState()
    const [imgenUrl, setImageUrl] = useState(null)

    //para recupera la cita de la pagina
    useEffect(() =>{
        getRandomFact().then(newFact=>setFact(newFact))
    },[])

    //para cargar la imagen
    useEffect(()=>{
        if(!fact)
        return
        const firstWord = fact.split(' ', 3).join(' ')
                console.log(firstWord)
                fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
                .then(res => {
                console.log(res)
                const {url} = res
                const url_cat = url.split('&')[0]
                setImageUrl(url_cat)
                }
                )
    },[fact])
    const handleClick = async () =>{
       const newFact = await getRandomFact()
       setFact(newFact)
    }
    return (
        <main>
            <h1>app de gatos</h1>
            <button onClick={handleClick}>Get new fact</button>
            <section>
                {fact&&<p>{fact}</p>}
                {imgenUrl&& <img src={imgenUrl} alt= {`cat ${fact}`}/>}

            </section>
        </main>
    )
}