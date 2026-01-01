import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const ProjectCard = ({ title, description, tags, link, github, type }) => (
    <div className="bg-dark-card rounded-xl overflow-hidden border border-white/5 hover:border-primary-500/50 transition-all duration-300 group hover:-translate-y-2">
        <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative p-6 flex flex-col justify-end">
            {/* Abstract presentation for Data Projects if no image */}
            <div className="absolute top-4 right-4 p-2 bg-black/30 rounded-lg backdrop-blur text-primary-400">
                <Folder className="w-6 h-6" />
            </div>
            <div className="absolute inset-0 bg-primary-600/10 group-hover:bg-primary-600/20 transition-colors" />
        </div>

        <div className="p-6">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <span className="text-xs font-semibold text-primary-400 uppercase tracking-wider">{type}</span>
                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-primary-300 transition-colors">{title}</h3>
                </div>
            </div>

            <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                    <Github className="w-4 h-4" /> Código
                </a>
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors ml-auto"
                    >
                        Ver Demo <ExternalLink className="w-4 h-4" />
                    </a>
                )}
            </div>
        </div>
    </div>
);

const Projects = () => {
    // Placeholder projects based on skill set
    const projects = [
        {
            title: "Automatización de Procesos ETL",
            type: "Data Engineering",
            description: "Scripts en Python para la limpieza, transformación y carga automática de grandes volúmenes de datos. Optimización de flujos de trabajo repetitivos reduciendo tiempos de procesamiento.",
            tags: ["Python", "SQL", "Pandas", "Automation"],
            github: "https://github.com/Francotirador2023/etl-sales-pipeline"
        },
        {
            title: "Dashboard de Gestión Veterinaria",
            type: "Business Intelligence",
            description: "Dashboard integral en Power BI para análisis de ventas y servicios. Incluye procesos ETL con Power Query, modelado de datos en estrella y métricas DAX avanzadas para identificar tendencias y optimizar el rendimiento.",
            tags: ["Power BI", "DAX", "ETL", "Data Modeling"],
            github: "https://github.com/Francotirador2023/bi-dashboards"
        },
        {
            title: "Modern Data Stack (Crypto ETL)",
            type: "Data Engineering & Cloud",
            description: "Pipeline ELT completo orquestado con Airflow en Docker. Extracción de API de criptomonedas, Data Warehouse en Postgres y transformación analítica con dBT. Visualización de tendencias en Metabase.",
            tags: ["Airflow", "Docker", "dBT", "Postgres", "Metabase"],
            github: "https://github.com/Francotirador2023/modern-data-stack"
        }
    ];

    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Proyectos <span className="text-primary-400">Destacados</span>
                    </h2>
                    <p className="text-gray-500">Una selección de mis trabajos recientes</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
