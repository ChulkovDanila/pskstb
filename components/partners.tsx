import { useState } from "react";

// Примерные пути к логотипам (замените на свои)
const partners = [
  "/img/partner1.png",
  "/img/partner2.svg",
  "/img/partner3.png",
  "/img/partner4.png",
  "/img/partner5.png",
  "/img/partner6.png",
  "/img/partner7.svg",
  "/img/partner8.svg"
];

const VISIBLE = 4;

export default function Partners() {
  const [start, setStart] = useState(0);
  const total = partners.length;

  const getVisible = () => {
    let arr = [];
    for (let i = 0; i < VISIBLE; i++) {
      arr.push(partners[(start + i) % total]);
    }
    return arr;
  };

  const handlePrev = () => {
    setStart((prev) => (prev - 1 + total) % total);
  };
  const handleNext = () => {
    setStart((prev) => (prev + 1) % total);
  };

  return (
    <div className="w-full flex flex-col items-center py-8 bg-white">
      <div className="flex items-center gap-16">
        <button onClick={handlePrev} className="w-8 h-8 rounded-full bg-[#f3f3f3] hover:bg-[#ffc600] flex items-center justify-center text-xl font-bold text-[#002f45] transition-colors">{'<'}</button>
        <div className="flex gap-16">
          {getVisible().map((src, idx) => (
            <div key={src+idx} className="w-52 h-32 flex items-center justify-center">
              <img src={src} alt="partner logo" className="max-h-24 max-w-[180px] object-contain" />
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="w-8 h-8 rounded-full bg-[#f3f3f3] hover:bg-[#ffc600] flex items-center justify-center text-xl font-bold text-[#002f45] transition-colors">{'>'}</button>
      </div>
    </div>
  );
} 