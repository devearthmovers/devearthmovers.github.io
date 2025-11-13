import React from 'react';
import { NavLink, Service, Strength, Equipment, Sector } from './types';

// Icons - Main Services
const WrenchScrewdriverIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="m11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l.354-.354a3.75 3.75 0 0 0-5.303-5.303l-.354.353.354.354 5.303 5.303-.353-.354Zm-4.62-4.62 5.303 5.303" /></svg>;
const CubeTransparentIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>;
const BuildingOfficeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6h1.5m-1.5 3h1.5m-1.5 3h1.5M6.75 21v-2.25a2.25 2.25 0 0 1 2.25-2.25h6a2.25 2.25 0 0 1 2.25 2.25V21M6.75 21H9m6 0h2.25" /></svg>;
const TruckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 0 1 3.375-3.375h9.75a3.375 3.375 0 0 1 3.375 3.375v1.875M10.5 6h9M13.5 6v6.75" /></svg>;

// Icons - Strengths
// FIX: Updated strength icons to be functional components that accept a className prop.
// This resolves type errors when using React.cloneElement to override styles.
const TrophyIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const ShieldCheckIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const UserGroupIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const WrenchScrewdriverStrengthIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', page: 'home' },
  { name: 'About Us', page: 'about' },
  { name: 'Services', page: 'services' },
  { name: 'Projects', page: 'projects' },
  { name: 'Our Fleet', page: 'fleet' },
  { name: 'Safety', page: 'safety' },
  { name: 'Careers', page: 'careers' },
];

export const SERVICES_DATA: Service[] = [
    {
        icon: <WrenchScrewdriverIcon />,
        title: "Dismantling & Demolition",
        description: "Professional dismantling of existing structures with a focus on safety and environmental compliance."
    },
    {
        icon: <CubeTransparentIcon />,
        title: "Excavation Services",
        description: "Complete excavation solutions including site preparation, bulk earthworks, and detailed excavation for all project types."
    },
    {
        icon: <BuildingOfficeIcon />,
        title: "Piling Services",
        description: "Specialized foundation piling solutions providing stable and durable foundation systems for various soil conditions."
    },
    {
        icon: <TruckIcon />,
        title: "Construction Services",
        description: "End-to-end construction solutions from foundation work to complete building construction."
    }
];

export const STRENGTHS_DATA: Strength[] = [
    {
        id: "01",
        title: "12+ Years' Expertise",
        description: "We deliver consistent quality, reliable solutions, and trusted services for every project.",
        icon: <TrophyIcon />
    },
    {
        id: "02",
        title: "Full Ownership",
        description: "Ensures strict quality control, smooth coordination, complete accountability, and efficient project delivery.",
        icon: <ShieldCheckIcon />
    },
    {
        id: "03",
        title: "Diverse Specialization",
        description: "We offer tailored solutions for residential, commercial, and industrial projects with proven cross-sector expertise.",
        icon: <UserGroupIcon />
    },
    {
        id: "04",
        title: "Advanced Equipment",
        description: "Equipped with advanced Poclain excavators, JCBs, dumpers, and tractors, we guarantee efficiency and precision.",
        icon: <WrenchScrewdriverStrengthIcon />
    }
];

export const EQUIPMENT_DATA: Equipment[] = [
    {
        id: '01',
        name: 'Poclain Excavators',
        description: 'Heavy-duty excavation for large-scale earthmoving operations.',
        imageUrl: 'https://images.unsplash.com/photo-1547402949-418242271856?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: '02',
        name: 'JCB Equipment',
        description: 'Versatile multi-purpose machines for various construction tasks.',
        imageUrl: 'https://images.unsplash.com/photo-1605059043292-a27b7f585343?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: '03',
        name: 'Dumpers',
        description: 'Reliable material transportation and debris removal.',
        imageUrl: 'https://images.unsplash.com/photo-1623152018275-2d970a1a9a44?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: '04',
        name: 'Tractors',
        description: 'Essential support equipment for site preparation and material movement.',
        imageUrl: 'https://images.unsplash.com/photo-1583749713895-9b8379f59146?q=80&w=800&auto=format&fit=crop'
    }
];

export const SECTORS_DATA: Sector[] = [
    {
        name: "Residential Sector",
        imageUrl: "./images/residential_sector.jpg",
        points: [
            "Individual home construction",
            "Housing development projects",
            "Residential infrastructure",
            "Foundation and excavation work"
        ]
    },
    {
        name: "Commercial Sector",
        imageUrl:"./images/commercial_sector.jpg",
        points: [
            "Office building construction",
            "Retail space development",
            "Mixed-use developments",
            "Commercial site preparation"
        ]
    },
    {
        name: "Industrial Sector",
        imageUrl: "./images/industrial_sector.jpg",
        points: [
            "Industrial facility construction",
            "Factory and warehouse projects",
            "Industrial site preparation",
            "Specialized foundation work"
        ]
    }
];