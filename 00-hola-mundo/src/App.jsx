import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'

export function App (){
    const formatUserName = (userName)=> `@${userName}`

    return(
        <div className='App'>
            <TwitterFollowCard formatUserName={formatUserName} initialIsFollowing userName="midudev" name="Miguel Angel Duran"/> 
            <TwitterFollowCard formatUserName={formatUserName} userName="ospinajuanp" name="Juan Pablo Ospina Restrepo"/>            
        </div>
    )
}