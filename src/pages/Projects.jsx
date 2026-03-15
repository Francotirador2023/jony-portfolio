import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import etlBanner from '../assets/etl_banner.png';
import biDashboard from '../assets/bi_dashboard.png';
import mdsBanner from '../assets/mds_banner.png';
import mlopsBanner from '../assets/mlops_banner.png';

import heartBanner from '../assets/heart_disease_banner.png';

const ProjectCard = ({ title, description, tags, link, github, type, image, reportUrl }) => (
    <div 
        onClick={() => window.open(reportUrl, '_blank')}
        className="bg-dark-card rounded-xl overflow-hidden border border-white/5 hover:border-primary-500/50 transition-all duration-300 group hover:-translate-y-2 cursor-pointer relative"
    >
        <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden group-hover:brightness-110 transition-all">
            {/* Image or Abstract presentation */}
            {image ? (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
            ) : (
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="absolute top-4 right-4 p-2 bg-black/30 rounded-lg backdrop-blur text-primary-400">
                        <Folder className="w-6 h-6" />
                    </div>
                </div>
            )}
            <div className="absolute inset-0 bg-primary-600/10 group-hover:bg-primary-600/0 transition-colors" />
            
            {/* Overlay hint: Ver Informe */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-primary-900/40 backdrop-blur-sm">
                <span className="bg-white text-primary-900 px-4 py-2 rounded-full font-bold text-sm shadow-xl flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" /> Ver Informe PDF
                </span>
            </div>
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
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors relative z-10"
                >
                    <Github className="w-4 h-4" /> Código
                </a>
                <div className="flex items-center gap-2 text-sm text-primary-400 group-hover:text-primary-300 transition-colors ml-auto">
                    Detalles <ExternalLink className="w-4 h-4" />
                </div>
            </div>
        </div>
    </div>
);

const Projects = () => {
    // Placeholder projects based on skill set
    const projects = [
        {
            title: "Heart Disease Clustering & Prediction System",
            type: "Machine Learning & AI",
            description: "Sistema híbrido de IA para triaje cardíaco. Segmentación de pacientes con K-Means (No Supervisado) y predicción de riesgo clínico con Random Forest. Análisis automatizado y simulación de diagnósticos.",
            tags: ["Python", "Scikit-Learn", "Pandas", "K-Means", "Random Forest"],
            github: "https://github.com/Francotirador2023/tp-final-ml",
            reportUrl: "/reports/heart_disease_report.pdf",
            image: heartBanner
        },
        {
            title: "Automatización de Procesos ETL",
            type: "Data Engineering",
            description: "Scripts en Python para la limpieza, transformación y carga automática de grandes volúmenes de datos. Optimización de flujos de trabajo repetitivos reduciendo tiempos de procesamiento.",
            tags: ["Python", "SQL", "Pandas", "Automation"],
            github: "https://github.com/Francotirador2023/etl-sales-pipeline",
            reportUrl: "/reports/etl_automation_report.pdf",
            image: etlBanner
        },
        {
            title: "Dashboard de Gestión Veterinaria",
            type: "Business Intelligence",
            description: "Dashboard integral en Power BI para análisis de ventas y servicios. Incluye procesos ETL con Power Query, modelado de datos en estrella y métricas DAX avanzadas para identificar tendencias y optimizar el rendimiento.",
            tags: ["Power BI", "DAX", "ETL", "Data Modeling"],
            github: "https://github.com/Francotirador2023/bi-dashboards",
            reportUrl: "/reports/vet_dashboard_report.pdf",
            image: biDashboard
        },
        {
            title: "Modern Data Stack (Crypto ETL)",
            type: "Data Engineering & Cloud",
            description: "Pipeline ELT completo orquestado con Airflow en Docker. Extracción de API de criptomonedas, Data Warehouse en Postgres y transformación analítica con dBT. Visualización de tendencias en Metabase.",
            tags: ["Airflow", "Docker", "dBT", "Postgres", "Metabase"],
            github: "https://github.com/Francotirador2023/modern-data-stack",
            reportUrl: "/reports/crypto_etl_report.pdf",
            image: mdsBanner
        },
        {
            title: "MLOps: Predictor de Precios de Viviendas",
            type: "Machine Learning Engineering",
            description: "Pipeline End-to-End para predicción de precios inmobiliarios. Entrenamiento con Scikit-Learn, API productiva con FastAPI y validación Pydantic. Todo dockerizado y servido mediante Dashboard interactivo en Streamlit.",
            tags: ["Python", "FastAPI", "Docker", "Streamlit", "Scikit-Learn"],
            github: "https://github.com/Francotirador2023/mlops-price-predictor",
            reportUrl: "/reports/mlops_price_predictor_report.pdf",
            image: mlopsBanner
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
