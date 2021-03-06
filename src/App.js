import TodosList from "./components/zadanie6/todos";
import TopBar from "./components/zadanie2/topBar";
import Footer from "./components/zadanie3/footer";
import Counter from "./components/zadanie4/counter";
import Button from './components/zadanie5/button';

function App() {
  return (
    <div className="App">
      <TopBar title="test tekst"></TopBar>
      <Counter></Counter>
      <Button></Button>
      <TodosList></TodosList>
      <Footer></Footer>
    </div>
  );
}

export default App;
