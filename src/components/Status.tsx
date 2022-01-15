interface statusProps {
    status: 'online' | 'offline' ;
}
export const Status=({status}:statusProps)=>{
    let message;
    if(status==="online"){
        message="You are online";
    }else{
        message="You are offline";
    }
    return (
        <p>Status - {message}</p>
    )
}