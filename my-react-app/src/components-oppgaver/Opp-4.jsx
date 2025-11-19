import React, { useState, useEffect } from 'react';

const Oppgave147 = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showFullDateTime, setShowFullDateTime] = useState(false);

  const ukedager = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'];
  
  const maneder = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dateMethods = [
    { method: 'getFullYear()', description: 'Returnerer året (4 siffer)' },
    { method: 'getMonth()', description: 'Returnerer måneden (0-11)' },
    { method: 'getDate()', description: 'Returnerer dagen i måneden (1-31)' },
    { method: 'getDay()', description: 'Returnerer ukedagen (0-6) hvor 0 er søndag' },
    { method: 'getHours()', description: 'Returnerer timen (0-23)' },
    { method: 'getMinutes()', description: 'Returnerer minutter (0-59)' },
    { method: 'getSeconds()', description: 'Returnerer sekunder (0-59)' },
    { method: 'getMilliseconds()', description: 'Returnerer millisekunder (0-999)' },
    { method: 'getTime()', description: 'Returnerer antall millisekunder siden 1. januar 1970' },
    { method: 'toDateString()', description: 'Returnerer dato som lesbar streng' },
    { method: 'toTimeString()', description: 'Returnerer tid som lesbar streng' },
    { method: 'toLocaleDateString()', description: 'Returnerer dato i lokalt format' },
    { method: 'toLocaleTimeString()', description: 'Returnerer tid i lokalt format' }
  ];

  const dagensUkedag = ukedager[currentTime.getDay()];
  const dagensMaaned = maneder[currentTime.getMonth()];

  const formatTid = (tall) => {
    return tall < 10 ? `0${tall}` : tall;
  };

  const visFullDatoOgKlokkeslett = () => {
    setShowFullDateTime(true);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Oppgave 1.47 - Dato og tid i JavaScript</h2>

      <div style={{ 
        marginBottom: '30px', 
        padding: '20px', 
        border: '2px solid #007bff',
        borderRadius: '8px',
        backgroundColor: '#f8f9fa'
      }}>
        <h3 style={{ marginTop: 0, color: '#007bff' }}>a. JavaScript Date metoder</h3>
        <div style={{ 
          maxHeight: '300px', 
          overflowY: 'auto',
          backgroundColor: 'white',
          border: '1px solid #dee2e6',
          borderRadius: '6px',
          padding: '15px'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#e9ecef' }}>
                <th style={{ padding: '10px', border: '1px solid #dee2e6', textAlign: 'left' }}>Metode</th>
                <th style={{ padding: '10px', border: '1px solid #dee2e6', textAlign: 'left' }}>Beskrivelse</th>
                <th style={{ padding: '10px', border: '1px solid #dee2e6', textAlign: 'left' }}>Eksempelverdi</th>
              </tr>
            </thead>
            <tbody>
              {dateMethods.map((method, index) => (
                <tr key={index}>
                  <td style={{ padding: '8px', border: '1px solid #dee2e6', fontFamily: 'monospace' }}>
                    {method.method}
                  </td>
                  <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>
                    {method.description}
                  </td>
                  <td style={{ padding: '8px', border: '1px solid #dee2e6', fontFamily: 'monospace', fontSize: '12px' }}>
                    {eval(`currentTime.${method.method.replace('()', '')}`)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ 
        marginBottom: '30px', 
        padding: '20px', 
        border: '2px solid #28a745',
        borderRadius: '8px',
        backgroundColor: '#f8f9fa'
      }}>
        <h3 style={{ marginTop: 0, color: '#28a745' }}>b. Ukedager og måneder</h3>
        
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <h4>Ukedager:</h4>
            <div style={{ 
              backgroundColor: 'white',
              border: '1px solid #dee2e6',
              borderRadius: '6px',
              padding: '10px'
            }}>
              {ukedager.map((dag, index) => (
                <p 
                  key={index}
                  style={{
                    margin: '5px 0',
                    padding: '5px 10px',
                    backgroundColor: index === currentTime.getDay() ? '#d4edda' : 'transparent',
                    borderRadius: '4px',
                    fontWeight: index === currentTime.getDay() ? 'bold' : 'normal'
                  }}
                >
                  {index}. {dag} {index === currentTime.getDay() && '(i dag)'}
                </p>
              ))}
            </div>
          </div>
          
          <div style={{ flex: '1', minWidth: '250px' }}>
            <h4>Måneder:</h4>
            <div style={{ 
              backgroundColor: 'white',
              border: '1px solid #dee2e6',
              borderRadius: '6px',
              padding: '10px'
            }}>
              {maneder.map((maaned, index) => (
                <p 
                  key={index}
                  style={{
                    margin: '5px 0',
                    padding: '5px 10px',
                    backgroundColor: index === currentTime.getMonth() ? '#d4edda' : 'transparent',
                    borderRadius: '4px',
                    fontWeight: index === currentTime.getMonth() ? 'bold' : 'normal'
                  }}
                >
                  {index}. {maaned} {index === currentTime.getMonth() && '(nåværende)'}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        marginBottom: '30px', 
        padding: '20px', 
        border: '2px solid #dc3545',
        borderRadius: '8px',
        backgroundColor: '#f8f9fa'
      }}>
        <h3 style={{ marginTop: 0, color: '#dc3545' }}>c. Dagens dato</h3>
        <div style={{ 
          padding: '20px',
          backgroundColor: 'white',
          border: '2px dashed #dc3545',
          borderRadius: '6px',
          textAlign: 'center',
          fontSize: '18px',
          fontWeight: 'bold'
        }}>
        I dag er det <span>{dagensUkedag}</span> og vi er i måneden <span>{dagensMaaned}</span>
        </div>
        <div style={{ textAlign: 'center', marginTop: '10px', color: '#6c757d' }}>
          {currentTime.toLocaleDateString('no-NO', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>

      <div style={{ 
        padding: '20px', 
        border: '2px solid #ffc107',
        borderRadius: '8px',
        backgroundColor: '#f8f9fa'
      }}>
        <h3 style={{ marginTop: 0, color: '#ffc107' }}>d. Full dato og klokkeslett</h3>
        
        <button
          onClick={visFullDatoOgKlokkeslett}
          style={{
            padding: '12px 24px',
            backgroundColor: '#ffc107',
            color: '#212529',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}
        >
          VIS DATO OG KLOKKESLETT
        </button>

        {showFullDateTime && (
          <div style={{ 
            padding: '25px',
            backgroundColor: 'white',
            border: '2px solid #ffc107',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{ 
              fontSize: '20px', 
              fontWeight: 'bold',
              marginBottom: '15px',
              color: '#495057'
            }}>
              Klokka er {formatTid(currentTime.getHours())}:{formatTid(currentTime.getMinutes())}:{formatTid(currentTime.getSeconds())}
            </div>
            <div style={{ 
              fontSize: '18px',
              color: '#495057'
            }}>
              {dagensUkedag.charAt(0).toUpperCase() + dagensUkedag.slice(1)} {currentTime.getDate()}. {dagensMaaned} {currentTime.getFullYear()}
            </div>
            <div style={{ 
              marginTop: '15px',
              fontSize: '14px',
              color: '#6c757d'
            }}>
              Sist oppdatert: {currentTime.toLocaleString('no-NO')}
            </div>
          </div>
        )}
      </div>

      <div style={{ 
        marginTop: '30px', 
        padding: '15px', 
        backgroundColor: '#e9ecef', 
        border: '1px solid #dee2e6',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '14px', color: '#6c757d', marginBottom: '5px' }}>
          Live klokke (oppdateres hvert sekund):
        </div>
        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#495057' }}>
          {currentTime.toLocaleTimeString('no-NO')}
        </div>
      </div>
    </div>
  );
};

export default Oppgave147;