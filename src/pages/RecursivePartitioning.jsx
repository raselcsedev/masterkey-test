import React, { useState } from 'react';

const getRandomColor =() => {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

const RecursivePartitioning =() => {
  const [layout, setLayout] = useState([{ color: getRandomColor(), size: '100%', direction: null }]);

  const splitPartition = (index, direction) => {
    const newLayout = [...layout];
    const newColor = getRandomColor();

    if (direction === 'V') {
      newLayout.splice(index, 1, { color: layout[index].color, size: '50%' }, { color: newColor, size: '50%' });
    } else if (direction === 'H') {
      newLayout.splice(index, 1, { color: layout[index].color, size: '50%' });
      newLayout.splice(index + 1, 0, { color: newColor, size: '50%' });
    }

    setLayout(newLayout);
  }; 

  const removePartition = (index) => {
    const newLayout = [...layout];
    newLayout.splice(index, 1);
    setLayout(newLayout);
  };

  const renderPartitions = () => {
    return layout.map((partition, index) => (
      <div key={index} className="partition" style={{ backgroundColor: partition.color, flexBasis: partition.size, flexDirection: partition.direction }}>
        {layout.length > 1 && (
          <button onClick={() => removePartition(index)} className="remove-button">-</button>
        )}
        <div className="controls">
          <button onClick={() => splitPartition(index, 'V')}>V</button>
          <button onClick={() => splitPartition(index, 'H')}>H</button>
        </div>
      </div>
    ));
  };

  return (
    <div className="recursive">
      <div className="layout">
        {renderPartitions()}
      </div>
    </div>
  );
}

export default RecursivePartitioning;