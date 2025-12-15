import React from 'react';
import { Section } from '../components/UI';
import { PILLARS } from '../constants';
import { Check } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <div className="bg-black text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Belfort</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Building a legacy of excellence in Abuja and beyond through integrated service delivery.
          </p>
        </div>
      </div>

      {/* Story */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-belfort-red text-xs font-bold tracking-widest uppercase mb-2 block">Our Story</span>
            <h2 className="text-3xl font-bold mb-6">A Vision of Integration</h2>
            <div className="space-y-4 text-belfort-grey leading-relaxed">
              <p>
                Belfort Integrated Services was born from a simple yet powerful observation: clients needed more than just isolated vendors; they needed a partner who could see the bigger picture.
              </p>
              <p>
                Founded in Abuja, we started with a commitment to raise the standard of real estate management. We quickly realized that true asset optimization required expertise in maintenance, aesthetics, and technology. Thus, Belfort expanded into a holistic ecosystem.
              </p>
              <p>
                Today, we are proud to be one of Nigeria's few truly integrated service providers, delivering consistent quality whether we are selling a penthouse, cleaning a factory, or automating a smart home.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
              alt="Office meeting" 
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-belfort-red text-white p-8 rounded-lg shadow-xl hidden md:block">
              <div className="text-4xl font-bold mb-1">100%</div>
              <div className="text-sm font-medium uppercase tracking-wider">Client Dedication</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-10 shadow-sm border-t-4 border-belfort-red">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the premier integrated services provider in West Africa, recognized for our ability to seamlessly blend diverse disciplines into creating exceptional value for our clients and communities.
            </p>
          </div>
          <div className="bg-white p-10 shadow-sm border-t-4 border-black">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver superior quality across Real Estate, Hygiene, Design, and Technology by leveraging our integrated expertise, fostering innovation, and maintaining an unwavering commitment to client satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Pillars Detail */}
      <Section>
        <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
        <div className="space-y-12">
          {PILLARS.map((pillar, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <div className="bg-gray-100 h-64 w-full rounded-lg flex items-center justify-center text-gray-300">
                    {/* Placeholder for pillar images */}
                    <pillar.icon size={64} className="text-gray-400" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-belfort-red text-white flex items-center justify-center text-sm mr-3 font-bold">{idx + 1}</span>
                    {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{pillar.desc} We believe that {pillar.title.toLowerCase()} is not just a buzzword, but a daily practice that guides every decision we make at Belfort.</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};