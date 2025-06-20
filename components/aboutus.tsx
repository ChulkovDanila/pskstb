export default function AboutUs() {
  return (
    <div id="about-us" className="w-full bg-white py-24 scroll-mt-28">
      <div className="w-full max-w-7xl mx-auto px-8">
        {/* Верхняя часть: Заголовок и вступление */}
        <div className="flex flex-row items-center gap-16 flex-wrap mb-16">
          <div className="flex-shrink-0 w-96">
            <h2 className="text-5xl font-extrabold text-[#002f45] leading-tight text-left">
              О компании <span className="hover:text-[#ffc600] transition-colors duration-200">PSK</span>
            </h2>
          </div>
          <div className="flex-1 min-w-[320px]">
            <p className="text-lg text-gray-700 leading-relaxed">
              Мы — ваш надежный партнер в мире древесно-плитных материалов. Компания PSK специализируется на оптовых поставках качественной фанеры от ведущих российских производителей, предлагая комплексные решения для строительства и производства.
            </p>
          </div>
        </div>

        {/* Средняя часть: Ключевые направления в колонках */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-[#002f45] mb-4">Оптовые поставки</h3>
            <p className="text-gray-600">
              Широкий ассортимент фанеры и древесных плит. Работаем напрямую с заводами, гарантируя качество и выгодные цены для любых задач.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-[#002f45] mb-4">Высокоточный раскрой</h3>
            <p className="text-gray-600">
              Выполняем распил фанеры и OSB по вашим размерам на современном оборудовании. Идеальная точность для ваших проектов.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-[#002f45] mb-4">Логистика по РФ</h3>
            <p className="text-gray-600">
              Организуем доставку продукции любым удобным способом — от сборных контейнеров до собственного автотранспорта.
            </p>
          </div>
        </div>

        {/* Нижняя часть: Партнерство */}
        <div className="bg-[#1a1a1a] text-white p-12 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-[#ffc600] mb-4">Партнерство и сервис</h3>
            <p className="text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Мы строим долгосрочные отношения с каждым клиентом. Для наших постоянных партнеров действуют специальные условия: гибкая система скидок, персональный менеджер и индивидуальные складские программы. Наша цель — сэкономить ваше время и предложить лучшее решение для ваших задач.
            </p>
        </div>

      </div>
    </div>
  );
} 