import { useState } from 'react';
import Navigation from './nav';

const Header = () => {

    const[keyword,setKeyWord] = useState('');

    const onChangeHandler = (event) => {
        setKeyWord(event.target.value);
    }

    return(
        <header>
            <div className="logo">Awesome News</div>
            <input onChange={onChangeHandler} />
            the key word is {keyword} 
            <Navigation/>
        </header>
    )
}
    
export default Header;