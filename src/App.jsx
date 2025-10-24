import Header from "./components/Header";
import Footer from "./components/Footer";
import Test from "./components/Test";
import "./App.css";


function App() {
  return (

    <div className="app-shell">
    <Header className="site-header" />
    <main className="main">
      <section className = "card">
        <h1>Welcome to the App</h1>
        <Test />
      </section>
    </main>
    <Footer className="site-footer" />
    </div>
  );
}

export default App;
