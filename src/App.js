import Personal from './components/Personal';
import Work from './components/Work';
import Academic from './components/Academic';
import Skills from "./components/Skills"
import './styles/App.css';

function App() {
  return (
    <div className="CV">
      <Personal></Personal>
      <Work></Work>
      <Academic> </Academic>
      <Skills></Skills>
    </div>
  );
}

export default App;
