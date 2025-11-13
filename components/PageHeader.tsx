import React from 'react';

interface PageHeaderProps {
    title: string;
    subtitle: string;
    imageUrl: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({title, subtitle, imageUrl}) => (
    <div className="relative pt-48 pb-32 bg-cover bg-center" style={{ backgroundImage: `url('${imageUrl}')` }}>
        <div className="absolute inset-0 bg-brand-dark bg-opacity-70"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">{title}</h1>
            <p className="mt-4 text-lg md:text-xl text-brand-yellow max-w-3xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

export default PageHeader;
