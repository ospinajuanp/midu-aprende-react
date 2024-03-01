import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'
export function App (){
    return(
        <div className='App'>
            <TwitterFollowCard userName="midudev" name="Miguel Angel Duran"/> 
            <TwitterFollowCard userName="ospinajuanp" name="Juan Pablo Ospina Restrepo"/> 
        </div>
    )
}