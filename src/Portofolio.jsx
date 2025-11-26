import React, { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import Footer from "./Footer";

const Portofolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Landing Page Works",
      category: "UI/UX Design & Development",
      year: "2024 - 2025",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop",
      description:
        "Modern landing page dengan design yang clean dan conversion-focused",
      tech: ["React", "Tailwind", "Framer"],
      link: "#",
    },
    {
      id: 2,
      title: "Calodrop App",
      category: "iOS App Design",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=600&h=600&fit=crop",
      description:
        "Mobile app design untuk tracking kalori dengan UI yang intuitif",
      tech: ["Figma", "iOS Design", "UX Research"],
      link: "#",
    },
    {
      id: 3,
      title: "Charity Platform",
      category: "Web Application",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1552308995-5658abf4ff4e?w=600&h=600&fit=crop",
      description:
        "Platform donasi dengan fitur campaign management dan analytics",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      id: 4,
      title: "AIMON Tracker",
      category: "Habit Tracker App",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=600&fit=crop",
      description: "AI-powered habit tracking app dengan recommendation system",
      tech: ["React Native", "Firebase", "ML"],
      link: "#",
    },
    {
      id: 5,
      title: "Velocity Dashboard",
      category: "Analytics Dashboard",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1563114773-639423e46ca0?w=600&h=600&fit=crop",
      description: "Real-time analytics dashboard untuk monitoring performa",
      tech: ["Next.js", "Chart.js", "TypeScript"],
      link: "#",
    },
    {
      id: 6,
      title: "Web3 Dashboard",
      category: "Blockchain UI",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=600&fit=crop",
      description: "Dashboard untuk Web3 portfolio management dan trading",
      tech: ["Web3.js", "React", "Solidity"],
      link: "#",
    },
  ];

  const skills = [
    "UI/UX Design",
    "Web Development",
    "Mobile App Design",
    "Framer",
    "React",
    "Figma",
    "JavaScript",
    "Tailwind CSS",
    "Product Design",
    "User Research",
  ];

  return (
    <div className="pt-20 w-screen min-h-screen relative top-0 bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6 text-gray-900">
                Hello, I'm Iqbal 👋
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                UI/UX designer dengan 8+ tahun pengalaman membuat mobile apps,
                websites, dan interfaces yang conversion-driven. Spesialis di
                Framer development untuk hasil yang cepat, bersih, dan scalable.
              </p>
              <button className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#0F9D58] to-[#064E3B] text-white rounded-lg font-semibold hover:shadow-md transition group">
                Explore My Work{" "}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-[#0F9D58]/20 to-[#064E3B]/20 rounded-3xl border-2 border-[#0F9D58]/30 flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-6">
            Skills & Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:border-[#0F9D58] hover:text-[#0F9D58] transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-gray-900">
            Featured Works
          </h2>
          <p className="text-gray-600 mb-16 text-lg">
            Koleksi project terbaik dari berbagai industri dan platform
          </p>

          {/* Grid Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {projects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 hover:border-[#0F9D58]/50 transition-all duration-300">
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-3">
                      <p className="text-[#0F9D58] text-sm font-semibold mb-2">
                        {project.year}
                      </p>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {project.category}
                      </p>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Large Featured Project */}
          <div className="grid md:grid-cols-2 gap-12 items-center py-12 border-t border-gray-200">
            <div className="order-2 md:order-1">
              <div className="overflow-hidden rounded-2xl border border-gray-200 group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=800&fit=crop"
                  alt="Featured"
                  className="w-full h-96 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-[#0F9D58] text-sm font-semibold mb-3">
                Featured Project
              </p>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Landing Page Campaign
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sebuah project besar yang menggabungkan design yang stunning
                dengan functionality yang powerful. Menghasilkan 45% peningkatan
                conversion rate untuk client.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {["React", "Framer Motion", "Tailwind", "Analytics"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="text-sm px-4 py-2 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <button className="flex items-center gap-2 text-[#0F9D58] font-semibold hover:gap-4 transition group/btn">
                View Full Case Study <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              Saya adalah designer dan developer yang passionate tentang
              menciptakan digital experiences yang memorable dan functional.
              Dengan background di UI/UX design dan development, saya bisa
              menjembatani gap antara design dan technical implementation.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Selama 8+ tahun, saya sudah bekerja dengan berbagai brand dari
              startup hingga enterprise, membantu mereka transform ideas menjadi
              produk yang sukses.
            </p>
            <button className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#0F9D58] to-[#064E3B] text-white rounded-lg font-semibold hover:shadow-md transition group">
              Download Resume{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
          </div>
          <div className="bg-gradient-to-br from-[#0F9D58]/10 to-[#064E3B]/10 rounded-2xl border border-[#0F9D58]/20 p-8">
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Experience</p>
                <p>8+ years dalam UI/UX Design & Web Development</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  Projects Completed
                </p>
                <p>100+ projects untuk berbagai industri</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  Specialization
                </p>
                <p>UI/UX Design, Web Development, Framer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Let's create something amazing together
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Interested in collaborating? Reach out and let's discuss your next
            project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-gradient-to-r from-[#0F9D58] to-[#064E3B] text-white rounded-lg font-semibold hover:shadow-md transition">
              Get In Touch
            </button>
            <button className="px-10 py-4 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition border border-gray-200">
              View Resume
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portofolio;
