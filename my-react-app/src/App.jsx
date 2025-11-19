import CentimeterToInches from './components-oppgaver/Opp-1';
import Oppgave149 from './components-oppgaver/Opp-2';
import Oppgave150 from './components-oppgaver/Opp-3';
import Oppgave147 from './components-oppgaver/Opp-4';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>React Oppgaver</h1>
      
      <div style={{ marginBottom: '40px' }}>
        <CentimeterToInches />
      </div>
      
      <hr style={{ margin: '40px 0', border: '1px solid #ddd' }} />
      
      <div style={{ marginBottom: '40px' }}>
        <Oppgave149 />
      </div>
      
      <hr style={{ margin: '40px 0', border: '1px solid #ddd' }} />
      
      <div>
        <Oppgave150 />
      </div>
      
       <hr style={{ margin: '40px 0', border: '1px solid #ddd' }} />
      
      <div>
        <Oppgave147 />
      </div>

    </div>
  );
}

export default App;