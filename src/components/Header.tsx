import logoImage from "figma:asset/5fba529e932b8988ce1f9a810bdc61c18b842580.png";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <img src={logoImage} alt="WaterLinks Logo" className="h-12" />
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => onNavigate('home')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('about')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => onNavigate('products')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => onNavigate('rnd')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              R&D
            </button>
            <button 
              onClick={() => onNavigate('contact')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            {/* <button 
              onClick={() => onNavigate('downloads')}
              className="bg-primary text-white px-6 py-2 rounded-lg sm:px-3 py-2 hover:bg-primary/90 transition-all duration-300"
              style={{ fontSize: '14px' }}
            >
              Downloads
            </button> */}


            <button
            onClick={() => onNavigate("downloads")}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-all duration-300 text-sm"
          >
            Downloads
          </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
