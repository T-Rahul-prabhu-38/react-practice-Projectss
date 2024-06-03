import { useContext } from "react";
import { MyContext } from "../context/index";


const UserItem = () => {
    const context = useContext(MyContext);
    console.log(context)
    return(
        <>
            { context.activeState ? 
                context.users.map( user =>(
                        <div key={user.id}>
                            <div>Name:{user.name}</div>
                        </div>   
                ))
            :null}
            <button onClick={context.setActive}>Toggle it</button>
            <hr/>
            <button onClick={()=>context.addUser('Ron')}>Add user</button>
            <hr/>
            <button onClick={()=>context.setUsers(
                prevState => (
                    [
                        ...prevState,
                        {id:6,name:'Caroline'}
                    ]
                )
            )}>Add user</button>
        </>
    )
}

export default UserItem;