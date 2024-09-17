import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import NewUsers from './pages/NewUsers/NewUsers';
import ContentContainer from './components/ContentContainer/ContentContainer';

/**
 * Represents a main component that contains the app.
 *
 * @component
 * @returns {React.ReactElement} the whole application element.
 */

function App() {
  const [content, setContent] = useState(<NewUsers></NewUsers>);

  const changeContent = (content) => {
    setContent(content);
  };

    return (
    <>
    <Header reqContent={changeContent}></Header>
    <ContentContainer content={content}></ContentContainer>
    </>
  );
}

export default App;
