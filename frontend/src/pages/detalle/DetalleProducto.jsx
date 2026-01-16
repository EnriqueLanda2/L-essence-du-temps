import { ArrowLeft, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../../types/types';
import Slider from 'react-slick';
import { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function DetalleProducto({ productId, onBack }) {
  const sliderRef = useRef(null);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
          <button 
            onClick={onBack}
            className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  // Crear array de imágenes (en este caso solo tenemos una, pero se puede expandir)
  const images = [product.image, product.image, product.image];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Sin autoplay para control manual
    arrows: false,
    customPaging: (i) => (
      <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-black transition-colors cursor-pointer mt-4" />
    ),
    dotsClass: "slick-dots !flex justify-center gap-2"
  };

  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100) 
    : product.price;

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb / Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm sm:text-base">Volver</span>
        </button>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Image Carousel */}
          <div className="relative">
            <Slider ref={sliderRef} {...sliderSettings}>
              {images.map((img, index) => (
                <div key={index} className="outline-none">
                  <img 
                    src={img} 
                    alt={`${product.name} - imagen ${index + 1}`}
                    className="w-full h-[350px] sm:h-[450px] lg:h-[600px] object-cover"
                  />
                </div>
              ))}
            </Slider>
            
            {/* Custom Navigation Arrows */}
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4 font-playfair">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${i < Math.floor(product.rating) ? 'fill-black text-black' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm sm:text-base text-gray-600">({product.reviews} reseñas)</span>
            </div>

            {/* Price */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-baseline gap-3 sm:gap-4 mb-2 flex-wrap">
                {product.discount ? (
                  <>
                    <span className="text-3xl sm:text-4xl font-bold text-black">
                      ${discountedPrice.toFixed(2)}
                    </span>
                    <span className="text-xl sm:text-2xl text-gray-400 line-through">
                      ${product.price.toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span className="text-3xl sm:text-4xl font-bold text-black">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>
              {product.discount && (
                <div className="inline-block bg-black text-white px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold">
                  AHORRA {product.discount}% - ${(product.price - discountedPrice).toFixed(2)} DE DESCUENTO
                </div>
              )}
            </div>

            {/* Stock Status */}
            <div className="mb-6 sm:mb-8">
              <div className={`flex items-center gap-2 text-base sm:text-lg font-semibold ${
                product.inStock ? 'text-green-600' : 'text-red-600'
              }`}>
                <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
                  product.inStock ? 'bg-green-600' : 'bg-red-600'
                }`}></div>
                <span>{product.inStock ? 'En Stock - Envío Inmediato' : 'Agotado'}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Descripción</h3>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gray-50 border border-gray-200">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Características</h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>Autenticidad 100% garantizada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>Envío gratis en compras superiores a $100</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>Garantía del fabricante incluida</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>Empaque premium de lujo</span>
                </li>
              </ul>
            </div>

            {/* Add to Cart Button */}
            <button
              className={`w-full py-4 sm:py-6 text-white text-base sm:text-lg font-semibold tracking-wider transition-colors ${
                product.inStock
                  ? 'bg-black hover:bg-gray-800'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
              disabled={!product.inStock}
            >
              {product.inStock ? 'AGREGAR AL CARRITO' : 'NO DISPONIBLE'}
            </button>

            {/* Additional Info */}
            <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-4 text-center text-xs sm:text-sm">
              <div className="p-2 sm:p-4 border border-gray-200">
                <div className="font-bold mb-1">ENVÍO GRATIS</div>
                <div className="text-gray-600 text-xs sm:text-sm">Compras +$100</div>
              </div>
              <div className="p-2 sm:p-4 border border-gray-200">
                <div className="font-bold mb-1">GARANTÍA</div>
                <div className="text-gray-600 text-xs sm:text-sm">100% Original</div>
              </div>
              <div className="p-2 sm:p-4 border border-gray-200">
                <div className="font-bold mb-1">DEVOLUCIÓN</div>
                <div className="text-gray-600 text-xs sm:text-sm">30 días</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section (opcional) */}
      <div className="bg-gray-50 py-12 sm:py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8 font-playfair">
            También te puede interesar
          </h2>
          <div className="text-gray-600">
            (Aquí se pueden mostrar productos relacionados)
          </div>
        </div>
      </div>
    </div>
  );
}
