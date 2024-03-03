import { useState } from 'react'

export function TwitterFollowCard ({ formatUserName, userName, name, initialIsFollowing}){
    // const state = useState(false)
    // const isFollowing = state[0]
    // const setIsFollowing = state[1]
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text  = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw__followCard-button is__following'
        : 'tw__followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        
        <article className='tw__followCard'>
                <header className='tw__followCard-header'>
                    <img 
                    className='tw__followCard-avatar' 
                    src={`https://unavatar.io/${userName}`}
                    alt="" />
                    <div className='tw__followCard-info'>
                        <span className='tw__followCard-info-name'>
                            <strong>{name}</strong>
                        </span>
                        <span>{formatUserName(userName)}</span>
                    </div>
                </header>
                <aside>
                    <button className={buttonClassName} onClick={handleClick}>
                        <span className='tw__followCard-text'>
                                {text}
                        </span>
                        <span className='tw__followCard-stopFollow'>Dejar de seguir</span>
                        </button>
                </aside>
            </article>
        )
}