
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { EQUIPMENT_DATA } from '../constants';

const FleetPage: React.FC = () => {

    const PageHeader: React.FC = () => (
        <div className="relative pt-48 pb-32 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520623253702-c36d0b3d68ca?q=80&w=1920&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-brand-dark bg-opacity-70"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">Our Fleet</h1>
                <p className="mt-4 text-lg md:text-xl text-brand-yellow max-w-3xl mx-auto">
                    Modern, reliable, and versatile machinery for projects of any scale.
                </p>
            </div>
        </div>
    );

    return (
        <div>
            <PageHeader />
            <AnimatedSection className="py-20 lg:py-24 bg-white">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-black text-brand-dark">Our Fleet</h2>
                        <p className="mt-4 text-lg text-text-light">
                           We are equipped with advanced Poclain excavators, JCBs, dumpers, and tractors. This allows us to guarantee efficiency, precision, and superior project performance on every job.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {EQUIPMENT_DATA.map((item) => (
                           <div key={item.id} className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                               <div className="relative h-56">
                                   <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                                   <div className="absolute top-4 left-4 bg-brand-yellow text-brand-dark text-xl font-bold w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
                                       {item.id}
                                   </div>
                               </div>
                               <div className="p-6">
                                   <h3 className="text-xl font-bold text-brand-dark">{item.name}</h3>
                                   <p className="mt-2 text-text-light">{item.description}</p>
                               </div>
                           </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
            
            <AnimatedSection className="py-20 lg:py-24 bg-brand-light">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <div className="relative h-96">
                            <img src="https://images.unsplash.com/photo-1599435862274-5fe5a7536b35?q=80&w=800&auto=format&fit=crop" alt="Equipment Maintenance" className="w-full h-full object-cover rounded-lg shadow-xl"/>
                        </div>
                        <div>
                             <h2 className="text-3xl font-black text-brand-dark">Our Capabilities</h2>
                             <p className="mt-4 text-lg text-text-light mb-8">
                                Our expertise covers a wide spectrum of projects, ranging from small residential assignments to extensive commercial and industrial developments. We adapt seamlessly to project size, ensuring efficiency, precision, and reliable results every time.
                             </p>
                             <ul className="space-y-6">
                                {[
                                    { title: "Preventive Maintenance", desc: "Regular maintenance guarantees optimal performance, reliability, and extended equipment lifespan." },
                                    { title: "Modern Machinery", desc: "Modern machinery ensures efficient project completion with speed and precision." },
                                    { title: "Versatile Fleet", desc: "Versatile fleet supports diverse project requirements, regardless of size." }
                                ].map(item => (
                                    <li key={item.title} className="flex items-start">
                                        <svg className="w-8 h-8 mr-4 mt-1 text-brand-yellow flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <div>
                                            <h4 className="font-bold text-xl text-text-main">{item.title}</h4>
                                            <p className="text-text-light">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                             </ul>
                        </div>
                     </div>
                 </div>
            </AnimatedSection>
        </div>
    );
};

export default FleetPage;
