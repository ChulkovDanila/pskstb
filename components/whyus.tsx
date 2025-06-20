export default function WhyUs() {
  const items = [
    { img: "/assortiment.svg", title: "Большой ассортимент" },
    { img: "/Dostavka.svg", title: "Доставка по всей России" },
    { img: "/Vozvrat.svg", title: "Легкий возврат товара" },
    { img: "/Sertifikat.svg", title: "Сертифицированные материалы" },
  ];
  return (
    <div className="w-full bg-[#f3f3f3] flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold text-[#002f45] mb-8">Почему мы?</h2>
      <div className="flex flex-row justify-center items-start gap-20">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img src={item.img} alt={item.title} className="w-28 h-28 mb-4" />
            <div className="text-xl font-semibold text-[#002f45]">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 