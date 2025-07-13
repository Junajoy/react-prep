import React, { useState } from 'react';
import Destination from './Destination';

export default function Trip() {
  const [destinations, setDestinations] = useState([
    { id: 1, name: 'Paris' },
    { id: 2, name: 'Tokyo' },
    { id: 3, name: 'New York' },
  ]);

  const [newDestinationName, setNewDestinationName] = useState('');

  const addDestination = () => {
    if (newDestinationName.trim() === '') {
      alert('Destination name cannot be empty.');
      return;
    }

    const newId =
      destinations.length > 0
        ? Math.max(...destinations.map((d) => d.id)) + 1
        : 1;

    const newDestination = {
      id: newId,
      name: newDestinationName.trim(),
    };

    setDestinations([...destinations, newDestination]);
    setNewDestinationName('');
  };

  const removeDestination = (id) => {
    if (!destinations.find((d) => d.id === id)) {
      console.log(`Destination with id ${id} does not exist.`);
      return;
    }

    setDestinations(destinations.filter((d) => d.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Trip Itinerary</h2>

      <div style={{ marginBottom: '10px', marginLeft:'50px'}}>
        <input
          type="text"
          value={newDestinationName}
          placeholder="New destination name"
          onChange={(e) => setNewDestinationName(e.target.value)}
        />
        <button onClick={addDestination}>Add Destination</button>
      </div>

      {destinations.length === 0 ? (
        <p>No destinations added yet.</p>
      ) : (
        destinations.map((destination) => (
          <Destination
            key={destination.id}
            id={destination.id}
            name={destination.name}
            onRemove={removeDestination}
          />
        ))
      )}
    </div>
  );
}
