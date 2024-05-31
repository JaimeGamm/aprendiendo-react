export function Seo ({
    title = 'Hola, hola', 
    description = 'Otra descrition'}) {
    return (
        <>
            <title>{title}</title>
            <meta name='description' content= {description}/>
        </>
    )
}