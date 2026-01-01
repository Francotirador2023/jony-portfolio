import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark-card border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0">
                        <span className="font-heading font-bold text-2xl text-white">Jony<span className="text-primary-400">.Dev</span></span>
                        <p className="mt-2 text-gray-400 max-w-xs">
                            Ingeniería de Datos y Desarrollo de Software. Transformando datos en decisiones.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github className="h-6 w-6" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a href="mailto:francojonysenati@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                            <Mail className="h-6 w-6" />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Jony Franco. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
