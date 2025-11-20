import React, { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Berapa lama waktu yang dibutuhkan untuk membuat website?",
      answer:
        "Estimasi waktu pengerjaan tergantung berdasarkan paket yang dipilih dan tingkat kerumitan. Namun tenang, segala hal mengenai transparansi pengerjaan akan dibahas ketika tahap planning. Ariza Studio akan memberikan timeline pengerjaan yang akan menjadi komitmen bersama.",
    },
    {
      question: "Apakah saya bisa request desain sesuai keinginan?",
      answer:
        "Tentu saja! Kami tidak menggunakan template. Semua desain dibuat custom sesuai dengan karakteristik brand dan keinginan Anda. Kami akan berdiskusi mendalam di tahap Planning untuk memastikan website mencerminkan identitas Anda dan bisnis Anda.",
    },
    {
      question: "Apa saja yang termasuk dalam paket harga?",
      answer:
        "Setiap paket sudah termasuk domain, SSL certificate, email bisnis, hosting, dan revisi desain sesuai durasi yang tertera. Kami juga memberikan training penggunaan website dan support setelah launch.",
    },
    {
      question: "Apakah website yang dibuat mobile-friendly?",
      answer:
        "Ya, semua website yang kami buat 100% responsive dan mobile-friendly. Website akan terlihat bagus dan berfungsi dengan baik di semua perangkat, mulai dari smartphone, tablet, hingga desktop.",
    },
    {
      question: "Bagaimana sistem pembayarannya?",
      answer:
        "Sistem pembayaran bisa dilakukan secara bertahap. DP 50% di awal project, dan pelunasan 50% sebelum deployment. Kami menerima pembayaran melalui transfer bank atau e-wallet.",
    },
    {
      question:
        "Apakah saya bisa update konten website sendiri setelah selesai?",
      answer:
        "Tergantung dengan paket yang anda pilih, ada website statis dan dinamis. Untuk dapat update konten website sendiri anda perlu memesan paket website dinamis. Namun, walaupun statis anda tetap dapat meminta perubahan konten selama masih dalam tahap revisi. ",
    },
    {
      question: "Apa yang terjadi setelah website selesai?",
      answer:
        "Setelah website selesai dan deploy, kami masih memberikan support dan monitoring. Jika ada bug atau masalah teknis dalam periode garansi, kami akan segera memperbaikinya. Kami juga menyediakan layanan maintenance untuk jangka panjang.",
    },
    {
      question: "Apakah ada biaya tambahan setelah website selesai?",
      answer:
        "Biaya domain dan hosting untuk tahun pertama sudah termasuk dalam paket. Untuk tahun berikutnya, Anda perlu perpanjang domain dan hosting (biaya market price). Jika ada penambahan fitur baru atau update besar, akan dikenakan biaya tambahan sesuai kesepakatan.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-screen min-h-screen bg-transparent relative overflow-hidden py-20 px-6">
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-[#0F9D58] rounded-full text-sm text-[#0F9D58] mb-6">
            <Sparkles className="w-4 h-4" />
            <span>FAQ</span>
          </div>

          <h2 className="font-epilogue text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 leading-tight">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="font-manrope text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang layanan kami
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-[#053B33] rounded-2xl overflow-hidden hover:bg-white/10 hover:border-[#0F9D58] hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-green-50 group-hover:to-green-500/10 transition-all duration-300"></div>

              <div className="relative z-10">
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full font-epilogue text-left p-6 flex items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#064E3B] to-[#0F9D58] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <HelpCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 pt-1">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-[#0F9D58] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 pl-20">
                    <p className="text-gray-700 font-manrope leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA
        <div className="mt-16 text-center bg-gradient-to-r from-[#064E3B] to-[#0F9D58] rounded-2xl p-10 text-white shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Masih Ada Pertanyaan?
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami. Tim kami siap membantu menjawab
            semua pertanyaan Anda
          </p>
          <button className="px-8 py-4 bg-white text-[#0F9D58] font-bold rounded-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
            Hubungi Kami
          </button>
        </div> */}
      </div>
    </div>
  );
}
