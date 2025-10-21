// import { useState, useEffect } from "react";
// import { Header } from "./components/Header";
// import { Hero } from "./components/Hero";
// import { About } from "./components/About";
// import { Commitment } from "./components/Commitment";
// import { ProductsShowcase } from "./components/ProductsShowcase";
// import { Products } from "./components/Products";
// import { Downloads } from "./components/Downloads";
// import { RnD } from "./components/RnD";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";
// import { ProductDetail } from "./components/ProductDetail";
// import { CoastalMap } from "./components/CoastalMap";
// import { Toaster } from "./components/ui/sonner";
// import { JoinOurNetwork } from "./components/JoinOurNetwork";
// import { SplashScreen } from "./components/SplashScreen";

// export default function App() {
//    const [showSplash, setShowSplash] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setShowSplash(false), 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (showSplash) return <SplashScreen />;
//   const [currentView, setCurrentView] = useState<
//   "home" | "products" | "product-detail" | "downloads" | "join-network"
// >("home");

//   const [selectedProduct, setSelectedProduct] = useState<
//     string | null
//   >(null);

//   const handleNavigate = (section: string) => {
//     if (section === "home") {
//       setCurrentView("home");
//       setSelectedProduct(null);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else if (section === "products") {
//       // Navigate to products page
//       setCurrentView("products");
//       setSelectedProduct(null);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else if (section === "downloads") {
//       // Navigate to downloads page
//       setCurrentView("downloads");
//       setSelectedProduct(null);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//     else if (section === "join-network") {
//   setCurrentView("join-network");
//   setSelectedProduct(null);
//   window.scrollTo({ top: 0, behavior: "smooth" });
// }
 
//     else {
//       // For other sections (about, rnd, contact), go to home first if needed
//       if (
//         currentView === "product-detail" ||
//         currentView === "products" ||
//         currentView === "downloads" 
        
//       ) {
//         setCurrentView("home");
//         setSelectedProduct(null);
//         // Wait for the view to update, then scroll to the section
//         setTimeout(() => {
//           const element = document.getElementById(section);
//           if (element) {
//             element.scrollIntoView({ behavior: "smooth" });
//           }
//         }, 100);
//       } else {
//         // Already on home view, just scroll
//         const element = document.getElementById(section);
//         if (element) {
//           element.scrollIntoView({ behavior: "smooth" });
//         }
//       }
//     }
//   };

