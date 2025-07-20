import { AnimatePresence } from "framer-motion";
import SearchPage from "./components/common/SearchPage";
import HeaderMain from "./components/header/HeaderMain";
import { useUI } from "./hooks/UiContext";
import HomePage from "./pages/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/footer/Footer";
import Offer from "./components/offer/Offer";

function App() {
  const { state } = useUI();
  return (
    <>
      <Offer />
      <AnimatePresence>{state.isSearchOpen && <SearchPage />}</AnimatePresence>
      <HeaderMain />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
