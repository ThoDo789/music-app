import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col } from "reactstrap";
import { getImage } from "../../../../redux/actions/action";
function SongSlider(props) {
  const dispatch = useDispatch();

  const { data } = useSelector(
    state => state.data
  );
  const handleListenMusic = key => {
    const image = data.find(value => value.id === key);

    dispatch(getImage(image));
    window.scroll(0,0)
  };
  var settings = {
    autoplaySpeed: 1000,
    infinite: true,
    autoPlay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Col xs="12">
      <Slider className="list-song" {...settings}>
        {data.map((value, key) => {
          return (
            <div
              className="item-list"
              key={key}
              onClick={() => handleListenMusic(value.id)}
            >
              <img
                alt="list img"
                className="list-song__img"
                src={`../../../asset/imgs/song${value.imageSong}.jpg`}
              />
              <div className="for-you__details-details">
                <h5 className="for-you__details-name">{value.nameSong}</h5>
                <p className="for-you__details-artist">{value.artist}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </Col>
  );
}

export default SongSlider;
