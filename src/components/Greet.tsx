import React from 'react'

interface greetProps {
    name: string
}
function Greet({name}:greetProps) {
    return (
        <div>
            <h2>Welcome {name}</h2>
        </div>
    )
}

export default Greet
