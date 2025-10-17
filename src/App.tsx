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

export default function App() {
  const [currentView, setCurrentView] = useState<
  "home" | "products" | "product-detail" | "downloads" | "join-network"
>("home");

  const [selectedProduct, setSelectedProduct] = useState<
    string | null
  >(null);

  const handleNavigate = (section: string) => {
    if (section === "home") {
      setCurrentView("home");
      setSelectedProduct(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (section === "products") {
      // Navigate to products page
      setCurrentView("products");
      setSelectedProduct(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (section === "downloads") {
      // Navigate to downloads page
      setCurrentView("downloads");
      setSelectedProduct(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    else if (section === "join-network") {
  setCurrentView("join-network");
  setSelectedProduct(null);
  window.scrollTo({ top: 0, behavior: "smooth" });
}
 
    else {
      // For other sections (about, rnd, contact), go to home first if needed
      if (
        currentView === "product-detail" ||
        currentView === "products" ||
        currentView === "downloads" 
        
      ) {
        setCurrentView("home");
        setSelectedProduct(null);
        // Wait for the view to update, then scroll to the section
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // Already on home view, just scroll
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const handleProductClick = (productId: string) => {
    setSelectedProduct(productId);
    setCurrentView("product-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToProducts = () => {
    setCurrentView("products");
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
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
          {/* <JoinOurNetwork /> */}
        </>
      )}

      {currentView === "products" && (
        <Products
          onProductClick={handleProductClick}
          onBack={handleBackToHome}
        />
      )}

      {currentView === "downloads" && (
        <Downloads onBack={handleBackToHome} />
      )}

      {currentView === "product-detail" && selectedProduct && (
        <ProductDetail
          productId={selectedProduct}
          onBack={handleBackToProducts}
        />
      )}
      {currentView === "join-network" && (
  <JoinOurNetwork />
)}


      <Footer onNavigate={handleNavigate} />
      <Toaster />
    </div>
  );
}