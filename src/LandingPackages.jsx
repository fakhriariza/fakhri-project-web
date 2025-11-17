import React, { useState } from "react";
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

  const tabs = [
    { name: "Landing Page", icon: Globe },
    { name: "Company Profile", icon: Building2 },
    { name: "E-Commerce", icon: ShoppingBag },
  ];

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
        "Gratis 3 email pribadi/perusahaan",
        "Revisi desain tidak terbatas 3 bulan",
      ],
      duration: "3–4 minggu",
      highlighted: false,
    },
  ];

  const companyProfilePackages = [
    {
      name: "Basic",
      price: "Rp1.999.000",
      icon: Zap,
      tagline:
        "Website company profile standar dengan informasi lengkap perusahaan",
      features: [
        "5-7 halaman: Home, About, Services, Portfolio, Team, Contact",
        "Desain profesional mencerminkan identitas perusahaan",
        "Galeri foto produk/layanan",
        "Form kontak dan info lokasi kantor",
        "Mobile responsive dan loading cepat",
        "Gratis domain premium (.com, .net, .id, .co.id) & SSL 1 tahun",
        "Gratis 5 email perusahaan",
        "Revisi desain tidak terbatas 1 bulan",
        "SEO dasar untuk pencarian Google",
      ],
      duration: "2-3 minggu",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "Rp3.499.000",
      icon: Rocket,
      tagline:
        "Website company profile lengkap dengan fitur blog dan portfolio dinamis",
      badge: "Paling Populer",
      features: [
        "8-10 halaman custom sesuai kebutuhan bisnis",
        "Desain premium dan modern dengan animasi halus",
        "Blog/News section untuk update perusahaan",
        "Portfolio dinamis dengan kategori dan filter",
        "Testimoni pelanggan dan client logos",
        "Integrasi media sosial dan Google Maps",
        "Form kontak advanced dengan auto-reply",
        "Gratis domain premium & SSL 1 tahun",
        "Gratis 10 email perusahaan",
        "SEO advanced dan Google Analytics",
        "Revisi tidak terbatas 2 bulan",
      ],
      duration: "3-4 minggu",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Rp5.999.000",
      icon: Crown,
      tagline:
        "Solusi website perusahaan skala besar dengan fitur lengkap dan dashboard",
      features: [
        "Unlimited halaman sesuai struktur perusahaan",
        "Multi-language support (Indonesia & Inggris)",
        "CMS Dashboard untuk update konten sendiri",
        "Advanced blog dengan kategori dan tag",
        "Member area untuk client/partner login",
        "Video integration dan multimedia gallery",
        "Download center untuk dokumen perusahaan",
        "Career/Recruitment page dengan form aplikasi",
        "Gratis domain premium & SSL 1 tahun",
        "Gratis 20 email perusahaan",
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
      name: "Startup",
      price: "Rp3.999.000",
      icon: Zap,
      tagline: "Toko online sederhana untuk mulai jualan produk secara online",
      features: [
        "Katalog produk hingga 50 item",
        "Kategori dan pencarian produk",
        "Shopping cart dan checkout sederhana",
        "Integrasi WhatsApp untuk order",
        "Halaman: Home, Shop, Product Detail, About, Contact",
        "Mobile friendly dan loading cepat",
        "Gratis domain premium & SSL 1 tahun",
        "Gratis 3 email bisnis",
        "Dashboard admin sederhana",
        "Revisi tidak terbatas 1 bulan",
      ],
      duration: "3-4 minggu",
      highlighted: false,
    },
    {
      name: "Business",
      price: "Rp7.999.000",
      icon: Rocket,
      tagline: "E-commerce lengkap dengan payment gateway dan manajemen order",
      badge: "Paling Populer",
      features: [
        "Unlimited produk dengan varian (warna, ukuran, dll)",
        "Kategori bertingkat dan advanced search",
        "Shopping cart dengan promo code",
        "Payment gateway (Midtrans/Xendit)",
        "Manajemen order dan status pengiriman",
        "Customer account dan order history",
        "Review dan rating produk",
        "Dashboard admin lengkap dengan report",
        "Integrasi ongkir otomatis (Raja Ongkir)",
        "Gratis domain premium & SSL 1 tahun",
        "Gratis 10 email bisnis",
        "SEO untuk produk",
        "Revisi tidak terbatas 2 bulan",
        "Training penggunaan sistem",
      ],
      duration: "5-6 minggu",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Rp14.999.000",
      icon: Crown,
      tagline:
        "Platform e-commerce skala besar dengan fitur marketplace dan multi-vendor",
      features: [
        "Multi-vendor/marketplace support",
        "Unlimited produk dengan sistem inventory",
        "Multiple payment gateway",
        "Multiple shipping methods",
        "Customer loyalty program & membership",
        "Advanced reporting dan analytics",
        "Email marketing integration",
        "Live chat support integration",
        "Mobile app ready (PWA)",
        "Multi-currency dan multi-language",
        "Wishlist dan product comparison",
        "Flash sale dan promo management",
        "Gratis domain premium & SSL 1 tahun",
        "Gratis 20 email bisnis",
        "Priority support 3 bulan",
        "Revisi tidak terbatas 3 bulan",
        "Training lengkap dan dokumentasi",
      ],
      duration: "8-10 minggu",
      highlighted: false,
    },
  ];

  const allPackages = [
    landingPagePackages,
    companyProfilePackages,
    ecommercePackages,
  ];

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
                  ? "bg-gradient-to-r from-[#0F9D58] to-[#064E3B] text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.name}</span>
              {activeTab === index && (
                <ChevronRight className="w-4 h-4 animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allPackages[activeTab].map((pkg, index) => (
            <div
              key={index}
              className={`group relative backdrop-blur-sm border rounded-3xl p-8 transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col ${
                pkg.highlighted
                  ? "bg-gradient-to-br from-[#0F9D58]/20 via-[#0F9D58]/10 to-[#064E3B]/20 border-[#0F9D58] hover:shadow-2xl hover:shadow-[#0F9D58]/30 hover:from-[#0F9D58]/30 hover:to-[#064E3B]/30"
                  : "bg-white/5 border-white/20 hover:border-gray-400/50 hover:shadow-xl hover:bg-white/10"
              }`}
            >
              {/* Badge */}
              {pkg.highlighted && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0F9D58]/5 via-transparent to-[#064E3B]/5 group-hover:from-[#0F9D58]/15 group-hover:to-[#064E3B]/15 transition-all duration-300 rounded-3xl"></div>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-[#0F9D58] to-[#064E3B] text-white text-sm font-semibold rounded-full shadow-lg">
                    {pkg.badge}
                  </div>
                </>
              )}

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div
                  className={`mb-6 w-14 h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                    pkg.highlighted
                      ? "bg-gradient-to-r from-[#0F9D58] to-[#064E3B]"
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
                    className={`text-4xl font-bold font-epilogue ${
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
                      className="text-sm font-manrope text-gray-800 leading-relaxed flex items-start gap-2"
                    >
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          pkg.highlighted ? "text-[#0F9D58]" : "text-gray-600"
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Duration */}
                <div
                  className={`flex items-center gap-2 pt-6 border-t ${
                    pkg.highlighted ? "border-[#0F9D58]/30" : "border-gray-300"
                  }`}
                >
                  <Clock
                    className={`w-5 h-5 ${
                      pkg.highlighted ? "text-[#0F9D58]" : "text-gray-600"
                    }`}
                  />
                  <span className="text-sm font-semibold font-manrope text-gray-900">
                    Waktu pengerjaan: {pkg.duration}
                  </span>
                </div>
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
    </div>
  );
}
