
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Bug, Wheat, Truck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bug,
      title: "Premium Pesticides",
      description: "High-quality insecticides, fungicides, and herbicides for effective pest control and crop protection."
    },
    {
      icon: Droplets,
      title: "Spray Solutions",
      description: "Professional spraying equipment and solutions for efficient pesticide application."
    },
    {
      icon: Wheat,
      title: "Fertilizers & Seeds",
      description: "Nutritious fertilizers and certified seeds to maximize your crop yield and quality."
    },
    {
      icon: Truck,
      title: "Delivery Service",
      description: "Fast and reliable delivery of agricultural supplies directly to your farm."
    }
  ];

  return (
    <section className="py-16 px-6 bg-green-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Our Products & Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive agricultural solutions to help farmers achieve better 
            crop protection and increased productivity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-green-100">
              <CardContent className="p-6">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-green-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
