import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown, Brain, Terminal, Database, Palette, Menu, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react';

//Imagens
import perfil from "./img/Perfil.jpg"
import previsao from "./img/previsao.jpg"
import bernese from "./img/Bernese.png"
import von from "./img/Von.png"

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });

    try {
      await emailjs.send(
        'service_31voyiq', // Substitua pelo seu Service ID do EmailJS
        'template_8bl1rgr', // Substitua pelo seu Template ID do EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'B8VMWRiD6KXygWKv-' // Substitua pela sua Public Key do EmailJS
      );

      setStatus({
        type: 'success',
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
      });
      
      // Limpar o formulário
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Não foi possível enviar a mensagem. Por favor, tente novamente.'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Menu */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
            >
              Bruno Mariano
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Projetos
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contato
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg rounded-lg mt-2 p-4">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-left"
                >
                  Skills
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-left"
                >
                  Sobre
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-left"
                >
                  Projetos
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-left"
                >
                  Contato
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 text-center transform transition-all duration-1000 hover:scale-105">
          <div className="inline-block mb-6 p-2 bg-white/30 backdrop-blur-sm rounded-full">
            <img 
              src={perfil} 
              alt="Profile" 
              className="w-32 h-36 rounded-full border-4 border-white shadow-xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            Desenvolvedor Web
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up">
          Transformando ideias em soluções digitais elegantes
          </p>
          <div className="flex gap-6 justify-center mb-12">
            <a href="https://github.com/brunomariano0" target='_blank'  className="transform hover:scale-110 transition-all duration-300 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg text-gray-700 hover:text-blue-600">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/brunopaulomariano/" target='_blank' className="transform hover:scale-110 transition-all duration-300 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg text-gray-700 hover:text-blue-600">
              <Linkedin size={24} />
            </a>
            <a href="mailto:brunomariano802@gmail.com" target='_blank' className="transform hover:scale-110 transition-all duration-300 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg text-gray-700 hover:text-blue-600">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <a 
          href="#skills" 
          className="absolute bottom-8 animate-bounce bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg"
        >
          <ChevronDown size={24} className="text-gray-600" />
        </a>
      </header>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center flex items-center gap-2 justify-center">
            <Brain className="text-purple-600" />
             Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg transform transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <Terminal className="text-blue-600 group-hover:scale-110 transition-transform duration-500" size={32} />
                <h3 className="text-xl font-bold text-gray-800">Frontend</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  React & Next.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Tailwind CSS
                </li>
              </ul>
            </div>

            <div className="group p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg transform transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <Database className="text-purple-600 group-hover:scale-110 transition-transform duration-500" size={32} />
                <h3 className="text-xl font-bold text-gray-800">Backend</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Node.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Express
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  PostgreSQL
                </li>
              </ul>
            </div>

            <div className="group p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg transform transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <Code2 className="text-green-600 group-hover:scale-110 transition-transform duration-500" size={32} />
                <h3 className="text-xl font-bold text-gray-800">DevOps</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  Docker
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  CI/CD
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  AWS
                </li>
              </ul>
            </div>

            <div className="group p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-lg transform transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <Palette className="text-orange-600 group-hover:scale-110 transition-transform duration-500" size={32} />
                <h3 className="text-xl font-bold text-gray-800">Design</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                  UI/UX Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                  Figma
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                  Responsive Design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 transform transition-all duration-1000 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
                alt="Developer workspace" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 flex items-center gap-2">
                <User className="text-blue-600" />
                Sobre mim
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Sou um desenvolvedor web apaixonado, focado em criar aplicativos web bonitos e funcionais. Com experiência em tecnologias web modernas, dou vida a ideias por meio de código limpo e experiências de usuário intuitivas.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl shadow-lg transform transition-all duration-500 hover:-translate-y-1">
                  <h3 className="font-semibold mb-2 text-gray-800">Experiencia</h3>
                  <p className="text-gray-600">3+ Anos</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-lg transform transition-all duration-500 hover:-translate-y-1">
                  <h3 className="font-semibold mb-2 text-gray-800">Projetos</h3>
                  <p className="text-gray-600">20+ Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center flex items-center gap-2 justify-center">
            <Code2 className="text-blue-600" />
            Projetos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Previsão do Tempo",
                description: "Aplicativo web para consulta de previsão do tempo em tempo real, utilizando APIs meteorológicas e interface intuitiva.",
                image: previsao,
                tags: ["React", "TypeScript", "API"]
              },
              {
                title: "Canil Bernese",
                description: "Site institucional para canil especializado em cães da raça Bernese Mountain Dog. Inclui galeria de filhotes, informações sobre a raça, histórico do canil e formulário de contato para reservas.",
                image: bernese,
                tags: ["WordPress", "PHP"]
              },
              {
                title: "Canil Von Olivio - Em Produção",
                description: "Plataforma de e-commerce especializada em produtos para cães da raça Bernese Mountain Dog. Sistema de compras, área do cliente, histórico de pedidos e integração com pagamentos.",
                image: von,
                tags: ["React", "Tailwind", "Firebase"]
              }
            ].map((project, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href="#" className="text-blue-600 hover:text-blue-800 transform transition-transform duration-300 hover:scale-110">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold mb-16 text-center flex items-center gap-2 justify-center">
            <Briefcase className="text-blue-600" />
            Vamos Trabalhar Juntos
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-xl">
            {status.type && (
              <div className={`p-4 rounded-lg ${
                status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {status.message}
              </div>
            )}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-8 mb-8">
            <a href="https://github.com/brunomariano0" target='_blank' className="transform hover:scale-110 transition-all duration-300 hover:text-blue-400">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/brunopaulomariano/" target='_blank' className="transform hover:scale-110 transition-all duration-300 hover:text-blue-400">
              <Linkedin size={24} />
            </a>
            <a href="mailto:brunomariano802@gmail.com" target='_blank' className="transform hover:scale-110 transition-all duration-300 hover:text-blue-400">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-400">© Desenvolvido por Bruno Mariano. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;