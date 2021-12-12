import React from "react"

interface profileProps {
    name?: string
    age: number
    status:'Coder'| 'Manager' | 'Admin'
    children?:React.ReactNode
 
}
const  Profile =({name,age,status,children}: profileProps) =>{
    return (
        <div>
            I Am {name || 'user'} , {age} years old and I am {status}
            <p>{children}</p>
        </div>
    )
}

export default Profile
