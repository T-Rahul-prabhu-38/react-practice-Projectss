import { useState } from 'react';
import Navigation from './nav';

const Header = (props) => {

    const[keyword,setword] = useState('');

    return(
        <header>
            <div className="logo">Awesome News</div>
            <input onChange={props.getKeyWords} />
            the key word is {keyword} 
            <Navigation/>
        </header>
    )
}
    
export default Header;