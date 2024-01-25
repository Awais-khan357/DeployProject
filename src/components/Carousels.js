import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

function Carousels() {
  const [activeImage, setActiveImage] = useState(0);
  const Images = [image1, image2, image3];
  const totalImages = Images.length;

  function changeImage() {
    setActiveImage((currentImage) => (currentImage + 1) % totalImages);
  }

  useEffect(function () {
    const imageInterval = setInterval(changeImage, 5000);
    return () => {
      clearInterval(imageInterval);
    };
  }, []);

  function handleSelected(selectedIndex, e) {
    setActiveImage(selectedIndex);
  }
  return (
    <Carousel activeIndex={activeImage} onSelect={handleSelected}>
      {Images.map((image, index) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image}
            key={index}
            text="First slide"
            alt="first"
          />
          <Carousel.Caption>
            <h3>{activeImage + 1} Slide</h3>
            <p>Text for future Use</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carousels;
