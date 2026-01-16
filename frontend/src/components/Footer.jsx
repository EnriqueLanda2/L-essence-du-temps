export function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-12 sm:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-playfair">
              L'essence du temps
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Relojes y perfumes de lujo con autenticidad garantizada.
              Elegancia y distinción en cada producto.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-white tracking-wide text-sm sm:text-base">AYUDA</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Envíos y Devoluciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Autenticidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Seguimiento de Pedido</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-white tracking-wide text-sm sm:text-base">EMPRESA</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-white tracking-wide text-sm sm:text-base">CONTACTO</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📧 info@lessencedutems.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>⏰ Lun-Vie: 9:00 - 18:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>© 2026 L'essence du temps. Todos los derechos reservados. | Pagos seguros y productos 100% auténticos</p>
        </div>
      </div>
    </footer>
  );
}
