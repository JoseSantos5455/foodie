import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function () {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
	  autoplay: true,
	  arrows: false,
	  adaptiveHeight: true,
	  autoPlaySpeed: 2000
    };
    return (
      <div>
        <Slider className="max-h-[18rem]" {...settings}>
				 <div className="h-72 p-2 hover:p-1 bg-white shadow-md">
            <img
              src="https://i.pinimg.com/originals/0b/39/14/0b3914ae30b768461468509a81e94d9c.jpg"
              alt="banner"
              className="object-cover h-full w-full"
            />
          </div>
		  <div className="h-72 p-2 hover:p-1 bg-white shadow-md">
            <img
              src="/images/sale-2.png"
              alt="banner"
              className="object-cover h-full w-full"
            />
          </div>
		  <div className="h-72 p-2 hover:p-1 bg-white shadow-md">
            <img
              src="/images/sale-1.png"
              alt="banner"
              className="object-cover h-full w-full"
            />
          </div>
        </Slider>
      </div>
    );
}
