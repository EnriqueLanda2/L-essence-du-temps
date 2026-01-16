import { Star } from 'lucide-react';

export function ProductCard({ 
  id,
  name, 
  price, 
  image, 
  rating, 
  reviews, 
  discount,
  inStock,
  onProductClick
}) {
  const discountedPrice = discount ? price * (1 - discount / 100) : price;

  return (
    <div className="bg-white rounded-none shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group flex flex-col h-full">
      <div className="relative overflow-hidden bg-white">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 sm:h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {discount && (
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-black hover:bg-gray-800 text-white rounded-none px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold">
            -{discount}%
          </div>
        )}
        {!inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white text-black px-4 sm:px-6 py-2 font-semibold tracking-wider text-sm sm:text-base">
              AGOTADO
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
        <h3 className="font-medium text-gray-900 mb-3 line-clamp-2 min-h-[3rem] sm:min-h-[3rem] tracking-wide font-montserrat text-sm sm:text-base">
          {name}
        </h3>
        
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${i < Math.floor(rating) ? 'fill-black text-black' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-gray-500">({reviews})</span>
        </div>
        
        <div className="flex items-baseline gap-2 sm:gap-3 mb-4 sm:mb-5 flex-wrap">
          {discount ? (
            <>
              <span className="text-xl sm:text-2xl font-semibold text-black">
                ${discountedPrice.toFixed(2)}
              </span>
              <span className="text-xs sm:text-sm text-gray-400 line-through">
                ${price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-xl sm:text-2xl font-semibold text-black">
              ${price.toFixed(2)}
            </span>
          )}
        </div>
        
        <button 
          className="w-full bg-black hover:bg-gray-800 text-white rounded-none py-3 sm:py-4 md:py-6 text-sm sm:text-base tracking-wide transition-colors mt-auto"
          onClick={() => onProductClick && onProductClick(id)}
        >
          VER DETALLES
        </button>
      </div>
    </div>
  );
}
