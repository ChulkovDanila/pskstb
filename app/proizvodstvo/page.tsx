import Header from "@/components/header";
import Menu from "@/components/menu";

export default function ProizvodstvoPage() {
  return (
    <main className="flex flex-col items-center px-4">
      <Header isSubheaderHidden={true} />
      <Menu isSubheaderHidden={true} activeItem="Производство" showHomeLink={true}/>
      <div className="w-full max-w-7xl mx-auto pt-36 pb-8">
        <h1 className="text-4xl font-extrabold text-[#002f45] mb-12">
          Наше производство
        </h1>
        
        {/* Статья 1: Фрезерование изделий в промышленных объемах */}
        <div id="frezervanie" className="flex gap-12 mb-16 scroll-mt-36 items-start">
          <div className="w-2/3">
            <h2 className="text-3xl font-bold text-[#002f45] mb-4">Фрезерование изделий в промышленных объемах</h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p className="text-xl text-[#002f45] font-medium">Фрезерование — это один из наиболее распространенных методов обработки фанеры, ДСП, оргалита и других материалов, используемый для получения точных и сложных форм, как прямых, так и криволинейных. В условиях промышленного производства фрезерование играет ключевую роль в обеспечении высокой производительности, качества и повторяемости изделий.</p>
              
              {/* Преимущества фрезерования */}
              <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-6 rounded-xl border-l-4 border-[#fbbf24]">
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
              
              {/* Наши возможности */}
              <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-6 rounded-xl border-l-4 border-[#f59e0b]">
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
              
              {/* Почему выбирают нас */}
              <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-6 rounded-xl border-l-4 border-[#d97706]">
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
              
              {/* Призыв к действию */}
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
          </div>
          
          {/* Правая колонка с изображениями */}
          <div className="w-1/3 flex-shrink-0 space-y-8">
            <img src="/img/proizvodsvo2.jpg" alt="Фрезерование изделий" className="rounded-2xl object-cover w-full h-auto shadow-lg" />
            <img src="/img/proizvodsvo2.jpg" alt="Фрезерование изделий" className="rounded-2xl object-cover w-full h-auto shadow-lg" />
            <img src="/img/proizvodsvo2.jpg" alt="Фрезерование изделий" className="rounded-2xl object-cover w-full h-auto shadow-lg" />
            <img src="/img/proizvodsvo2.jpg" alt="Фрезерование изделий" className="rounded-2xl object-cover w-full h-auto shadow-lg" />
            <img src="/img/proizvodsvo2.jpg" alt="Фрезерование изделий" className="rounded-2xl object-cover w-full h-auto shadow-lg" />
            <img src="/img/proizvodsvo2.jpg" alt="Фрезерование изделий" className="rounded-2xl object-cover w-full h-auto shadow-lg" />
            <img src="/img/proizvodsvo2.jpg" alt="Фрезерование изделий" className="rounded-2xl object-cover w-full h-auto shadow-lg" />
          </div>
          </div>

        {/* Статья 2: Производство фланцев и ложементов */}
        <div id="flancy" className="flex gap-12 scroll-mt-36 items-start">
          <div className="w-2/3">
            <h2 className="text-3xl font-bold text-[#002f45] mb-4">Производство фланцев и ложементов</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>Наша компания предлагает высококачественное изготовление фланцев и ложементов из фанеры и других материалов на фрезерных станках с числовым программным управлением (ЧПУ) в промышленных объемах. Используя современные технологии и материалы, мы обеспечиваем точность и высокую степень детализации в производственном процессе.</p>
              
              <p>Наш парк фрезерных станков с ЧПУ позволяют обрабатывать фанеру с максимальной эффективностью, что обеспечивает не только высокое качество конечного продукта, но и сокращение сроков выполнения заказов. В процессе производства мы минимизируем возможные ошибки и повышаем производительность благодаря автоматизации процессов.</p>
              
              <p>Уникальной особенностью нашей компании является разработка программ разной степени сложности для станков, что позволяет нам создавать индивидуальные решения, точно отвечающие требованиям наших клиентов. Каждая программа разрабатывается с учетом специфики заказа и производственного материала, позволяя гибко адаптироваться к изменяющимся условиям и запросам рынка.</p>
              
              <p>Мы гарантируем, что все изделия соответствуют высоким стандартам качества и требованиям безопасности. Надежность и долговечность наших фланцев и ложементов из фанеры и других материалов обеспечивают их безотказную работу в различных отраслях.</p>
              
              <p>Доверяйте производство профессионалам — работая с нами, вы получаете не только продукцию, но и уверенность в каждом этапе производственного процесса.</p>
            </div>
          </div>
          
          {/* Правая колонка с изображениями */}
          <div className="w-1/3 flex-shrink-0 space-y-12">
            <img src="/img/proizvodsvo1.jpg" alt="Производство фланцев и ложементов" className="rounded-2xl object-cover w-full h-auto shadow-lg" />
            <img src="/img/proizvodsvo1.jpg" alt="Производство фланцев и ложементов" className="rounded-2xl object-cover w-full h-auto shadow-lg" />
          </div>
        </div>

        {/* Статья 3: Огнебиозащита */}
        <div id="ognebiozashchita" className="flex gap-12 scroll-mt-36 items-start mt-16">
          <div className="w-2/3">
            <h2 className="text-3xl font-bold text-[#002f45] mb-4">Огнебиозащита</h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p className="text-xl text-[#002f45] font-medium">Огнебиозащита — это комплексная защита древесных материалов от огня и биологических воздействий, которая играет ключевую роль в обеспечении безопасности и долговечности изделий из фанеры, ДСП и других древесно-плитных материалов.</p>
              
              {/* Преимущества огнебиозащиты */}
              <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-6 rounded-xl border-l-4 border-[#fbbf24]">
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
              
              {/* Преимущества услуг */}
              <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-6 rounded-xl border-l-4 border-[#f59e0b]">
                <h3 className="text-2xl font-bold text-[#002f45] mb-6">Преимущества услуг</h3>
                
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

              {/* Виды огнебиозащитных обработок */}
              <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-6 rounded-xl border-l-4 border-[#b45309]">
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
          </div>
        </div>

          {/* Правая колонка с изображениями */}
          <div className="w-1/3 flex-shrink-0 space-y-16">
            <img src="/img/proizvodsvo2.jpg" alt="Огнебиозащита" className="rounded-2xl object-cover w-full h-auto shadow-lg" />
            <img src="/img/proizvodsvo2.jpg" alt="Огнебиозащита" className="rounded-2xl object-cover w-full h-auto shadow-lg" />
            <img src="/img/proizvodsvo2.jpg" alt="Огнебиозащита" className="rounded-2xl object-cover w-full h-auto shadow-lg" />
            <img src="/img/proizvodsvo2.jpg" alt="Огнебиозащита" className="rounded-2xl object-cover w-full h-auto shadow-lg" />
            <img src="/img/proizvodsvo2.jpg" alt="Огнебиозащита" className="rounded-2xl object-cover w-full h-auto shadow-lg" />
          </div>
          </div>

        {/* Статья 4: Промышленный окрас для древесины и фанеры */}
        <div id="promyshlennyy-okras" className="flex gap-12 scroll-mt-36 items-start mt-16">
          <div className="w-2/3">
            <h2 className="text-3xl font-bold text-[#002f45] mb-6">Промышленный окрас для древесины и фанеры</h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p className="text-xl text-[#002f45] font-medium">Промышленный окрас древесины и фанеры — это комплексная услуга по нанесению защитных и декоративных покрытий, которая обеспечивает долговечность, эстетичный внешний вид и защиту от различных воздействий окружающей среды.</p>
              
              {/* Виды покрытий */}
              <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-6 rounded-xl border-l-4 border-[#fbbf24]">
                <h3 className="text-2xl font-bold text-[#002f45] mb-6">Виды покрытий</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                    <h4 className="text-lg font-semibold text-[#002f45] mb-2">Лаки и эмали</h4>
                    <p className="text-gray-600">Для придания поверхности глянца, защиты от влаги и механических повреждений.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                    <h4 className="text-lg font-semibold text-[#002f45] mb-2">Масла и воски</h4>
                    <p className="text-gray-600">Подчеркивают природную текстуру, обеспечивают защиту от влаги и загрязнений.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                    <h4 className="text-lg font-semibold text-[#002f45] mb-2">Пленочные покрытия</h4>
                    <p className="text-gray-600">Виниловые или полиуретановые пленки для декоративных целей и защиты.</p>
                  </div>
                </div>
              </div>
              
              {/* Услуги по нанесению покрытий */}
              <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-6 rounded-xl border-l-4 border-[#f59e0b]">
                <h3 className="text-2xl font-bold text-[#002f45] mb-6">Услуги по нанесению покрытий</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                    <h4 className="text-lg font-semibold text-[#002f45] mb-2">Подготовка поверхности</h4>
                    <p className="text-gray-600">Шлифовка, очистка и подготовка поверхности для качественного нанесения покрытий.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                    <h4 className="text-lg font-semibold text-[#002f45] mb-2">Нанесение грунтовочных слоёв</h4>
                    <p className="text-gray-600">Покрытие грунтовочными составами для улучшения адгезии и защиты основы.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                    <h4 className="text-lg font-semibold text-[#002f45] mb-2">Основное и финишное покрытие</h4>
                    <p className="text-gray-600">Нанесение основного покрытия и финишных слоев для достижения желаемого результата.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                    <h4 className="text-lg font-semibold text-[#002f45] mb-2">Контроль качества и сушки</h4>
                    <p className="text-gray-600">Строгий контроль качества нанесения и соблюдение технологических процессов сушки.</p>
                  </div>
                </div>
              </div>
              
              {/* Почему выбирают наши услуги */}
              <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-6 rounded-xl border-l-4 border-[#d97706]">
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
            </div>
          </div>
          
          {/* Правая колонка с изображениями */}
          <div className="w-1/3 flex-shrink-0 space-y-10">
            <img src="/img/proizvodsvo1.jpg" alt="Промышленный окрас" className="rounded-2xl object-cover w-full h-auto shadow-lg" />
            <img src="/img/proizvodsvo1.jpg" alt="Промышленный окрас" className="rounded-2xl object-cover w-full h-auto shadow-lg" />
            <img src="/img/proizvodsvo1.jpg" alt="Промышленный окрас" className="rounded-2xl object-cover w-full h-auto shadow-lg" />
            <img src="/img/proizvodsvo1.jpg" alt="Промышленный окрас" className="rounded-2xl object-cover w-full h-auto shadow-lg" />
            <img src="/img/proizvodsvo1.jpg" alt="Промышленный окрас" className="rounded-2xl object-cover w-full h-auto shadow-lg" />
            <img src="/img/proizvodsvo1.jpg" alt="Промышленный окрас" className="rounded-2xl object-cover w-full h-auto shadow-lg" />
            <img src="/img/proizvodsvo1.jpg" alt="Промышленный окрас" className="rounded-2xl object-cover w-full h-auto shadow-lg" />
          </div>
        </div>

      </div>
    </main>
  );
} 