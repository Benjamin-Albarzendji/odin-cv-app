import Personal from './components/Personal';
import Work from "./components/Work"
import './styles/App.css';

function App() {
  return (
    <div className = "CV">
      <Personal></Personal>
      <Work></Work>
    </div>
  );
}

export default App;
