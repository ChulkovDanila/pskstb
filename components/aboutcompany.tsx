'use client';

export default function AboutCompany() {
  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('Скоро здесь появится интернет-магазин!');
  };

  return (
    <div>
      <div className="w-full flex justify-center items-center py-12 bg-white">
        <div className="w-full max-w-7xl flex flex-row items-center gap-16 flex-wrap px-8">
          <div className="flex-shrink-0 w-96">
            <h2 className="text-5xl font-extrabold text-[#002f45] leading-tight transition-colors duration-200 hover:text-[#ffc600] text-left" style={{wordBreak:'break-word'}}>Продукция<br />PSK</h2>
          </div>
          <div className="flex-1 min-w-[320px] bg-white rounded-lg p-10 text-gray-800 text-base leading-relaxed flex items-center justify-between gap-8">
            <div>
              <p>
                Компания предлагает широкий ассортимент фанеры и древесно-плитных материалов различных видов и размеров. У нас вы найдёте продукцию для любых задач — от строительных до мебельных проектов. Мы постоянно расширяем наш каталог, чтобы удовлетворить потребности каждого клиента.
              </p>
            </div>
            <a href="#" onClick={handleComingSoon} className="ml-4 whitespace-nowrap text-[#002f45] font-bold text-lg flex items-center gap-2 hover:text-[#ffc600] transition-colors group">
              Подробнее
              <span className="inline-block transition-all duration-200 group-hover:translate-x-2 group-hover:[&>svg]:stroke-[#ffc600]">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#002f45" strokeWidth="2" className="transition-colors duration-200">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* Жёлтый прямоугольник с картинкой и заголовком */}
      <div className="mt-8 w-full max-w-7xl mx-auto flex flex-row gap-8 items-center">
        <div 
          onClick={handleComingSoon}
          className="group rounded-2xl bg-[#f3f3f3] h-60 flex flex-row items-center px-0 gap-8 overflow-hidden flex-1 min-w-[320px] transition-colors duration-300 hover:bg-[#ffc600] cursor-pointer">
          <img src="/img/fanera.png" alt="about" className="h-60 w-auto object-cover rounded-none m-0 p-0" style={{marginLeft: 0}} />
          <div className="flex flex-col justify-center pl-8">
            <h3 className="text-3xl font-extrabold text-[#002f45] mb-2">Фанера</h3>
            <div className="text-lg text-[#002f45] opacity-80">ФК, ФСФ, Ламинированная</div>
          </div>
        </div>
        <img src="/img/fanera2.png" alt="fanera2" className="h-60 w-60 object-cover rounded-2xl" />
        <img src="/img/fanera3.png" alt="fanera3" className="h-60 w-60 object-cover rounded-2xl" />
      </div>
    </div>
    );
} 