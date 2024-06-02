import { useState, useEffect } from 'react'
import BlockComponent from './block';

const App = () => {
  let [count,setCount] = useState(0);
  let [animal,setAnimal] = useState('Dog');
  let [block,setBlock] = useState(false)

  const addOne  = () => setCount(count+1);
  const restOne = () => setCount(count-1)
  const setCero = () => setCount(0)


  
  useEffect(()=>{
    return ()=>{
      console.log('Use effect count')
    }
  },[count])


  // useEffect(()=>{
  //   console.log(count)
  // },[count,animal])


  // useEffect(()=>{
  //   console.log(animal)
  // },[animal])


  return(
    <>
      <h3>Count: {count}</h3>
      <button onClick={addOne}>+1</button>
      <button onClick={restOne}>-1</button>
      <button onClick={setCero}>Set to 0</button>
      <hr/>
      <h3>{animal}</h3>
      <button onClick={()=>setAnimal('Cat')}>Change animal</button>
      <hr/>
      { block ? 
        <BlockComponent/>
        :null
      }
      <button onClick={()=>setBlock(!block)}>Block</button>
    </>
  )
}

export default App;