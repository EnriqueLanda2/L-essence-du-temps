import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { Inicio } from './pages/inicio/Inicio';
import { Perfumes } from './pages/perfumes/Perfumes';
import { Relojes } from './pages/relojes/Relojes';
import { DetalleProducto } from './pages/detalle/DetalleProducto';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('inicio');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleNavigate = (view, productId = null) => {
    setCurrentView(view);
    setSelectedProductId(productId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentView) {
      case 'inicio':
        return <Inicio searchQuery={searchQuery} onProductClick={(id) => handleNavigate('detalle', id)} />;
      case 'perfumes':
        return <Perfumes searchQuery={searchQuery} onProductClick={(id) => handleNavigate('detalle', id)} />;
      case 'relojes':
        return <Relojes searchQuery={searchQuery} onProductClick={(id) => handleNavigate('detalle', id)} />;
      case 'detalle':
        return <DetalleProducto productId={selectedProductId} onBack={() => handleNavigate('inicio')} />;
      default:
        return <Inicio searchQuery={searchQuery} onProductClick={(id) => handleNavigate('detalle', id)} />;
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        currentView={currentView}
        onNavigate={handleNavigate}
      />
      
      <div className="relative z-0">
        <Header 
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        
        <main className="relative">
          {renderPage()}
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
