import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Content />
      </header>
      <footer>
      <Footer />
      </footer>
    </div>
  );
}

export default App;
