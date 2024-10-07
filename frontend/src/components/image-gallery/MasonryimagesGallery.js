import React from "react";
import galleryimages from "./gallerylmages";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MasonryimagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem">
        {galleryimages.map((item, index) => (
          <img
          className="mansonry__img"
            src={item}
            key={index}
            style={{ width: "100%", display: "block", borderRadius: "10px" }}
            alt=""
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryimagesGallery;
