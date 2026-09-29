import { useState, useEffect } from 'react';
import './css/banner.css';
import borderFrame from '../../assets/banner-border.png'; 
import borderFrame2 from '../../assets/border.png';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const banners = [
    {
      badge: "Tươi ngon mỗi ngày",
      title: "Rau củ quả sạch từ thiên nhiên",
      desc: "Tươi ngon – An toàn – Giàu dinh dưỡng đạt chuẩn VietGAP.",
      buttonText: "Khám phá ngay", 
      image: banner1
    },
    {
      badge: "Ưu đãi đặc biệt",
      title: "Trái cây tươi ngon giảm giá đến 20%",
      desc: "Cam kết nguồn gốc rõ ràng, giao hàng nhanh chóng tận nhà.",
      buttonText: "Xem ngay",
      image: banner2
    },
    {
      badge: "Organic 100%",
      title: "Thực phẩm xanh cho sức khỏe gia đình",
      desc: "Nói không với chất bảo quản, giữ trọn hương vị tự nhiên.",
      buttonText: "Mua ngay",
      image: banner3
    }
  ];

  // Tự động chuyển slide sau mỗi 3 giây
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="banner-section">
      {/* Slider chứa nội dung */}
      <div className="banner-slider-container">
        <div 
          className="banner-slider" 
          style={{ transform: `translateX(-${currentIndex * (100 / banners.length)}%)` }}
        >
          {banners.map((item, index) => (
            <div 
              className="banner-slide" 
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="banner-content">
                <span className="banner-badge">{item.badge}</span>
                <h1 className="banner-title">{item.title}</h1>
                <p className="banner-desc">{item.desc}</p>
                <button className="banner-btn">{item.buttonText} →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2 Lớp ảnh khung viền hoa lá chồng lên nhau */}
      <img src={borderFrame} alt="Banner Border Frame 1" className="banner-border-frame border-frame-layer-1" />
      <img src={borderFrame2} alt="Banner Border Frame 2" className="banner-border-frame border-frame-layer-2" />

      {/* Các chấm điều hướng */}
      <div className="banner-dots">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Banner;