import '../styles/form.css'


export default function Form(){

    let a = [];
    let i = 0;
    const Name=(e)=>{
        console.log(e.target.value)
    }
    
    return(
        <>
        <div className="form">
            <input  onChange={Name} type="text"  className="texts" placeholder="enter your name"/>
            <input type="number" className="texts" placeholder="enter your Age" />
            <input type="number"   className="texts" placeholder="enter your Phone Number" />
        </div>

        </>
    );
}
