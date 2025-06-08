
import { Sprout } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Sprout className="h-8 w-8" />
            <div>
              <h3 className="text-xl font-bold">Batra Kheti Centre</h3>
              <p className="text-green-200 text-sm">Quality Agricultural Solutions</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-green-200 mb-2">
              Malout, Fazilka Road, Arniwala S.S
            </p>
            <p className="text-green-200">
              © 2024 Batra Kheti Centre. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-200">
            Trusted by farmers across the region for quality pesticides, fertilizers, and agricultural supplies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
