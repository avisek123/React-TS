import React from "react"

interface profileProps {
    name?: string
    age: number
    status:'Coder'| 'Manager' | 'Admin'
   
 
}
const  Profile :React.FC<profileProps>=  ({name,age,status,children}) =>{
    return (
        <div>
            I Am {name || 'user'} , {age} years old and I am {status}
            <p>{children}</p>
        </div>
    )
}

export default Profile
