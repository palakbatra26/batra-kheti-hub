
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [showPhones, setShowPhones] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Vinkal Batra: 94172-91699",
        "Vinod Batra: 9876094088", 
        "Mangat Batra: 94641-07400"
      ]
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Batra Kheti Centre",
        "Malout, Fazilka Road",
        "Arniwala S.S"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Saturday: 8:00 AM - 7:00 PM",
        "Sunday: 9:00 AM - 5:00 PM"
      ]
    }
  ];

  const handleGetDirections = () => {
    window.open('https://maps.app.goo.gl/Ug8FNAedpuqGuFNb7', '_blank');
  };

  const handleContactUs = () => {
    setShowPhones(true);
  };

  return (
    <section className="py-16 px-6 bg-green-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contact us for all your agricultural needs. Our expert team is ready 
            to provide you with the best solutions for your farming requirements.
          </p>
        </div>
        
        {!showPhones ? (
          <div className="text-center mb-12">
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
              onClick={handleContactUs}
            >
              <Phone className="h-5 w-5 mr-2" />
              Contact Us
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white border-green-100">
                <CardContent className="p-8">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <info.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-4">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 mb-1">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center">
          <Card className="max-w-md mx-auto bg-green-600 text-white border-green-600">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">
                Visit Our Store Today!
              </h3>
              <p className="mb-6">
                Experience our quality products and expert advice firsthand at our Malout location.
              </p>
              <Button 
                className="bg-white text-green-600 hover:bg-green-50"
                onClick={handleGetDirections}
              >
                <MapPin className="h-4 w-4 mr-2" />
                Get Directions
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
