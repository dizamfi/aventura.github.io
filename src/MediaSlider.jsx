import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// Datos de ejemplo
const mediaContent = [
  { type: "image", src: "/images/image1.jpeg", alt: "Photo 1" },
  { type: "image", src: "/images/image2.jpeg", alt: "Photo 2" },
  { type: "image", src: "/images/image3.jpeg", alt: "Photo 3" },
  { type: "image", src: "/images/image4.jpeg", alt: "Photo 4" },
  { type: "image", src: "/images/image5.jpeg", alt: "Photo 5" },
  { type: "image", src: "/images/image6.jpeg", alt: "Photo 6" },
  { type: "image", src: "/images/image7.jpeg", alt: "Photo 7" },
  { type: "image", src: "/images/image8.jpeg", alt: "Photo 8" },
  { type: "image", src: "/images/image9.jpeg", alt: "Photo 9" },
  { type: "image", src: "/images/image10.jpeg", alt: "Photo 10" },
  { type: "image", src: "/images/image11.jpeg", alt: "Photo 11" },
  { type: "image", src: "/images/image12.jpeg", alt: "Photo 12" },
  { type: "image", src: "/images/image13.jpeg", alt: "Photo 13" },
  { type: "image", src: "/images/image14.jpeg", alt: "Photo 14" },
  { type: "image", src: "/images/image15.jpeg", alt: "Photo 15" },
  { type: "image", src: "/images/image16.jpeg", alt: "Photo 16" },
  { type: "image", src: "/images/image17.jpeg", alt: "Photo 17" },
  { type: "image", src: "/images/image18.jpeg", alt: "Photo 18" },
  { type: "image", src: "/images/image19.jpeg", alt: "Photo 19" },
  { type: "image", src: "/images/image20.jpeg", alt: "Photo 20" },
  { type: "image", src: "/images/image21.jpeg", alt: "Photo 21" },
  { type: "video", src: "/videos/prueba2.mp4", alt: "Video 1" },
  { type: "video", src: "/videos/prueba3.mp4", alt: "Video 1" },
  { type: "video", src: "/videos/prueba4.mp4", alt: "Video 1" },
  { type: "image", src: "/images/image22.jpeg", alt: "Photo 21" },
  { type: "image", src: "/images/image23.jpeg", alt: "Photo 21" },
  { type: "image", src: "/images/image24.jpeg", alt: "Photo 21" },
];

const MediaSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentContent = mediaContent[currentIndex];

    if (currentContent.type === "image") {
      const timer = setTimeout(() => {
        next();
      }, 4000); // 4 segundos

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        next();
      } else if (e.key === "ArrowLeft") {
        prev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const next = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < mediaContent.length - 1) {
        return prevIndex + 1;
      } else {
        return prevIndex; // Mantén el índice en el último elemento
      }
    });
  };

  const prev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + mediaContent.length) % mediaContent.length
    );
  };

  const currentContent = mediaContent[currentIndex];

  return (
    
      <div className="page__container">
        <div className="page__slider">
          {currentContent.type === "image" && (
            <img
              className="page__slider"
              src={currentContent.src}
              alt={currentContent.alt}
            />
          )}
          {currentContent.type === "video" && (
            <video
              muted
              style={{ width: '100%', height: '700px', objectFit: 'cover'}}
              src={currentContent.src}
              autoPlay
              onEnded={next}
              controls={false}
            />
          )}
        </div>
      </div>
    
  );
};

export default MediaSlider;
