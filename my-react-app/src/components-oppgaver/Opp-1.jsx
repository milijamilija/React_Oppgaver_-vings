import React, { useState } from 'react';

const CentimeterToInches = () => {
  const [centimeters, setCentimeters] = useState('');
  const [inches, setInches] = useState('');

  const convertToInches = () => {
    if (centimeters === '' || isNaN(centimeters)) {
      alert('Vennligst skriv inn et gyldig tall for centimeter');
      return;
    }
    
    const cm = parseFloat(centimeters);
    const inchesValue = cm / 2.54;
    setInches(inchesValue.toFixed(2));
  };

  const handleInputChange = (event) => {
    setCentimeters(event.target.value);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Konverter centimeter til tommer</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="cmInput" style={{ display: 'block', marginBottom: '5px' }}>
          Lengde i centimeter:
        </label>
        <input
          id="cmInput"
          type="number"
          value={centimeters}
          onChange={handleInputChange}
          placeholder="Skriv lengde i cm"
          style={{
            padding: '8px',
            width: '100%',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
      </div>

      <button
        onClick={convertToInches}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '15px'
        }}
      >
        Konverter til tommer
      </button>

      {inches && (
        <div style={{
          padding: '10px',
          backgroundColor: '#f8f9fa',
          border: '1px solid #dee2e6',
          borderRadius: '4px'
        }}>
          <strong>Resultat:</strong> {centimeters} cm = {inches} tommer
        </div>
      )}
    </div>
  );
};

export default CentimeterToInches;