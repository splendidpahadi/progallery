import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import galleryData from "../data/galleryData";
import filterData from "../data/filterData";

const Gallery = () => {
  const [category, setCategory] = useState("all");
  const [type, setType] = useState("all");
  const imageRefs = useRef([]);

  const filteredImages = galleryData.filter(
    (image) =>
      (category === "all" || image.category === category) &&
      (type === "all" || image.type === type)
  );

  useEffect(() => {
    imageRefs.current.forEach((img) => {
      if (img) {
        const rowSpan = Math.ceil(img.clientHeight / 10);
        img.parentElement.style.gridRowEnd = `span ${rowSpan}`;
      }
    });
  }, [filteredImages]);

  return (
    <div className="container mx-auto px-10 py-10">
      {/* Filter Dropdowns */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <select
          className="border border-gray-300 p-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setCategory(e.target.value)}
        >
          {filterData.categories.map((cat, index) => (
            <option key={index} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
        <select
          className="border border-gray-300 p-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setType(e.target.value)}
        >
          {filterData.types.map((type, index) => (
            <option key={index} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      {/* Masonry Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 auto-rows-auto">
        {filteredImages.map((image, index) => (
          <div key={image.id} className="relative overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105">
            <Image
              ref={(el) => (imageRefs.current[index] = el)}
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
