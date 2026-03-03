import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Star, Clock, BookOpen, MonitorPlay, Users } from 'lucide-react';

import { getCourseBySlug } from '../data/courses';

const CourseDetail = () => {
    const { slug } = useParams();
    const course = getCourseBySlug(slug);

    if (!course) {
        return (
            <div className="pt-32 pb-20 text-center min-h-[70vh]">
                <h2 className="text-3xl font-heading text-white mb-4">Curso no encontrado</h2>
                <Link to="/cursos" className="text-primary-400 hover:text-primary-300 transition-colors">
                    ← Volver al catálogo
                </Link>
            </div>
        );
    }

    const firstLessonId = course.syllabus[0]?.lessons[0]?.id;
    const startCourseLink = firstLessonId ? `/cursos/${slug}/clases/${firstLessonId}` : '#';

    return (
        <div className="pt-24 pb-20 min-h-screen">
            {/* Header section with gradient */}
            <div className={`relative bg-gradient-to-br ${course.color} py-20 px-4 sm:px-6 lg:px-8 mb-16`}>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                <div className="relative max-w-7xl mx-auto z-10">
                    <Link to="/cursos" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Volver a Cursos
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium mb-6">
                                Nivel: {course.level}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                                {course.title}
                            </h1>
                            <p className="text-blue-50 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
                                {course.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-6 text-white/90">
                                <div className="flex items-center">
                                    <Star className="w-5 h-5 text-yellow-400 mr-2 fill-yellow-400" />
                                    <span className="font-semibold">{course.rating}</span>
                                </div>
                                <div className="flex items-center">
                                    <Users className="w-5 h-5 mr-2" />
                                    <span>{course.students} estudiantes</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-5 h-5 mr-2" />
                                    <span>{course.duration}</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick action card floating on the right */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-dark-card border border-white/10 rounded-2xl p-8 shadow-2xl relative lg:mt-24"
                        >
                            {course.introVideoUrl ? (
                                <div className="aspect-video bg-dark-bg rounded-xl mb-6 flex items-center justify-center border border-white/5 relative overflow-hidden group cursor-pointer shadow-lg">
                                    <iframe
                                        className="absolute inset-0 w-full h-full object-cover z-20"
                                        src={course.introVideoUrl}
                                        title="Course Intro Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ) : (
                                <div className="aspect-video bg-dark-bg rounded-xl mb-6 flex items-center justify-center border border-white/5 relative overflow-hidden group cursor-pointer">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent" />
                                    <MonitorPlay className="w-16 h-16 text-primary-400 group-hover:scale-110 transition-transform" />
                                </div>
                            )}

                            <Link
                                to={startCourseLink}
                                className="block text-center w-full bg-primary-600 hover:bg-primary-500 text-white font-bold py-4 px-6 rounded-xl transition-colors mb-4 text-lg"
                            >
                                Iniciar Curso Gratis
                            </Link>
                            <p className="text-center text-sm text-gray-400">
                                Únete ahora y accede al primer módulo.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Content section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left col: Syllabus */}
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold font-heading text-white mb-8 border-b border-white/10 pb-4">
                            Temario del Curso
                        </h3>
                        <div className="space-y-6">
                            {course.syllabus.map((module, mIndex) => (
                                <div key={mIndex} className="bg-white/5 border border-white/5 rounded-xl p-6">
                                    <h4 className="text-xl font-bold text-primary-400 mb-4 flex items-center">
                                        <BookOpen className="w-5 h-5 mr-3" />
                                        {module.title}
                                    </h4>
                                    <ul className="space-y-3">
                                        {module.lessons.map((lesson, lIndex) => (
                                            <li key={lIndex} className="flex items-start text-gray-300">
                                                <MonitorPlay className="w-4 h-4 mr-3 mt-1 text-gray-500" />
                                                <Link to={`/cursos/${slug}/clases/${lesson.id}`} className="hover:text-primary-400 transition-colors">
                                                    {lesson.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right col: Features */}
                    <div className="lg:col-span-1">
                        <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8 sticky top-24">
                            <h3 className="text-xl font-bold font-heading text-white mb-6">
                                Lo que incluye
                            </h3>
                            <ul className="space-y-4">
                                {course.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-400 flex-shrink-0" />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default CourseDetail;
