
import { Card, CardContent } from "@/components/ui/card";
import { User, Crown, Users } from "lucide-react";

const Founders = () => {
  const founders = [
    {
      name: "Vinkal Batra",
      role: "Founder",
      phone: "94172-91699",
      icon: Crown,
      image: "/lovable-uploads/bd02edde-d2e0-48fd-b279-7b6c9bf9c4de.png",
      description: "Visionary leader with extensive experience in agricultural business"
    },
    {
      name: "Vinod Batra",
      role: "Co-Founder", 
      phone: "9876094088",
      icon: User,
      image: "/lovable-uploads/d250b6c6-539d-42fb-8d68-cde5aa71e08b.png",
      description: "Expert in pesticide solutions and crop protection strategies"
    },
    {
      name: "Mangat Batra",
      role: "Co-Founder",
      phone: "94641-07400", 
      icon: Users,
      image: "/lovable-uploads/057852f5-8ec9-4acc-999e-c39ed7fe3eb7.png",
      description: "Specialist in customer relations and agricultural consultancy"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Our Leadership Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the experienced professionals who have built Batra Kheti Centre 
            into a trusted name in agricultural solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-green-100">
              <CardContent className="p-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-green-100">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  {founder.name}
                </h3>
                <p className="text-green-600 font-semibold mb-2">
                  {founder.role}
                </p>
                <p className="text-green-700 font-medium mb-4">
                  {founder.phone}
                </p>
                <p className="text-gray-600">
                  {founder.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
