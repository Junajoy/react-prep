import React, { useEffect, useState } from 'react';

export default function Destination({ id, name, onRemove }) {
  const [destinationData, setDestinationData] = useState(null);

  useEffect(() => {  
      setDestinationData({ description: `Info ${name}!` });
    
  }, [name]);

  return (
    <div style={{ border: '1px solid blue', margin: '5px', padding: '5px' }}>
      <h3>{name}</h3>
      {destinationData ? (
        <p>{destinationData.description}</p>
      ) : (
        <p>Loading destination info...</p>
      )}
      <button onClick={() => onRemove(id)}>Remove</button>
    </div>
  );
}
