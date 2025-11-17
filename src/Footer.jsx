import React from "react";
import {
  Rocket,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navigation = [
    { name: "Layanan", href: "layanan" },
    { name: "Harga", href: "harga" },
    { name: "Portofolio", href: "#" },
    { name: "Tentang", href: "#" },
    { name: "Kontak", href: "kontak" },
  ];

  const services = [
    { name: "Landing Page", href: "#" },
    { name: "Company Profile", href: "#" },
    { name: "E-Commerce", href: "#" },
  ];

  const contact = [
    {
      icon: Mail,
      text: "hello@arizastudio.com",
      href: "mailto:hello@arizastudio.com",
    },
    { icon: Phone, text: "+62 851-5643-6280", href: "tel:+6285156436280" },
    { icon: MapPin, text: "Bekasi, Indonesia", href: "#" },
  ];

  const social = [
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Twitter, href: "#", name: "Twitter" },
  ];

  return (
    <footer
      id="kontak"
      className="relative bg-gradient-to-br from-[#064E3B] to-[#0F9D58] text-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="w-8 h-8 text-white" />
              <span className="font-epilogue text-3xl font-bold">
                Ariza Studio
              </span>
            </div>
            <p className="text-white/80 font-manrope leading-relaxed mb-6">
              Kami membantu bisnis Anda tumbuh dengan website yang profesional,
              modern, dan sesuai karakter brand Anda.
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              {social.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-epilogue text-lg font-bold mb-4">Navigasi</h3>
            <ul className="space-y-3">
              {navigation.map((item, index) => (
                <li key={index}>
                  <a
                    className="text-white/80 hover:text-white  font-manrope transition-colors flex items-center gap-2 group cursor-pointer"
                    onClick={() => {
                      scrollToSection(item.href);
                    }}
                  >
                    <span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-epilogue text-lg font-bold mb-4">Layanan</h3>
            <ul className="space-y-3">
              {services.map((item, index) => (
                <li key={index}>
                  <a
                    onClick={() => {
                      scrollToSection("harga");
                    }}
                    className="text-white/80 font-manrope hover:text-white transition-colors flex items-center gap-2 group cursor-pointer"
                  >
                    <span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-epilogue text-lg font-bold mb-4">Kontak</h3>
            <ul className="space-y-3">
              {contact.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-white/80 font-manrope hover:text-white transition-colors flex items-start gap-3 group"
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-8"></div>

        {/* Bottom Section */}
        <div className="font-manrope flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Ariza Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
