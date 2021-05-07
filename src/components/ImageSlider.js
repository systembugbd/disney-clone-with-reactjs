import styled from "styled-components";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <a href="http://google.com" target="_blank">
          <img src="images/slider-badag.jpg" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="images/slider-badging.jpg" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="images/slider-badging.jpg" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="images/slider-scales.jpg" />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Wrap = styled.div`
border-radius:4px;
cursor:pointer;
position:relative;

 a{
     border-radius:4px;
     box-shadow: rgb(0 0 0 / 70%) 0px 25px 30px -10px, rgb(0 0 0 / 70%) 0px 16px 10px -10px;
     cursor:pointer;
     display:block;
     position:relative;
     padding:4px;

     img{
          width:100%;
          height:100%;
     }
     &:hover{
          padding:0;
          border:4px solid rgba(249, 249, 249, 0.8);
          transition-duration: 300ms;
     }
 }
`
const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease-out;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: #fff;
  }

  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;

    @media (max-width:480px){
         left:0px;
    }
  }

  .slick-next {
    right: -75px;
    @media (max-width:480px){
         right:0px;
    }
  }
`;
export default ImageSlider;
