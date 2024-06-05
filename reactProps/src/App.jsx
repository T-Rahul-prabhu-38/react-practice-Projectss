import { useState } from "react";

import {CORE_CONCEPTS} from "./data";
import { EXAMPLES } from "./data";
import Header from "./components/header";
import CoreConcepts from "./components/coreconcepts";
import TabButton from "./components/buttons";
import { label } from "three/examples/jsm/nodes/Nodes.js";


function App() {

  const[tabContent,settabContent] = useState();

  function selectHandler(label){
    console.log(label);
    
    settabContent(label);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          {/* {CORE_CONCEPTS.map((conceptItem)=>{
              <CoreConcepts {...conceptItem} />
          })} */}
          <CoreConcepts
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}  
            image = {CORE_CONCEPTS[0].image}
          />
          <CoreConcepts {... CORE_CONCEPTS[1]}/>
          <CoreConcepts {...CORE_CONCEPTS[2]}/>
          <CoreConcepts {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
        <section id="examples">
          <h2>examples</h2>
          <menu>
            <TabButton isSelected={tabContent==='components'} onSelect={()=>selectHandler('components')}>components</TabButton>
            <TabButton isSelected={tabContent==='jsx'} onSelect={()=>selectHandler('jsx')}>JSX</TabButton>
            <TabButton isSelected={tabContent==='props'} onSelect={()=>selectHandler('props')}>Props</TabButton>
            <TabButton isSelected={tabContent==='state'} onSelect={()=>selectHandler('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            {!tabContent ? 
              <p>Eplore now!</p> 
              :
              <>
                 <h3>{EXAMPLES[tabContent].title}</h3>
              <p>{EXAMPLES[tabContent].description}</p>
                <pre>
                  <code>
                    {EXAMPLES[tabContent].code}
                  </code>
                </pre>
              </>
            
            } 
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
