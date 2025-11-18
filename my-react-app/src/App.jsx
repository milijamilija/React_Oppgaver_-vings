import CentimeterToInches from './components-oppgaver/Opp-1';
import Oppgave149 from './components-oppgaver/Opp-2';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>React Oppgaver</h1>
      
      <div style={{ marginBottom: '40px' }}>
        <CentimeterToInches />
      </div>
      
      <hr style={{ margin: '40px 0', border: '1px solid #ddd' }} />
      
      <div>
        <Oppgave149 />
      </div>
    </div>
  );
}

export default App;