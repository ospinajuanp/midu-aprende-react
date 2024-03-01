
export function TwitterFollowCard ({ userName, name, isFollowing}){
    return(
        
        <article className='tw-followCard'>
                <header className='tw-followCard-header'>
                    <img 
                    className='tw-followCard-avatar' 
                    src={`https://unavatar.io/${userName}`}
                    alt="" />
                    <div className='tw-followCard-info'>
                        <strong>{name}</strong>
                        <span>{userName}</span>
                    </div>
                </header>
                <aside className='tw-followCard-aside'>
                    <button type="button">Seguir{isFollowing || ""}</button>
                </aside>
            </article>
        )
}