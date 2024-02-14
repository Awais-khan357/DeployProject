import NavbarPage from "./NavbarPage";
import Carousels from "./Carousels";
import SearchBar from "./SearchBar";
import Cards from "./Cards";
import SliderCards from "./SliderCards";
import Badges from "./Badges";
import Footer from "./Footer";

export default function Homepage() {
  return (
    <div>
      <NavbarPage />
      <Carousels />
      <SearchBar />
      <Cards />
      <Badges />
      <SliderCards />
      <Footer />
    </div>
  );
}
