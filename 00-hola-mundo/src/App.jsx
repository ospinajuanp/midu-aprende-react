import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'

const users = [
    {
        userName:'ospinajuanp',
        name:'Juan Pablo Ospina Restrepo',
        isFollowing:true
    },
    {
        userName:'midudev',
        name:'Miguel Angel Duran',
        isFollowing:false
    },
]

export function App (){
    const formatUserName = (userName)=> `@${userName}`

    return(
        <div className='App'>
            {
                users.map(user =>{
                    const {userName, name, isFollowing} = user
                    return(
                        <TwitterFollowCard formatUserName={formatUserName} userName={userName} name={name} initialIsFollowing={isFollowing} key={Math.random}/>
                    )
                })
            }
        </div>
    )
}