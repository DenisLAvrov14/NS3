"use client";

import { useState } from "react";
import Image from "next/image";

interface EventImagesProps {
  images: string[];
}

export default function EventImages({ images }: EventImagesProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 bg-black p-4 sm:p-6 rounded-[40px] shadow-lg w-full">
      {/* Главное изображение (показывается всегда) */}
      <div className="relative w-full sm:w-[875px] h-[240px] sm:h-[480px] rounded-[40px] overflow-hidden">
        {images.length > 0 && (
          <Image
            src={images[0]}
            alt="Main Image"
            fill
            sizes="(max-width: 768px) 100vw, 875px"
            className="cursor-pointer object-cover"
            onClick={() => setSelectedImage(images[0])}
          />
        )}
      </div>

      {/* Колонка с миниатюрами (скрывается на мобильных) */}
      <div className="hidden sm:flex sm:flex-col gap-4 w-auto">
        {images.slice(1, 4).map((src, index) => (
          <div key={index} className="relative w-[250px] h-[150px] rounded-[20px] overflow-hidden">
            <Image
              src={src}
              alt={`Thumbnail ${index + 1}`}
              fill
              sizes="250px"
              className="cursor-pointer object-cover"
              onClick={() => setSelectedImage(src)}
            />
          </div>
        ))}
      </div>

      {/* Модальное окно с увеличенным изображением */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-[90%] h-auto">
            <Image
              src={selectedImage}
              alt="Selected"
              width={800}
              height={600}
              sizes="100vw"
              className="rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
