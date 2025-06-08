
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500",
      alt: "Healthy crop field with orange flowers",
      title: "Healthy Crops"
    },
    {
      src: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=500",
      alt: "Agricultural field landscape",
      title: "Farm Landscape"
    },
    {
      src: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=500",
      alt: "Livestock in farming area",
      title: "Livestock Care"
    },
    {
      src: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=500",
      alt: "Farm animals behind fence",
      title: "Animal Husbandry"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Agricultural Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the results of our quality products and services in action across 
            various farming operations in our region.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-0 transition-all duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-800">
                    {image.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
