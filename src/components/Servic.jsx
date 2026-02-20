import React from "react";
import { Code, Smartphone, Shield } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Building responsive and modern websites using React, Tailwind CSS and modern UI principles.",
    icon: <Code size={40} />,
  },
  {
    id: 2,
    title: "Responsive Design",
    description:
      "Mobile-first design approach to ensure smooth experience across all devices.",
    icon: <Smartphone size={40} />,
  },
  {
    id: 3,
    title: "Web Security Basics",
    description:
      "Applying security best practices to protect web applications and user data.",
    icon: <Shield size={40} />,
  },
  {
    id: 4,
    title: "API Integration",
    description:
      "Applying security best practices to protect web applications and user data.",
    icon: <Shield size={40} />,
  },
  {
    id: 5,
    title: "Performance Optimization",
    description:
      "Applying security best practices to protect web applications and user data.",
    icon: <Shield size={40} />,
  },
  {
    id: 3,
    title: "Web Security Basics",
    description:
      "Applying security best practices to protect web applications and user data.",
    icon: <Shield size={40} />,
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          My Services
        </h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-blue-600 flex justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;