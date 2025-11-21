import React, { useState, useEffect, useRef } from "react";
import {
  Zap,
  Rocket,
  Crown,
  Check,
  Clock,
  Globe,
  Building2,
  ShoppingBag,
  ChevronRight,
} from "lucide-react";

export default function PricingTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const tabs = [
    { name: "Landing Page & Company Profile", icon: Globe },
    { name: "Company Profile + CMS", icon: Building2 },
    { name: "Another Product", icon: ShoppingBag },
  ];

  const tabNames = ["Landing Page", "Company Profile + CMS", "Produk Lainnya"];

  const landingPagePackages = [
    {
      name: "Starter",
      price: "Rp599.000",
      icon: Zap,
      tagline: "Cocok untuk yang ingin landing page profesional cepat & rapi",
      features: [
        "1 halaman penuh dengan banyak section: Home, About, Services, CTA",
        "Desain sesuai request (bukan template)",
        "Mobile friendly dan terlihat bagus di semua device",
        "Form kontak sederhana untuk pelanggan menghubungi Anda",
        "Website cepat, ringan, dan mudah diakses",
        "Gratis domain starter (.pro, .fun, .my.id, .xyz, .store) & SSL Certificate 1 tahun",
        "Gratis 1 email pribadi/perusahaan",
        "Revisi desain tidak terbatas 1 bulan",
        "Animasi transisi antar section sederhana",
      ],
      duration: "1 minggu",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "Rp1.299.000",
      icon: Rocket,
      tagline:
        "Cocok untuk bisnis yang ingin beberapa halaman dan fitur interaktif",
      badge: "Paling Populer",
      features: [
        "Hingga 3 halaman: Home, About, Services (atau sesuai permintaan)",
        "Desain profesional, modern, dan interaktif",
        "Form kontak & peta lokasi untuk memudahkan pelanggan menemukan Anda",
        "Animasi dan efek ringan agar website terlihat lebih menarik",
        "Mobile friendly dan SEO dasar untuk meningkatkan pencarian di Google",
        "Gratis domain premium (.com, .net, .id, .co.id) & SSL Certificate 1 tahun",
        "Gratis 3 email pribadi/perusahaan",
        "Revisi desain tidak terbatas 1 bulan",
      ],
      duration: "2 minggu",
      highlighted: true,
    },
    {
      name: "Premium",
      price: "Rp2.299.000",
      icon: Crown,
      tagline:
        "Cocok untuk bisnis yang ingin website lengkap, interaktif, dan mudah dikembangkan",
      features: [
        "Jumlah 5 halaman sesuai kebutuhan",
        "Desain premium dengan animasi dan tampilan modern",
        "Form kontak dan integrasi media sosial",
        "Galeri, slider, dan fitur interaktif untuk pengalaman pengunjung lebih baik",
        "Mobile friendly dan optimasi SEO lanjutan",
        "Gratis domain premium (.com, .net, .id, .co.id) & SSL Certificate 1 tahun",
        "Gratis 5 email pribadi/perusahaan",
        "Revisi desain tidak terbatas 3 bulan",
      ],
      duration: "3–4 minggu",
      highlighted: false,
    },
  ];

  const companyProfilePackages = [
    {
      name: "CMS Basic",
      price: "Rp2.999.000",
      icon: Zap,
      tagline:
        "Website company profile dengan tambahan fitur artikel untuk menampilkan berita perusahaanmu",
      features: [
        "5 halaman: Home, About, Services, Blog, Team, Contact atau halaman apapun sesuai request",
        "Desain profesional mencerminkan identitas perusahaan",
        "Website admin untuk update artikel/berita",
        "Galeri foto produk/layanan",
        "Form kontak dan info lokasi kantor",
        "Mobile responsive dan loading cepat",
        "Gratis domain premium (.com, .net, .id, .co.id) & SSL 1 tahun",
        "Gratis 5 email perusahaan",
        "Revisi desain tidak terbatas 2 bulan",
        "SEO dasar untuk pencarian Google",
      ],
      duration: "3-4 minggu",
      highlighted: false,
    },
    {
      name: "CMS Pro",
      price: "Rp3.999.000",
      icon: Rocket,
      tagline:
        "Website company profile lengkap dengan fitur blog dan artikel dinamis",
      badge: "Paling Populer",
      features: [
        "5-8 halaman custom sesuai kebutuhan bisnis",
        "Desain premium dan modern dengan animasi halus",
        "Blog/News section untuk update perusahaan",
        "Website admin untuk update artikel dan berita (2 section untuk update data)",
        "Portfolio dinamis dengan kategori dan filter",
        "Testimoni pelanggan dan client logos",
        "Integrasi media sosial dan Google Maps",
        "Gratis domain premium (.com, .net, .id, .co.id) & SSL 1 tahun",
        "Gratis 5 email perusahaan",
        "SEO lanjutan",
        "Revisi tidak terbatas 3 bulan",
      ],
      duration: "3-4 minggu",
      highlighted: true,
    },
    {
      name: "CMS Super",
      price: "Rp5.999.000",
      icon: Crown,
      tagline:
        "Website company profile lengkap dengan semua fitur dan semua data dalam website dapat di update",
      features: [
        "Unlimited halaman sesuai struktur perusahaan",
        "Multi-language support (Indonesia & Inggris)",
        "CMS Dashboard untuk update konten sendiri termasuk tulisan seperti about, dan semua hal lain di website",
        "Advanced blog dengan kategori dan tag",
        "Member area untuk client/partner login",
        "Download center untuk dokumen perusahaan",
        "Career/Recruitment page dengan form aplikasi",
        "Gratis domain premium (.com, .net, .id, .co.id) & SSL 1 tahun",
        "Gratis 5 email perusahaan",
        "SEO advanced dan reporting",
        "Revisi tidak terbatas 3 bulan",
        "Training penggunaan CMS",
      ],
      duration: "5-6 minggu",
      highlighted: false,
    },
  ];

  const ecommercePackages = [
    {
      name: "Website Sesuai Request",
      price: "Let's Talk!",
      icon: Zap,
      tagline:
        "Website apapun sesuai dengan request seperti LMS, CMS, dan web lainnya",
      features: [
        "Bebas request apa saja",
        "Website seperti LMS untuk sekolah/perusahaan",
        "Website E-commerce seperti tokpedia, shopee, dan lainnya",
      ],
      duration: "4 minggu",
      highlighted: false,
    },
    {
      name: "Android App",
      price: "Let's Talk!",
      icon: Rocket,
      tagline: "E-commerce lengkap dengan payment gateway dan manajemen order",
      badge: "Paling Populer",
      features: [
        "Bebas request aplikasi untuk apa saja",
        "Dapat membuat aplikasi seperti HR Tools, sampai E-Commerce",
        "Dibuat dengan tekonologi terbaru",
      ],
      duration: "5-6 minggu",
      highlighted: true,
    },
  ];

  const allPackages = [
    landingPagePackages,
    companyProfilePackages,
    ecommercePackages,
  ];

  const handleWhatsApp = (packageName) => {
    const phoneNumber = "6285156436280";
    const message = `Halo! Saya ingin tanya mengenai Paket ${packageName} di Ariza Labs`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div id="harga" className="min-h-screen bg-transparant">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-epilogue text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-2 leading-tight">
            Daftar Harga
          </h1>
          <p className="font-manrope text-lg text-gray-600 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`group flex items-center gap-3 px-6 py-3 rounded-xl font-semibold font-epilogue transition-all duration-300 ${
                activeTab === index
                  ? "bg-gradient-to-r from-[#0F9D58] to-[#064E3B] text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.name}</span>
              {activeTab === index && <ChevronRight className="w-4 h-4" />}
            </button>
          ))}
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allPackages[activeTab].map((pkg, index) => (
            <div
              key={index}
              className={`group relative backdrop-blur-sm border rounded-3xl p-8 transition-all duration-500 hover:scale-102 cursor-pointer flex flex-col ${
                pkg.highlighted
                  ? "bg-gradient-to-br from-[#0F9D58]/20 via-[#0F9D58]/10 to-[#064E3B]/20 border-[#0F9D58] hover:shadow-lg hover:shadow-[#0F9D58]/20 hover:from-[#0F9D58]/25 hover:to-[#064E3B]/25"
                  : "bg-white/5 border-white/20 hover:border-gray-300/50 hover:shadow-md hover:bg-white/8"
              }`}
            >
              {/* Badge */}
              {pkg.highlighted && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0F9D58]/5 via-transparent to-[#064E3B]/5 group-hover:from-[#0F9D58]/10 group-hover:to-[#064E3B]/10 transition-all duration-300 rounded-3xl"></div>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-[#0F9D58] to-[#064E3B] text-white text-sm font-semibold rounded-full shadow-lg animate-pulse">
                    {pkg.badge}
                  </div>
                </>
              )}

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div
                  className={`mb-6 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
                    pkg.highlighted
                      ? "bg-gradient-to-r from-[#0F9D58] to-[#064E3B] group-hover:scale-105"
                      : "bg-gray-600"
                  }`}
                >
                  <pkg.icon className="w-7 h-7 text-white" />
                </div>

                {/* Package Name */}
                <h3 className="font-epilogue text-3xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>

                {/* Price */}
                <div className="mb-2">
                  <span
                    className={`text-4xl font-bold font-epilogue transition-colors duration-300 ${
                      pkg.highlighted ? "text-[#0F9D58]" : "text-gray-900"
                    }`}
                  >
                    {pkg.price}
                  </span>
                </div>

                {/* Tagline */}
                <p className="text-sm font-manrope text-gray-700 mb-6 leading-relaxed">
                  {pkg.tagline}
                </p>

                {/* Features */}
                <ul className="font-manrope space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-sm font-manrope text-gray-800 leading-relaxed flex items-start gap-2 opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]"
                      style={{ animationDelay: `${featureIndex * 30}ms` }}
                    >
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors duration-300 ${
                          pkg.highlighted ? "text-[#0F9D58]" : "text-gray-600"
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Duration */}
                <div
                  className={`flex items-center gap-2 pt-6 border-t transition-colors duration-300 ${
                    pkg.highlighted ? "border-[#0F9D58]/30" : "border-gray-300"
                  }`}
                >
                  <Clock
                    className={`w-5 h-5 transition-colors duration-300 ${
                      pkg.highlighted ? "text-[#0F9D58]" : "text-gray-600"
                    }`}
                  />
                  <span className="text-sm font-semibold font-manrope text-gray-900">
                    Waktu pengerjaan: {pkg.duration}
                  </span>
                </div>
                <button
                  onClick={() => handleWhatsApp(pkg.name)}
                  className={`w-full py-3 px-4 rounded-lg font-semibold font-manrope flex items-center justify-center gap-2 transition-all duration-300 mt-5 cursor-pointer ${
                    pkg.highlighted
                      ? "bg-gradient-to-r from-[#0F9D58] to-[#064E3B] text-white hover:shadow-md hover:shadow-[#0F9D58]/30"
                      : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                  }`}
                >
                  Pesan via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 font-manrope">
          <p className="text-sm text-gray-600">
            Contoh domain & email:{" "}
            <span className="font-semibold">gocorporation.com</span> |{" "}
            <span className="font-semibold">salsa@gocorporation.com</span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
