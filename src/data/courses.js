import { Database, BarChart3, Terminal, Layout } from 'lucide-react';

export const coursesData = {
    'sql-desde-cero': {
        slug: 'sql-desde-cero',
        title: 'SQL: De Cero a Profesional',
        description: 'Aprende a consultar, diseñar y optimizar bases de datos relacionales desde cero. En este curso totalmente práctico, te sumergirás en la estructura de una base de datos real, aprendiendo a escribir consultas eficientes que te permitan extraer insights clave. No importa si eres principiante o si buscas pulir tus habilidades, este programa cubre todo lo que necesitas para tu rol en tecnología.',
        level: 'Principiante a Intermedio',
        duration: '4 Semanas (32 horas estimadas)',
        students: '1.2k+',
        rating: 4.8,
        modules: 4,
        tags: ['SQL Server', 'PostgreSQL', 'Modelado ER'],
        icon: Database,
        brandLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
        color: 'from-blue-600 to-cyan-500',
        thumbnail: '/images/courses/sql_bg.png',
        introVideoUrl: '',
        features: [
            'Acceso de por vida a las actualizaciones',
            'Scripts y diagramas listos para descargar',
            'Certificado de finalización',
            'Ejercicios basados en casos de uso de empresas reales'
        ],
        syllabus: [
            {
                title: 'Módulo 1: Fundamentos Relacionales',
                lessons: [
                    { id: '01-que-es-base-de-datos', title: '¿Qué es una base de datos?' },
                    { id: '02-modelo-entidad-relacion', title: 'Modelo Entidad-Relación' },
                    { id: '03-instalacion-entorno', title: 'Instalación de entorno (Postgres/SQL Server)' }
                ]
            },
            {
                title: 'Módulo 2: DQL - Consultas Básicas',
                lessons: [
                    { id: '04-select-from-where', title: 'SELECT, FROM, WHERE' },
                    { id: '05-operadores-logicos', title: 'Operadores Lógicos y Aritméticos' },
                    { id: '06-manejo-nulos', title: 'Manejo de Nulos (NULL)' }
                ]
            },
            {
                title: 'Módulo 3: Agrupación y Funciones',
                lessons: [
                    { id: '07-funciones-agregacion', title: 'Funciones de Agregación (SUM, AVG, MAX, MIN)' },
                    { id: '08-group-by-having', title: 'GROUP BY y HAVING' },
                    { id: '09-funciones-cadena-fecha', title: 'Funciones de Cadena y Fecha' }
                ]
            },
            {
                title: 'Módulo 4: JOINs y Subconsultas',
                lessons: [
                    { id: '10-tipos-de-joins', title: 'Inner Join, Left Join, Right Join' },
                    { id: '11-subconsultas', title: 'Subconsultas escalares y correlacionadas' },
                    { id: '12-cte', title: 'Common Table Expressions (CTEs)' }
                ]
            },
        ]
    },
    'analisis-de-datos': {
        slug: 'analisis-de-datos',
        title: 'Power BI: Análisis de Datos Pro',
        description: 'Transforma datos crudos en historias visuales y decisiones estratégicas. Empezaremos dominando la importación y limpieza de datos con Power Query, avanzaremos hacia el modelado experto con DAX y finalizaremos creando Dashboards impactantes. Un recorrido técnico indispensable para estructurar la forma en que ves el negocio a través de métricas.',
        level: 'De Cero a Intermedio',
        duration: '6 Semanas (45 horas estimadas)',
        students: '850+',
        rating: 4.9,
        modules: 4,
        tags: ['Excel Avanzado', 'Power BI / Tableau', 'Data Storytelling'],
        icon: BarChart3,
        brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
        color: 'from-emerald-600 to-teal-400',
        thumbnail: '/images/courses/bi_bg.png',
        features: [
            'Plantillas de Excel y Dashboards iniciales',
            'Flujos de ETL (Extract, Transform, Load)',
            'Certificado de finalización',
            'Casos de estudio financieros, marketing y ventas'
        ],
        syllabus: [
            {
                title: 'Módulo 1: Introducción y Power Query',
                lessons: [
                    { id: 'bi-01-intro', title: 'Power BI Desktop: Interfaz y Carga de Datos' },
                    { id: 'bi-02-transformacion', title: 'ETL: Limpieza Básica en Power Query' },
                    { id: 'bi-03-merge-append', title: 'Unir (Merge) y Anexar (Append) Consultas' }
                ]
            },
            {
                title: 'Módulo 2: Modelado Dimensional',
                lessons: [
                    { id: 'bi-04-hechos-dimensiones', title: 'Tablas de hechos vs Tablas de dimensiones' },
                    { id: 'bi-05-esquemas', title: 'Esquema Estrella y Copo de Nieve' },
                    { id: 'bi-06-calidad-datos', title: 'Calidad de Datos' }
                ]
            },
            {
                title: 'Módulo 3: Introducción a DAX',
                lessons: [
                    { id: 'dax-07-columnas-medidas', title: 'Columnas calculadas vs Medidas' },
                    { id: 'dax-08-time-intelligence', title: 'Funciones Time Intelligence' },
                    { id: 'dax-09-contextos', title: 'Filtros y contexto de evaluación' }
                ]
            },
            {
                title: 'Módulo 4: Visualización y Storytelling',
                lessons: [
                    { id: 'viz-10-principios-diseno', title: 'Principios de diseño de Dashboards' },
                    { id: 'viz-11-eleccion-graficos', title: 'Elección correcta del gráfico' },
                    { id: 'viz-12-publicacion', title: 'Publicación y compartición de reportes' }
                ]
            },
        ]
    },
    'python-para-datos': {
        slug: 'python-para-datos',
        title: 'Python para Análisis de Datos',
        description: 'Domina el lenguaje de programación estrella en la industria. Desde las bases de la programación hasta el manejo experto de librerías como Pandas, NumPy y Matplotlib para la limpieza, exploración y visualización avanzada de grandes volúmenes de datos.',
        level: 'Intermedio a Avanzado',
        duration: '8 Semanas (60 horas estimadas)',
        students: '430+',
        rating: 4.9,
        modules: 4,
        tags: ['Python', 'Pandas & NumPy', 'Visualización'],
        icon: Terminal,
        brandLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
        color: 'from-amber-500 to-orange-400',
        thumbnail: '/images/courses/python_bg.png',
        introVideoUrl: '',
        features: [
            'Proyectos guiados de análisis reales',
            'Archivos Jupyter Notebook (.ipynb) descargables',
            'Certificado de finalización',
            'Preparación para Machine Learning'
        ],
        syllabus: [
            {
                title: 'Módulo 1: Fundamentos de Python',
                lessons: [
                    { id: 'py-01-intro', title: 'Sintaxis básica y Variables' },
                    { id: 'py-02-estructuras', title: 'Estructuras de datos (Listas, Tuplas, Diccionarios)' },
                    { id: 'py-03-control', title: 'Ciclos y Flujo de Control (if, for, while)' }
                ]
            },
            {
                title: 'Módulo 2: Manipulación con Pandas',
                lessons: [
                    { id: 'py-04-intro-pandas', title: 'Series y DataFrames' },
                    { id: 'py-05-limpieza', title: 'Técnicas de limpieza y valores nulos' },
                    { id: 'py-06-transformacion', title: 'Filtros y transformaciones avanzadas' }
                ]
            },
            {
                title: 'Módulo 3: Análisis Exploratorio (EDA)',
                lessons: [
                    { id: 'py-07-agrupaciones', title: 'Agrupaciones y Tablas Dinámicas en código' },
                    { id: 'py-08-estadistica', title: 'Estadística descriptiva aplicada' },
                    { id: 'py-09-fechas', title: 'Análisis de series de tiempo' }
                ]
            },
            {
                title: 'Módulo 4: Visualización de Datos',
                lessons: [
                    { id: 'py-10-matplotlib', title: 'Gráficos base con Matplotlib' },
                    { id: 'py-11-seaborn', title: 'Data Storytelling con Seaborn' },
                    { id: 'py-12-proyecto', title: 'Proyecto Final' }
                ]
            },
        ]
    },
    'presentaciones-web': {
        slug: 'presentaciones-web',
        title: 'Presentaciones Web: Visualización de Datos',
        description: 'Lleva tus análisis al siguiente nivel aprendiendo a crear dashboards interactivos y presentaciones impactantes directamente en el navegador. En este curso aprenderás a integrar gráficos de Python y Power BI en entornos web, dominando librerías modernas de visualización y principios de diseño UX para datos.',
        level: 'Intermedio',
        duration: '4 Semanas (30 horas estimadas)',
        students: 'NEW',
        rating: 5.0,
        modules: 4,
        tags: ['HTML/CSS', 'JavaScript', 'D3.js', 'Dashboards'],
        icon: Layout,
        brandLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        color: 'from-indigo-600 to-purple-500',
        thumbnail: '/images/courses/web_bg.png',
        introVideoUrl: '',
        features: [
            'Creación de dashboards interactivos',
            'Integración con Python y Power BI',
            'Certificado de finalización',
            'Acceso a plantillas de diseño exclusivas'
        ],
        syllabus: [
            {
                title: 'Módulo 1: Fundamentos de Visualización Web',
                lessons: [
                    { id: '01-introduccion-web', title: 'Anatomía de una visualización web' },
                    { id: '02-svg-canvas', title: 'SVG vs Canvas: ¿Cuándo usar cada uno?' },
                    { id: '03-diseno-responsivo', title: 'Diseño responsivo para gráficos' }
                ]
            },
            {
                title: 'Módulo 2: Librerías de Visualización (JS)',
                lessons: [
                    { id: '04-chartjs-basico', title: 'Gráficos rápidos con Chart.js' },
                    { id: '05-plotly-interactivo', title: 'Interactividad avanzada con Plotly.js' },
                    { id: '06-intro-d3js', title: 'Introducción a D3.js' }
                ]
            },
            {
                title: 'Módulo 3: Integración Python & BI',
                lessons: [
                    { id: '07-streamlit-apps', title: 'Web apps rápidas con Streamlit' },
                    { id: '08-powerbi-embedded', title: 'Introducción a Power BI Embedded' },
                    { id: '09-apis-json', title: 'Consumiendo datos desde APIs (JSON)' }
                ]
            },
            {
                title: 'Módulo 4: Despliegue y UX',
                lessons: [
                    { id: '10-optimizacion-rendimiento', title: 'Optimización de carga de datos' },
                    { id: '11-storytelling-web', title: 'Scrolltelling: Narrativa guiada por datos' },
                    { id: '12-despliegue-final', title: 'Despliegue de tu portafolio' }
                ]
            },
        ]
    }
};

export const getAllCourses = () => Object.values(coursesData);
export const getCourseBySlug = (slug) => coursesData[slug] || null;
