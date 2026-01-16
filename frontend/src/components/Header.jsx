import { Search, Heart, Menu } from 'lucide-react';

export function Header({ onMenuClick, searchQuery, onSearchChange }) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button 
              className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={onMenuClick}
              aria-label="Abrir menú"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-black tracking-tight font-playfair">
              L'essence du temps
            </h1>
          </div>
          
          <div className="hidden md:flex flex-1 max-w-2xl">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar relojes, perfumes..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-black bg-white"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <button 
              className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Favoritos"
            >
              <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
        
        <div className="md:hidden mt-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar relojes, perfumes..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-black bg-white text-sm"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
