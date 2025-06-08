
import { Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-green-800 text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-2 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold">Batra Kheti Centre</h1>
          <p className="text-sm text-green-200">Serving since 31 April 2013</p>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>Malout, Fazilka Road, Arniwala S.S</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>94172-91699</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
