import React, { useState } from 'react';
import { Section, Card } from '../components/UI';
import { PROJECTS } from '../constants';

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div>
      <div className="bg-black text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of excellence across real estate, design, and facility management.
          </p>
        </div>
      </div>

      <Section>
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                        filter === cat 
                            ? 'bg-belfort-red text-white shadow-lg' 
                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
                <div key={project.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="relative overflow-hidden h-64">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-black rounded-sm">
                            {project.year}
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="text-belfort-red text-xs font-bold uppercase tracking-widest mb-2">{project.category}</div>
                        <h3 className="text-xl font-bold mb-2 text-black">{project.title}</h3>
                        <div className="flex items-center text-gray-400 text-sm mb-4">
                            <span className="truncate">{project.location}</span>
                        </div>
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                            {project.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </Section>
    </div>
  );
};