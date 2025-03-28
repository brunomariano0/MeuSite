import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';

function Menu() {
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

    return (
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
                            onClick={() => scrollToSection('hero')}
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            Home
                        </button>
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
                        {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg rounded-lg mt-2 p-4">
                        <div className="flex flex-col space-y-4">
                            <button 
                                onClick={() => scrollToSection('hero')}
                                className="text-gray-600 hover:text-blue-600 transition-colors text-left"
                            >
                                Home
                            </button>
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
    );
}

export default Menu;