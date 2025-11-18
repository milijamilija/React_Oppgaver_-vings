import React, { useState } from 'react';

const Oppgave150 = () => {
  const [tall1, setTall1] = useState(null);
  const [tall2, setTall2] = useState(null);
  const [sum, setSum] = useState(null);

  const genererTilfeldigeTall = () => {
    const nyttTall1 = Math.floor(Math.random() * 11);
    const nyttTall2 = Math.floor(Math.random() * 11);
    const nySum = nyttTall1 + nyttTall2;
    
    setTall1(nyttTall1);
    setTall2(nyttTall2);
    setSum(nySum);
  };

  const erPartall = (tall) => {
    return tall % 2 === 0;
  };

  const finnTallType = () => {
    if (tall1 === null || tall2 === null) return '';
    
    const tall1Partall = erPartall(tall1);
    const tall2Partall = erPartall(tall2);
    
    if (tall1Partall && tall2Partall) {
      return 'Begge tallene er partall';
    } else if (!tall1Partall && !tall2Partall) {
      return 'Begge tallene er oddetall';
    } else {
      return 'Det ene tallet er partall og det andre er oddetall';
    }
  };

  const sjekkSumStorrelse = () => {
    if (sum === null) return '';
    
    if (sum > 10) {
      return 'Summen er større enn 10';
    } else if (sum < 10) {
      return 'Summen er mindre enn 10';
    } else {
      return 'Summen er lik 10';
    }
  };

  const getTallFarge = (tall) => {
    return erPartall(tall) ? '#d4edda' : '#f8d7da';
  };

  const getTallTekstFarge = (tall) => {
    return erPartall(tall) ? '#155724' : '#721c24';
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Oppgave 1.50 - Tilfeldige tall analyse</h2>

      <button
        onClick={genererTilfeldigeTall}
        style={{
          padding: '12px 24px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '20px'
        }}
      >
        Generer nye tilfeldige tall
      </button>

      {tall1 !== null && tall2 !== null && (
        <div>
          <div style={{ 
            marginBottom: '25px', 
            padding: '20px', 
            border: '2px solid #007bff',
            borderRadius: '8px',
            backgroundColor: '#f8f9fa'
          }}>
            <h3 style={{ marginTop: 0, color: '#007bff' }}>a) Tallene og summen</h3>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              gap: '20px',
              marginBottom: '15px',
              flexWrap: 'wrap'
            }}>
              <div
                style={{
                  padding: '15px 25px',
                  backgroundColor: getTallFarge(tall1),
                  border: `2px solid ${getTallTekstFarge(tall1)}`,
                  borderRadius: '8px',
                  color: getTallTekstFarge(tall1),
                  fontSize: '24px',
                  fontWeight: 'bold',
                  minWidth: '60px',
                  textAlign: 'center'
                }}
              >
                {tall1}
              </div>
              
              <span style={{ fontSize: '24px', fontWeight: 'bold' }}>+</span>
              
              <div
                style={{
                  padding: '15px 25px',
                  backgroundColor: getTallFarge(tall2),
                  border: `2px solid ${getTallTekstFarge(tall2)}`,
                  borderRadius: '8px',
                  color: getTallTekstFarge(tall2),
                  fontSize: '24px',
                  fontWeight: 'bold',
                  minWidth: '60px',
                  textAlign: 'center'
                }}
              >
                {tall2}
              </div>
              
              <span style={{ fontSize: '24px', fontWeight: 'bold' }}>=</span>
              
              <div
                style={{
                  padding: '15px 25px',
                  backgroundColor: '#e2e3e5',
                  border: '2px solid #6c757d',
                  borderRadius: '8px',
                  color: '#495057',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  minWidth: '60px',
                  textAlign: 'center'
                }}
              >
                {sum}
              </div>
            </div>
            
            <div style={{ textAlign: 'center', fontSize: '14px', color: '#6c757d' }}>
              <span style={{ 
                backgroundColor: '#d4edda', 
                padding: '2px 8px', 
                borderRadius: '4px',
                margin: '0 5px'
              }}>
                Grønn: Partall
              </span>
              <span style={{ 
                backgroundColor: '#f8d7da', 
                padding: '2px 8px', 
                borderRadius: '4px',
                margin: '0 5px'
              }}>
                Rød: Oddetall
              </span>
            </div>
          </div>

          <div style={{ 
            marginBottom: '25px', 
            padding: '20px', 
            border: '2px solid #28a745',
            borderRadius: '8px',
            backgroundColor: '#f8f9fa'
          }}>
            <h3 style={{ marginTop: 0, color: '#28a745' }}>b) Partall/Oddetall analyse</h3>
            <div style={{ 
              padding: '15px',
              backgroundColor: 'white',
              border: '1px solid #dee2e6',
              borderRadius: '6px',
              fontSize: '18px',
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#28a745'
            }}>
              {finnTallType()}
            </div>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-around',
              marginTop: '15px',
              fontSize: '14px',
              color: '#6c757d'
            }}>
              <div>
                <strong>Tall 1 ({tall1}):</strong> {erPartall(tall1) ? 'Partall' : 'Oddetall'}
              </div>
              <div>
                <strong>Tall 2 ({tall2}):</strong> {erPartall(tall2) ? 'Partall' : 'Oddetall'}
              </div>
            </div>
          </div>

          <div style={{ 
            padding: '20px', 
            border: '2px solid #dc3545',
            borderRadius: '8px',
            backgroundColor: '#f8f9fa'
          }}>
            <h3 style={{ marginTop: 0, color: '#dc3545' }}>c) Sum analyse</h3>
            <div style={{ 
              padding: '15px',
              backgroundColor: 'white',
              border: '1px solid #dee2e6',
              borderRadius: '6px',
              fontSize: '18px',
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#dc3545'
            }}>
              {sjekkSumStorrelse()}
            </div>
            
            <div style={{ 
              textAlign: 'center',
              marginTop: '15px',
              fontSize: '16px',
              color: '#495057'
            }}>
              <strong>Summen er {sum}</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Oppgave150;