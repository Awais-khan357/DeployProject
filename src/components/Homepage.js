import Header from "./Header/Header";
import Carousels from "./Carousels";
import SearchBar from "./SearchBar";
import Cards from "./Cards";
import Badges from "./Badges";
import SliderCards from "./SliderCards";
import Footer from "./Footer";
export default function Homepage() {
  return (
    <div>
      <Header />
      <Carousels />
      <SearchBar />
      <Cards />
      <Badges />
      <SliderCards />
      <Footer />
    </div>
  );
}
