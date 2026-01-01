import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';
import profileImage from '../assets/profile.png';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-primary-400 bg-primary-900/30 rounded-full border border-primary-700/50">
                            Disponible para trabajar
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6">
                            Hola, soy <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-500">
                                Jony Franco
                            </span>
                        </h1>
                        <h2 className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
                            Desarrollador de Software enfocado en <span className="text-primary-300 font-medium">Ingeniería de Datos</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                            Experiencia en gestión, procesamiento y análisis de grandes volúmenes de datos. Competente en pipelines de datos, modelado y tecnologías Cloud (AWS, GCP, Azure).
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <a
                                href="#projects"
                                className="group w-full sm:w-auto px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary-900/20"
                            >
                                Ver Proyectos
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/cv.pdf"
                                target="_blank"
                                className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
                            >
                                <Download className="w-4 h-4" />
                                Descargar CV
                            </a>
                        </div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 relative"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                            {/* Image Frame/Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-indigo-600 rounded-full blur-2xl opacity-40 animate-pulse" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 bg-dark-card shadow-2xl">
                                <img
                                    src={profileImage}
                                    alt="Jony Franco"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating Tech Badges (optional decoration) */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-4 right-4 bg-dark-card/90 backdrop-blur border border-white/10 p-2 rounded-lg shadow-xl"
                            >
                                <span className="text-2xl">🐍</span> {/* Python */}
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-8 left-0 bg-dark-card/90 backdrop-blur border border-white/10 p-2 rounded-lg shadow-xl"
                            >
                                <span className="text-2xl">☁️</span> {/* Cloud */}
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
