import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';

// Lazy loading for heavy pages
const Courses = lazy(() => import('./pages/Courses'));
const CourseDetail = lazy(() => import('./pages/CourseDetail'));
const CourseViewer = lazy(() => import('./pages/CourseViewer'));

// ScrollToTop component to ensure scroll rests at top when navigating to new route
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

// Loading component for Suspense
const PageLoader = () => (
    <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
);

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Layout>
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cursos" element={<Courses />} />
                        <Route path="/cursos/:slug" element={<CourseDetail />} />
                        <Route path="/cursos/:slug/clases/:lessonId" element={<CourseViewer />} />
                    </Routes>
                </Suspense>
            </Layout>
        </Router>
    );
}

export default App;
