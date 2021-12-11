import React from 'react'
interface profileProps {
    name: string
 
}
function Profile(props: profileProps) {
    return (
        <div>
            I Am {props.name} 
        </div>
    )
}

export default Profile
