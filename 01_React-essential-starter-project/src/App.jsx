import { useState } from 'react';
import { EXAMPLES, CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import ReactFeatures from './components/ReactFeatures.jsx';
import ExampleButton from './components/ExampleButton.jsx';

function App() {
  const [exampleContent, setExampleContent] = useState();
  
  function HandleClick(example) {
    setExampleContent(example);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <ReactFeatures {...CORE_CONCEPTS[0]}/>
          <ReactFeatures {...CORE_CONCEPTS[1]}/>
          <ReactFeatures {...CORE_CONCEPTS[2]}/>
          <ReactFeatures {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
          <ExampleButton isSelected={exampleContent==='components'} clickFn={() => HandleClick('components')}>Components</ExampleButton>
          <ExampleButton isSelected={exampleContent==='jsx'} clickFn={() => HandleClick('jsx')}>JSX</ExampleButton>
          <ExampleButton isSelected={exampleContent==='props'} clickFn={() => HandleClick('props')}>Props</ExampleButton>
          <ExampleButton isSelected={exampleContent==='state'} clickFn={() => HandleClick('state')}>State</ExampleButton>
          </menu>
          {!exampleContent && <p>Please select the topic.</p>}
          {exampleContent && <div id="tab-content">
            <h3>{EXAMPLES[exampleContent].title}</h3>
            <p>{EXAMPLES[exampleContent].description}</p>
            <pre>
              <code>{EXAMPLES[exampleContent].code}</code>
            </pre>
          </div>}
        </section>
      </main>
    </div>
  );
}

export default App;
