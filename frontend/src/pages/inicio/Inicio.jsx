import { ProductCard } from '../../components/ProductCard';
import { TrustBanner } from '../../components/TrustBanner';
import { products, carouselSlides, reviews } from '../../types/types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Inicio({ searchQuery, onProductClick }) {
  // Filtrar productos por búsqueda
  const filteredProducts = searchQuery
    ? products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false,
    pauseOnHover: false
  };

  return (
    <div>
      {/* Hero Carousel Section */}
      <section className="relative h-[70vh] md:h-[80vh] bg-black">
        <Slider {...sliderSettings} className="h-full">
          {carouselSlides.map((slide, index) => (
            <div key={index} className="h-[70vh] md:h-[80vh] relative">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  opacity: 0.5
                }}
              />
              <div className="relative h-full flex items-center justify-center text-center px-6">
                <div className="max-w-4xl">
                  <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-3xl text-white/90 font-light tracking-wide">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <TrustBanner />

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center tracking-tight font-playfair">
            Colección Premium
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de relojes y perfumes de las mejores marcas
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} {...product} onProductClick={onProductClick} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No se encontraron productos que coincidan con "{searchQuery}"</p>
          </div>
        )}
      </section>

      {/* Reviews Section */}
      <section className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center tracking-tight font-playfair">
            Opiniones de Clientes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-none p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-black text-black" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{review.comment}"
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <span className="font-semibold text-black tracking-wide">{review.name}</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
