import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';
import './Designs.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { FaShare } from "react-icons/fa";

const images = [
  'https://raw.githubusercontent.com/sooraj281/image-hosting/main/photo_2024-07-20_00-26-10.jpg',
  'https://raw.githubusercontent.com/sooraj281/image-hosting/main/photo_2024-07-20_00-26-39.jpg',
  'https://raw.githubusercontent.com/sooraj281/image-hosting/main/photo_2024-07-20_00-26-44.jpg',
];

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSlideClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="container">
      <h1 className="heading">Designs</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} onClick={() => handleSlideClick(image)}>
            <div className="slide-container">
              <img src={image} alt={`slide_image_${index + 1}`} />
              {selectedImage === image && (
                <div className="share-buttons">
                  <FacebookShareButton url={image}>
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  <TwitterShareButton url={image}>
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <WhatsappShareButton url={image}>
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                  <a
                    href={`https://wa.me/918606438971?text=Check%20out%20this%20image:%20${encodeURIComponent(image)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-button"
                  >
                    <FaShare size={24} />
                  </a>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
