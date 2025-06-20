import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white pt-16 pb-8 mt-24">
      <div className="w-full max-w-7xl mx-auto px-8">
        <div className="flex flex-wrap justify-between gap-12 mb-16">
          {/* Колонка 1: Адрес */}
          <div className="flex-1 min-w-[250px] pr-8">
            <h3 className="text-lg font-semibold text-white mb-4">Наш адрес</h3>
            <p className="text-gray-300 leading-relaxed">
              РФ, Московская обл., г. Электросталь,
              <br />
              ул. Горького, 41А
            </p>
          </div>

          {/* Колонка 2: Контакты */}
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-lg font-semibold text-white mb-4">Контакты</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="tel:+74959610618" className="hover:text-[#ffc600] transition-colors">+7 (495) 961-06-18</a>
              </li>
              <li>
                <a href="mailto:info@fanera-stb.ru" className="hover:text-[#ffc600] transition-colors">info@fanera-stb.ru</a>
              </li>
              <li>
                <p>fanera_stb</p>
              </li>
            </ul>
          </div>

          {/* Колонка 3: Режим работы */}
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-lg font-semibold text-white mb-4">Режим работы</h3>
            <p className="text-gray-300">ПН-ПТ с 9.00 до 18.00</p>
            <p className="text-gray-400 text-sm mt-2">
              Имеем возможность отгрузки в выходные и праздничные дни по предварительному согласованию.
            </p>
          </div>
        </div>

        {/* Нижняя часть: Оферта */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-xs leading-relaxed">
          <p>
            Обращаем ваше внимание на то, что данный сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437(2). Гражданского кодекса Российской Федерации. Для получения подробной информации о наличии и стоимости указанных товаров и (или) услуг, пожалуйста, обращайтесь к менеджерам компании с помощью специальной формы связи или по телефону: +7 (495) 961-06-18
          </p>
        </div>
      </div>
    </footer>
  );
} 