import { Shield, Truck, CreditCard, Award } from 'lucide-react';
import { trustFeatures } from '../types/types';

const iconMap = {
  shield: Shield,
  truck: Truck,
  creditCard: CreditCard,
  award: Award
};

export function TrustBanner() {
  return (
    <div className="bg-gray-50 py-8 sm:py-12 md:py-16 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-gray-800 transition-colors duration-300">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 tracking-wide text-sm sm:text-base">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
