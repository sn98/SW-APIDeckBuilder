
import './App.css';
import Header from './components/Header'

function App() {
  let showDecks = false;
  const goToDecks = () => showDecks = true

  const goToCards = () => showDecks = false

  return (
    <div className="mainPage">
      <Header title="SW-API Deck Builder" goToDecks={goToDecks} goToCards={goToCards} />
    </div>
  );
}

export default App;
