import Navigation from './nav';

const Header = () => {

    const onChangeHandler = (event) => {
        console.log(event.target.value);
    }

    return(
        <header>
            <div 
                className="logo"
            >Awesome News</div>
            <input
                onChange={onChangeHandler}
            />
            <Navigation/>
        </header>
    )
}
    
export default Header;