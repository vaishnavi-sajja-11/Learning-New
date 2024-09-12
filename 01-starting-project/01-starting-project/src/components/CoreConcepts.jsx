import CoreConcept from "./CoreConcept";
import { CORECONCEPTS } from "../data";
import Section from "./Section.jsx";

function CoreConcepts (){
    return (
        <Section id="core-concepts" title="Core Concepts!">
          <ul>
            {CORECONCEPTS.map((concept)=>(
              <CoreConcept key = {concept.title}{...concept} />
            )
            )}
          {/* <CoreConcept 
          title= {CORECONCEPTS[0].title }
          description = {CORECONCEPTS[0].description }
          image={CORECONCEPTS[0].image}/>
          <CoreConcept {...CORECONCEPTS[1]}/>
          <CoreConcept {...CORECONCEPTS[2]}/>
          <CoreConcept 
          title= {CORECONCEPTS[3].title }
          description = {CORECONCEPTS[3].description }
          image={CORECONCEPTS[3].image}/> */}
          </ul>
          
        </Section>
    );
}

export default CoreConcepts;