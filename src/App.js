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

// import React, { useState } from 'react';
// import './App.css';

// function getRandomColor() {
//   // Generating a random color in hexadecimal format
//   return '#' + Math.floor(Math.random()*16777215).toString(16);
// }

// function App() {
//   const [outputString, setOutputString] = useState('');

//   const handleTileClick = (letter) => {
//     setOutputString((prevString) => {
//       // Append the clicked letter to the outputString
//       const newString = prevString + letter;

//       // Check for consecutive letters and replace if necessary
//       const regex = /(\w)\1{2,}/g;
//       const updatedString = newString.replace(regex, '_');

//       return updatedString;
//     });
//   };
//   const formatOutputString = (str) => {
//     return str.split('').join('').replace(/,_/g, '_').replace(/, /g, ',');
//   };
//   // const formatOutputString = (str) => {
//   //   const formattedString = str
//   //     .split('')
//   //     .map((letter) => `"${letter}"`)
//   //     .join(', ');

//   //   return `[${formattedString}]`;
//   // };
//   const renderTiles = () => {
//     const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
//     return alphabet.map((letter, index) => (
//       <div
//         key={index}
//         className="tile"
//         style={{ backgroundColor: getRandomColor() }}
//         onClick={() => handleTileClick(letter)}
//       >
//         {letter}
//       </div>
//     ));
//   };

//   return (
//     <div className="app">
//       <div id="outputString">OutString : "{formatOutputString(outputString)}"</div>
//       <div className="grid">{renderTiles()}</div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import './App.css';

// function getRandomColor() {
//   return '#' + Math.floor(Math.random()*16777215).toString(16);
// }

// function App() {
//   const [layout, setLayout] = useState([{ color: getRandomColor(), size: '100%', direction: null }]);

//   const splitPartition = (index, direction) => {
//     const newLayout = [...layout];
//     const newColor = getRandomColor();

//     if (direction === 'V') {
//       newLayout.splice(index, 1, { color: layout[index].color, size: '50%' }, { color: newColor, size: '50%' });
//     } else if (direction === 'H') {
//       newLayout.splice(index, 1, { color: layout[index].color, size: '50%' });
//       newLayout.splice(index + 1, 0, { color: newColor, size: '50%' });
//     }

//     setLayout(newLayout);
//   }; 
  
//   // const splitPartition = (index, direction) => {
//   //   const newLayout = [...layout];
//   //   const newColor = getRandomColor();

//   //   if (direction === 'V') {
//   //     newLayout[index].direction = 'row';
//   //     newLayout.splice(index + 1, 0, { color: newColor, size: '50%', direction: null });
//   //   } else if (direction === 'H') {
//   //     newLayout[index].direction = 'column';
//   //     newLayout.splice(index + 1, 0, { color: newColor, size: '50%', direction: null });
//   //   }

//   //   setLayout(newLayout);
//   // };

//   const removePartition = (index) => {
//     const newLayout = [...layout];
//     newLayout.splice(index, 1);
//     setLayout(newLayout);
//   };

//   const resizePartition = (index, newSize) => {
//     const newLayout = [...layout];
//     newLayout[index].size = newSize;
//     setLayout(newLayout);
//   };

//   const renderPartitions = () => {
//     return layout.map((partition, index) => (
//       <div key={index} className="partition" style={{ backgroundColor: partition.color, flexBasis: partition.size, flexDirection: partition.direction }}>
//         {layout.length > 1 && (
//           <button onClick={() => removePartition(index)} className="remove-button">-</button>
//         )}
//         <div className="resize-handle" onMouseDown={(e) => handleResizeStart(e, index)}></div>
//         <div className="controls">
//           <button onClick={() => splitPartition(index, 'V')}>V</button>
//           <button onClick={() => splitPartition(index, 'H')}>H</button>
//         </div>
//       </div>
//     ));
//   };

//   const handleResizeStart = (e, index) => {
//     const initialSize = layout[index].size;
//     const initialPosition = e.clientY;
//     const direction = layout[index].direction;

//     const handleMouseMove = (e) => {
//       const delta = e.clientY - initialPosition;
//       let newSize;
//       if (direction === 'column') {
//         newSize = `calc(${initialSize} + ${delta}px)`;
//       } else {
//         newSize = `calc(${initialSize} + ${delta}px)`;
//       }
//       resizePartition(index, newSize);
//     };

//     const handleMouseUp = () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseup', handleMouseUp);
//     };

//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseup', handleMouseUp);
//   };

//   return (
//     <div className="app">
//       <div className="layout">
//         {renderPartitions()}
//       </div>
//     </div>
//   );
// }

// export default App;
