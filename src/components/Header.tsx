// import logoImage from "figma:asset/5fba529e932b8988ce1f9a810bdc61c18b842580.png";

// interface HeaderProps {
//   onNavigate: (section: string) => void;
// }

// export function Header({ onNavigate }: HeaderProps) {
//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
//             <img src={logoImage} alt="WaterLinks Logo" className="h-12" />
//           </div>
          
//           <nav className="hidden md:flex items-center gap-6">
//             <button 
//               onClick={() => onNavigate('home')} 
//               className="text-foreground hover:text-primary transition-colors"
//             >
//               Home
//             </button>
//             <button 
//               onClick={() => onNavigate('about')} 
//               className="text-foreground hover:text-primary transition-colors"
//             >
//               About Us
//             </button>
//             <button 
//               onClick={() => onNavigate('products')} 
//               className="text-foreground hover:text-primary transition-colors"
//             >
//               Products
//             </button>
//             <button 
//               onClick={() => onNavigate('rnd')} 
//               className="text-foreground hover:text-primary transition-colors"
//             >
//               R&D
//             </button>
//             <button 
//               onClick={() => onNavigate('contact')} 
//               className="text-foreground hover:text-primary transition-colors"
//             >
//               Contact
//             </button>
            


//             <button
//             onClick={() => onNavigate("join-network")}
//             className="text-foreground hover:text-primary transition-colors"
//           >
//             Join our Network
//           </button>
//             <button
//             onClick={() => onNavigate("downloads")}
//             className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-all duration-300 text-sm"
//           >
//             Downloads
//           </button>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }




// import logoImage from "figma:asset/5fba529e932b8988ce1f9a810bdc61c18b842580.png";

// interface HeaderProps {
//   onNavigate: (section: string) => void;
// }

// export function Header({ onNavigate }: HeaderProps) {
//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="flex h-20 items-center justify-between">
//           {/* Logo */}
//           <div
//             className="flex items-center gap-2 cursor-pointer"
//             onClick={() => onNavigate("home")}
//           >
//             {/* <img src={logoImage} alt="WaterLinks Logo" className="h-14 md:h-16 sm:h-2" /> */}
//             <img src={logoImage} alt="WaterLinks Logo" className="h-8 sm:h-10 md:h-14 lg:h-16" />

//           </div>

//           {/* Navigation */}
//           <nav className="hidden md:flex items-center gap-8">
//             <button
//               onClick={() => onNavigate("home")}
//               className="text-base md:text-lg lg:text-xl font-medium text-foreground hover:text-primary transition-colors"
//             >
//               Home
//             </button>

//             <button
//               onClick={() => onNavigate("about")}
//               className="text-base md:text-lg lg:text-xl font-medium text-foreground hover:text-primary transition-colors"
//             >
//               About Us
//             </button>

//             <button
//               onClick={() => onNavigate("products")}
//               className="text-base md:text-lg lg:text-xl font-medium text-foreground hover:text-primary transition-colors"
//             >
//               Products
//             </button>

//             <button
//               onClick={() => onNavigate("rnd")}
//               className="text-base md:text-lg lg:text-xl font-medium text-foreground hover:text-primary transition-colors"
//             >
//               R&D
//             </button>

//             <button
//               onClick={() => onNavigate("contact")}
//               className="text-base md:text-lg lg:text-xl font-medium text-foreground hover:text-primary transition-colors"
//             >
//               Contact
//             </button>

//             <button
//               onClick={() => onNavigate("join-network")}
//               className="text-base md:text-lg lg:text-xl font-medium text-foreground hover:text-primary transition-colors"
//             >
//               Join our Network
//             </button>

//             <button
//               onClick={() => onNavigate("downloads")}
//               className="text-base md:text-lg lg:text-xl font-medium text-foreground hover:text-primary transition-colors"
//             >
//               Downloads
//             </button>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }





// import { useState } from "react";
// import logoImage from "figma:asset/5fba529e932b8988ce1f9a810bdc61c18b842580.png";

// interface HeaderProps {
//   onNavigate: (section: string) => void;
// }

// export function Header({ onNavigate }: HeaderProps) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleNavigate = (section: string) => {
//     onNavigate(section);
//     setIsMenuOpen(false); // close mobile menu
//   };

//   const navItems = [
//     { label: "Home", id: "home" },
//     { label: "About Us", id: "about" },
//     { label: "Products", id: "products" },
//     { label: "R&D", id: "rnd" },
//     { label: "Contact", id: "contact" },
//     { label: "Join our Network", id: "join-network" },
//     { label: "Downloads", id: "downloads" },
//   ];

//   return (
//     <>
//       <header className="header">
//         <div className="header-container">
//           {/* Logo */}
//           <div className="logo" onClick={() => handleNavigate("home")}>
//             <img src={logoImage} alt="WaterLinks Logo" />
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="desktop-nav">
//             {navItems.map((item) => (
//               <button key={item.id} onClick={() => handleNavigate(item.id)}>
//                 {item.label}
//               </button>
//             ))}
//           </nav>

