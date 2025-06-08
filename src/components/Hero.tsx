
import { Button } from "@/components/ui/button";
import { Sprout, Shield, Leaf } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-20 px-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-6">
          <Sprout className="h-12 w-12 text-green-600" />
          <Shield className="h-12 w-12 text-green-700" />
          <Leaf className="h-12 w-12 text-green-600" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
          Batra Kheti Centre
        </h1>
        <p className="text-xl md:text-2xl text-green-700 mb-8 max-w-3xl mx-auto">
          Your trusted partner in agriculture - providing premium quality pesticides, 
          fertilizers, and farming solutions for better crop protection and higher yields.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
            Our Products
          </Button>
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
