import { useEffect, useState } from "react";
import logoImage from "figma:asset/5fba529e932b8988ce1f9a810bdc61c18b842580.png";

export function SplashScreen() {
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Start fade-out after 2.5 seconds
    const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
    // Fully hide after 3 seconds
    const hideTimer = setTimeout(() => setHidden(true), 3000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`splash-container ${fadeOut ? "fade-out" : ""}`}>
      <div className="splash-content">
        <div className="ripple-background">
          <div className="circle small"></div>
          <div className="circle medium"></div>
          <div className="circle large"></div>
          <div className="circle xlarge"></div>
        </div>
        <img src={logoImage} alt="WaterLinks Logo" className="splash-logo" />
        <h2 className="splash-text">WaterLinks</h2>
      </div>

      {/* ✅ Use plain <style> (not jsx) */}
      <style>{`
        .splash-container {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at center, #e0f7fa 0%, #b2ebf2 100%);
          z-index: 9999;
          overflow: hidden;
          transition: opacity 1s ease, transform 1s ease;
        }

        .fade-out {
          opacity: 0;
          transform: scale(1.1);
        }

        .splash-content {
          text-align: center;
          position: relative;
        }

        .splash-logo {
          height: 120px;
          width: auto;
          animation: float 3s ease-in-out infinite;
          z-index: 10;
          position: relative;
        }

        .splash-text {
          font-family: "Poppins", sans-serif;
          font-size: 24px;
          color: #006064;
          margin-top: 16px;
          font-weight: 600;
          letter-spacing: 1px;
          opacity: 0;
          animation: fadeInText 2s ease forwards 1.5s;
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }

        @keyframes fadeInText {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .ripple-background {
          position: absolute;
          width: 300px;
          height: 300px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }

        .circle {
          position: absolute;
          border: 2px solid rgba(0, 96, 100, 0.4);
          border-radius: 50%;
          animation: ripple 6s infinite;
        }

        .small {
          width: 100px;
          height: 100px;
          left: 100px;
          top: 100px;
          animation-delay: 0s;
        }

        .medium {
          width: 200px;
          height: 200px;
          left: 50px;
          top: 50px;
          animation-delay: 2s;
        }

        .large {
          width: 300px;
          height: 300px;
          left: 0;
          top: 0;
          animation-delay: 4s;
        }

        .xlarge {
          width: 400px;
          height: 400px;
          left: -50px;
          top: -50px;
          animation-delay: 6s;
        }

        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 0.7; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        @media (max-width: 600px) {
          .splash-logo { height: 80px; }
          .splash-text { font-size: 20px; }
        }
      `}</style>
    </div>
  );
}
