import React from "react";
import { Code, Smartphone, Shield } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "I build responsive, modern, and high-performance websites using React, Tailwind CSS, and modern UI/UX principles. My focus is on clean code, scalability, and delivering seamless user experiences.",
    icon: <Code size={40} />,
  },
  {
    id: 2,
    title: "Responsive Design",
    description:
      "I follow a mobile-first design approach to ensure seamless and consistent user experiences across all devices and screen sizes.",
    icon: <Smartphone size={40} />,
  },
  {
    id: 3,
    title: "Web Security Basics",
    description:
      "Implementing fundamental security practices such as input validation, secure authentication handling, and protection against common web vulnerabilities to ensure application integrity and user data safety.",
    icon: <Shield size={40} />,
  },
  {
    id: 4,
    title: "API Integration",
    description:
      "Connecting frontend applications with REST APIs using asynchronous requests, handling authentication, and managing state for dynamic and real-time user experiences.",
    icon: <Shield size={40} />,
  },
  {
    id: 5,
    title: "Performance Optimization",
    description:
      "Improving application speed and efficiency through code splitting, lazy loading, asset optimization, and minimizing unnecessary re-renders.",
    icon: <Shield size={40} />,
  },
  {
    id: 6,
    title: "Git & GitHub",
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