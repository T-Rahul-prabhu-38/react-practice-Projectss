import { useState, useMemo } from 'react'


const Calculation = () =>{
    const [calc,setCalc] = useState(0);
    const [blocks,addBlocks] = useState([1,56,34]);
    const results = useMemo(()=> multiply(calc),[calc])
    

    const addBlockHandler = () => {
        addBlocks(prevState=>[
            ...prevState,
            Math.floor(Math.random() * 100)
        ])
    }

    const calculate = () => {
        let random =  Math.floor(Math.random() * 100);
        setCalc(random)
    }

    return(
        <>
            <h3>Blocks</h3>
            { blocks.map((block,i)=>(
                <div key={i}>{block}</div>
            ))}
            <button onClick={addBlockHandler}>Add block</button>
            <hr/>
            Calc:{results}
            <br/>
            <button onClick={calculate}>RAND</button>
        </>
    )
}


const multiply = (calc) => {
    for(let i = 0; i < 1000000000;i++){
        calc += 1;
    }
    return calc;
} 


export default Calculation;