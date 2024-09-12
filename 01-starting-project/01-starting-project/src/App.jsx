
import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import './index.css';

function App() {
  
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <h2>Time to get started!</h2>
        <Examples />
      </main>
    </div>
  );
}

export default App;
