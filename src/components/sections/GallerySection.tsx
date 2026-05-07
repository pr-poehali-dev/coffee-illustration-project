const galleryItems = [
  {
    img: "/img/e5558b7e-464a-470f-a207-9598b900fab1.jpg",
    title: "СЕМЕЙНЫЙ ПОРТРЕТ",
    style: "Классический комикс",
    badge: "NEW!",
    badgeColor: "bg-comic-red text-white",
    rotate: -3,
  },
  {
    img: "/img/f520e133-531a-44fc-9201-910bef4aee93.jpg",
    title: "ДЕЛОВОЙ СТИЛЬ",
    style: "Минималистичный",
    badge: "HIT!",
    badgeColor: "bg-comic-yellow text-black",
    rotate: 2,
  },
  {
    img: "/img/ae50984b-34d7-40e1-a40c-b919a80333ed.jpg",
    title: "ЗА КУЛИСАМИ",
    style: "Творческий процесс",
    badge: "TOP!",
    badgeColor: "bg-comic-blue text-white",
    rotate: -2,
  },
  {
    img: "/img/41066db2-8861-4d3d-890b-05c17cb46a51.jpg",
    title: "АНИМЕ ПОРТРЕТ",
    style: "Японский стиль",
    badge: "WOW!",
    badgeColor: "bg-comic-red text-white",
    rotate: 3,
  },
  {
    img: "/img/55bb0bbf-8245-486c-99e6-c2d8e4fb8a51.jpg",
    title: "МАНГА АРТ",
    style: "Манга стиль",
    badge: "BAM!",
    badgeColor: "bg-comic-yellow text-black",
    rotate: -1,
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-32 paper-bg relative overflow-hidden">
      <div className="absolute inset-0 halftone opacity-15 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-comic-blue border-4 border-black px-5 py-2 rounded-lg shadow-[5px_5px_0_0_#000] rotate-[-2deg] mb-6">
            <span className="font-comic text-white text-xl tracking-wider">★ ГАЛЕРЕЯ ★</span>
          </div>
          <h2 className="comic-title text-5xl md:text-7xl mb-6">
            <span className="comic-title-orange">НАШИ ИСТОРИИ!</span>
          </h2>
          <div className="speech-bubble max-w-2xl mx-auto">
            <p className="font-body text-lg text-black font-semibold">
              Каждый стаканчик — это <span className="bg-comic-yellow px-2 font-comic">отдельная история</span>. Смотри, как мы превращаем фото в комиксы!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto pt-8">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="comic-card overflow-hidden group cursor-pointer"
              style={{
                transform: `rotate(${item.rotate}deg)`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div className="relative overflow-hidden border-b-4 border-black">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-3 right-3 ${item.badgeColor} comic-burst w-16 h-16 flex items-center justify-center shadow-[3px_3px_0_0_#000]`}>
                  <span className="font-comic text-sm rotate-[-8deg]">{item.badge}</span>
                </div>
              </div>
              <div className="bg-white p-4 text-center">
                <h3 className="font-comic text-xl text-black tracking-wider mb-1">{item.title}</h3>
                <p className="text-sm text-gray-700 font-semibold">{item.style}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
