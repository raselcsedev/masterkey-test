import { useState } from 'react';
import './App.css';
import AlphabetInteraction from './pages/AlphabetInteraction';
import RecursivePartitioning from './pages/RecursivePartitioning';

function App() {
  const [recursive, setRecursive] = useState(false)
  const [alphabet, setAlphabet] = useState(false)

  const handleRecursiveClick = () => {
    setRecursive(true);
    setAlphabet(false);
  };

  const handleAlphabetClick = () => {
    setRecursive(false);
    setAlphabet(true);
  };
  return (
    <div className="App">
      <div className='container'>
        <button onClick={handleRecursiveClick} className="button green">Show Recursive Partitioning</button>
        <button onClick={handleAlphabetClick} className="button yellow">Show Alphabet Interaction</button>
      </div>
      {recursive && <RecursivePartitioning />}
      {alphabet && <AlphabetInteraction />}
    </div>
  );
}

export default App;
