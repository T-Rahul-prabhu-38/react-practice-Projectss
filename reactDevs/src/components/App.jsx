import { useState,useEffect } from 'react';
import '../styles/App.css'

export default function App() {
  const today = new Date();
  const seconds =  today.getSeconds();
  const minutes =  today.getMinutes();
  const hours   =  today.getHours();

  const [nowSec,setSec] = useState(seconds);
  const [nowMin,setMin] = useState(minutes);
  const [nowHrs,setHrs] = useState(hours);


function handleTime(){
  const today = new Date();
  const seconds =  today.getSeconds();
  const minutes =  today.getMinutes();
  const hours   =  today.getHours();

  setHrs(hours);
  setMin(minutes);
  setSec(seconds);
}


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const today = new Date();
  //     const seconds =  today.getSeconds();
  //     const minutes =  today.getMinutes();
  //     const hours   =  today.getHours();

  //     setHrs(hours);
  //     setMin(minutes);
  //     setSec(seconds);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>    
      <div className="boxes">
        <div className="box1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi sed veniam! Maxime et quasi, amet fuga doloribus, fugiat sequi rerum dolorem magnam rep
        erum dolorem magnam repellendus debitis reprehenderit odit odio alias iste error quas libero omnis, at id expedita! Harum architecto, deserunt, excepturi est quidem ab!</div>
        <div className="box1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi sed veniam! Maxime et quasi, amet fuga doloribus, fugiat sequi rerum dolorem magnam repellendus debitis reprehenderit odit odio alias iste error quas libero omnis, at id expedita! Harum architecto, deserunt, excepturi est quidem veritatis fuga accusamus provident blanditiis minima ab!</div>
        <div className="box1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi sed veniam! Maxime et quasi, amet fuga doloribus, fugiat sequi rerum dolorem magnam repellendus deitis reprehenderit odit odio alias iste error quas libero omnis, at id expedita! Harum architecto, deserunt, excepturi est quidem veritatis fuga accusamus provident blanditiis minima ab!</div>
      </div>
      <br />
      <br />
      <div className="dates">
        the current date is : {today.getDate()} : {today.getMonth()} : {today.getFullYear()} <br />
        <br />
        <button onClick={handleTime}>
          
          click me to get current time :
        </button>
        <span><br />{nowHrs} : {nowMin} : {nowSec}</span>
      </div>
    </>
  )
}

