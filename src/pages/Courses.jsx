import React from 'react';
import { motion } from 'framer-motion';
import { Database, BarChart3 } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { getAllCourses } from '../data/courses';

const Courses = () => {
    const catalog = getAllCourses();

    return (
        <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[80vh]">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                    Catálogo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-500">Cursos</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Impulsa tu carrera tecnológica dominando las herramientas fundamentales para el manejo y análisis de la información.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {catalog.map((course) => (
                    <CourseCard key={course.slug} course={course} />
                ))}
            </div>
        </div>
    );
};

export default Courses;
