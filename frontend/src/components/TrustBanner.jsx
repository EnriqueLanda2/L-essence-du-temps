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
    <div className="bg-gray-50 py-16 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-800 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 tracking-wide">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
