import Header from "@/components/header";
import Menu from "@/components/menu";
import Link from "next/link";

export default function OgnebiozashchitaPage() {
  return (
    <main className="flex flex-col items-center px-4">
      <Header isSubheaderHidden={true} />
      <Menu isSubheaderHidden={true} activeItem="Производство" showHomeLink={true}/>
      <div className="w-full max-w-7xl mx-auto pt-36 pb-8">
        <h1 className="text-5xl font-extrabold text-[#002f45] mb-12 text-center">
          Огнебиозащита
        </h1>
        
        <div className="space-y-12">
          {/* Вводный текст */}
          <div className="text-center">
            <p className="text-xl text-[#002f45] font-medium max-w-4xl mx-auto">Огнебиозащита — это комплексная защита древесных материалов от огня и биологических воздействий, которая играет ключевую роль в обеспечении безопасности и долговечности изделий из фанеры, ДСП и других древесно-плитных материалов.</p>
          </div>

          {/* Первая карточка */}
          <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-8 rounded-xl border-l-4 border-[#fbbf24]">
            <h3 className="text-2xl font-bold text-[#002f45] mb-6">Почему важна огнебиозащита?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-3">Пожарная безопасность</h4>
                <p className="text-gray-600">Снижение горючести материалов и повышение времени сопротивления огню, что критически важно для строительных конструкций и промышленных объектов.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-3">Биологическая защита</h4>
                <p className="text-gray-600">Защита от грибков, плесени, насекомых-вредителей и гниения, что значительно увеличивает срок службы изделий.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-3">Экологическая безопасность</h4>
                <p className="text-gray-600">Использование современных безопасных составов, не наносящих вреда здоровью людей и окружающей среде.</p>
              </div>
            </div>
          </div>

          {/* Первое фото */}
          <div className="flex justify-center">
            <img src="/img/proizvodsvo2.jpg" alt="Огнебиозащита" className="rounded-2xl object-cover w-full shadow-lg" />
          </div>

          {/* Вторая карточка */}
          <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-8 rounded-xl border-l-4 border-[#f59e0b]">
            <h3 className="text-2xl font-bold text-[#002f45] mb-6">Преимущества наших услуг</h3>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Повышение пожарной безопасности</h4>
                <p className="text-gray-600">Снижение горючести материалов и повышение времени сопротивления огню, что критически важно для строительных конструкций и промышленных объектов.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Защита от биологических повреждений</h4>
                <p className="text-gray-600">Защита от грибков, плесени, насекомых-вредителей и гниения, что значительно увеличивает срок службы изделий.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Увеличение срока службы древесины и фанеры</h4>
                <p className="text-gray-600">Комплексная защита от различных факторов воздействия обеспечивает долговечность и надежность древесных материалов в любых условиях эксплуатации.</p>
              </div>
            </div>
          </div>

          {/* Второе фото */}
          <div className="flex justify-center">
            <img src="/img/proizvodsvo2.jpg" alt="Огнебиозащита" className="rounded-2xl object-cover w-full shadow-lg" />
          </div>

          {/* Третья карточка */}
          <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-8 rounded-xl border-l-4 border-[#d97706]">
            <h3 className="text-2xl font-bold text-[#002f45] mb-6">Виды огнебиозащитных обработок</h3>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Огнебиозащитные пропитки</h4>
                <p className="text-gray-600">Химические составы, которые снижают горючесть и препятствуют развитию микроорганизмов.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Обработка под давлением</h4>
                <p className="text-gray-600">Погружение или пропитка в камерах под высоким давлением для глубокого проникновения защитных веществ.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-[#002f45] mb-2">Нанесение на поверхность</h4>
                <p className="text-gray-600">Нанесение защитных составов кистью, валиком или распылением.</p>
              </div>
            </div>
          </div>

          {/* Финальная карточка */}
          <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-8 rounded-xl border-l-4 border-[#b45309] text-center">
            <h3 className="text-2xl font-bold text-[#002f45] mb-4">Свяжитесь с нами</h3>
            <p className="text-lg text-gray-600 mb-6">Готовы обсудить ваш проект по огнебиозащите и предложить оптимальное решение для защиты ваших материалов.</p>
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