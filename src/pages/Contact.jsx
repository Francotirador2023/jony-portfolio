import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-dark-bg to-dark-card/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-dark-card border border-white/5 p-12 rounded-2xl relative overflow-hidden"
                >
                    {/* Background Gradient */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-indigo-500" />
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-400">
                            <MessageSquare className="w-8 h-8" />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
                            ¿Listo para trabajar juntos?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                            Estoy disponible para nuevas oportunidades y desafíos en el mundo de los datos. Si tienes un proyecto en mente o simplemente quieres charlar, ¡escríbeme!
                        </p>

                        <a
                            href="mailto:francojonysenati@gmail.com"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-primary-900/20 transform hover:-translate-y-1"
                        >
                            <Mail className="w-5 h-5" />
                            francojonysenati@gmail.com
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
