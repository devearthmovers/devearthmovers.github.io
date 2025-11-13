import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import PageHeader from '../components/PageHeader';

const CareersPage: React.FC = () => {
    return (
        <div>
            <PageHeader 
                title="Careers" 
                subtitle="Join our team of dedicated professionals and build your future with us." 
                imageUrl="https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=1920&auto=format&fit=crop"
            />
            <AnimatedSection className="py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
                    <h2 className="text-3xl font-bold text-text-main">Opportunities Coming Soon</h2>
                    <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">We are always looking for talented individuals to join our team. Please check back later for job openings and career opportunities at DevEarthMovers.</p>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default CareersPage;