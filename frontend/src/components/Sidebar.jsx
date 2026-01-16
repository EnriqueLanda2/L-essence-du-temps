import { X, Home, Watch, Droplet } from 'lucide-react';
import { useEffect } from 'react';

export function Sidebar({ isOpen, onClose, currentView, onNavigate }) {
  const menuItems = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'relojes', label: 'Relojes', icon: Watch },
    { id: 'perfumes', label: 'Perfumes', icon: Droplet }
  ];

  const handleNavigate = (view) => {
    onNavigate(view);
    onClose();
  };

  // Prevenir scroll del body cuando el sidebar está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full w-[280px] sm:w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Menú de navegación"
      >
        <div className="flex flex-col h-full">
          <div className="p-4 sm:p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight font-playfair">
                L'essence du temps
              </h2>
              <button 
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={onClose}
                aria-label="Cerrar menú"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
          
          <nav className="flex-1 p-4 sm:p-6 overflow-y-auto">
            <div className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 rounded-lg ${
                      isActive
                        ? 'bg-black text-white shadow-md' 
                        : 'hover:bg-gray-100 text-gray-900'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium tracking-wide">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>
          
          <div className="p-4 sm:p-6 border-t border-gray-200">
            <p className="text-xs sm:text-sm text-gray-500 text-center">
              © 2026 L'essence du temps
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
