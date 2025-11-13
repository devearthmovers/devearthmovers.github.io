import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { SERVICES_DATA, SECTORS_DATA } from '../constants';

const ServicesPage: React.FC = () => {

    const PageHeader: React.FC = () => (
        <div className="relative pt-48 pb-32 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=1920&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-brand-dark bg-opacity-70"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative text-center">
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">Our Services</h1>
                <p className="mt-4 text-lg md:text-xl text-brand-yellow max-w-3xl mx-auto">
                    Providing end-to-end solutions for all your construction and earthmoving needs.
                </p>
            </div>
        </div>
    );

    return (
        <div>
            <PageHeader />
            <AnimatedSection className="py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-black text-brand-dark">What We Do</h2>
                        <p className="mt-4 text-lg text-text-light">
                           We provide end-to-end services that cover the entire project lifecycle—from dismantling and excavation to site preparation and final construction—ensuring clients receive comprehensive, hassle-free solutions under one trusted roof.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {SERVICES_DATA.map((service, index) => (
                            <div key={index} className="bg-brand-light p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-start space-x-6">
                                <div className="flex-shrink-0 text-brand-dark bg-yellow-100 p-4 rounded-full">
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-brand-dark">{service.title}</h3>
                                    <p className="mt-2 text-text-light">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
            
            <AnimatedSection className="py-20 lg:py-24 bg-brand-light">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold uppercase text-brand-yellow tracking-widest">Market Sectors</h2>
                        <h3 className="mt-2 text-3xl md:text-4xl font-black text-brand-dark">Sectors We Serve</h3>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {SECTORS_DATA.map((sector) => (
                            <div key={sector.name} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                                <img src={sector.imageUrl} alt={sector.name} className="w-full h-56 object-cover"/>
                                <div className="p-8 flex-grow">
                                    <h4 className="text-xl font-bold text-brand-dark">{sector.name}</h4>
                                    <ul className="mt-4 space-y-2 text-text-light">
                                        {sector.points.map((point) => (
                                            <li key={point} className="flex items-start">
                                                <svg className="w-5 h-5 mr-3 mt-1 text-brand-yellow flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default ServicesPage;