import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './../css/animate.css';
import './../css/App.css';
import './../css/bootstrap.min.css';

function MemorySection({ id, title, subtitle, date, description, mediaItems }) {
  // Lấy danh sách các ảnh để dùng cho lightbox
  const imageItems = mediaItems.filter(item => item.type === 'image');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Xác định layout đặc biệt nếu tất cả media đều là ảnh và có đúng 4 items
  const isSpecialLayout = mediaItems.length === 4 && mediaItems.every(item => item.type === 'image');

  // Nếu chỉ có 1 media item (ảnh hoặc video) thì dùng layout căn giữa,
  // nếu không thì dùng layout mặc định
  const defaultColumnClass = mediaItems.length === 1
    ? "col-12 col-md-8 offset-md-2 mb-4"
    : "col-lg-4 col-md-6 col-xs-12 mix mb-4";

  return (
    <section id={id} className="section memory-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <span>{subtitle}</span>
          <p className="section-subtitle">
            {description}
          </p>
        </div>
        <div className="row portfolio">
          {mediaItems.map((item, index) => {
            if (item.type === 'image') {
              // Tìm vị trí của ảnh trong mảng imageItems để dùng cho lightbox
              const imageIndex = imageItems.findIndex(img => img.src === item.src);
              // Xác định lớp cột dựa theo layout:
              let columnClass = defaultColumnClass;
              if (isSpecialLayout) {
                // Với 4 ảnh, ảnh thứ 1,2,3 dùng grid 3 cột; ảnh thứ 4 full width
                if (index < 3) {
                  columnClass = "col-lg-4 col-md-6 col-xs-12 mb-4";
                } else if (index === 3) {
                  columnClass = "col-12 mb-4";
                }
              }
              return (
                <div key={index} className={columnClass}>
                  <div className="portfolio-item">
                    <div className="shot-item">
                      <img
                        src={item.src}
                        alt={item.alt}
                        onClick={() => {
                          setLightboxIndex(imageIndex);
                          setLightboxOpen(true);
                        }}
                        style={{ cursor: 'pointer' }}
                        className="img-fluid"
                      />
                      <div className="single-content">
                        <div className="fancy-table">
                          <div className="table-cell">
                            <div className="zoom-icon">
                              <a
                                onClick={(e) => {
                                  e.preventDefault();
                                  setLightboxIndex(imageIndex);
                                  setLightboxOpen(true);
                                }}
                                href="#!"
                              >
                                <i className="lni-zoom-in item-icon" />
                              </a>
                            </div>
                            <a href="#top">Xem ảnh</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else if (item.type === 'video') {
              // Với video, dùng layout mặc định (căn giữa nếu duy nhất, grid nếu không)
              // Kiểm tra aspect của video: nếu là 'vertical' thì dùng lớp cho tỉ lệ dọc, ngược lại dùng 16:9
              const videoClass = item.aspect === 'vertical'
                ? "embed-responsive embed-responsive-9by16"
                : "embed-responsive embed-responsive-16by9";
              return (
                <div key={index} className={defaultColumnClass}>
                  <div className="portfolio-item">
                    <div className="shot-item">
                      <div className={videoClass}>
                        <iframe
                          className="embed-responsive-item"
                          src={item.src}
                          title={item.alt}
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      {lightboxOpen && imageItems.length > 0 && (
        <Lightbox
          mainSrc={imageItems[lightboxIndex].src}
          nextSrc={imageItems[(lightboxIndex + 1) % imageItems.length].src}
          prevSrc={imageItems[(lightboxIndex + imageItems.length - 1) % imageItems.length].src}
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() =>
            setLightboxIndex((lightboxIndex + imageItems.length - 1) % imageItems.length)
          }
          onMoveNextRequest={() =>
            setLightboxIndex((lightboxIndex + 1) % imageItems.length)
          }
        />
      )}
    </section>
  );
}

export default MemorySection;
