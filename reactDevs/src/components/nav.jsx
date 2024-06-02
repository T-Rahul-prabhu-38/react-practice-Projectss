
export const navItems = [
    {id:"1",link:"/articles",title:"Articles"},
    {id:"2",link:"/sports",title:"Sports"},
    {id:"3",link:"/music",title:"Music"},
    {id:"4",link:"/art",title:"Art"},
    {id:"5",link:"/history",title:"History"},
]
const Nav = () => {
    return(
        <nav className="mainNav">
            <ul>
                { navItems.map( item => (
                    <li className="navItem" key={item.id}>
                        <a href={item.link}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;