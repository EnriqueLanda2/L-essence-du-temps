import { ProductCard } from '../../components/ProductCard';
import { products } from '../../types/types';

export function Relojes({ searchQuery, onProductClick }) {
  // Filtrar relojes y aplicar búsqueda
  const relojes = products.filter(p => {
    const isReloj = p.category === 'relojes';
    if (!searchQuery) return isReloj;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return isReloj && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1766518303334-aaa928ceed45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMGNocm9ub2dyYXBofGVufDF8fHx8MTc2NzkxMzAyN3ww&ixlib=rb-4.1.0&q=80&w=1080)',
            opacity: 0.4
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-playfair">
              Relojes de Lujo
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide">
              Precisión suiza y diseño atemporal
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center tracking-tight font-playfair">
            Nuestra Colección de Relojes
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Relojes de alta relojería con movimientos suizos y diseños excepcionales
          </p>
        </div>

        {relojes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relojes.map(product => (
              <ProductCard key={product.id} {...product} onProductClick={onProductClick} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              {searchQuery 
                ? `No se encontraron relojes que coincidan con "${searchQuery}"` 
                : 'No hay relojes disponibles en este momento.'}
            </p>
          </div>
        )}
      </section>

      {/* Info Section */}
      <section className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black mb-4 font-playfair">Movimientos Suizos</h3>
              <p className="text-gray-600">
                Calibres automáticos y de cuarzo de la más alta precisión y calidad.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black mb-4 font-playfair">Materiales Premium</h3>
              <p className="text-gray-600">
                Acero inoxidable 316L, oro, cristal de zafiro y correas de piel italiana.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black mb-4 font-playfair">Garantía Internacional</h3>
              <p className="text-gray-600">
                Todos nuestros relojes incluyen garantía del fabricante y certificado de autenticidad.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
