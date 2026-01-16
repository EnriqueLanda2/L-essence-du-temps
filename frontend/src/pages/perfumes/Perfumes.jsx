import { ProductCard } from '../../components/ProductCard';
import { products } from '../../types/types';

export function Perfumes({ searchQuery, onProductClick }) {
  // Filtrar perfumes y aplicar búsqueda
  const perfumes = products.filter(p => {
    const isPerfume = p.category === 'perfumes';
    if (!searchQuery) return isPerfume;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return isPerfume && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[50vh] bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1719175936556-dbd05e415913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc2Nzg0MDg2N3ww&ixlib=rb-4.1.0&q=80&w=1080)',
            opacity: 0.4
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight font-playfair">
              Perfumes Exclusivos
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-white/90 font-light tracking-wide">
              Fragancias únicas para cada ocasión
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4 text-center tracking-tight font-playfair">
            Nuestra Colección de Perfumes
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Descubre fragancias de lujo que definen tu personalidad
          </p>
        </div>

        {perfumes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {perfumes.map(product => (
              <ProductCard key={product.id} {...product} onProductClick={onProductClick} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <p className="text-gray-500 text-base sm:text-lg px-4">
              {searchQuery 
                ? `No se encontraron perfumes que coincidan con "${searchQuery}"` 
                : 'No hay perfumes disponibles en este momento.'}
            </p>
          </div>
        )}
      </section>

      {/* Info Section */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 font-playfair">Fragancias Auténticas</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Todos nuestros perfumes son 100% originales, importados directamente de las casas de lujo.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 font-playfair">Larga Duración</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Eau de Parfum de alta concentración para una fragancia que perdura todo el día.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 font-playfair">Presentación de Lujo</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Cada perfume viene en su empaque original con certificado de autenticidad.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
