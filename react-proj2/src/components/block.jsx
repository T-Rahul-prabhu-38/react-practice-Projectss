import { useEffect } from "react";

const Block = () => {

    useEffect(()=>{
        console.log('Block created')

        return ()=>{
            console.log('Block removed')
        }
    })

    return(
        <div
            style={{
                background:'red',
                color:'white',
                margin:'10px'
            }}
        >
            I am a block
        </div>
    )
}

export default Block;