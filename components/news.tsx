export default function News() {
    return (
      <div id="news" className="scroll-mt-28">
        <div className="w-full flex justify-center items-center py-12 bg-white">
          <div className="w-full max-w-7xl flex flex-row items-center gap-16 flex-wrap px-8">
            <div className="flex-shrink-0 w-96">
              <h2 className="text-5xl font-extrabold text-[#002f45] leading-tight transition-colors duration-200 hover:text-[#ffc600] cursor-pointer text-left" style={{wordBreak:'break-word'}}>Новости и <br />блог PSK</h2>
            </div>
            <div className="flex-1 min-w-[320px] bg-white rounded-lg p-10 text-gray-800 text-base leading-relaxed flex items-center justify-between gap-8">
              <div>
                <p>
                ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Контейнеры под заголовком */}
        <div className="mt-8 w-full max-w-7xl mx-auto flex flex-row gap-8 items-end px-8">
          {/* 1-й контейнер: при наведении появляется жёлтый overlay, заголовок, текст и 'Подробнее' */}
          <div className="group relative rounded-2xl bg-gradient-to-b from-[#ffe066] via-[#ffd600] to-[#ffc600] h-[420px] w-80 flex-shrink-0 overflow-hidden">
            <img src="/img/news1.jpeg" alt="news1" className="absolute inset-0 w-full h-full object-cover transition-all duration-500" />
            {/* Жёлтый overlay при ховере */}
            <div className="pointer-events-none absolute inset-0 bg-[#ffc600] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* Контент появляется при ховере */}
            <div className="absolute bottom-6 left-0 w-full flex flex-col items-start px-6">
              <h3 className="text-black text-2xl font-extrabold leading-tight opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">Укладка фанеры</h3>
              <p className="text-black text-base font-normal mt-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 max-w-[90%]">Во время строительства и отделки домов и внутренних помещений, мастер сталкивается с необходимостью выбора материала, который позволит уложить пол...</p>
              <a href="#" className="mt-3 opacity-0 group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 delay-200 flex items-center gap-2 text-[#002f45] font-bold text-lg">
                Подробнее
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#002f45" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          {/* 2-й контейнер: разделён на две части, сверху изображение, фон жёлтый, статичный контент */}
          <div className="rounded-2xl bg-[#ffc600] h-[420px] w-64 flex-shrink-0 overflow-hidden flex flex-col relative">
            <div className="w-full h-1/2 overflow-hidden">
              <img src="/img/news2.jpeg" alt="news2" className="w-full h-full object-cover rounded-t-2xl" />
            </div>
            <div className="w-full h-1/2"></div>
            {/* Статичный контент */}
            <div className="absolute bottom-6 left-0 w-full flex flex-col items-start px-6">
              <h3 className="text-black text-lg font-extrabold leading-tight">Каркасное строительство</h3>
              <p className="text-black text-sm font-normal mt-1 max-w-[95%]">Каркасные технологии позволяют быстро и эффективно возводить дома любой сложности и площади.</p>
              <a href="#" className="mt-2 flex items-center gap-2 text-[#002f45] font-bold text-base">
                Подробнее
                <span className="inline-block transition-transform duration-300">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#002f45" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          {/* 3-й и 4-й контейнеры друг над другим */}
          <div className="flex flex-col gap-8 flex-shrink-0 justify-end">
            {/* 3-й контейнер: меньшей высоты, с анимацией при наведении */}
            <div className="group relative rounded-2xl bg-[#f3f3f3] h-[200px] w-64 overflow-hidden">
              <img src="/img/news3.jpeg" alt="news3" className="absolute inset-0 w-full h-full object-cover transition-all duration-500" />
              <div className="pointer-events-none absolute inset-0 bg-[#ffc600] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-0 w-full flex flex-col items-start px-4">
                <h3 className="text-black text-lg font-extrabold leading-tight opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">Производство фанеры</h3>
                <p className="text-black text-sm font-normal mt-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 max-w-[95%]">Фанера — универсальный материал, применяемый в строительстве, мебельной и других отраслях...</p>
                <a href="#" className="mt-2 opacity-0 group-hover:opacity-100 group-hover:mt-3 transition-all duration-500 delay-200 flex items-center gap-2 text-[#002f45] font-bold text-base">
                  Подробнее
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#002f45" strokeWidth="2">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            {/* 4-й контейнер: большей высоты, с анимацией при наведении */}
            <div className="group relative rounded-2xl bg-[#f3f3f3] h-[190px] w-64 overflow-hidden">
              <img src="/img/news4.jpeg" alt="news4" className="absolute inset-0 w-full h-full object-cover transition-all duration-500" />
              <div className="pointer-events-none absolute inset-0 bg-[#ffc600] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-0 w-full flex flex-col items-start px-4">
                <h3 className="text-black text-lg font-extrabold leading-tight opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">Архитектурные решения</h3>
                <p className="text-black text-sm font-normal mt-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 max-w-[95%]">Современные конструкции из древесных материалов позволяют реализовать самые смелые проекты...</p>
                <a href="#" className="mt-2 opacity-0 group-hover:opacity-100 group-hover:mt-3 transition-all duration-500 delay-200 flex items-center gap-2 text-[#002f45] font-bold text-base">
                  Подробнее
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#002f45" strokeWidth="2">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* 5-й контейнер: разделён на две части, внизу изображение, статичный контент сверху */}
          <div className="rounded-2xl bg-[#ffc600] h-[420px] w-64 flex-shrink-0 overflow-hidden flex flex-col relative">
            {/* Статичный контент сверху */}
            <div className="absolute top-6 left-0 w-full flex flex-col items-start px-6 z-10">
              <h3 className="text-black text-lg font-extrabold leading-tight">Опалубка и формы</h3>
              <p className="text-black text-sm font-normal mt-1 max-w-[95%]">Современные решения для монолитного строительства и сложных архитектурных форм.</p>
              <a href="#" className="mt-2 flex items-center gap-2 text-[#002f45] font-bold text-base">
                Подробнее
                <span className="inline-block transition-transform duration-300">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#002f45" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
            <div className="w-full h-1/2"></div>
            <div className="w-full h-1/2 overflow-hidden">
              <img src="/img/news5.jpg" alt="news5" className="w-full h-full object-cover rounded-b-2xl" />
            </div>
          </div>
        </div>
      </div>
    );
}