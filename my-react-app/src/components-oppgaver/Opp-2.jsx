import React, { useState } from 'react';

const Oppgave149 = () => {
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [evenNumbers, setEvenNumbers] = useState([]);
  const [singleNumber, setSingleNumber] = useState('');
  const [isEvenResult, setIsEvenResult] = useState('');

  const erPartall = (tall) => {
    return tall % 2 === 0;
  };

  const finnPartall = (array) => {
    return array.filter(erPartall);
  };

  const genererTilfeldigeTall = () => {
    const nyeTall = Array.from({ length: 10 }, () => 
      Math.floor(Math.random() * 100) + 1
    );
    setRandomNumbers(nyeTall);
    setEvenNumbers(finnPartall(nyeTall));
  };

  const sjekkEnkeltTall = () => {
    if (singleNumber === '' || isNaN(singleNumber)) {
      alert('Vennligst skriv inn et gyldig tall');
      return;
    }
    
    const tall = parseInt(singleNumber);
    const resultat = erPartall(tall);
    setIsEvenResult(resultat ? `${tall} er et partall` : `${tall} er et oddetall`);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Oppgave 1.49 - Partallsjekker</h2>

      <div style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h3>a) Sjekk om et tall er partall</h3>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="number"
            value={singleNumber}
            onChange={(e) => setSingleNumber(e.target.value)}
            placeholder="Skriv et tall"
            style={{
              padding: '8px',
              width: '200px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginRight: '10px'
            }}
          />
          <button
            onClick={sjekkEnkeltTall}
            style={{
              padding: '8px 16px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Sjekk tall
          </button>
        </div>
        {isEvenResult && (
          <div style={{
            padding: '10px',
            backgroundColor: '#f8f9fa',
            border: '1px solid #dee2e6',
            borderRadius: '4px'
          }}>
            <strong>Resultat:</strong> {isEvenResult}
          </div>
        )}
      </div>

      <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h3>b) Finn partall i et array</h3>
        <button
          onClick={genererTilfeldigeTall}
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
          Generer 10 tilfeldige tall
        </button>

        {randomNumbers.length > 0 && (
          <div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Alle genererte tall:</strong>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '5px', 
                marginTop: '5px' 
              }}>
                {randomNumbers.map((tall, index) => (
                  <span
                    key={index}
                    style={{
                      padding: '5px 10px',
                      backgroundColor: erPartall(tall) ? '#d4edda' : '#f8d7da',
                      border: '1px solid',
                      borderColor: erPartall(tall) ? '#c3e6cb' : '#f5c6cb',
                      borderRadius: '4px',
                      color: erPartall(tall) ? '#155724' : '#721c24'
                    }}
                  >
                    {tall}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <strong>Partall funnet:</strong>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '5px', 
                marginTop: '5px' 
              }}>
                {evenNumbers.length > 0 ? (
                  evenNumbers.map((tall, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '5px 10px',
                        backgroundColor: '#d4edda',
                        border: '1px solid #c3e6cb',
                        borderRadius: '4px',
                        color: '#155724'
                      }}
                    >
                      {tall}
                    </span>
                  ))
                ) : (
                  <span style={{ color: '#6c757d' }}>
                    Ingen partall funnet i arrayet
                  </span>
                )}
              </div>
            </div>

            <div style={{ 
              marginTop: '15px', 
              padding: '10px',
              backgroundColor: '#e9ecef',
              borderRadius: '4px'
            }}>
              <strong>Statistikk:</strong><br />
              Totalt antall tall: {randomNumbers.length}<br />
              Antall partall: {evenNumbers.length}<br />
              Antall oddetall: {randomNumbers.length - evenNumbers.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Oppgave149;