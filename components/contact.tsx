import { useEffect, useRef, useState } from "react";

const images = [
  "/img/6fedf3573a8cc4a04d1ef708c4a934c5.jpg",
  "/img/8ce111a14552d17c749b12d62966010d.jpg",
  "/img/5065bd840cf6c5ae9d7c7331af74b1ee.jpg",
  "/img/a2dcdccfaa56fe0a16ce383152ebd7d2.jpg"
];

const imageTitles = [
  "Фанера для кровли и крыши",
  "Фанера от лучших производителей",
  "Мебельная фанера",
  "Фанера для стен"
];

function formatPhone(value: string) {
  // Удаляем всё, кроме цифр
  let digits = value.replace(/\D/g, "");
  // Убираем ведущие 8 и 7, оставляем только 10 цифр после +7
  if (digits.startsWith("8")) digits = digits.slice(1);
  if (digits.startsWith("7")) digits = digits.slice(1);
  digits = digits.slice(0, 10);
  let result = "+7";
  if (digits.length > 0) result += ` (${digits.slice(0, 3)}`;
  if (digits.length >= 4) result += `) ${digits.slice(3, 6)}`;
  if (digits.length >= 7) result += `-${digits.slice(6, 8)}`;
  if (digits.length >= 9) result += `-${digits.slice(8, 10)}`;
  return result;
}

export default function Contact() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  return (
    <div className="flex w-full justify-center items-center" style={{paddingLeft:'10rem', paddingRight:'10rem'}}>
      <div className="w-full h-96 flex items-center gap-8">
        <div className="relative h-96 flex-1 min-w-0 overflow-hidden rounded-lg shadow-lg">
          {/* Заголовки поверх картинок */}
          {imageTitles.map((title, i) => (
            <div
              key={title}
              className={`absolute left-0 bottom-0 w-full px-8 pb-8 z-20 flex justify-start pointer-events-none transition-opacity duration-700 ease-in-out
                ${i === index ? 'opacity-100' : 'opacity-0'}`}
            >
              <h3 className="text-5xl font-extrabold text-[#ffc600] drop-shadow-lg bg-black bg-opacity-50 rounded-xl px-6 py-3 inline-block">
                {title}
              </h3>
            </div>
          ))}
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt="carousel"
              className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 ease-in-out
                ${i === index ? 'translate-x-0 opacity-100 z-10' :
                  i < index || (index === 0 && i === images.length - 1) ? '-translate-x-full opacity-0 z-0' :
                  'translate-x-full opacity-0 z-0'}`}
              style={{transitionProperty:'transform, opacity'}} 
            />
          ))}
        </div>
        <div className="h-96 w-[480px] rounded-lg shadow-lg flex-shrink-0 bg-cover bg-center flex flex-col justify-center items-center" style={{backgroundImage: 'url(/img/form-bg.png)'}}>
          <h2 className="text-2xl font-bold text-[#002f45] mb-2 text-center">Оставьте заявку</h2>
          <p className="text-base text-gray-700 mb-6 text-center">и наш менеджер свяжется с Вами</p>
          <form className="w-full flex flex-col items-center gap-4 px-8">
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full h-12 rounded-lg px-4 bg-white bg-opacity-80 border border-gray-200 focus:border-[#ffc600] outline-none font-sans text-base transition"
            />
            <input
              type="tel"
              placeholder="+7 (___) ___-__-__"
              className="w-full h-12 rounded-lg px-4 bg-white bg-opacity-80 border border-gray-200 focus:border-[#ffc600] outline-none font-sans text-base transition"
              value={phone}
              onChange={handlePhoneChange}
              maxLength={18}
            />
            <button type="submit" className="w-full h-12 mt-2 rounded-lg bg-[#ffc600] hover:bg-[#ffd84d] text-[#002f45] font-bold text-base transition-colors shadow">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
} 