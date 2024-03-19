import {useCatFact} from './hooks/useCatFact'
import {useCatImage} from './hooks/useCatImage.js'
import './App.css'

//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firsWord}?size=50&color=red&json=true`

export default function App (){
    const {fact,refreshFact} = useCatFact()
    const {imgenUrl} = useCatImage({fact})
    
    const handleClick = async () =>{
        refreshFact()
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