import { useState,useCallback,useMemo } from "react";
import Title from "./title";
import Count from "./count";
import CountBtn from "./countBtn";
import Age from "./age";
import AgeBtn from "./ageBtn";
import Form from "./form";


const App = () => {

    const[count,setCount] = useState(0);
    const[age,setAge] = useState(10);


    const handleCount = useCallback(()=>{
        setCount(count+1)
    })


    const handleAge = useCallback(() => {
        setAge(age+1)
    })

    return(
    <>
        <Title/>
        <Count count={count}/>
        <CountBtn handleCount={handleCount}/>
        <Age age={age}/>
        <AgeBtn handleAge={handleAge}/>
        <br />
        <hr /><br />
        <Form />
    </>
  )
}

export default App;