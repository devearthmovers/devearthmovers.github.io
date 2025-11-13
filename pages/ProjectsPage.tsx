import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import PageHeader from '../components/PageHeader';

const ProjectsPage: React.FC = () => {
    return (
        <div>
            <PageHeader 
                title="Our Projects" 
                subtitle="A showcase of our successfully completed projects." 
                imageUrl="https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=1920&auto=format&fit=crop"
            />
            <AnimatedSection className="py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
                    <h2 className="text-3xl font-bold text-text-main">Coming Soon</h2>
                    <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">We are currently curating our project portfolio to bring you a comprehensive look at our capabilities. Please check back soon to see our work!</p>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default ProjectsPage;