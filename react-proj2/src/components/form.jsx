import '../styles/form.css'
import { useRef } from 'react';

export default function Form(){

    const inputtext = useRef();
    const handleName=()=>{
        console.log(inputtext.current.value)
    }

    return(
        <>
        <div className="form">
            <input ref={inputtext}  type="text"  className="texts" placeholder="enter your name"/>
            <button onClick={handleName}>click me</button>
            <input type="number" className="texts" placeholder="enter your Age" />
            <input type="number"   className="texts" placeholder="enter your Phone Number" />
        </div>

        </>
    );
}
