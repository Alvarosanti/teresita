import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-white py-8">
      <div className="container mx-auto flex flex-wrap">
        {/* Primera columna */}
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4 md:mb-0">
          <h3 className="text-2xl font-bold mb-2">Contacto</h3>
          <p className="text-gray-300 mb-4">
            Dirección de la empresa <br />
            Ciudad, País <br />
            Teléfono: (123) 456-7890
          </p>
        </div>

        {/* Segunda columna */}
        <div className="w-full md:w-1/2 lg:w-3/4 px-4">
          <h3 className="text-2xl font-bold mb-2">Encuéntranos en el Mapa</h3>
          <div className="h-64 mb-4">
            {/* Aquí puedes integrar Google Maps, por ejemplo, usando un iframe */}
            <iframe
              title="Google Maps"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2dLongitude!3dLatitude!4..."
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
