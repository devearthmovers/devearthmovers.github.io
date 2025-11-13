import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { STRENGTHS_DATA } from '../constants';

const AboutPage: React.FC = () => {
    
    const PageHeader: React.FC = () => (
        <div className="relative pt-48 pb-32 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=1920&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-brand-dark bg-opacity-70"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative text-center">
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">About Our Company</h1>
                <p className="mt-4 text-lg md:text-xl text-brand-yellow max-w-3xl mx-auto">
                    Your Trusted Partner in Earthmoving and Construction for Over a Decade.
                </p>
            </div>
        </div>
    );
    
    return (
        <div>
            <PageHeader />
            <AnimatedSection className="py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-3">
                             <h2 className="text-3xl md:text-4xl font-black text-brand-dark">ABOUT DEVEARTHMOVERS</h2>
                             <p className="mt-6 text-lg text-text-light">
                                DevEarthMovers is a fully-owned earthmoving and construction company with over 12 years of proven experience serving Delhi NCR's residential, commercial, and industrial sectors. We provide end-to-end services that cover the entire project lifecycle—from dismantling and excavation to site preparation and final construction—ensuring clients receive comprehensive, hassle-free solutions under one trusted roof.
                             </p>
                             <h3 className="mt-12 text-3xl font-black text-brand-dark">OUR MISSION</h3>
                             <p className="mt-4 text-lg text-text-light">
                                To deliver reliable, high-quality earthmoving and construction services that exceed client expectations while building lasting partnerships based on trust and excellence.
                             </p>
                        </div>
                        <div className="lg:col-span-2">
                            <img src="https://images.unsplash.com/photo-1520085612521-a2623254d9c0?q=80&w=800&auto=format&fit=crop" alt="DevEarthMovers Team" className="rounded-lg shadow-2xl w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="py-20 lg:py-24 bg-brand-light">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                     <div className="text-center">
                        <h2 className="text-sm font-bold uppercase text-brand-yellow tracking-widest">Our Strengths</h2>
                        <h3 className="mt-2 text-3xl md:text-4xl font-black text-brand-dark">What Sets Us Apart</h3>
                     </div>
                     <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {STRENGTHS_DATA.map((strength) => (
                            <div key={strength.id} className="bg-white p-8 rounded-lg shadow-lg flex items-start space-x-6">
                                <div className="flex-shrink-0 text-brand-yellow">
                                    {React.cloneElement(strength.icon as React.ReactElement, { className: 'w-10 h-10' })}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-brand-dark">{strength.title}</h4>
                                    <p className="mt-2 text-text-light">{strength.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
            
            <AnimatedSection className="py-20 lg:py-24 bg-white">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-black text-brand-dark">Why Choose Us?</h2>
                            <ul className="mt-6 space-y-6">
                                {[
                                    { title: "Experience You Can Trust", desc: "With 12+ years in the industry, we bring proven expertise to every project." },
                                    { title: "Complete Ownership Advantage", desc: "As a fully-owned company, we maintain complete control over quality and timelines." },
                                    { title: "Comprehensive Solutions", desc: "From initial site assessment to final construction, we streamline your project." },
                                    { title: "Modern Equipment", desc: "Our well-maintained, modern fleet ensures efficient and reliable performance." }
                                ].map(item => (
                                    <li key={item.title} className="flex items-start">
                                        <svg className="w-6 h-6 mr-4 mt-1 text-brand-yellow flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <div>
                                            <h4 className="font-bold text-lg text-text-main">{item.title}</h4>
                                            <p className="text-text-light">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-96">
                            <img src="https://images.unsplash.com/photo-1549448507-135a39a97d81?q=80&w=800&auto=format&fit=crop" alt="Excavator bucket" className="w-full h-full object-cover rounded-lg shadow-xl" />
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default AboutPage;