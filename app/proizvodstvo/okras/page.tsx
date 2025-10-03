import Header from "@/components/header";
import Menu from "@/components/menu";
import Link from "next/link";

export default function OkrasPage() {
  return (
    <main className="flex flex-col items-center px-4">
      <Header isSubheaderHidden={true} />
      <Menu isSubheaderHidden={true} activeItem="Производство" showHomeLink={true}/>
      <div className="w-full max-w-7xl mx-auto pt-36 pb-8">
        <h1 className="text-5xl font-extrabold text-[#002f45] mb-12 text-center">
          Промышленный окрас для древесины и фанеры
        </h1>
        
        <div className="space-y-12">
          {/* Вводный текст */}
          <div className="text-center">
            <p className="text-xl text-[#002f45] font-medium max-w-4xl mx-auto">Промышленный окрас древесины и фанеры — это комплексная услуга по нанесению защитных и декоративных покрытий, которая обеспечивает долговечность, эстетичный внешний вид и защиту от различных воздействий окружающей среды.</p>
          </div>

          {/* Первая карточка */}
          <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-8 rounded-xl border-l-4 border-[#fbbf24]">
            <h3 className="text-2xl font-bold text-[#002f45] mb-6">Виды покрытий</h3>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Лаки и эмали</h4>
                <p className="text-gray-600">Для придания поверхности глянца, защиты от влаги и механических повреждений. Обеспечивают долговечность и эстетичный внешний вид.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Масла и воски</h4>
                <p className="text-gray-600">Подчеркивают природную текстуру, обеспечивают защиту от влаги и загрязнений. Создают естественный и привлекательный вид древесины.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Пленочные покрытия</h4>
                <p className="text-gray-600">Виниловые или полиуретановые пленки для декоративных целей и защиты. Обеспечивают высокую износостойкость и разнообразие дизайна.</p>
              </div>
            </div>
          </div>

          {/* Первое фото */}
          <div className="flex justify-center">
            <img src="/img/proizvodsvo1.jpg" alt="Промышленный окрас" className="rounded-2xl object-cover w-full shadow-lg" />
          </div>

          {/* Вторая карточка */}
          <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-8 rounded-xl border-l-4 border-[#f59e0b]">
            <h3 className="text-2xl font-bold text-[#002f45] mb-6">Услуги по нанесению покрытий</h3>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Подготовка поверхности</h4>
                <p className="text-gray-600">Шлифовка, очистка и подготовка поверхности для качественного нанесения покрытий. Обеспечивает идеальную адгезию и долговечность покрытия.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Нанесение грунтовочных слоёв</h4>
                <p className="text-gray-600">Покрытие грунтовочными составами для улучшения адгезии и защиты основы. Создает прочную основу для финишного покрытия.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Основное и финишное покрытие</h4>
                <p className="text-gray-600">Нанесение основного покрытия и финишных слоев для достижения желаемого результата. Обеспечивает защиту и эстетичный внешний вид.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Контроль качества и сушки</h4>
                <p className="text-gray-600">Строгий контроль качества нанесения и соблюдение технологических процессов сушки. Гарантирует высокое качество готового изделия.</p>
              </div>
            </div>
          </div>

          {/* Второе фото */}
          <div className="flex justify-center">
            <img src="/img/proizvodsvo1.jpg" alt="Промышленный окрас" className="rounded-2xl object-cover w-full shadow-lg" />
          </div>

          {/* Третья карточка */}
          <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-8 rounded-xl border-l-4 border-[#d97706]">
            <h3 className="text-2xl font-bold text-[#002f45] mb-6">Почему выбирают наши услуги?</h3>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Действующая лицензия</h4>
                <p className="text-gray-600">Действующая лицензия на выполнение работ по огнезащите материалов, изделий и конструкций.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Современные материалы</h4>
                <p className="text-gray-600">Использование современных и сертифицированных материалов для достижения высокого качества.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Высокий профессионализм</h4>
                <p className="text-gray-600">Высокий профессионализм специалистов с многолетним опытом работы в области промышленного окраса.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Индивидуальный подход</h4>
                <p className="text-gray-600">Индивидуальный подход к каждому проекту с учетом специфики материалов и требований заказчика.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Быстрые сроки</h4>
                <p className="text-gray-600">Быстрые сроки выполнения работ без потери качества и соблюдения всех технологических требований.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Гарантия качества</h4>
                <p className="text-gray-600">Гарантия качества выполненных работ и долговечности нанесенных покрытий.</p>
              </div>
            </div>
          </div>

          {/* Финальная карточка */}
          <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-8 rounded-xl border-l-4 border-[#b45309] text-center">
            <h3 className="text-2xl font-bold text-[#002f45] mb-4">Свяжитесь с нами</h3>
            <p className="text-lg text-gray-600 mb-6">Готовы обсудить ваш проект по промышленному окрасу и предложить оптимальное решение для защиты и декорирования ваших материалов.</p>
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