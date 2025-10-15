import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import { RoutesGroup } from "./routes";
import GlobalStyles from "./styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <ScrollToTop />
      <Header />
      <RoutesGroup />
      <Footer />
    </>
  );
}

export default App;
