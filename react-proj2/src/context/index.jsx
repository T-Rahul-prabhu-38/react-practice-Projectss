import { createContext, useState } from 'react';


const MyContext = createContext();
const MyProvider = (props) => {
    const [active,setActive] = useState(true);
    const [users,setUsers] = useState([
        {id:1,name:"Francis"},
        {id:2,name:"Steve"},
        {id:3,name:"Miles"}
    ])


    const addUser = (name) => {
        setUsers(prevState => (
            [
                ...prevState,
                {id:4,name:name}
            ]
        ))
    }


    return(
        <MyContext.Provider value={{
            users:users,
            addUser:addUser,
            setUsers:setUsers,
            activeState:active,
            setActive: () => setActive(!active)
        }}>
            { props.children }
        </MyContext.Provider>
    )
}


export {MyContext,MyProvider}