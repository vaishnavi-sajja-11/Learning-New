import {useState} from 'react';
import TabButton from './TabButton.jsx';
import { EXAMPLES} from '../data.js';
import Tabs from './Tabs.jsx';
import Section from './Section.jsx';

function Examples () {
     //let content = 'Please select a button !';
  const [topic , setTopic] = useState();

  function handleSelect(selectedButton){
    setTopic(selectedButton);
    //console.log(content);
  }
    return (
            
        <Section id="examples" title="Examples" >
        
        <Tabs ButtonsContainer = "menu" buttons={
            
            <>
            <TabButton onClick={() => handleSelect('components')} isSelected={(topic === "components")? true : false}>Components</TabButton>
            <TabButton onClick={() => handleSelect('jsx')} isSelected={(topic === "jsx")? true : false}>JSX</TabButton>
            <TabButton onClick={() => handleSelect('state')} isSelected={(topic === "state")? true : false}>State management</TabButton>
            <TabButton onClick={() => handleSelect('props')} isSelected={(topic === "props")? true : false}>Props</TabButton>
            </>
        }>
        {! topic && <p>"Please select a Button"</p>  }
        {topic &&
        <div id="tab-content">
         <h3>{EXAMPLES[topic].title}</h3>
          <p>{EXAMPLES[topic].description}</p>
          <pre>
            <code>
              {EXAMPLES[topic].code}
            </code>
          </pre>
        </div>  }
        </Tabs>
        
      </Section>
    );
}
export default Examples;
