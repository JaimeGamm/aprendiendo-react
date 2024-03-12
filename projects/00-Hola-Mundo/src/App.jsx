import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard'
export function App () {
    const formatUserName = (userName) => `@${userName}`
    return (
        <>
            <TwitterFollowCard  
            formatUserName = {formatUserName}
            isFollowing = {true} 
            userName = "miduDev" 
            name = "Miguel Angel Duran"/>
            <TwitterFollowCard 
            formatUserName = {formatUserName}
            isFollowing = {false} 
            userName = "minnuDev" 
            name = "Miguel Angel Duran"/>
        </>
    )
}