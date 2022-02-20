import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="others">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
