import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import { Container, MainContent } from "./styles";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Sidebar />
        <MainContent>
          <Home />
        </MainContent>
      </Container>
    </div>
  );
}

export default App;
