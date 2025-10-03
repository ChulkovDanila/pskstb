import Link from "next/link";

export default function Production() {
  return (
    <div>
      <div className="w-full flex justify-center items-center py-12 bg-white">
        <div className="w-full max-w-7xl flex flex-row items-center gap-16 flex-wrap px-8">
          <div className="flex-shrink-0 w-96">
            <h2 className="text-5xl font-extrabold text-[#002f45] leading-tight transition-colors duration-200 hover:text-[#ffc600] text-left" style={{wordBreak:'break-word'}}>Технологичное<br />производство</h2>
          </div>
          <div className="flex-1 min-w-[320px] bg-white rounded-lg p-10 text-gray-800 text-base leading-relaxed flex items-center justify-between gap-8">
            <div>
              <p>
                На нашем современном производстве используются передовые технологии и высокоточное оборудование, что позволяет выпускать фанеру и древесно-плитные материалы высокого качества.
              </p>
            </div>
            <a href="/proizvodstvo" className="ml-4 whitespace-nowrap text-[#002f45] font-bold text-lg flex items-center gap-2 hover:text-[#ffc600] transition-colors group">
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
      {/* Горизонтальные карточки производства */}
      <div className="mt-12 w-full max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Первый блок: Фрезерование */}
          <Link href="/proizvodstvo/frezervanie" className="group">
            <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] group-hover:from-[#ffc600] group-hover:to-[#ffd700] rounded-xl p-6 h-24 flex items-center justify-between transition-all duration-500 ease-out hover:shadow-xl hover:shadow-[#ffc600]/20 hover:-translate-y-1 cursor-pointer border border-gray-200 hover:border-[#ffc600]/30 relative overflow-hidden">
              <h3 className="text-xl font-bold text-[#002f45] transition-all duration-300 flex-1 pr-4 relative z-10">
                Фрезерование изделий
              </h3>
              <div className="flex-shrink-0 relative z-10">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-[#002f45] transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Второй блок: Фланцы и ложементы */}
          <Link href="/proizvodstvo/flancy" className="group">
            <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] group-hover:from-[#ffc600] group-hover:to-[#ffd700] rounded-xl p-6 h-24 flex items-center justify-between transition-all duration-500 ease-out hover:shadow-xl hover:shadow-[#ffc600]/20 hover:-translate-y-1 cursor-pointer border border-gray-200 hover:border-[#ffc600]/30 relative overflow-hidden">
              <h3 className="text-xl font-bold text-[#002f45] transition-all duration-300 flex-1 pr-4 relative z-10">
                Фланцы и ложементы
              </h3>
              <div className="flex-shrink-0 relative z-10">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-[#002f45] transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Третий блок: Огнебиозащита */}
          <Link href="/proizvodstvo/ognebiozashchita" className="group">
            <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] group-hover:from-[#ffc600] group-hover:to-[#ffd700] rounded-xl p-6 h-24 flex items-center justify-between transition-all duration-500 ease-out hover:shadow-xl hover:shadow-[#ffc600]/20 hover:-translate-y-1 cursor-pointer border border-gray-200 hover:border-[#ffc600]/30 relative overflow-hidden">
              <h3 className="text-xl font-bold text-[#002f45] transition-all duration-300 flex-1 pr-4 relative z-10">
                Огнебиозащита
              </h3>
              <div className="flex-shrink-0 relative z-10">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-[#002f45] transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Четвертый блок: Промышленный окрас */}
          <Link href="/proizvodstvo/okras" className="group">
            <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] group-hover:from-[#ffc600] group-hover:to-[#ffd700] rounded-xl p-6 h-24 flex items-center justify-between transition-all duration-500 ease-out hover:shadow-xl hover:shadow-[#ffc600]/20 hover:-translate-y-1 cursor-pointer border border-gray-200 hover:border-[#ffc600]/30 relative overflow-hidden">
              <h3 className="text-xl font-bold text-[#002f45] transition-all duration-300 flex-1 pr-4 relative z-10">
                Промышленный окрас
              </h3>
              <div className="flex-shrink-0 relative z-10">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-[#002f45] transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
    );
} 