import React, { useState } from 'react';

function getRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

const AlphabetInteraction = () => {
  const [outputString, setOutputString] = useState('');

  const handleTileClick = (letter) => {
    setOutputString((prevString) => {
      const newString = prevString + letter;

      const regex = /(\w)\1{2,}/g;
      const updatedString = newString.replace(regex, '_');

      return updatedString;
    });
  };
  const formatOutputString = (str) => {
    return str.split('').join('').replace(/,_/g, '_').replace(/, /g, ',');
  };
  const renderTiles = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return alphabet.map((letter, index) => (
      <div
        key={index}
        className="tile"
        style={{ backgroundColor: getRandomColor() }}
        onClick={() => handleTileClick(letter)}
      >
        {letter}
      </div>
    ));
  };

  return (
    <div className="app">
      <div id="outputString">OutString :  "{formatOutputString(outputString)}"</div>
      <div className="grid">{renderTiles()}</div>
    </div>
  );
}

export default AlphabetInteraction;
