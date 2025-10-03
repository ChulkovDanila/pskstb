import Header from "@/components/header";
import Menu from "@/components/menu";
import Link from "next/link";

export default function FlancyPage() {
  return (
    <main className="flex flex-col items-center px-4">
      <Header isSubheaderHidden={true} />
      <Menu isSubheaderHidden={true} activeItem="Производство" showHomeLink={true}/>
      <div className="w-full max-w-7xl mx-auto pt-36 pb-8">
        <h1 className="text-5xl font-extrabold text-[#002f45] mb-12 text-center">
          Производство фланцев и ложементов
        </h1>
        
        <div className="space-y-12">
          {/* Вводный текст */}
          <div className="text-center">
            <p className="text-xl text-[#002f45] font-medium max-w-4xl mx-auto">Наша компания предлагает высококачественное изготовление фланцев и ложементов из фанеры и других материалов на фрезерных станках с числовым программным управлением (ЧПУ) в промышленных объемах. Используя современные технологии и материалы, мы обеспечиваем точность и высокую степень детализации в производственном процессе.</p>
          </div>

          {/* Первая карточка */}
          <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-8 rounded-xl border-l-4 border-[#fbbf24]">
            <h3 className="text-2xl font-bold text-[#002f45] mb-6">Преимущества нашего производства</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-3">Современное оборудование</h4>
                <p className="text-gray-600">Наш парк фрезерных станков с ЧПУ позволяют обрабатывать фанеру с максимальной эффективностью, что обеспечивает не только высокое качество конечного продукта, но и сокращение сроков выполнения заказов.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-3">Автоматизация процессов</h4>
                <p className="text-gray-600">В процессе производства мы минимизируем возможные ошибки и повышаем производительность благодаря автоматизации процессов.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-3">Индивидуальные программы</h4>
                <p className="text-gray-600">Уникальной особенностью нашей компании является разработка программ разной степени сложности для станков, что позволяет нам создавать индивидуальные решения, точно отвечающие требованиям наших клиентов.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-3">Гибкость производства</h4>
                <p className="text-gray-600">Каждая программа разрабатывается с учетом специфики заказа и производственного материала, позволяя гибко адаптироваться к изменяющимся условиям и запросам рынка.</p>
              </div>
            </div>
          </div>

          {/* Первое фото */}
          <div className="flex justify-center">
            <img src="/img/proizvodsvo1.jpg" alt="Производство фланцев и ложементов" className="rounded-2xl object-cover w-full shadow-lg" />
          </div>

          {/* Вторая карточка */}
          <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-8 rounded-xl border-l-4 border-[#f59e0b]">
            <h3 className="text-2xl font-bold text-[#002f45] mb-6">Гарантии качества</h3>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Высокие стандарты качества</h4>
                <p className="text-gray-600">Мы гарантируем, что все изделия соответствуют высоким стандартам качества и требованиям безопасности.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Надежность и долговечность</h4>
                <p className="text-gray-600">Надежность и долговечность наших фланцев и ложементов из фанеры и других материалов обеспечивают их безотказную работу в различных отраслях.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Профессиональный подход</h4>
                <p className="text-gray-600">Доверяйте производство профессионалам — работая с нами, вы получаете не только продукцию, но и уверенность в каждом этапе производственного процесса.</p>
              </div>
            </div>
          </div>

          {/* Второе фото */}
          <div className="flex justify-center">
            <img src="/img/proizvodsvo1.jpg" alt="Производство фланцев и ложементов" className="rounded-2xl object-cover w-full shadow-lg" />
          </div>

          {/* Третья карточка */}
          <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-8 rounded-xl border-l-4 border-[#d97706]">
            <h3 className="text-2xl font-bold text-[#002f45] mb-6">Области применения</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-3">Промышленность</h4>
                <p className="text-gray-600">Изготовление фланцев для промышленного оборудования, ложементов для упаковки и транспортировки.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-3">Строительство</h4>
                <p className="text-gray-600">Производство элементов для строительных конструкций и отделочных работ.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-3">Мебельная отрасль</h4>
                <p className="text-gray-600">Изготовление компонентов для мебельного производства и декоративных элементов.</p>
              </div>
            </div>
          </div>

          {/* Финальная карточка */}
          <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-8 rounded-xl border-l-4 border-[#b45309] text-center">
            <h3 className="text-2xl font-bold text-[#002f45] mb-4">Свяжитесь с нами</h3>
            <p className="text-lg text-gray-600 mb-6">Готовы обсудить ваш проект по производству фланцев и ложементов и предложить оптимальное решение.</p>
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
