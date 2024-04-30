import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const carousel = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

const Banner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  return (
    <div className="pic h-[100vh]">
      
      <div className="wrapper">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          <div className="carousel__cell number-slide4">
            <img className="w-full max-w-[90%]" src="../../../../src/img/img4.png" alt="no saport" />
          </div>
          <div className="carousel__cell number-slide1">
            <img className="w-full" src="../../../../src/img/img-1.png" alt="no saport" />
          </div>
          <div className="carousel__cell number-slide2">
            <img className="w-full" src="../../../../src/img/img2.png" alt="no saport" />
          </div>
          <div className="carousel__cell number-slide3">
            <img className="w-full" src="../../../../src/img/img3.png" alt="no saport" />
          </div>
          <div className="carousel__cell number-slide5">
            <img className="w-full max-w-[90%]" src="../../../../src/img/img5.png" alt="no saport" />
          </div>
          <div className="carousel__cell number-slide6">
            <img className="w-full max-w-[90%]" src="../../../../src/img/img6.png" alt="no saport" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
