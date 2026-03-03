import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, BarChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-dark-bg/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all"
        >
            {/* Glossy gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Header / Banner */}
            <div className={`h-40 bg-gradient-to-tr ${course.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="bg-dark-bg/80 backdrop-blur-md p-2 rounded-lg border border-white/10">
                        <course.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-dark-bg/80 backdrop-blur-md text-xs font-medium text-white rounded-full border border-white/10">
                        {course.level}
                    </span>
                </div>
            </div>

            {/* Content block */}
            <div className="p-6">
                <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {course.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                    {course.description}
                </p>

                {/* Details grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-300 text-sm">
                        <Clock className="w-4 h-4 mr-2 text-primary-400" />
                        {course.duration}
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                        <BookOpen className="w-4 h-4 mr-2 text-primary-400" />
                        {course.modules} Módulos
                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {course.tags.map((tag, i) => (
                        <span key={i} className="text-xs text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded-md border border-indigo-500/20">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Footer Action */}
                <Link
                    to={`/cursos/${course.slug}`}
                    className="flex justify-between items-center w-full px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group/btn"
                >
                    <span className="text-sm font-semibold text-white">Ver Temario</span>
                    <ArrowRight className="w-4 h-4 text-primary-400 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
};

export default CourseCard;
