import React from 'react'
interface personProps {
    name:{
        fName:string,
        lName:string
    }
}
function Person({name}:personProps) {
    return (
        <div>
            <h2>I am {name.fName} {name.lName}</h2>
            
        </div>
    )
}

export default Person
