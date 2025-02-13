"use client";

import Image from "next/image";
import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const mainCarouselData = [
  {
    image: "/cloth1.jpeg",
  },
  {
    image: "/bag5.jpeg",
  },
  {
    image: "/bag3.jpeg",
  },
  {
    image: "/Shoes.jpeg",
  },
  {
    image: "/cloth13.jpeg",
  },
  {
    image: "/cloth10.jpeg",
  },
  {
    image: "/cloth11.jpeg",
  },
  {
    image: "/Shoes1.jpg",
  },
  {
    image: "/usedthree.jpg",
  },
];

export default function MainCarousel() {
  const items = mainCarouselData.map((item, index) => (
    <Image
      key={index}
      width={800}
      height={800}
      className="cursor-pointer w-full h-[34rem]"
      role="presentation"
      src={item.image}
      alt="image"
    />
  ));
  return (
    <div className=" bg-white">
      <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        items={items}
        disableButtonsControls
      />
    </div>
  );
}
