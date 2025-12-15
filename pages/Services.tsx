import React from 'react';
import { Section, Button, Card, CheckListItem } from '../components/UI';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div>
      <div className="bg-black text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Integrated Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Six Disciplines. One Vision. Total Excellence.
          </p>
        </div>
      </div>

      <Section>
        <div className="space-y-24">
          {SERVICES.map((service, idx) => (
            <div key={service.id} id={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2">
                 <div className="relative group overflow-hidden rounded-xl shadow-xl">
                    <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-80 md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                 </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center space-x-2 text-belfort-red font-bold uppercase tracking-wider text-sm mb-4">
                    <service.icon size={18} />
                    <span>Service 0{idx + 1}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">{service.title}</h2>
                <p className="text-belfort-grey text-lg mb-8 leading-relaxed">
                    {service.fullDescription}
                </p>
                
                <div className="mb-8">
                    <h4 className="font-bold text-black mb-4">Key Capabilities:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.map((feature, i) => (
                            <CheckListItem key={i} text={feature} />
                        ))}
                    </ul>
                </div>

                <div className="flex gap-4">
                    <Button to={`/contact?service=${service.id}`} variant="primary">Get A Quote</Button>
                    <Link to={`/services/${service.id}`} className="inline-flex items-center px-6 py-3 border-2 border-black text-black font-bold text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
                        Learn More <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};