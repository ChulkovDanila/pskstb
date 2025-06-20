'use client';

import { useState } from "react";

export default function Header({ isSubheaderHidden = false }: { isSubheaderHidden?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = (e: React.MouseEvent | React.FormEvent) => {
    e.preventDefault();
    alert('Функция в разработке. Скоро здесь появится новый функционал. Следите за обновлениями!');
  };

  return (
    <div
      className={`w-full h-20 bg-white shadow-sm flex items-center px-40 fixed left-0 right-0 z-[100] transition-all duration-200 ${isSubheaderHidden ? 'top-0' : 'top-16'}`}
      style={{ boxShadow: "0 1px 8px 0 #e5e7eb" }}
    >
      {/* Левая часть: Каталог */}
      <button
        className={`flex items-center bg-white border-[1px] px-5 py-3 rounded-xl gap-2 transition-colors duration-200 ${hovered ? 'border-[#ffc600]' : 'border-[#edf0f2]'}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleAlert}
      >
        <img
          src={hovered ? "/IconCategory2.png" : "/IconCategory.png"}
          alt="Категории"
          className="h-6 w-6"
        />
        <span className="font-sans text-base font-medium">Каталог</span>
      </button>
      {/* Центр: Поисковик */}
      <form className="flex-1 flex items-center h-12 mx-8 bg-[#f5f6f7] rounded-lg overflow-hidden" onSubmit={handleAlert}>
        <input
          type="text"
          placeholder="Фанера ФК 18 мм | 1525 х 1525 "
          className="flex-1 h-full px-4 bg-transparent text-gray-600 placeholder-gray-400 outline-none border-none font-sans text-base"
        />
        <button type="submit" className="h-12 w-12 flex items-center justify-center bg-[#ffc600] hover:bg-[#ffd84d] transition-colors p-0">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" />
          </svg>
        </button>
      </form>
      {/* Правая часть: Кнопки */}
      <div className="flex items-center gap-4">
        <button
          className={`flex items-center bg-white border-[1px] px-5 py-3 rounded-xl gap-2 transition-colors duration-200 ${hoveredBtn === 'login' ? 'border-[#ffc600]' : 'border-[#edf0f2]'}`}
          onMouseEnter={() => setHoveredBtn('login')}
          onMouseLeave={() => setHoveredBtn(null)}
          onClick={handleAlert}
        >
          <img src={hoveredBtn === 'login' ? "/IconLogIn2.png" : "/IconLogIn.png"} alt="Войти" className="h-6 w-6" />
          <span className="font-sans text-base font-medium">Войти</span>
        </button>
        <button
          className={`flex items-center bg-white border-[1px] px-5 py-3 rounded-xl gap-2 transition-colors duration-200 ${hoveredBtn === 'fav' ? 'border-[#ffc600]' : 'border-[#edf0f2]'}`}
          onMouseEnter={() => setHoveredBtn('fav')}
          onMouseLeave={() => setHoveredBtn(null)}
          onClick={handleAlert}
        >
          <img src={hoveredBtn === 'fav' ? "/IconFav2.png" : "/IconFav.png"} alt="Избранное" className="h-6 w-6" />
          <span className="font-sans text-base font-medium">Избранное</span>
        </button>
        <button
          className={`flex items-center bg-white border-[1px] px-5 py-3 rounded-xl gap-2 transition-colors duration-200 ${hoveredBtn === 'cart' ? 'border-[#ffc600]' : 'border-[#edf0f2]'}`}
          onMouseEnter={() => setHoveredBtn('cart')}
          onMouseLeave={() => setHoveredBtn(null)}
          onClick={handleAlert}
        >
          <img src={hoveredBtn === 'cart' ? "/IconCart2.png" : "/IconCart.png"} alt="Корзина" className="h-6 w-6" />
          <span className="font-sans text-base font-medium">Корзина</span>
        </button>
      </div>
    </div>
  );
}