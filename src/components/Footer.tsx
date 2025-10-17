import footerLogo from "figma:asset/5fba529e932b8988ce1f9a810bdc61c18b842580.png";
import { Linkedin, Youtube, Twitter, Instagram, Facebook, MapPin } from "lucide-react";

interface FooterProps {
  onNavigate: (section: string) => void;  
}

export function Footer({ onNavigate }: FooterProps) {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/waterlinks", color: "#0A66C2", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@waterlinks", color: "#FF0000", label: "YouTube" },
    { icon: Twitter, href: "https://twitter.com/waterlinks", color: "#000000", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/waterlinks", color: "#E4405F", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/waterlinks", color: "#1877F2", label: "Facebook" },
  ];

  const companyAddress = "F.No. 202, PT-37, Royal Plaza, Bachupally, Hyderabad, Telangana – 500090";
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Royal+Plaza+Bachupally+Hyderabad+500090";

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - Logo */}
          <div>
            <div className="mb-4">
              <img
                src={footerLogo}
                alt="Water Links Scientific Solutions"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/90" style={{ fontSize: '16px' }}>
              The Scientific Way to Sustainable Farming
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="mb-4" style={{ fontSize: '18px', fontWeight: 600 }}>Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {/* <button 
                onClick={() => onNavigate('about')} 
                className="footer-link text-left text-white/90 hover:text-white transition-colors relative"
              >
                About Us
              </button> */}
              <button
  onClick={() => onNavigate('about')}
  className=" text-left hover:text-white transition-colors underline-offset-4 hover:underline"
>
  About Us
</button>

              <button 
                onClick={() => onNavigate('products')} 
                className="text-left hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                Products
              </button>
              <button 
                onClick={() => onNavigate('rnd')} 
                className="text-left hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                R&D
              </button>
              <button 
                onClick={() => onNavigate('contact')} 
                className="text-left hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Column 3 - Contact */}
          <div>
            <h4 className="mb-4" style={{ fontSize: '18px', fontWeight: 600 }}>Contact</h4>
            <div className="space-y-2 text-white/90">
              <p>
                Phone: <a href="tel:+918977729533" className="hover:text-white transition-colors">+91 8977729533</a>
              </p>
              <p>
                Email: <a href="mailto:info@waterlinks.in" className="hover:text-white transition-colors underline-offset-4 hover:underline">info@waterlinks.in</a>
              </p>
              <p>
                Website: <a href="https://www.waterlinks.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline-offset-4 hover:underline">www.waterlinks.in</a>
              </p>
              <div className="pt-4">
                <h5 className="mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>Address</h5>
                <p className="text-white/90 text-sm mb-3 leading-relaxed">
                  {companyAddress}
                </p>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-button inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300"
                  style={{ fontSize: '14px',
    backgroundColor: 'transparent',
    border: '1px solid #39B7D5', // border color
    borderRadius: '6px',          // optional rounded corners
    padding: '6px 12px',          // optional padding
    }}
                >
                  <MapPin className="w-4 h-4 text-red-500" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Column 4 - Follow Us */}
          <div>
            <h4 className="mb-4" style={{ fontSize: '18px', fontWeight: 600 }}>Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: social.color,
                      transition: 'all 0.3s ease',
                    }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80">
            © 2025 WaterLinks Scientific Solutions Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
