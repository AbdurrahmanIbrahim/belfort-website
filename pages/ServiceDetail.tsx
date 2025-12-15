import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Section, Button, CheckListItem, Card } from '../components/UI';
import { SERVICES } from '../constants';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center bg-black">
         <img 
            src={service.image} 
            alt={service.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
         />
         <div className="relative z-10 text-center text-white px-6">
            <Link to="/services" className="inline-flex items-center text-gray-300 hover:text-white mb-6 text-sm uppercase tracking-wider transition-colors">
                <ArrowLeft size={16} className="mr-2" /> Back to Services
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl max-w-2xl mx-auto font-light text-gray-200">{service.shortDescription}</p>
         </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <p className="text-belfort-grey text-lg leading-relaxed mb-12">
                    {service.fullDescription}
                </p>

                <h3 className="text-2xl font-bold mb-6">Our Approach</h3>
                <div className="space-y-8 mb-12">
                    {[1, 2, 3].map((step) => (
                        <div key={step} className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-belfort-red text-white flex items-center justify-center font-bold text-xl">
                                {step}
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Step {step}: Analysis & Planning</h4>
                                <p className="text-gray-600 text-sm">We begin by thoroughly assessing your needs and creating a tailored strategy that aligns with your specific goals and budget.</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold mb-6">Why Choose Belfort for {service.title}?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.features.map((feature, i) => (
                            <div key={i} className="flex items-center space-x-3">
                                <CheckCircle className="text-belfort-red w-5 h-5 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
                <Card className="bg-belfort-lightGrey border-none">
                    <h3 className="text-xl font-bold mb-4">Need this service?</h3>
                    <p className="text-gray-500 text-sm mb-6">Contact us today for a free consultation and quote tailored to your project.</p>
                    <Button to={`/contact?service=${service.id}`} variant="primary" className="w-full">Get a Quote</Button>
                </Card>

                <div className="bg-black text-white p-8 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Other Services</h3>
                    <ul className="space-y-3">
                        {SERVICES.filter(s => s.id !== id).map(s => (
                            <li key={s.id}>
                                <Link to={`/services/${s.id}`} className="text-gray-400 hover:text-belfort-red transition-colors block py-2 border-b border-gray-800 last:border-0 text-sm">
                                    {s.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </Section>
    </div>
  );
};