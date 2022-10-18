import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainNavigation from "./components/MainNavigation/MainNavigation";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <MainNavigation/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
