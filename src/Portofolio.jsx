import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X, Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern shopping experience with real-time inventory",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Design",
      description: "Secure and intuitive financial management",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    },
    {
      title: "AI Analytics Dashboard",
      category: "Data Visualization",
      description: "Real-time insights with predictive analytics",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      title: "Brand Identity System",
      category: "Branding",
      description: "Complete visual identity for tech startup",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
    },
    {
      title: "Cloud Infrastructure",
      category: "DevOps",
      description: "Scalable microservices architecture",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    },
    {
      title: "Creative Portfolio",
      category: "UI/UX Design",
      description: "Interactive showcase with 3D elements",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
    },
  ];

  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies",
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions",
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that converts",
    },
    {
      title: "Brand Strategy",
      description: "Complete brand identity and positioning",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">
              YOUR<span className="text-blue-500">STUDIO</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#work" className="hover:text-blue-400 transition-colors">
                Work
              </a>
              <a
                href="#services"
                className="hover:text-blue-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg px-6 py-4">
            <div className="flex flex-col gap-4">
              <a href="#work" className="hover:text-blue-400 transition-colors">
                Work
              </a>
              <a
                href="#services"
                className="hover:text-blue-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a href="#contact" className="text-blue-400">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl w-full">
          <div className="space-y-8 text-center">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              We Create
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Digital Experiences
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              A creative engineering company building products that matter. We
              combine design thinking with technical excellence.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="#work"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all hover:scale-105"
              >
                View Our Work
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="border border-white/20 hover:border-white/40 px-8 py-4 rounded-full transition-all hover:scale-105"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-black/50 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-colors">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">
            Selected Work
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-blue-400 text-sm font-semibold">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-zinc-900/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">About Us</h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            We're a team of designers, developers, and strategists passionate
            about creating digital products that make a difference. With over 10
            years of combined experience, we've helped startups and enterprises
            bring their vision to life.
          </p>
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div>
              <div className="text-5xl font-bold text-blue-500 mb-2">50+</div>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-500 mb-2">30+</div>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-500 mb-2">10+</div>
              <p className="text-gray-400">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Let's Build
            <br />
            Something Great
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Have a project in mind? We'd love to hear about it.
          </p>
          <a
            href="mailto:hello@yourstudio.com"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-lg transition-all hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Start a Conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold">
              YOUR<span className="text-blue-500">STUDIO</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 YourStudio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
