import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RoutesHandler from "./RoutesHandler";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <RoutesHandler />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
