'use client';

import Link from 'next/link';

export default function Menu({
  isSubheaderHidden = false,
  activeItem,
  showHomeLink = false,
}: {
  isSubheaderHidden?: boolean;
  activeItem?: string;
  showHomeLink?: boolean;
}) {
  const topPosition = isSubheaderHidden ? '5rem' : '9rem';
  const menuItems = ['Продукция', 'Производство', 'Новости', 'О нас'];

  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('Скоро здесь появится интернет-магазин!');
  };

  return (
    <div
      className="w-full fixed left-0 right-0 z-50 bg-white border-t-2 border-b-2 border-t-[#FFC600] border-b-[#FFC600] flex items-center justify-center h-16"
      style={{ top: topPosition }}
    >
      <div className="flex gap-24">
        {showHomeLink && (
          <Link href="/" className="font-sans text-base font-semibold text-gray-700 relative group transition-colors">
            <span className={'group-hover:text-[#002f45] transition-colors duration-200'}>
              Главная
            </span>
            <span className={'absolute left-0 right-0 -bottom-1 h-1 rounded bg-[#ffc600] transition-transform duration-300 origin-bottom scale-y-0 group-hover:scale-y-100'}></span>
          </Link>
        )}
        {menuItems.map((item) => {
          const isActive = activeItem === item;

          if (item === 'Производство') {
            return (
              <Link
                href="/proizvodstvo"
                key={item}
                className="font-sans text-base font-semibold text-gray-700 relative group transition-colors"
              >
                <span className={`${isActive ? 'text-[#002f45]' : 'group-hover:text-[#002f45]'} transition-colors duration-200`}>
                  {item}
                </span>
                <span className={`absolute left-0 right-0 -bottom-1 h-1 rounded bg-[#ffc600] transition-transform duration-300 origin-bottom ${isActive ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'}`}></span>
              </Link>
            );
          }
          if (item === 'Новости') {
            return (
              <Link
                href="/#news"
                key={item}
                className="font-sans text-base font-semibold text-gray-700 relative group transition-colors"
              >
                <span className={`${isActive ? 'text-[#002f45]' : 'group-hover:text-[#002f45]'} transition-colors duration-200`}>
                  {item}
                </span>
                <span className={`absolute left-0 right-0 -bottom-1 h-1 rounded bg-[#ffc600] transition-transform duration-300 origin-bottom ${isActive ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'}`}></span>
              </Link>
            );
          }
          if (item === 'О нас') {
            return (
              <Link
                href="/#about-us"
                key={item}
                className="font-sans text-base font-semibold text-gray-700 relative group transition-colors"
              >
                <span className={`${isActive ? 'text-[#002f45]' : 'group-hover:text-[#002f45]'} transition-colors duration-200`}>
                  {item}
                </span>
                <span className={`absolute left-0 right-0 -bottom-1 h-1 rounded bg-[#ffc600] transition-transform duration-300 origin-bottom ${isActive ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'}`}></span>
              </Link>
            );
          }

          return (
            <button
              key={item}
              onClick={item === 'Продукция' ? handleComingSoon : undefined}
              className="font-sans text-base font-semibold text-gray-700 relative group transition-colors"
            >
              <span
                className={`${
                  isActive ? 'text-[#002f45]' : 'group-hover:text-[#002f45]'
                } transition-colors duration-200`}
              >
                {item}
              </span>
              <span
                className={`absolute left-0 right-0 -bottom-1 h-1 rounded bg-[#ffc600] transition-transform duration-300 origin-bottom ${
                  isActive
                    ? 'scale-y-100'
                    : 'scale-y-0 group-hover:scale-y-100'
                }`}
              ></span>
            </button>
          );
        })}
      </div>
    </div>
  );
} 