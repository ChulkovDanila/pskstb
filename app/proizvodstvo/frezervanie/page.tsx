import Header from "@/components/header";
import Menu from "@/components/menu";
import Link from "next/link";

export default function FrezervaniePage() {
  return (
    <main className="flex flex-col items-center px-4">
      <Header isSubheaderHidden={true} />
      <Menu isSubheaderHidden={true} activeItem="Производство" showHomeLink={true}/>
      <div className="w-full max-w-7xl mx-auto pt-36 pb-8">
        <h1 className="text-5xl font-extrabold text-[#002f45] mb-12 text-center">
          Фрезерование изделий в промышленных объемах
        </h1>
        
        <div className="space-y-12">
          {/* Вводный текст */}
          <div className="text-center">
            <p className="text-xl text-[#002f45] font-medium max-w-4xl mx-auto">Фрезерование — это один из наиболее распространенных методов обработки фанеры, ДСП, оргалита и других материалов, используемый для получения точных и сложных форм, как прямых, так и криволинейных. В условиях промышленного производства фрезерование играет ключевую роль в обеспечении высокой производительности, качества и повторяемости изделий.</p>
          </div>

          {/* Первая карточка */}
          <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-8 rounded-xl border-l-4 border-[#fbbf24]">
            <h3 className="text-2xl font-bold text-[#002f45] mb-6">Почему выбирают фрезерование в промышленных масштабах?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-3">Высокая точность и качество</h4>
                <p className="text-gray-600">Современные промышленные фрезерные станки позволяют достигать высокой точности обработки, что особенно важно при производстве частей и компонентов изделий: для кабельной, бумажной, автомобильной, строительной и других видов промышленности.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-3">Массовое производство</h4>
                <p className="text-gray-600">Использование автоматизированных линий и ЧПУ-станков обеспечивает возможность обработки большого объема изделий за короткие сроки.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-3">Гибкость в производстве</h4>
                <p className="text-gray-600">Возможность быстрого написания, изменения программ и инструментов позволяет производить разные виды изделий без значительных затрат времени.</p>
              </div>
            </div>
          </div>

          {/* Первое фото */}
          <div className="flex justify-center">
            <img src="/img/proizvodsvo2.jpg" alt="Фрезерование изделий" className="rounded-2xl object-cover w-full shadow-lg" />
          </div>

          {/* Вторая карточка */}
          <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-8 rounded-xl border-l-4 border-[#f59e0b]">
            <h3 className="text-2xl font-bold text-[#002f45] mb-6">Наши возможности</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-3">Современное оборудование</h4>
                <p className="text-gray-600">Используем только передовые фрезерные станки с числовым программным управлением (ЧПУ), обеспечивающие высокую точность и стабильность обработки.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-3">Объемы производства</h4>
                <p className="text-gray-600">Готовы выполнять заказы любой сложности и объема — от небольших партий до серийного производства.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-3">Контроль качества</h4>
                <p className="text-gray-600">Внедрена система контроля на всех этапах обработки для обеспечения соответствия изделий техническим требованиям.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-3">Индивидуальный подход</h4>
                <p className="text-gray-600">Предлагаем консультации и разработку технологических процессов под конкретные задачи клиента, включая написание программ разной сложности.</p>
              </div>
            </div>
          </div>

          {/* Второе фото */}
          <div className="flex justify-center">
            <img src="/img/proizvodsvo2.jpg" alt="Фрезерование изделий" className="rounded-2xl object-cover w-full shadow-lg" />
          </div>

          {/* Третья карточка */}
          <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-8 rounded-xl border-l-4 border-[#d97706]">
            <h3 className="text-2xl font-bold text-[#002f45] mb-6">Почему выбирают нас?</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Опыт и профессионализм</h4>
                <p className="text-gray-600">Более 10 лет успешной работы в области промышленного фрезерования</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Современные технологии</h4>
                <p className="text-gray-600">Постоянное обновление оборудования и внедрение инновационных методов</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Конкурентные цены</h4>
                <p className="text-gray-600">Оптимизация процессов позволяет предлагать выгодные условия сотрудничества</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Соблюдение сроков</h4>
                <p className="text-gray-600">Гарантируем своевременное выполнение заказов любой сложности</p>
              </div>
            </div>
          </div>

          {/* Финальная карточка */}
          <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-8 rounded-xl border-l-4 border-[#b45309] text-center">
            <h3 className="text-2xl font-bold text-[#002f45] mb-4">Свяжитесь с нами</h3>
            <p className="text-lg text-gray-600 mb-6">Готовы обсудить ваш проект и предложить оптимальное решение по фрезерованию изделий в промышленных объемах.</p>
            <a href="/#contact" className="inline-flex items-center gap-2 bg-[#ffc600] hover:bg-[#e6b200] text-[#002f45] font-bold px-8 py-3 rounded-lg transition-colors duration-200">
              Оставить заявку
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Кнопка возврата на главную */}
        <div className="flex justify-center mt-16">
          <Link href="/#production" className="group inline-flex items-center gap-3 bg-gradient-to-r from-gray-400 to-gray-500 hover:from-[#ffc600] hover:to-[#ffd700] text-white hover:text-[#002f45] font-bold px-8 py-4 rounded-xl transition-all duration-500 ease-out hover:shadow-xl hover:shadow-[#ffc600]/20 hover:-translate-y-1">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:-translate-x-1">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            На главную
          </Link>
        </div>
      </div>
    </main>
  );
}
