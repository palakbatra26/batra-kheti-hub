
import { Card, CardContent } from "@/components/ui/card";
import { User, Crown, Users } from "lucide-react";

const Founders = () => {
  const founders = [
    {
      name: "Vinkal Batra",
      role: "Founder",
      icon: Crown,
      description: "Visionary leader with extensive experience in agricultural business"
    },
    {
      name: "Vinod Batra",
      role: "Co-Founder",
      icon: User,
      description: "Expert in pesticide solutions and crop protection strategies"
    },
    {
      name: "Mangat Ram Batra",
      role: "Co-Founder",
      icon: Users,
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
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <founder.icon className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  {founder.name}
                </h3>
                <p className="text-green-600 font-semibold mb-4">
                  {founder.role}
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
