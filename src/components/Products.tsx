
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Wheat } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "Agricultural Sprays",
      description: "Professional grade pesticides and herbicides for effective crop protection",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500",
      icon: Droplets
    },
    {
      title: "Premium Fertilizers", 
      description: "High-quality fertilizers to boost crop growth and soil health",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500",
      icon: Wheat
    },
    {
      title: "Spray Equipment",
      description: "Modern spraying equipment for efficient pesticide application",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500", 
      icon: Droplets
    },
    {
      title: "Organic Solutions",
      description: "Eco-friendly farming solutions for sustainable agriculture",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500",
      icon: Wheat
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of agricultural products designed to 
            enhance crop protection and maximize farm productivity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-green-100">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 rounded-full p-2">
                    <product.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-green-800 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {product.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