//   const handleProductClick = (productId: string) => {
//     setSelectedProduct(productId);
//     setCurrentView("product-detail");
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleBackToProducts = () => {
//     setCurrentView("products");
//     setSelectedProduct(null);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleBackToHome = () => {
//     setCurrentView("home");
//     setSelectedProduct(null);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div className="min-h-screen">
//       <Header onNavigate={handleNavigate} />

//       {currentView === "home" && (
//         <>
//           <Hero onNavigate={handleNavigate} />
//           <About />
//           <Commitment />
//           <ProductsShowcase />
//           <CoastalMap />
//           <RnD />
//           <Contact />
//           {/* <JoinOurNetwork /> */}
//         </>
//       )}

//       {currentView === "products" && (
//         <Products
//           onProductClick={handleProductClick}
//           onBack={handleBackToHome}
//         />
//       )}

//       {currentView === "downloads" && (
//         <Downloads onBack={handleBackToHome} />
//       )}

//       {currentView === "product-detail" && selectedProduct && (
//         <ProductDetail
//           productId={selectedProduct}
//           onBack={handleBackToProducts}
//         />
//       )}
//       {currentView === "join-network" && (
//   <JoinOurNetwork />
// )}


//       <Footer onNavigate={handleNavigate} />
//       <Toaster />
//     </div>
//   );
// }



// import { useState, useEffect } from "react";
// import { Header } from "./components/Header";
// import { Hero } from "./components/Hero";
// import { About } from "./components/About";
// import { Commitment } from "./components/Commitment";
// import { ProductsShowcase } from "./components/ProductsShowcase";
// import { Products } from "./components/Products";
// import { Downloads } from "./components/Downloads";
// import { RnD } from "./components/RnD";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";
// import { ProductDetail } from "./components/ProductDetail";
// import { CoastalMap } from "./components/CoastalMap";
// import { Toaster } from "./components/ui/sonner";
// import { JoinOurNetwork } from "./components/JoinOurNetwork";
// import logoImage from "figma:asset/5fba529e932b8988ce1f9a810bdc61c18b842580.png";

// export default function App() {
//   const [currentView, setCurrentView] = useState<
//     "home" | "products" | "product-detail" | "downloads" | "join-network"
//   >("home");

//   const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
//   const [showSplash, setShowSplash] = useState(true); // ✅ Splash screen state

//   useEffect(() => {
//     const timer = setTimeout(() => setShowSplash(false), 4000); // 2.5s splash
//     return () => clearTimeout(timer);
//   }, []);

//   const handleNavigate = (section: string) => {
//     if (section === "home") {
//       setCurrentView("home");
//       setSelectedProduct(null);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else if (section === "products") {
//       setCurrentView("products");
//       setSelectedProduct(null);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else if (section === "downloads") {
//       setCurrentView("downloads");
//       setSelectedProduct(null);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else if (section === "join-network") {
//       setCurrentView("join-network");
//       setSelectedProduct(null);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else {
//       if (
//         currentView === "product-detail" ||
//         currentView === "products" ||
//         currentView === "downloads"
//       ) {
//         setCurrentView("home");
//         setSelectedProduct(null);
//         setTimeout(() => {
//           const element = document.getElementById(section);
//           if (element) element.scrollIntoView({ behavior: "smooth" });
//         }, 100);
//       } else {
//         const element = document.getElementById(section);
//         if (element) element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   const handleProductClick = (productId: string) => {
//     setSelectedProduct(productId);
//     setCurrentView("product-detail");
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleBackToProducts = () => {
//     setCurrentView("products");
//     setSelectedProduct(null);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleBackToHome = () => {
//     setCurrentView("home");
//     setSelectedProduct(null);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // ✅ Render splash first
//   if (showSplash) {
//     return (
//       <div style={styles.splashContainer}>
//         <img src={logoImage} alt="WaterLinks Logo" style={styles.splashLogo} />
//         <div style={styles.splashWave}></div>
//       </div>
//     );
//   }

//   // ✅ Main app content
//   return (
//     <div style={{ minHeight: "100vh" }}>
//       <Header onNavigate={handleNavigate} />

//       {currentView === "home" && (
//         <>
//           <Hero onNavigate={handleNavigate} />
//           <About />
//           <Commitment />
//           <ProductsShowcase />
//           <CoastalMap />
//           <RnD />
//           <Contact />
//         </>
//       )}

//       {currentView === "products" && (
//         <Products
//           onProductClick={handleProductClick}
//           onBack={handleBackToHome}
//         />
//       )}

//       {currentView === "downloads" && <Downloads onBack={handleBackToHome} />}

//       {currentView === "product-detail" && selectedProduct && (
//         <ProductDetail
//           productId={selectedProduct}
//           onBack={handleBackToProducts}
//         />
//       )}

//       {currentView === "join-network" && <JoinOurNetwork />}

//       <Footer onNavigate={handleNavigate} />
//       <Toaster />
//     </div>
//   );
// }

// // ✅ Inline CSS for splash animation
// const styles: Record<string, React.CSSProperties> = {
//   splashContainer: {
//     display: "flex",
//     flexDirection: "column" as const,
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     width: "100%",
//     background: "linear-gradient(180deg, #e0f7fa, #80deea)",
//     overflow: "hidden",
//     position: "relative",
//   },
//   splashLogo: {
//     width: "160px",
//     height: "auto",
//     animation: "fadeInUp 2s ease-in-out",
//   },
//   splashWave: {
//     position: "absolute",
//     bottom: 0,
//     width: "200%",
//     height: "100px",
//     background: "rgba(0, 150, 136, 0.5)",
//     borderRadius: "50%",
//     animation: "waveMove 4s ease-in-out infinite alternate",
//   },
// };

// // ✅ Inject animation keyframes globally
// const styleSheet = document.createElement("style");
// styleSheet.textContent = `
// @keyframes fadeInUp {
//   0% { opacity: 0; transform: translateY(30px); }
//   100% { opacity: 1; transform: translateY(0); }
// }
// @keyframes waveMove {
//   0% { transform: translateX(-25%) scaleY(1); }
//   100% { transform: translateX(25%) scaleY(1.1); }
// }
// `;
// document.head.appendChild(styleSheet);







// import { useState, useEffect } from "react";
// import { Header } from "./components/Header";
// import { Hero } from "./components/Hero";
// import { About } from "./components/About";
// import { Commitment } from "./components/Commitment";
// import { ProductsShowcase } from "./components/ProductsShowcase";
// import { Products } from "./components/Products";
// import { Downloads } from "./components/Downloads";
// import { RnD } from "./components/RnD";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";
// import { ProductDetail } from "./components/ProductDetail";
// import { CoastalMap } from "./components/CoastalMap";
// import { Toaster } from "./components/ui/sonner";
// import { JoinOurNetwork } from "./components/JoinOurNetwork";
// import logoImage from "figma:asset/5fba529e932b8988ce1f9a810bdc61c18b842580.png";

// export default function App() {
//   const [currentView, setCurrentView] = useState<
//     "home" | "products" | "product-detail" | "downloads" | "join-network"
//   >("home");

//   const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
//   const [showSplash, setShowSplash] = useState(true);
//   const [fadeOut, setFadeOut] = useState(false);

//   // Show splash for 3 seconds, fade out for 1 second
//   useEffect(() => {
//     const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
//     const removeTimer = setTimeout(() => setShowSplash(false), 3500);
//     return () => {
//       clearTimeout(fadeTimer);
//       clearTimeout(removeTimer);
//     };
//   }, []);

//   const handleNavigate = (section: string) => {
//     if (section === "home") {
//       setCurrentView("home");
//       setSelectedProduct(null);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else if (section === "products") {
//       setCurrentView("products");
//       setSelectedProduct(null);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else if (section === "downloads") {
//       setCurrentView("downloads");
//       setSelectedProduct(null);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else if (section === "join-network") {
//       setCurrentView("join-network");
//       setSelectedProduct(null);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else {
//       if (
//         currentView === "product-detail" ||
//         currentView === "products" ||
//         currentView === "downloads"
//       ) {
//         setCurrentView("home");
//         setSelectedProduct(null);
//         setTimeout(() => {
//           const element = document.getElementById(section);
//           if (element) element.scrollIntoView({ behavior: "smooth" });
//         }, 100);
//       } else {
//         const element = document.getElementById(section);
//         if (element) element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   const handleProductClick = (productId: string) => {
//     setSelectedProduct(productId);
//     setCurrentView("product-detail");
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleBackToProducts = () => {
//     setCurrentView("products");
//     setSelectedProduct(null);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleBackToHome = () => {
//     setCurrentView("home");
//     setSelectedProduct(null);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   if (showSplash) {
//     return (
//       <div
//         style={{
//           ...styles.splashContainer,
//           opacity: fadeOut ? 0 : 1,
//           transition: "opacity 1s ease-in-out",
//         }}
//       >
//         <div style={styles.rippleBackground}>
//           <div style={styles.circle}></div>
//           <div style={{ ...styles.circle, animationDelay: "0.5s" }}></div>
//           <div style={{ ...styles.circle, animationDelay: "1s" }}></div>
//         </div>
//         <img src={logoImage} alt="WaterLinks Logo" style={styles.splashLogo} />
//         <h2 style={styles.splashText}>WaterLinks</h2>
//       </div>
//     );
//   }

//   return (
//     <div style={{ minHeight: "100vh" }}>
//       <Header onNavigate={handleNavigate} />

//       {currentView === "home" && (
//         <>
//           <Hero onNavigate={handleNavigate} />
//           <About />
//           <Commitment />
//           <ProductsShowcase />
//           <CoastalMap />
//           <RnD />
//           <Contact />
//         </>
//       )}

//       {currentView === "products" && (
//         <Products
//           onProductClick={handleProductClick}
//           onBack={handleBackToHome}
//         />
//       )}

//       {currentView === "downloads" && <Downloads onBack={handleBackToHome} />}

//       {currentView === "product-detail" && selectedProduct && (
//         <ProductDetail
//           productId={selectedProduct}
//           onBack={handleBackToProducts}
//         />
//       )}

//       {currentView === "join-network" && <JoinOurNetwork />}

//       <Footer onNavigate={handleNavigate} />
//       <Toaster />
//     </div>
//   );
// }

// // 💧 Stylish inline CSS
// const styles: Record<string, React.CSSProperties> = {
//   splashContainer: {
//     display: "flex",
//     flexDirection: "column" as const,
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     width: "100%",
//     background:
//       "radial-gradient(circle at 20% 20%, #b2ebf2, #4dd0e1 60%, #0097a7 100%)",
//     overflow: "hidden",
//     position: "relative",
//   },
//   splashLogo: {
//     width: "160px",
//     height: "auto",
//     animation: "logoPulse 2.5s infinite ease-in-out",
//     zIndex: 3,
//   },
//   splashText: {
//     color: "white",
//     fontSize: "28px",
//     marginTop: "15px",
//     letterSpacing: "2px",
//     fontWeight: 600,
//     textShadow: "0px 0px 10px rgba(255,255,255,0.7)",
//     zIndex: 3,
//   },
//   rippleBackground: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     top: 0,
//     left: 0,
//     overflow: "hidden",
//     zIndex: 1,
//   },
//   circle: {
//     position: "absolute",
//     border: "2px solid rgba(255,255,255,0.4)",
//     borderRadius: "50%",
//     width: "200px",
//     height: "200px",
//     left: "50%",
//     top: "50%",
//     transform: "translate(-50%, -50%)",
//     animation: "ripple 3s infinite ease-out",
//   },
// };

// // Add animations dynamically
// const styleSheet = document.createElement("style");
// styleSheet.textContent = `
// @keyframes logoPulse {
//   0%, 100% { transform: scale(1); opacity: 1; }
//   50% { transform: scale(1.1); opacity: 0.9; }
// }
// @keyframes ripple {
//   0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; }
//   100% { transform: translate(-50%, -50%) scale(2.8); opacity: 0; }
// }
// `;
// document.head.appendChild(styleSheet);










///////////////////////fish////////////////////
// import { useState, useEffect } from "react";
// import { Header } from "./components/Header";
// import { Hero } from "./components/Hero";
// import { About } from "./components/About";
// import { Commitment } from "./components/Commitment";
// import { ProductsShowcase } from "./components/ProductsShowcase";
// import { Products } from "./components/Products";
// import { Downloads } from "./components/Downloads";
// import { RnD } from "./components/RnD";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";
// import { ProductDetail } from "./components/ProductDetail";
// import { CoastalMap } from "./components/CoastalMap";
// import { Toaster } from "./components/ui/sonner";
// import { JoinOurNetwork } from "./components/JoinOurNetwork";
// import logoImage from "figma:asset/5fba529e932b8988ce1f9a810bdc61c18b842580.png";
// import { Career } from "./components/Career";

// interface Fish {
//   id: number;
//   size: number;
//   speed: number;
//   startY: number;
//   delay: number;
//   isJumping: boolean;
// }

// export default function App() {
//   const [currentView, setCurrentView] = useState<
//     "home" | "products" | "product-detail" | "downloads" | "join-network" | "career"
//   >("home");
//   const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
//   const [showSplash, setShowSplash] = useState(true);
//   const [fadeOut, setFadeOut] = useState(false);
//   const [fishes, setFishes] = useState<Fish[]>([]);

//   // Generate animated fish and shrimp
//   useEffect(() => {
//     const generatedFishes = Array.from({ length: 20 }, (_, i) => ({
//       id: i,
//       size: Math.random() * 50 + 30,
//       speed: Math.random() * 8 + 6,
//       startY: Math.random() * 80 + 10,
//       delay: Math.random() * -10,
//       isJumping: Math.random() > 0.6,
//     }));
//     setFishes(generatedFishes);
//   }, []);

//   // Splash timing
//   useEffect(() => {
//     const fadeTimer = setTimeout(() => setFadeOut(true), 3000);
//     const removeTimer = setTimeout(() => setShowSplash(false), 4000);
//     return () => {
//       clearTimeout(fadeTimer);
//       clearTimeout(removeTimer);
//     };
//   }, []);

//   const handleNavigate = (section: string) => {
//     if (["home", "products", "downloads", "join-network"].includes(section)) {
//       setCurrentView(section as any);
//       setSelectedProduct(null);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       return;
//     }
//     const element = document.getElementById(section);
//     if (element) element.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleProductClick = (productId: string) => {
//     setSelectedProduct(productId);
//     setCurrentView("product-detail");
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleBackToProducts = () => {
//     setCurrentView("products");
//     setSelectedProduct(null);
//   };

//   const handleBackToHome = () => {
//     setCurrentView("home");
//     setSelectedProduct(null);
//   };

//   // 🐠 Splash Screen with Animated Fish
//   if (showSplash) {
//     return (
//       <div
//         style={{
//           ...styles.splashContainer,
//           opacity: fadeOut ? 0 : 1,
//           transition: "opacity 1s ease-in-out",
//         }}
//       >
//         <div style={styles.rippleBackground}>
//           <div style={styles.circle}></div>
//           <div style={{ ...styles.circle, animationDelay: "0.5s" }}></div>
//           <div style={{ ...styles.circle, animationDelay: "1s" }}></div>
//         </div>

//         {/* Animated Fish & Shrimp */}
//         {fishes.map((fish) => (
//           <div
//             key={fish.id}
//             style={{
//               position: "absolute",
//               width: `${fish.size}px`,
//               height: `${fish.size * 0.6}px`,
//               top: `${fish.startY}%`,
//               left: "-60px",
//               animation: fish.isJumping
//                 ? `fishJump ${fish.speed}s linear infinite`
//                 : `fishSwim ${fish.speed}s linear infinite`,
//               animationDelay: `${fish.delay}s`,
//               opacity: 0.7,
//               zIndex: 2,
//             }}
//           >
//             <svg
//               viewBox="0 0 50 30"
//               fill="white"
//               opacity="0.4"
//               style={{ transform: "scaleX(1)" }}
//             >
//               <path d="M45 15 Q40 8, 30 10 Q20 12, 15 15 Q20 18, 30 20 Q40 22, 45 15 M15 15 Q8 12, 5 15 Q8 18, 15 15" />
//               <circle cx="38" cy="13" r="2" fill="black" opacity="0.5" />
//             </svg>
//           </div>
//         ))}

//         {/* Logo */}
//         <img src={logoImage} alt="WaterLinks Logo" style={styles.splashLogo} />
//         {/* <h2 style={styles.splashText}>WaterLinks</h2> */}
//       </div>
//     );
//   }

//   return (
//     <div style={{ minHeight: "100vh" }}>
//       <Header onNavigate={handleNavigate} />
//       {currentView === "home" && (
//         <>
//           <Hero onNavigate={handleNavigate} />
//           <About />
//           <Commitment />
//           <ProductsShowcase />
//           <CoastalMap />
//           <RnD />
//           <Contact />
//         </>
//       )}
//       {currentView === "products" && (
//         <Products onProductClick={handleProductClick} onBack={handleBackToHome} />
//       )}
//       {currentView === "downloads" && <Downloads onBack={handleBackToHome} />}
//        {currentView === "career" && (
//         <Career onBack={handleBackToHome} />
//       )}

//       {currentView === "product-detail" && selectedProduct && (
//         <ProductDetail
//           productId={selectedProduct}
//           onBack={handleBackToProducts}
//         />
//       )}
//       {currentView === "join-network" && <JoinOurNetwork />}
//       <Footer onNavigate={handleNavigate} />
//       <Toaster />
//     </div>
//   );
// }

// // 🌊 Styles
// const styles: Record<string, React.CSSProperties> = {
//   splashContainer: {
//     display: "flex",
//     flexDirection: "column" as const,
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     width: "100%",
//     background:
//       "linear-gradient(180deg, #4dd0e1 0%, #006064 100%)",
//     overflow: "hidden",
//     position: "relative",
//   },
//   splashLogo: {
//     width: "160px",
//     animation: "zoomLogo 3s ease-in-out infinite",
//     zIndex: 3,
//   },
//   splashText: {
//     color: "white",
//     fontSize: "28px",
//     marginTop: "15px",
//     letterSpacing: "2px",
//     fontWeight: 600,
//     textShadow: "0px 0px 10px rgba(255,255,255,0.7)",
//     zIndex: 3,
//   },
//   rippleBackground: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     top: 0,
//     left: 0,
//     overflow: "hidden",
//     zIndex: 1,
//   },
//   circle: {
//     position: "absolute",
//     border: "2px solid rgba(255,255,255,0.2)",
//     borderRadius: "50%",
//     width: "200px",
//     height: "200px",
//     left: "50%",
//     top: "50%",
//     transform: "translate(-50%, -50%)",
//     animation: "ripple 3s infinite ease-out",
//   },
// };

// // 🎬 Animations
// const styleSheet = document.createElement("style");
// styleSheet.textContent = `
// @keyframes zoomLogo {
//   0%, 100% { transform: scale(1); opacity: 1; }
//   50% { transform: scale(1.2); opacity: 0.9; }
// }

// @keyframes ripple {
//   0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; }
//   100% { transform: translate(-50%, -50%) scale(2.8); opacity: 0; }
// }

// @keyframes fishSwim {
//   0% { transform: translateX(-10%) translateY(0); }
//   50% { transform: translateX(110vw) translateY(2%); }
//   100% { transform: translateX(-10%) translateY(0); }
// }

// @keyframes fishJump {
//   0% { transform: translateX(-10%) translateY(0) rotate(0deg); }
//   25% { transform: translateX(25vw) translateY(-20px) rotate(10deg); }
//   50% { transform: translateX(60vw) translateY(10px) rotate(-10deg); }
//   75% { transform: translateX(90vw) translateY(-15px) rotate(8deg); }
//   100% { transform: translateX(120vw) translateY(0) rotate(0deg); }
// }
// `;
// document.head.appendChild(styleSheet);






import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Commitment } from "./components/Commitment";
import { ProductsShowcase } from "./components/ProductsShowcase";
import { Products } from "./components/Products";
import { Downloads } from "./components/Downloads";
import { RnD } from "./components/RnD";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProductDetail } from "./components/ProductDetail";
import { CoastalMap } from "./components/CoastalMap";
import { Toaster } from "./components/ui/sonner";
import { JoinOurNetwork } from "./components/JoinOurNetwork";
import { Career } from "./components/Career";
import logoImage from "figma:asset/5fba529e932b8988ce1f9a810bdc61c18b842580.png";

type View =
  | "home"
  | "products"
  | "product-detail"
  | "downloads"
  | "join-network"
  | "career";

interface Fish {
  id: number;
  size: number;
  speed: number;
  startY: number;
  delay: number;
  isJumping: boolean;
}

export default function App() {
  const [currentView, setCurrentView] = useState<View>("home");
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [fishes, setFishes] = useState<Fish[]>([]);

  // Views that are "full-page" switches (not in-page scroll)
  const PAGE_VIEWS: View[] = [
    "home",
    "products",
    "downloads",
    "join-network",
    "career",
  ];

  // Generate animated fish and shrimp once
  useEffect(() => {
    const generatedFishes = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 50 + 30,
      speed: Math.random() * 8 + 6,
      startY: Math.random() * 80 + 10,
      delay: Math.random() * -10,
      isJumping: Math.random() > 0.6,
    }));
    setFishes(generatedFishes);
  }, []);

  // Splash timing
  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 3000);
    const removeTimer = setTimeout(() => setShowSplash(false), 4000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Inject animations CSS on client (avoids SSR issues)
  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.setAttribute("data-waterlinks-anim", "true");
    styleEl.textContent = `
      @keyframes zoomLogo {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.2); opacity: 0.9; }
      }
      @keyframes ripple {
        0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(2.8); opacity: 0; }
      }
      @keyframes fishSwim {
        0% { transform: translateX(-10%) translateY(0); }
        50% { transform: translateX(110vw) translateY(2%); }
        100% { transform: translateX(-10%) translateY(0); }
      }
      @keyframes fishJump {
        0% { transform: translateX(-10%) translateY(0) rotate(0deg); }
        25% { transform: translateX(25vw) translateY(-20px) rotate(10deg); }
        50% { transform: translateX(60vw) translateY(10px) rotate(-10deg); }
        75% { transform: translateX(90vw) translateY(-15px) rotate(8deg); }
        100% { transform: translateX(120vw) translateY(0) rotate(0deg); }
      }
    `;
    document.head.appendChild(styleEl);
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  // Central navigation handler
  const handleNavigate = (section: string) => {
    // If it's one of our full-page views, switch view
    if (PAGE_VIEWS.includes(section as View)) {
      setCurrentView(section as View);
      setSelectedProduct(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Otherwise try to in-page scroll by id
    const element = document.getElementById(section);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleProductClick = (productId: string) => {
    setSelectedProduct(productId);
    setCurrentView("product-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToProducts = () => {
    setCurrentView("products");
    setSelectedProduct(null);
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setSelectedProduct(null);
  };

  // Splash Screen with Animated Fish
  if (showSplash) {
    return (
      <div
        style={{
          ...styles.splashContainer,
          opacity: fadeOut ? 0 : 1,
          transition: "opacity 1s ease-in-out",
        }}
      >
        <div style={styles.rippleBackground}>
          <div style={styles.circle}></div>
          <div style={{ ...styles.circle, animationDelay: "0.5s" }}></div>
          <div style={{ ...styles.circle, animationDelay: "1s" }}></div>
        </div>

        {/* Animated Fish */}
        {fishes.map((fish) => (
          <div
            key={fish.id}
            style={{
              position: "absolute",
              width: `${fish.size}px`,
              height: `${fish.size * 0.6}px`,
              top: `${fish.startY}%`,
              left: "-60px",
              animation: fish.isJumping
                ? `fishJump ${fish.speed}s linear infinite`
                : `fishSwim ${fish.speed}s linear infinite`,
              animationDelay: `${fish.delay}s`,
              opacity: 0.7,
              zIndex: 2,
            }}
          >
            <svg viewBox="0 0 50 30" fill="white" opacity="0.4">
              <path d="M45 15 Q40 8, 30 10 Q20 12, 15 15 Q20 18, 30 20 Q40 22, 45 15 M15 15 Q8 12, 5 15 Q8 18, 15 15" />
              <circle cx="38" cy="13" r="2" fill="black" opacity="0.5" />
            </svg>
          </div>
        ))}

        {/* Logo */}
        <img src={logoImage} alt="WaterLinks Logo" style={styles.splashLogo} />
      </div>
    );
  }

  // Main app
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header onNavigate={handleNavigate} />

      {currentView === "home" && (
        <>
          <Hero onNavigate={handleNavigate} />
          <About />
          <Commitment />
          <ProductsShowcase />
          <CoastalMap />
          <RnD />
          <Contact />
        </>
      )}

      {currentView === "products" && (
        <Products onProductClick={handleProductClick} onBack={handleBackToHome} />
      )}

      {currentView === "downloads" && <Downloads onBack={handleBackToHome} />}

      {currentView === "career" && <Career onBack={handleBackToHome} />}

      {currentView === "product-detail" && selectedProduct && (
        <ProductDetail productId={selectedProduct} onBack={handleBackToProducts} />
      )}

      {currentView === "join-network" && <JoinOurNetwork />}

      <Footer onNavigate={handleNavigate} />
      <Toaster />
    </div>
  );
}

// Styles
const styles: Record<string, React.CSSProperties> = {
  splashContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    background: "linear-gradient(180deg, #4dd0e1 0%, #006064 100%)",
    overflow: "hidden",
    position: "relative",
  },
  splashLogo: {
    width: "160px",
    animation: "zoomLogo 3s ease-in-out infinite",
    zIndex: 3,
  },
  rippleBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    overflow: "hidden",
    zIndex: 1,
  },
  circle: {
    position: "absolute",
    border: "2px solid rgba(255,255,255,0.2)",
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    animation: "ripple 3s infinite ease-out",
  },
};
