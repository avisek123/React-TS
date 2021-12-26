import React from 'react'

interface greetProps {
    name: string,
    msgCount?: number,
    isLoggedIn?: boolean
}
function Greet({name,msgCount,isLoggedIn}:greetProps) {
    return (
        <div>
            <h2>{isLoggedIn ?  `Welcome ${name}, you have ${msgCount} Notifications` : `please login continue`}</h2>
        </div>
    )
}

export default Greet
