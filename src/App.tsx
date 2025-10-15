import Footer from "./components/Footer";
import Header from "./components/Header";
import { RoutesGroup } from "./routes";
import GlobalStyles from "./styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <RoutesGroup />
      <Footer />
    </>
  );
}

export default App;
