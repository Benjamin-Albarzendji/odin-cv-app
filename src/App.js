import Personal from './components/Personal';
import Work from './components/Work';
import Academic from './components/Academic';
import './styles/App.css';

function App() {
  return (
    <div className="CV">
      <Personal></Personal>
      <Work></Work>
      <Academic> </Academic>
    </div>
  );
}

export default App;
