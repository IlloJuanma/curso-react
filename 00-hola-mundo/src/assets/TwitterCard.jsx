import {useState} from 'react'

export function TwitterFollowCard ({userName, name}) {
    // Estado del boton, actual y cambiar
    const [isFollowing, setIsFollowing] = useState(false)
    // Funcion para cambiar el estado del boton
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    // Ternario
    const text = isFollowing ? 'Siguiendo' : 'Seguir'

    // Clases para el botón
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="el avatar" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-unFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}