import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Cloud, Code, Terminal, BarChart } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, skills }) => (
    <div className="bg-dark-card p-6 rounded-xl border border-white/5 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 group">
        <div className="w-12 h-12 bg-primary-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors duration-300">
            <Icon className="w-6 h-6 text-primary-400 group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3 font-heading">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-dark-bg text-sm text-gray-400 rounded-full border border-white/5">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const About = () => {
    const skillCategories = [
        {
            icon: Code,
            title: "Lenguajes",
            skills: ["Python", "SQL", "Java"]
        },
        {
            icon: Terminal,
            title: "Big Data & Herramientas",
            skills: ["Apache Spark", "Hadoop", "Docker", "Jenkins", "Git"]
        },
        {
            icon: Database,
            title: "Bases de Datos",
            skills: ["MySQL", "PostgreSQL", "MongoDB"]
        },
        {
            icon: Cloud,
            title: "Cloud Computing",
            skills: ["AWS", "Google Cloud Platform (GCP)", "Microsoft Azure"]
        },
        {
            icon: BarChart,
            title: "Visualización & BI",
            skills: ["Power BI", "Tableau"]
        }
    ];

    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* About Info */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                            Sobre <span className="text-primary-400">Mí</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Desarrollador de Software enfocado en la Ingeniería de Datos con experiencia en la gestión, procesamiento y análisis de grandes volúmenes de datos. Competente en la implementación de pipelines de datos, modelado de datos y tecnologías de la nube. Apasionado por optimizar procesos y transformar datos en insights accionables para la toma de decisiones estratégicas.
                        </p>
                    </motion.div>
                </div>

                {/* Skills Grid */}
                <div id="skills">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                            Arsenal <span className="text-primary-400">Técnico</span>
                        </h2>
                        <p className="text-gray-500">Herramientas y tecnologías que domino</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <SkillCard {...category} />
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
