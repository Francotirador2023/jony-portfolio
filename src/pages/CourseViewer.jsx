import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ChevronLeft, ChevronRight, Menu, X, BookOpen, CheckCircle, Play, Terminal, Loader2 } from 'lucide-react';
import { getCourseBySlug } from '../data/courses';
import { useSqlJs } from '../hooks/useSqlJs';
import { usePyodide } from '../hooks/usePyodide';

const CodeBlockRenderer = ({ match, children, props, executeSql, isSqlReady, executePython, isPythonReady }) => {
    const [isRunning, setIsRunning] = useState(false);
    const [output, setOutput] = useState(null);

    const isSql = match[1] === 'sql';
    const isPython = match[1] === 'python';
    const isEngineReady = isSql ? isSqlReady : (isPython ? isPythonReady : true);

    const handleRun = async () => {
        setIsRunning(true);
        setOutput(null);

        try {
            const codeString = String(children).trim();
            let finalOutput = "";

            if (isSql) {
                finalOutput = executeSql(codeString);
            } else if (isPython) {
                finalOutput = await executePython(codeString);
            } else {
                // Hybrid Engine: Simulación para lenguajes cerrados (DAX, Excel, etc)
                await new Promise(resolve => setTimeout(resolve, 1100)); // Latencia virtual

                // Buscamos comentarios que indiquen salida (-- Resultado: \n -- Dato)
                const resultMatch = codeString.match(/(?:#|--|\/\/)\s*(?:Resultado|Salida|Imprime|Output):?\s*\n((?:(?:#|--|\/\/).*\n?)+)/i);

                if (resultMatch && resultMatch[1]) {
                    // Limpiamos los caracteres de comentario para la consola
                    finalOutput = resultMatch[1].replace(/^(?:#|--|\/\/)\s*/gm, '').trim();
                } else {
                    finalOutput = "✓ Ejecución simulada completada en memoria local.";
                }
            }

            setOutput(finalOutput || "✓ Ejecución completada (Sin salida).");
        } catch (err) {
            setOutput(`Error del Motor:\n${err.message || err}`);
        } finally {
            setIsRunning(false);
        }
    };

    return (
        <div className="rounded-xl overflow-hidden shadow-2xl my-8 bg-[#1e1e1e] border border-white/10 group">
            <div className="bg-[#2D2D2D] text-gray-400 text-xs px-4 py-2 border-b border-black/40 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <button
                        onClick={handleRun}
                        disabled={isRunning || !isEngineReady}
                        className={`flex items-center justify-center px-3 py-1.5 rounded-md transition-all font-semibold uppercase tracking-widest text-[10px] ${!isEngineReady ? 'bg-gray-600/20 text-gray-500 cursor-not-allowed' : isRunning ? 'bg-yellow-500/20 text-yellow-500' : 'bg-primary-500/20 text-primary-400 hover:bg-primary-500 hover:text-white cursor-pointer'}`}
                        title={!isEngineReady ? "Cargando motor de ejecución..." : "Ejecutar celda (Emulador Real)"}
                    >
                        {isRunning ? <div className="w-3 h-3 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin mr-2" /> : (!isEngineReady ? <Loader2 className="w-3 h-3 animate-spin mr-2" /> : <Play className="w-3 h-3 fill-current mr-2" />)}
                        {isRunning ? 'Run...' : (!isEngineReady ? 'Cargando Motor' : 'Run')}
                    </button>
                    <span className="font-mono font-medium">{isPython ? 'script.py' : (isSql ? 'query.sql' : 'code.txt')}</span>
                </div>
                <span className="uppercase tracking-wider opacity-50 font-semibold">{match[1]}</span>
            </div>

            <SyntaxHighlighter
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
                customStyle={{ margin: 0, borderRadius: 0, padding: '1.5rem', background: '#1e1e1e' }}
                {...props}
            >
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>

            {output && (
                <div className="border-t border-black/40 bg-[#0A0A0A] p-5 text-sm font-mono relative">
                    <div className="text-gray-500 space-x-2 mb-3 flex items-center text-xs uppercase tracking-widest font-bold">
                        <Terminal className="w-4 h-4" />
                        <span>Console Output</span>
                    </div>
                    <pre className={`whitespace-pre-wrap leading-relaxed overflow-x-auto ${output.includes('Error') ? 'text-red-400' : 'text-emerald-400'}`}>{output}</pre>
                </div>
            )}
        </div>
    );
};

const CourseViewer = () => {
    const { slug, lessonId } = useParams();
    const navigate = useNavigate();
    const course = getCourseBySlug(slug);

    // Initialize Execution Engines
    const { executeQuery: executeSql, isReady: isSqlReady } = useSqlJs();
    const { executePython, isReady: isPythonReady } = usePyodide();

    const [markdownData, setMarkdownData] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [loading, setLoading] = useState(true);

    // Verify course exists
    useEffect(() => {
        if (!course) {
            navigate('/cursos');
        }
    }, [course, navigate]);

    // Flatten all lessons into a simple array for prev/next navigation
    const flatLessons = course?.syllabus.flatMap(module => module.lessons) || [];

    const currentLessonIndex = flatLessons.findIndex(l => l.id === lessonId);
    const hasNext = currentLessonIndex < flatLessons.length - 1;
    const hasPrev = currentLessonIndex > 0;

    // Load actual markdown 
    // In Vite we can import raw files directly using the ?raw suffix 
    // or fetch from public/ but for this implementation we simulate an async fetch 
    // loading the markdown files dynamically.
    useEffect(() => {
        setLoading(true);
        // Dynamic import logic using Vite's path resolution
        const fetchMarkdown = async () => {
            try {
                // Vite specific dynamic import for raw text
                const modules = import.meta.glob('../data/lessons/**/*.md', { query: '?raw', import: 'default' });

                const targetPath = `../data/lessons/${slug}/${lessonId}.md`;

                if (modules[targetPath]) {
                    const text = await modules[targetPath]();
                    setMarkdownData(text);
                } else {
                    setMarkdownData(`# Lección Próximamente\nEl material de \`${lessonId}\` se está preparando y estará disponible muy pronto.`);
                }
            } catch (error) {
                setMarkdownData(`# Error al cargar lección\nNo se pudo encontrar el contenido solicitado.`);
            } finally {
                setLoading(false);
            }
        };

        if (slug && lessonId) {
            fetchMarkdown();
        }
    }, [slug, lessonId]);


    if (!course) return null;

    return (
        <div className="flex bg-dark-bg min-h-screen pt-16">

            {/* Mobile Sidebar Toggle */}
            <button
                className="lg:hidden fixed bottom-6 right-6 z-50 bg-primary-600 text-white p-4 rounded-full shadow-2xl"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Sidebar (Syllabus) */}
            <aside
                className={`fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] bg-dark-card border-r border-white/10 w-80 overflow-y-auto transform transition-transform duration-300 z-40 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
            >
                <div className="p-6">
                    <Link to={`/cursos/${slug}`} className="text-gray-400 hover:text-white flex items-center mb-8 text-sm transition-colors">
                        <ChevronLeft className="w-4 h-4 mr-1" /> Volver al curso
                    </Link>

                    <h2 className="font-heading font-bold text-white text-lg mb-6 line-clamp-2">
                        {course.title}
                    </h2>

                    <div className="space-y-6">
                        {course.syllabus.map((module, mIndex) => (
                            <div key={mIndex}>
                                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center">
                                    <BookOpen className="w-3 h-3 mr-2" />
                                    {module.title}
                                </h3>
                                <div className="space-y-1">
                                    {module.lessons.map(lesson => {
                                        const isActive = lesson.id === lessonId;
                                        return (
                                            <Link
                                                key={lesson.id}
                                                to={`/cursos/${slug}/clases/${lesson.id}`}
                                                className={`block px-3 py-2 text-sm rounded-lg transition-colors border-l-2 ${isActive ? 'bg-primary-500/10 text-primary-400 border-primary-500' : 'text-gray-400 hover:bg-white/5 border-transparent hover:text-white'}`}
                                            >
                                                {lesson.title}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 w-full lg:w-[calc(100%-20rem)] bg-dark-bg min-h-[calc(100vh-4rem)] pb-24">
                <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10">

                    {/* Content Renderer */}
                    {loading ? (
                        <div className="flex animate-pulse flex-col space-y-4 pt-12">
                            <div className="h-8 bg-white/5 rounded w-2/3"></div>
                            <div className="h-4 bg-white/5 rounded w-full"></div>
                            <div className="h-4 bg-white/5 rounded w-full"></div>
                            <div className="h-4 bg-white/5 rounded w-1/2"></div>
                            <div className="h-32 bg-white/5 rounded w-full mt-8"></div>
                        </div>
                    ) : (
                        <article className="prose prose-invert prose-lg max-w-none prose-pre:bg-[#1E1E1E] prose-pre:border prose-pre:border-white/10 prose-pre:border-b-0 prose-a:text-primary-400 hover:prose-a:text-primary-300">
                            <ReactMarkdown
                                components={{
                                    code({ node, inline, className, children, ...props }) {
                                        const match = /language-(\w+)/.exec(className || '')
                                        return !inline && match ? (
                                            <CodeBlockRenderer
                                                match={match}
                                                children={children}
                                                props={props}
                                                executeSql={executeSql}
                                                isSqlReady={isSqlReady}
                                                executePython={executePython}
                                                isPythonReady={isPythonReady}
                                            />
                                        ) : (
                                            <code className={`${className} bg-primary-500/20 text-primary-300 px-1.5 py-0.5 rounded text-sm`} {...props}>
                                                {children}
                                            </code>
                                        )
                                    },
                                    h1: ({ children }) => <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-8 border-b border-white/10 pb-6">{children}</h1>,
                                    h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mt-12 mb-6 flex items-center before:content-[''] before:w-2 before:h-8 before:bg-primary-500 before:mr-4 before:rounded-sm">{children}</h2>,
                                    blockquote: ({ children }) => <blockquote className="border-l-4 border-indigo-500 bg-indigo-500/10 px-6 py-4 rounded-r-xl italic my-8 text-gray-300 shadow-inner">{children}</blockquote>,
                                    img: ({ src, alt }) => (
                                        <figure className="my-10 flex flex-col items-center">
                                            <img
                                                src={src}
                                                alt={alt}
                                                className="rounded-xl border border-white/10 shadow-2xl shadow-black/50 w-full object-cover max-h-[500px]"
                                                loading="lazy"
                                            />
                                            {alt && <figcaption className="text-sm text-gray-500 mt-3 text-center italic">{alt}</figcaption>}
                                        </figure>
                                    )
                                }}
                            >
                                {markdownData}
                            </ReactMarkdown>
                        </article>
                    )}

                    {/* Pagination Footer */}
                    <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                        {hasPrev ? (
                            <Link
                                to={`/cursos/${slug}/clases/${flatLessons[currentLessonIndex - 1].id}`}
                                className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5 mr-2" /> Lección Anterior
                            </Link>
                        ) : <div></div>}

                        {hasNext ? (
                            <Link
                                to={`/cursos/${slug}/clases/${flatLessons[currentLessonIndex + 1].id}`}
                                className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-500 rounded-xl text-white font-medium transition-colors shadow-lg shadow-primary-500/20"
                            >
                                Siguiente Lección <ChevronRight className="w-5 h-5 ml-2" />
                            </Link>
                        ) : (
                            <div className="flex items-center text-emerald-400 bg-emerald-400/10 px-6 py-3 rounded-xl border border-emerald-400/20">
                                <CheckCircle className="w-5 h-5 mr-2" /> Finalizaste el curso
                            </div>
                        )}
                    </div>

                </div>
            </main>
        </div>
    );
};

export default CourseViewer;
