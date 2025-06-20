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
            <a href="/proizvodstvo" className="ml-4 whitespace-nowrap text-[#ffc600] font-bold text-lg flex items-center gap-2 hover:text-[#002f45] transition-colors group">
              Подробнее
              <span className="inline-block transition-all duration-200 group-hover:translate-x-2 group-hover:[&>svg]:stroke-[#002f45]">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#ffc600" strokeWidth="2" className="transition-colors duration-200">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* Жёлтые прямоугольники с изображением и текстом (2 блока, друг под другом) */}
      <div className="mt-8 w-full max-w-7xl mx-auto flex flex-col gap-8 items-center">
        {/* Первый блок: Фанера */}
        <Link href="/proizvodstvo#raspyl" className="w-full">
          <div className="group rounded-2xl bg-[#f3f3f3] h-60 flex flex-row items-center px-0 gap-8 overflow-hidden w-full min-w-[320px] transition-colors duration-300 hover:bg-[#ffc600] cursor-pointer">
            <img src="/img/proizvodsvo2.jpg" alt="Фанера" className="h-60 w-auto object-cover rounded-none m-0 p-0" style={{marginLeft: 0}} />
            <div className="flex flex-col justify-center pl-8 w-full min-w-0">
              <h3 className="text-3xl font-extrabold text-[#002f45] mb-0 break-words whitespace-pre-line w-full" style={{wordBreak: 'break-word'}}>Промышленный распил</h3>
              <div className="text-lg text-[#002f45] opacity-80 mt-2">
                Высокоточный распил листовых материалов по индивидуальным размерам заказчика. Современное оборудование обеспечивает минимальные погрешности и высокую скорость выполнения заказов.
              </div>
            </div>
          </div>
        </Link>
        {/* Второй блок: ДСП */}
        <Link href="/proizvodstvo#shlifovanie" className="w-full">
          <div className="group rounded-2xl bg-[#f3f3f3] h-60 flex flex-row items-center px-0 gap-8 overflow-hidden w-full min-w-[320px] transition-colors duration-300 hover:bg-[#ffc600] cursor-pointer">
            <img src="/img/proizvodsvo1.jpg" alt="ДСП" className="h-60 w-auto object-cover rounded-none m-0 p-0" style={{marginLeft: 0}} />
            <div className="flex flex-col justify-center pl-8 w-full min-w-0">
              <h3 className="text-3xl font-extrabold text-[#002f45] mb-0 break-words whitespace-pre-line w-full" style={{wordBreak: 'break-word'}}>Калибрование и шлифование</h3>
              <div className="text-lg text-[#002f45] opacity-80 mt-2">
                Поверхность материала проходит калибровку и шлифование для достижения идеальной гладкости и точной толщины, что особенно важно для дальнейшей обработки и отделки.
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
    );
} 