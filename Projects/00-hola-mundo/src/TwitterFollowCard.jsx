import './App.css'
import { useState } from 'react'

export function TwitterFollowCard ({ userName = 'unknow', name, formatUserName, initialIsFollowing}) {
    const [isFollowing,setIsFollowing] = useState(initialIsFollowing)
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className = 'tw-followCard-header'>
                <img
                    className = 'tw-followCard-avatar'
                    alt="Avatar de midudev" 
                    src={`https://unavatar.io/${userName}`}/>
            </header>
        <div className = 'tw-followCard-info'>
            <strong>{name}</strong>
            <span className = 'tw-followCard-infoUserName'>{formatUserName(userName)}</span>
        </div>

        <aside>
            <button className = {buttonClassName} onClick={handleClick}>
                {text}
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
            </button>
        </aside>
        </article>
    )
}