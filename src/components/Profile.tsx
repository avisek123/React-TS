interface profileProps {
    name?: string
    age: number
 
}
function Profile({name,age}: profileProps) {
    return (
        <div>
            I Am {name || 'user'} , {age} years old
        </div>
    )
}

export default Profile
