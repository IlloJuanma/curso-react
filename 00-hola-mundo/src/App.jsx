import './App.css'
import { TwitterFollowCard } from './assets/TwitterCard'
export function App() {
    const users = [
        {
            userName: 'juanma',
            name: 'Juanma Rodríguez',

        },
        {
            userName: 'rosa',
            name: 'Rosa Melano',
        },
        {
            userName: 'elonmusk',
            name: 'Elon Musk',
        },
        {
            userName: 'snake',
            name: 'David Hayter',
        }
    ]

    // const formatUserName = (userName) => `@${userName}`
    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name } = user
                    return (
                        <TwitterFollowCard
                        // Key es un indentificador unico para ese elemento. Necesita saber a que elemento se refiere
                            key={userName}
                            userName={userName}
                            name={name}
                        />
                    )
                })
            }
        </section>
    )
}