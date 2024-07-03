import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
    const formatUserName = (userName) => `@${userName}`
    return (
        <div className='App'>
            <TwitterFollowCard formatUserName={formatUserName} name="Lionel Messi"/>
            <TwitterFollowCard formatUserName={formatUserName} userName="midudev" name="Miguel Angel Duran" initialIsFollowing/>
            <TwitterFollowCard formatUserName={formatUserName} userName="miakhalifa" name="Mia K" initialIsFollowing={false}/>
            <TwitterFollowCard formatUserName={formatUserName} userName="leomessisite" name="Lionel Messi"initialIsFollowing/>
        </div>
    )
}