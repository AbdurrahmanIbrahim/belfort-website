import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Button, Section, Card } from '../components/UI';
import { SERVICES, PILLARS, PROJECTS, TESTIMONIALS } from '../constants';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* 1. Hero Section */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop)',
            filter: 'brightness(0.4)' 
          }}
        ></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white space-y-8 pt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-up">
            From Concept to Care:<br />
            <span className="text-white">The Belfort Standard</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-200 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            One Team, Total Control. We Optimize Your Assets From Groundwork to Geek-work.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button to="/portfolio" variant="primary" className="w-full sm:w-auto min-w-[200px]">
              Explore Properties
            </Button>
            <Button to="/about" variant="outline" className="w-full sm:w-auto min-w-[200px]">
              Learn About Us
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* 2. Company Overview */}
      <Section className="bg-white">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-belfort-red text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Who We Are</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Belfort Integrated Services: Connecting Industries. Creating Value.
          </h2>
          <p className="text-belfort-grey text-lg leading-relaxed">
            We are a multidisciplinary powerhouse based in Abuja, Nigeria. By integrating real estate, industrial cleaning, interior design, technology, and agriculture under one roof, we deliver seamless, high-value solutions that traditional siloed companies cannot match.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-12">
          {[
            { label: 'Years Experience', value: '12+' },
            { label: 'Projects Completed', value: '450+' },
            { label: 'Industries Served', value: '6' },
            { label: 'Satisfied Clients', value: '300+' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-belfort-red mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Core Services */}
      <Section className="bg-belfort-lightGrey">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-belfort-red text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Our Expertise</span>
            <h2 className="text-3xl font-bold text-black">Integrated Verticals</h2>
          </div>
          <Link to="/services" className="hidden md:flex items-center text-sm font-bold uppercase tracking-wider hover:text-belfort-red transition-colors">
            View All Services <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Link key={service.id} to={`/services/${service.id}`} className="group block h-full">
              <Card className="h-full flex flex-col justify-between hover:border-belfort-red/30">
                <div>
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-belfort-red group-hover:text-white transition-colors duration-300">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black group-hover:text-belfort-red transition-colors">{service.title}</h3>
                  <p className="text-belfort-grey text-sm leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>
                <div className="flex items-center text-belfort-red text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Learn More <ArrowRight size={14} className="ml-2" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Button to="/services" variant="outline" className="border-gray-300 text-black">View All Services</Button>
        </div>
      </Section>

      {/* 4. Brand Pillars */}
      <div className="bg-black py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <h2 className="text-white text-3xl font-bold mb-12 text-center">Our Pillars of Excellence</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {PILLARS.map((pillar, idx) => (
              <div key={idx} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-20px)] text-center hover:bg-gray-800 transition-colors">
                <div className="w-10 h-10 bg-belfort-red/20 text-belfort-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <pillar.icon size={20} />
                </div>
                <h3 className="text-white font-bold mb-2">{pillar.title}</h3>
                <p className="text-gray-500 text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Featured Projects */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">Featured Properties & Projects</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Discover our recent work across Abuja's most prestigious locations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROJECTS.map((project, idx) => (
            <div key={project.id} className={`group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer ${idx === 0 || idx === 3 ? 'lg:col-span-2' : ''}`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-belfort-red text-xs font-bold uppercase mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.category}</span>
                <h3 className="text-white text-xl font-bold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.title}</h3>
                <p className="text-gray-300 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button to="/portfolio" variant="secondary">View Full Portfolio</Button>
        </div>
      </Section>

      {/* 6. Testimonials */}
      <Section className="bg-belfort-lightGrey">
        <h2 className="text-3xl font-bold text-center mb-16">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <Card key={t.id} className="text-center relative pt-12">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-belfort-red text-white flex items-center justify-center rounded-full shadow-lg">
                <span className="text-2xl font-serif">"</span>
              </div>
              <p className="text-gray-600 italic mb-6">"{t.content}"</p>
              <div>
                <div className="font-bold text-black">{t.name}</div>
                <div className="text-xs text-belfort-red uppercase tracking-wide font-bold">{t.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 7. CTA */}
      <section className="relative py-28 px-6 bg-belfort-red overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-white/90 mb-10 font-light">
            Whether it's finding your dream home, maintaining your facility, or upgrading your tech, Belfort is here to serve.
          </p>
          <Button to="/contact" variant="white" className="min-w-[200px]">Contact Us Today</Button>
        </div>
      </section>
    </div>
  );
};