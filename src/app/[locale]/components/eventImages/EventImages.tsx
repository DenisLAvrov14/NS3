"use client";

import { useState } from "react";
import Image from "next/image";

interface EventImagesProps {
  images: string[];
}

export default function EventImages({ images }: EventImagesProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex gap-6 items-start bg-black p-6 rounded-[40px] shadow-lg">
      {/* Большое главное изображение */}
      <div className="relative w-[875px] h-[480px] rounded-[40px] overflow-hidden">
        {images.length > 0 && (
          <Image
            src={images[0]}
            alt="Main Image"
            fill
            sizes="(max-width: 1200px) 100vw, 875px"
            style={{ objectFit: "cover" }}
            className="cursor-pointer"
            onClick={() => setSelectedImage(images[0])}
          />
        )}
      </div>

      {/* Колонка с тремя маленькими изображениями */}
      <div className="flex flex-col gap-4">
        {images.slice(1, 4).map((src, index) => (
          <div key={index} className="relative w-[250px] h-[150px] rounded-[40px] overflow-hidden">
            <Image
              src={src}
              alt={`Thumbnail ${index + 1}`}
              fill
              sizes="(max-width: 600px) 100vw, 250px"
              style={{ objectFit: "cover" }}
              className="cursor-pointer"
              onClick={() => setSelectedImage(src)}
            />
          </div>
        ))}
      </div>

      {/* Модальное окно с увеличенным изображением */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-3/4 h-3/4">
            <Image
              src={selectedImage}
              alt="Selected"
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
