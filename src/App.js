import './App.css';
import TitleH1 from './Components/Titles/TitleH1/TitleH1';
import Books from './Containers/Books/Books';

function App() {
  return (
    <div>
      <TitleH1>Ma liste de livres</TitleH1>
      <Books />
    </div>
  );
}

export default App;