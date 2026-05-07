import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-comic-yellow border-b-4 border-black shadow-[0_6px_0_0_#000]">
      <div className="container mx-auto px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-comic-red border-4 border-black rounded-full flex items-center justify-center shadow-[3px_3px_0_0_#000] group-hover:animate-wobble">
              <Icon name="Coffee" size={24} className="text-white" />
            </div>
            <div className="font-comic text-3xl md:text-4xl text-black tracking-wider">
              COFFEE<span className="text-comic-red">COMICS</span>!
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            {[
              { href: "#gallery", label: "ГАЛЕРЕЯ" },
              { href: "#services", label: "УСЛУГИ" },
              { href: "#pricing", label: "ЦЕНЫ" },
              { href: "#contact", label: "КОНТАКТЫ" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-comic text-xl px-4 py-2 text-black hover:bg-white hover:border-2 hover:border-black rounded transition-all hover:rotate-[-2deg] tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button className="comic-btn comic-btn-red text-base hidden sm:inline-flex">
            <Icon name="Phone" size={18} />
            ЗВОНОК!
          </button>
        </div>
      </div>
    </header>
  );
}
