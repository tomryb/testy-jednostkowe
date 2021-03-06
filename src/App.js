import "./App.css";
import TopBar from "./components/topBar/topBar_zadanie2";
import Footer from "./components/footer/footer_zadanie3";
import Counter from "./components/counter/counter_zadanie4";

function App() {
  return (
    <div className="App">
      <TopBar title="test tekst"></TopBar>
      <Footer></Footer>
      <Counter></Counter>
    </div>
  );
}

export default App;