//           {/* Hamburger */}
//           <div
//             className="hamburger"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
//             <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
//             <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
//           </div>
//         </div>

//         {/* Mobile nav overlay */}
//         <div className={`mobile-nav-overlay ${isMenuOpen ? "show" : ""}`}>
//           {navItems.map((item) => (
//             <button key={item.id} onClick={() => handleNavigate(item.id)}>
//               {item.label}
//             </button>
//           ))}
//         </div>
//       </header>

//       {/* CSS Styling */}
//       <style>{`
//         .header {
//           position: sticky;
//           top: 0;
//           z-index: 50;
//           background: rgba(255, 255, 255, 0.95);
//           backdrop-filter: blur(10px);
//           border-bottom: 1px solid #ddd;
//         }

//         .header-container {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 0 16px;
//           height: 80px;
//         }

//         .logo img {
//           height: 56px;
//           cursor: pointer;
//         }

//         /* Desktop Navigation */
//         .desktop-nav {
//           display: flex;
//           gap: 24px;
//         }

//         .desktop-nav button {
//           font-size: 16px;
//           background: none;
//           border: none;
//           cursor: pointer;
//           font-weight: 500;
//           color: #111;
//         }

//         .desktop-nav button:hover {
//           color: #0070f3;
//         }

//         /* Hamburger */
//         .hamburger {
//           display: none;
//           flex-direction: column;
//           gap: 5px;
//           cursor: pointer;
//         }

//         .hamburger .bar {
//           width: 25px;
//           height: 3px;
//           background-color: #111;
//           transition: all 0.3s ease;
//         }

//         /* Mobile nav overlay */
//         .mobile-nav-overlay {
//           position: absolute;
//           top: 80px;
//           left: 0;
//           right: 0;
//           background: rgba(255, 255, 255, 0.97);
//           display: none;
//           flex-direction: column;
//           gap: 12px;
//           padding: 16px;
//           border-top: 1px solid #ddd;
//           z-index: 40;
//         }

//         .mobile-nav-overlay.show {
//           display: flex;
//         }

//         .mobile-nav-overlay button {
//           font-size: 18px;
//           background: none;
//           border: none;
//           text-align: left;
//           padding: 8px 0;
//           cursor: pointer;
//           font-weight: 500;
//           color: #111;
//         }

//         .mobile-nav-overlay button:hover {
//           color: #0070f3;
//         }

//         /* Responsive */
//         @media (max-width: 768px) {
//           .desktop-nav {
//             display: none;
//           }
//           .hamburger {
//             display: flex;
//           }
//         }
//       `}</style>
//     </>
//   );
// }



import { useState } from "react";
import logoImage from "figma:asset/5fba529e932b8988ce1f9a810bdc61c18b842580.png";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    // { label: "About Us", id: "about" },
    { label: "Products", id: "products" },
    // { label: "R&D", id: "rnd" },
    { label: "Career", id: "career" },
    { label: "Join our Network", id: "join-network" },
    { label: "Downloads", id: "downloads" },
    // { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 header">
        <div className="header-container">
          {/* Logo */}
          <div className="logo" onClick={() => handleNavigate("home")}>
            <img src={logoImage} alt="WaterLinks Logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => handleNavigate(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>

          {/* Hamburger */}
          <div
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          </div>
        </div>

        {/* Mobile nav overlay */}
        <div className={`mobile-nav-overlay ${isMenuOpen ? "show" : ""}`}>
          {navItems.map((item) => (
            <button  key={item.id} onClick={() => handleNavigate(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
      </header>

      {/* CSS Styling */}
      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #ddd;
        }

        /* Container with left padding for normal screens */
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px; /* increased left/right padding for normal screens */
          height: 80px;
        }

        /* Logo */
        .logo img {
          height: 48px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        /* Desktop Navigation */
        .desktop-nav {
          display: flex;
          gap: 24px;
        }

        .desktop-nav button {
          font-size: 16px;
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 500;
          color: #111;
        }

        .desktop-nav button:hover {
          color: #0070f3;
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
        }

        .hamburger .bar {
          width: 25px;
          height: 3px;
          background-color: #111;
          transition: all 0.3s ease;
        }

        /* Mobile nav overlay */
        .mobile-nav-overlay {
          position: absolute;
          top: 80px;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.97);
          display: none;
          flex-direction: column;
          gap: 12px;
          padding: 16px;
          border-top: 1px solid #ddd;
          z-index: 40;
        }

        .mobile-nav-overlay.show {
          display: flex;
        }

        .mobile-nav-overlay button {
          font-size: 18px;
          background: none;
          border: none;
          text-align: left;
          padding: 8px 0;
          cursor: pointer;
          font-weight: 500;
          color: #111;
        }

        .mobile-nav-overlay button:hover {
          color: #0070f3;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .header-container {
            padding: 0 16px; /* smaller padding on mobile */
          }

          .desktop-nav {
            display: none;
          }

          .hamburger {
            display: flex;
          }

          .logo img {
            height: 40px; /* smaller logo on mobile */
          }
        }
      `}</style>
    </>
  );
}
