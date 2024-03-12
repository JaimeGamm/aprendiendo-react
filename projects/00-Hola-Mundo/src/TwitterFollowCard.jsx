export function TwitterFollowCard({formatUserName, userName, name, isFollowing}){
    const imageSrc = `https://unavatar.io/${userName}`
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="El avatar de minudev" src={imageSrc}></img>
                <div className='tw-followCard-info'>
                    <strong className='tw-followCard-infoUserName'>{name}</strong>
                    <span>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    seguir
                </button>
            </aside>
        </article>
    ) 

}