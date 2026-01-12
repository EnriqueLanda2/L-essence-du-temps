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
    <div className="bg-white rounded-none shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group">
      <div className="relative overflow-hidden bg-white">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {discount && (
          <div className="absolute top-4 left-4 bg-black hover:bg-gray-800 text-white rounded-none px-3 py-1">
            -{discount}%
          </div>
        )}
        {!inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white text-black px-6 py-2 font-semibold tracking-wider">
              AGOTADO
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="font-medium text-gray-900 mb-3 line-clamp-2 h-12 tracking-wide font-montserrat">
          {name}
        </h3>
        
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-black text-black' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">({reviews})</span>
        </div>
        
        <div className="flex items-baseline gap-3 mb-5">
          {discount ? (
            <>
              <span className="text-2xl font-semibold text-black">
                ${discountedPrice.toFixed(2)}
              </span>
              <span className="text-sm text-gray-400 line-through">
                ${price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-2xl font-semibold text-black">
              ${price.toFixed(2)}
            </span>
          )}
        </div>
        
        <button 
          className="w-full bg-black hover:bg-gray-800 text-white rounded-none py-6 tracking-wide transition-colors"
          onClick={() => onProductClick && onProductClick(id)}
        >
          VER DETALLES
        </button>
      </div>
    </div>
  );
}
