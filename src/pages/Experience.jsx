import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const TimelineItem = ({ title, organization, date, type, description, technologies, isLast }) => (
    <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-10 group">
        {/* Line */}
        {!isLast && (
            <div className="absolute top-0 left-[11px] md:left-auto md:right-[calc(50%-1px)] h-full w-[2px] bg-white/10 group-hover:bg-primary-500/50 transition-colors duration-300" />
        )}

        {/* Dot */}
        <div className="absolute top-0 left-0 md:left-auto md:right-[calc(50%-12px)] w-6 h-6 rounded-full bg-dark-card border-2 border-primary-500 z-10 group-hover:scale-110 transition-transform duration-300" />

        {/* Date (Left Side on Desktop) */}
        <div className="md:col-span-1 md:text-right mb-2 md:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-sm text-primary-300 border border-white/5">
                <Calendar className="w-3 h-3" />
                {date}
            </div>
        </div>

        {/* Content (Right Side on Desktop) */}
        <div className="md:col-span-1 pb-12">
            <div className="flex items-center gap-2 mb-2">
                {type === 'work' ? <Briefcase className="w-5 h-5 text-primary-400" /> : <GraduationCap className="w-5 h-5 text-indigo-400" />}
                <h3 className="text-xl font-bold text-white font-heading">{title}</h3>
            </div>
            <h4 className="text-lg text-gray-300 mb-3">{organization}</h4>

            {description && description.length > 0 && (
                <ul className="space-y-2 mb-4">
                    {description.map((item, idx) => (
                        <li key={idx} className="text-gray-400 text-sm pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary-500">
                            {item}
                        </li>
                    ))}
                </ul>
            )}

            {technologies && technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                    {technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="px-2.5 py-0.5 text-xs font-medium bg-white/5 text-gray-300 rounded-md border border-white/10 group-hover:border-primary-500/30 group-hover:text-primary-300 transition-colors duration-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            )}
        </div>
    </div>
);

const Experience = () => {
    const items = [
        {
            type: 'work',
            title: 'Asesor en Desarrollo de APIs',
            organization: 'Ccapac Sistemas',
            date: '2026 – Presente',
            description: [
                'Asesoramiento técnico y consultoría en arquitectura, diseño y desarrollo de APIs y microservicios.',
                'Optimización de servicios backend y aseguramiento de buenas prácticas de integración.'
            ],
            technologies: ['PHP', 'Angular', 'API REST', 'Microservicios']
        },
        {
            type: 'education',
            title: 'Ing. de Sistemas Computacionales',
            organization: 'Universidad Privada del Norte (UPN)',
            date: '2026 – Presente',
            description: [
                'Actualmente cursando la carrera profesional universitaria.'
            ],
            technologies: ['Ingeniería de Software', 'Arquitectura de Sistemas', 'Estructuras de Datos', 'Gestión de TI']
        },
        {
            type: 'work',
            title: 'Analista de Datos',
            organization: 'Toulouse Lautrec — Lima, Perú',
            date: 'Octubre 2024 – Junio 2025',
            description: [
                'Limpieza, transformación y análisis de grandes conjuntos de datos con Python y SQL.',
                'Desarrollo de informes y dashboards interactivos en Power BI y Tableau.',
                'Automatización de procesos repetitivos mediante scripts en Python.'
            ],
            technologies: ['Python', 'SQL', 'Power BI', 'Tableau', 'Automatización de Procesos']
        },
        {
            type: 'education',
            title: 'Ciencia de Datos aplicada a la Logística — Specialty',
            organization: 'Ingenium',
            date: '2025',
            description: [
                'Especialización en análisis predictivo, optimización de cadena de suministro y toma de decisiones basada en datos.'
            ],
            technologies: ['Python', 'Machine Learning', 'Optimización Logística', 'Power BI', 'Modelado de Datos']
        },
        {
            type: 'education',
            title: 'Data Science y Machine Learning — Specialty',
            organization: 'Toulouse Lautrec',
            date: '2024 – 2025',
            description: [
                'Especialización enfocada en modelos supervisados y no supervisados, pipelines de preprocesamiento y despliegue.'
            ],
            technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'MLOps', 'Deep Learning']
        },
        {
            type: 'education',
            title: 'Técnico en Desarrollo de Sistemas de Información',
            organization: 'Instituto Sabio Nacional Antúnez de Mayolo',
            date: '2022 – 2025',
            description: [
                'Estudios culminados (Egresado). Formación integral en desarrollo de software y gestión de bases de datos.'
            ],
            technologies: ['Java', 'SQL / MySQL', 'Python', 'Desarrollo Web', 'POO', 'Modelamiento de BD']
        }
    ];

    return (
        <section id="experience" className="py-20 bg-dark-bg/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Trayectoria <span className="text-primary-400">Profesional</span>
                    </h2>
                    <p className="text-gray-500">Mi camino en la educación y el trabajo</p>
                </motion.div>

                <div className="mt-12">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <TimelineItem {...item} isLast={index === items.length - 1} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
