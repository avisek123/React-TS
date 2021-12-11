interface profileProps {
    name?: string
    age: number
    status:'Coder'| 'Manager' | 'Admin'
 
}
function Profile({name,age,status}: profileProps) {
    return (
        <div>
            I Am {name || 'user'} , {age} years old and I am {status}
        </div>
    )
}

export default Profile
