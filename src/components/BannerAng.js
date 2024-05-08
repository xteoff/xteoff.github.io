import Slider from "react-slick";
import Card from "./Card";

const slides = [
    {},
    {},
    {},
    {},
    {},
    {},
];

function SampleNextArrow({ className, style, onClick }) {
    return (
        <div
            className={className + " absolute top-0 bottom-0 my-auto right-12 before:text-2xl before:content-['→'] before:text-red-950 z-10"}
            style={{ ...style}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className  + " absolute top-0 bottom-0 my-auto left-12 before:content-['←'] before:text-2xl before:text-red-950 z-10"}
        style={{ ...style}}
        onClick={onClick}
      />
    );
  }

function BannerAng(){

    let slidesJsx = slides.map(function (sl,i){
        return(
            <Slide className="gap-10">
                <Card img1="media/Angels/палетка.webp" img2="media/Angels/палетка_от.svg" text="9-Color Eyeshadow Palette" price="₽ 4 150"/>
            </Slide>
        )
    });
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        className: "container mx-auto",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
        ]
    };

    return(
        <>
            <div className="flex justify-center h-fit pb-5">
                <img src="media/Angels_banner.svg" alt="" />
            </div>
            <Slider {...settings}>
                    {slidesJsx}
            </Slider>
        </>
    )
}

function Slide({ children }) {
    return (
        <div className="h-96 flex justify-center">
            {children}
        </div>
    );
}

export default BannerAng;