import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MenuButton from "./components/MenuButton";
import ScrollToTop from "./components/ScrollToTop";
import { RoutesGroup } from "./routes";
import GlobalStyles from "./styles";

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <>
      <GlobalStyles />
      <ScrollToTop />
      <MenuButton
        isOpen={isOpenMenu}
        toggleMenu={() => setIsOpenMenu(!isOpenMenu)}
      />
      <Header
        isOpen={isOpenMenu}
        closeMenu={() => setIsOpenMenu(false)}
      />
      <RoutesGroup />
      <Footer />
    </>
  );
}

export default App;
