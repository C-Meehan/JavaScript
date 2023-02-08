import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard first={"Jane"} last={"Doe"} age={45} hair={"Black"} />
      <PersonCard first={"John"} last={"Smith"} age={88} hair={"Brown"} />
      <PersonCard first={"Millard"} last={"Fillmore"} age={50} hair={"Brown"} />
      <PersonCard first={"Maria"} last={"Smith"} age={62} hair={"Brown"} />
    </div>
  );
}

export default App;
