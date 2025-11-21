import React from "react";
import {
  Lightbulb,
  Code,
  MessageSquare,
  Rocket,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function Phase() {
  const workflowSteps = [
    {
      number: "1",
      title: "Planning",
      subtitle: "Brainstorm & Design Plan",
      icon: Lightbulb,
      items: [
        "Menentukan rencana pembuatan",
        "Menetapkan target selesai",
        "Brainstorm mengenai konsep dan UI/UX website",
      ],
    },
    {
      number: "2",
      title: "Development",
      subtitle: "Build the Features",
      icon: Code,
      items: [
        "Pengembangan Website/App",
        "Slicing UI/UX",
        "Input data/integrasi backend",
      ],
    },
    {
      number: "3",
      title: "Feedback",
      subtitle: "Revision & Security Check",
      icon: MessageSquare,
      items: [
        "Demo Website/App",
        "Revisi Fitur & Desain",
        "SEO & Security Check",
      ],
    },
    {
      number: "4",
      title: "Deployment",
      subtitle: "Release & Launch",
      icon: Rocket,
      items: ["Deployment", "Tutorial Penggunaan", "Maintenance"],
    },
  ];

  return (
    <div className="w-screen min-h-screen bg-transparent relative overflow-hidden py-20 px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-[#0F9D58] rounded-full text-sm text-[#0F9D58] mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Work Process</span>
          </div>

          <h2 className="font-epilogue text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 leading-tight">
            Proses Kerja
          </h2>
          <p className="font-manrope text-lg text-gray-600 max-w-2xl mx-auto">
            Alur proses pengerjaan website/aplikasi di Ariza Labs
          </p>
        </div>

        {/* Timeline Line with Checkmarks */}
        <div className="relative mb-8">
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200 hidden lg:block"></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex justify-center">
                <div className="w-12 h-12 rounded-full bg-white border-4 border-[#0F9D58] flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-6 h-6 text-[#0F9D58]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {workflowSteps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-[#053B33] rounded-2xl p-8 hover:bg-white/10 hover:border-[#0F9D58] hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-green-50 group-hover:to-green-500/10 transition-all duration-300"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#064E3B] to-[#0F9D58] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-epilogue text-gray-900 mb-2 text-center">
                  {step.number}. {step.title}
                </h3>

                {/* Items List */}
                <ul className="space-y-3 mt-6">
                  {step.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex font-manrope items-start gap-3 text-sm text-gray-900"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#0F9D58] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#064E3B] to-[#0F9D58] rounded-2xl p-10 text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold font-epilogue mb-4">
            Tertarik dengan layanan kami?
          </h3>
          <p className="font-manrope text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Dengan proses yang jelas dan terstruktur, kami siap mewujudkan
            website sesuai karakter kamu sendiri!
          </p>
          <button className="font-epilogue px-8 py-4 bg-white text-[#0F9D58] font-bold rounded-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
            Hubungi Kami!
          </button>
        </div>
      </div>
    </div>
  );
}
