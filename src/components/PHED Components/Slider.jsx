autoplaySpeed: 3000 // Set autoplay to 3 seconds
import React from 'react';
import Slider from 'react-slick';
import Banner1 from '../../assets/banner1.jpg';
import Banner2 from '../../assets/banner2.jpg';
import Banner3 from '../../assets/banner3.jpg';

function SlickSlider() {
  const settings = {
    dots: true, // Show dots for pagination
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2500, // Set autoplay to 3 seconds (adjusted speed)
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: true, // Enable previous/next arrows
  };

  return (
    <div className="relative w-full h-[250px] overflow-hidden">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div>
          <div className="relative w-full "> {/* Adjust height for better visibility */}
            <img
              src={Banner1}
              alt="Banner 1"
              className="w-full h-full object-cover" // Full width and height, with cover aspect
            />
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold">
              Banner 1
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div>
          <div className="relative w-full ">
            <img
              src={Banner2}
              alt="Banner 2"
              className="w-full h-full object-cover" 
            />
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold">
              Banner 2
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div>
          <div className="relative w-full ">
            <img
              src={Banner3}
              alt="Banner 3"
              className="w-full h-full object-cover" 
            />
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold">
              Banner 3
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SlickSlider;
