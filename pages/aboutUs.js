import React from "react";

// Components
import SwiperPagFade from "../components/swiperJs/SwiperPag";

const imageData = [];
for (let i = 0; i < 12; i++) {
  imageData.push({
    key: 1 + i,
    src: `/images/AboutUs/slide-${i}.jpg`,
  });
}
export default function abousUs() {
  return (
    <main className="bg-color mb-auto">
      <div className="container">
        <SwiperPagFade images={imageData} navSize="2xl" />
        abousUs
      </div>
    </main>
  );
}
