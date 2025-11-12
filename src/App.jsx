import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Translation from '@/components/Translaitor';
import { Toaster } from '@/components/ui/toaster';
import AuthPage from '@/pages/AuthPage';
import SupportPage from '@/pages/SupportPage';
import Resumen from "@/components/Resumen";
import LegalNoticePage from "@/components/Legal/LegalNoticePage";
import PrivacyPolicyPage from "@/components/Legal/PrivacyPolicyPage";
import TermsConditionsPage from "@/components/Legal/TermsConditionsPage";
import CookiesPolicyPage from "@/components/Legal/CookiesPolicyPage";
import UseAIPage from "@/components/Legal/UseAIPage";
import PricingPage from "@/pages/PricingPage";


function App() {
    const location = useLocation();
    const showHeader = location.pathname !== '/iniciar-sesion';

    return (
        <>
            <Helmet>
                <title>Meditation.AI - Tu Compañero de Meditación con IA</title>
                <meta name="description" content="Descubre la meditación personalizada con inteligencia artificial. Meditation.AI te ayuda a encontrar la paz interior con sesiones adaptadas a tus necesidades." />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Quicksand:wght@700&display=swap" rel="stylesheet" />
            </Helmet>
            
            <div className="bg-white text-slate-900">
                {showHeader && <Header />}
                <main>
                    <Routes>
                        <Route path="/" element={<Hero />} />
                        <Route path="/iniciar-sesion" element={<AuthPage />} />
                        <Route path="/soporte" element={<SupportPage />} />
                        <Route path="/resumen" element={<Resumen />} />
                        <Route path="/aviso-legal" element={<LegalNoticePage />} />
                        <Route path="/politica-de-privacidad" element={<PrivacyPolicyPage />} />
                        <Route path="/terminos-condiciones" element={<TermsConditionsPage />} />
                        <Route path="/cookies" element={<CookiesPolicyPage />} />
                        <Route path="/uso-de-ia" element={<UseAIPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                       
                    </Routes>
                </main>
                <Toaster />
            </div>
        </>
    );
}

export default App;