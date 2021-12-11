import React from 'react'
type profileProps  ={
    name: string
    age: number
 
}
function Profile(props: profileProps) {
    return (
        <div>
            I Am {props.name} , {props.age} years old
        </div>
    )
}

export default Profile
