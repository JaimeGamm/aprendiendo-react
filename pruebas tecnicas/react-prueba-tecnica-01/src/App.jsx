import {useEffect, useState} from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firsWord}?size=50&color=red&json=true`
export default function App (){
    const [fact, setFact] =  useState()
    const [imgenUrl, setImageUrl] = useState(null)
    useEffect(()=>{
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
                const { fact } = data
                setFact(fact)
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
                    
                })
              
    },[])
    return (
        <main>
            <h1>app de gatos</h1>
            <section>
                {fact&&<p>{fact}</p>}
                {imgenUrl&& <img src={imgenUrl} alt= {`cat ${fact}`}/>}

            </section>
        </main>
    )
}