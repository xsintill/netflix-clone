import React from 'react';

import jumboData from './fixtures/jumbo';
import Jumbotron from './components/jumbotron';

export default function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map((jumbo)=>(
        <Jumbotron key={jumbo.id} direction={jumbo.direction}>
          <p>hello</p>
        </Jumbotron>)
      )}
    </Jumbotron.Container>
  );
  
}