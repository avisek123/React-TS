interface OscarProps{
    children:React.ReactNode;
}
export const Oscar=({children}:OscarProps)=>{
    return (
        <div>
           
            <p>{children}</p>
        </div>
    )
}